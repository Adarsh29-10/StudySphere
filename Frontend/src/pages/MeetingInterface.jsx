import React, { useState, useRef, useEffect } from 'react';
import {
  Mic,
  MicOff,
  Video,
  VideoOff,
  Share2,
  Hand,
  Users,
  MessageSquare,
  MoreHorizontal,
  Settings,
  Maximize2,
  Minimize2,
  X
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function MeetingInterface() {
  const navigate = useNavigate()
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isHandRaised, setIsHandRaised] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [participants, setParticipants] = useState([
    { id: 1, name: 'You', isSpeaking: false, isVideoOn: true },
    { id: 2, name: 'John Doe', isSpeaking: true, isVideoOn: true },
    { id: 3, name: 'Jane Smith', isSpeaking: false, isVideoOn: false },
    { id: 4, name: 'Mike Johnson', isSpeaking: false, isVideoOn: true },
  ]);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'John Doe', message: 'Hello everyone!', time: '10:00 AM' },
    { id: 2, sender: 'Jane Smith', message: 'Hi John!', time: '10:01 AM' },
  ]);
  const [showChat, setShowChat] = useState(false);
  const [showParticipants, setShowParticipants] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const videoRef = useRef(null);
  const screenShareRef = useRef(null);

  useEffect(() => {
    // Request camera and microphone permissions
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch(err => console.error('Error accessing media devices:', err));
  }, []);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Implement actual mute functionality
  };

  const toggleVideo = () => {
    setIsVideoOff(!isVideoOff);
    // Implement actual video toggle functionality
  };

  const toggleScreenShare = async () => {
    if (!isScreenSharing) {
      try {
        const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
        if (screenShareRef.current) {
          screenShareRef.current.srcObject = stream;
        }
        setIsScreenSharing(true);
      } catch (err) {
        console.error('Error sharing screen:', err);
      }
    } else {
      if (screenShareRef.current) {
        const tracks = screenShareRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
        screenShareRef.current.srcObject = null;
      }
      setIsScreenSharing(false);
    }
  };

  const toggleHandRaise = () => {
    setIsHandRaised(!isHandRaised);
    // Implement hand raise functionality
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col">
      {/* Main Content Area */}
      <div className="flex-1 flex">
        {/* Video Grid */}
        <div className="flex-1 p-4 grid grid-cols-2 gap-4">
          {participants.map(participant => (
            <div key={participant.id} className="relative bg-gray-800 rounded-lg overflow-hidden">
              {participant.isVideoOn ? (
                <video
                  ref={participant.id === 1 ? videoRef : null}
                  autoPlay
                  muted={participant.id === 1}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-700">
                  <div className="w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center">
                    <span className="text-2xl font-bold">
                      {participant.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
              )}
              <div className={`absolute bottom-2 left-2 px-2 py-1 rounded-md ${
                participant.isSpeaking ? 'bg-green-500' : 'bg-black/50'
              }`}>
                {participant.name}
              </div>
            </div>
          ))}
        </div>

        {/* Side Panels */}
        {showChat && (
          <div className="w-80 bg-gray-800 border-l border-gray-700 flex flex-col">
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
              <h3 className="font-semibold">Chat</h3>
              <button onClick={() => setShowChat(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              {chatMessages.map(msg => (
                <div key={msg.id} className="mb-4">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>{msg.sender}</span>
                    <span>{msg.time}</span>
                  </div>
                  <p className="mt-1">{msg.message}</p>
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-gray-700">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full bg-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        )}

        {showParticipants && (
          <div className="w-80 bg-gray-800 border-l border-gray-700">
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
              <h3 className="font-semibold">Participants ({participants.length})</h3>
              <button onClick={() => setShowParticipants(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 space-y-4">
              {participants.map(participant => (
                <div key={participant.id} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
                    <span className="text-sm font-bold">
                      {participant.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium">{participant.name}</p>
                    {participant.isSpeaking && (
                      <p className="text-sm text-green-500">Speaking</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Controls Bar */}
      <div className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button
            onClick={toggleMute}
            className={`p-2 rounded-full ${
              isMuted ? 'bg-red-500' : 'bg-gray-700'
            } hover:bg-gray-600 transition-colors`}
          >
            {isMuted ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
          </button>
          <button
            onClick={toggleVideo}
            className={`p-2 rounded-full ${
              isVideoOff ? 'bg-red-500' : 'bg-gray-700'
            } hover:bg-gray-600 transition-colors`}
          >
            {isVideoOff ? <VideoOff className="h-6 w-6" /> : <Video className="h-6 w-6" />}
          </button>
          <button
            onClick={toggleScreenShare}
            className={`p-2 rounded-full ${
              isScreenSharing ? 'bg-green-500' : 'bg-gray-700'
            } hover:bg-gray-600 transition-colors`}
          >
            <Share2 className="h-6 w-6" />
          </button>
          <button
            onClick={toggleHandRaise}
            className={`p-2 rounded-full ${
              isHandRaised ? 'bg-yellow-500' : 'bg-gray-700'
            } hover:bg-gray-600 transition-colors`}
          >
            <Hand className="h-6 w-6" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowParticipants(!showParticipants)}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
          >
            <Users className="h-6 w-6" />
          </button>
          <button
            onClick={() => setShowChat(!showChat)}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
          >
            <MessageSquare className="h-6 w-6" />
          </button>
          <button
            onClick={() => setShowSettings(!showSettings)}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
          >
            <Settings className="h-6 w-6" />
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
          >
            {isFullscreen ? <Minimize2 className="h-6 w-6" /> : <Maximize2 className="h-6 w-6" />}
          </button>
          <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
            <MoreHorizontal className="h-6 w-6" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={()=> navigate(`/group/group1`)} 
            
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
            Leave Meeting
          </button>
        </div>
      </div>

      {/* Settings Panel */}
      {showSettings && (
        <div className="absolute top-4 right-4 bg-gray-800 p-4 rounded-lg shadow-lg w-80">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Settings</h3>
            <button onClick={() => setShowSettings(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Camera</label>
              <select className="w-full bg-gray-700 rounded-lg px-4 py-2">
                <option>Default Camera</option>
                <option>External Camera</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Microphone</label>
              <select className="w-full bg-gray-700 rounded-lg px-4 py-2">
                <option>Default Microphone</option>
                <option>External Microphone</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Speaker</label>
              <select className="w-full bg-gray-700 rounded-lg px-4 py-2">
                <option>Default Speaker</option>
                <option>External Speaker</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MeetingInterface; 