import React, { useState, useEffect } from 'react';

const ChatWindow = ({ activeUser, messages, loggedInUser, sendMessage }) => {
    console.log(messages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      sendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="w-2/3 p-4 flex flex-col justify-between">
      <div className="overflow-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === loggedInUser.id ? 'justify-end' : 'justify-start'} mb-2`}>
            <span className={`bg-gray-300 p-2 rounded ${msg.sender === loggedInUser.id ? 'bg-orange-200' : ''}`}>
              {msg.message}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-grow p-2 border"
        />
        <button onClick={handleSendMessage} className="bg-orange-500 p-2 text-white ml-2">Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
