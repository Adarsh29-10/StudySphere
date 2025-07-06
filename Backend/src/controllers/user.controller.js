import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError} from '../utils/ApiError.js'
import {ApiResponses} from '../utils/ApiResponses.js'
import {uploadOnCloudinary} from '../utils/cloudinary.js'

import {User} from '../models/user.model.js'
import { log } from "console"

const generateAccessTokenAndRefreshToken = async (userId) =>{
    const user = await User.findById(userId);

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false})

    return {accessToken, refreshToken}
}

// const registerUser = asyncHandler( async (req, res) => {
//     //1. get user details from frontend
//     //2. validation - not empty
//     //3. Check if user already exist: email, username
//     //4. Check for images/ check for avatar
//     //5. upload them to cloudinary/ avatar
//     //6. create user object - create entry in db
//     //7. remove password and refresh token field from the response
//     //8. check for user creation
//     //9. return res

//     //1
//     const {fullName, email, username, password} = req.body

//     //2
//     if (
//         [fullName, email, username, password].some((field) => field?.trim() === "")
//     ) {
//         throw new ApiError(400, "All fields are required")
//     }

//     //3
//     const existedUser = await User.findOne({
//         $or : [{email}, {username}]
//     })

//     if(existedUser){
//         throw new ApiError(409, "User with this email or username is already exists")
//     }

//     //4
//     //console.log(req.files); contains the uploaded file info after multer runs
    
//     // const avatarLocalPath = req.files?.avatar[0]?.path;
//     // const coverImageLocalPath = req.files?.coverImage[0]?.path; 
//     // Cannot read properties of undefined 

//     let avatarLocalPath = "";

//     if (
//         req.files &&
//         Array.isArray(req.files.avatar) &&
//         req.files.avatar.length > 0
//     ) {
//         avatarLocalPath = req.files.avatar[0].path;
//     } else {
//         throw new ApiError(400, "Avatar file is required");
//     }


//     let coverImageLocalPath = "";
//     if (
//         Array.isArray(req?.files?.coverImage) &&
//          req.files.coverImage.length > 0
//         ) {
//         coverImageLocalPath = req.files.coverImage[0].path;
//     }

    


//     //5
//     const avatar = await uploadOnCloudinary(avatarLocalPath);
//     const coverImage = await uploadOnCloudinary(coverImageLocalPath);

//     if(!avatar){
//         throw new ApiError(400, "Avatar file is required")
//     }

//     //6
//     const user = await User.create({
//         username: username.toLowerCase(),
//         email,
//         fullName,
//         avatar : avatar.url,
//         coverImage: coverImage?.url || "",
//         password
//     })


//     //7
//     const loggedInUser = await User.findById(user._id).select(
//         "-password -refreshToken")

//     //8
//     if(!loggedInUser){
//         throw new ApiError(500, "Something went wrong while registering user")
//     }

//     //9
//     return res.status(200).json(
//         new ApiResponses(201, loggedInUser, "User registered successfuly")
//     )

// })

const registerUser = asyncHandler(async (req, res) => {
    const { fullName, email, password, interests } = req.body;

    console.log("Request body:", req.body);

    // Validate required fields
    if ([fullName, email, password].some((field) => !field?.trim())) {
        throw new ApiError(400, "Name, email, and password are required");
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        throw new ApiError(409, "User with this email already exists");
    }



    // Create user
    const user = await User.create({
        fullName,
        email,
        password,
        interests,
    });

    // Remove sensitive fields from response
    const registeredUser = await User.findById(user._id).select("-password -refreshToken");

    if (!registeredUser) {
        throw new ApiError(500, "Something went wrong while registering user");
    }

    // Respond with success
    return res.status(201).json(
        new ApiResponses(201, registeredUser, "User registered successfully")
    );
});

// const loginUser = asyncHandler(async (req, res) => {
//     //1. req data -> frontend
//     //2. username or email ?
//     //3. find the user
//     //4. password check
//     //5. access and refresh token
//     //6. send cookie

//     //1
//     const {username, email, password} = req.body;

//     //2
//     if(!username || !password){
//         throw new ApiError(400, "username or email is required")
//     }

//     //3
//     const user = await User.findOne({ $or: [ {email}, {username} ]})
//     // console.log(user);
    
//     if(!user){
//         throw new ApiError(404, "User does not exist")
//     }

//     //4
//     const isPasswordValid = await user.isPasswordCorrect(password);
//     // console.log(isPasswordValid);
    

//     if(!isPasswordValid){
//         throw new ApiError(401, "Invalid user credentials")
//     }

//     //5
//     const {accessToken, refreshToken} = generateAccessTokenAndRefreshToken(user._id);
//     console.log(accessToken)
    

//     const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

//     const options = {
//         httpOnly: true,
//         secure: true
//     }

//     res.status(200)
//     .cookie("accessToken", accessToken, options)
//     .cookie("refreshToken", refreshToken, options)
//     .json(
//         new ApiResponses(
//             200,
//             {
//                 user: loggedInUser, accessToken, refreshToken
//             },
//             "User logged In Successfuly"
//         )
//     )
// })


const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
        throw new ApiError(400, "Email and password are required");
    }

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
        throw new ApiError(404, "User does not exist");
    }

    // Check if the password is correct
    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid user credentials");
    }

    // Generate access and refresh tokens
    const { accessToken, refreshToken } = await generateAccessTokenAndRefreshToken(user._id);

    // Remove sensitive fields from the user object
    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    // Set cookies for tokens
    const options = {
        httpOnly: true,
        secure: true,
    };

    res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponses(
                200,
                {
                    user: loggedInUser,
                    accessToken,
                    refreshToken,
                },
                "User logged in successfully"
            )
        );
});

const logoutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: { refreshToken: undefined }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponses(200, {}, "User logout successfuly"))
    
})

export {
    registerUser,
    loginUser,
    logoutUser
}