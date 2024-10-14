import React, { useState, useEffect } from 'react';
import ChatSidebar from '../chat-sidebar/ChatSidebar';
import ChatWindow from '../chat-window/ChatWindow';


const ChatApp = () => {
  const [users, setUsers] = useState({});
  const [chats, setChats] = useState({});
  const [activeUser, setActiveUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState({ id: '5', first_name: 'Sarah' });

//   const loggedInUser = { id: '1', first_name: 'David' }; // Hardcoded logged-in user for now

  // Function to generate the chat key in the format 'smallerID-largerID'
  const generateChatKey = (user1Id, user2Id) => {
    return user1Id < user2Id ? `${user1Id}-${user2Id}` : `${user2Id}-${user1Id}`;
  };

  // Initial data function to populate users and chats
  const populateInitialData = () => {

    
    const initialUsers = [
      { id: '1', first_name: 'David', profile_picture: 'david.png' },
      { id: '2', first_name: 'Lisa', profile_picture: 'lisa.png' },
      { id: '3', first_name: 'Jamie', profile_picture: 'jamie.png' },
      { id: '4', first_name: 'Ana', profile_picture: 'ana.png' },
    ];
    console.log('Populating initial data...', initialUsers);
    // Filter out the current user from the initial data
    const filteredUsers = initialUsers.filter(user => user.id !== loggedInUser.id);
 

    // Convert filteredUsers array to an object with id as the key
    const usersObject = filteredUsers.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
    }, {});

    // Add the logged-in user to the users object
    const newUsers = {
        ...usersObject,
        [loggedInUser.id]: loggedInUser, // Add the logged-in user with their id as key
    };


    localStorage.setItem('users', JSON.stringify(newUsers));
    console.log('now initial data...', newUsers);

    // Initialize some chats with random users
    let initialChats = {};
    filteredUsers.forEach((user) => {
      const chatKey = generateChatKey(loggedInUser.id, user.id);

      // Add some example messages for the current user and each other user
      initialChats[chatKey] = [
        { sender: user.id, message: `Hi ${loggedInUser.first_name}, how's it going?`, timestamp: '2024-10-10T09:00:00Z' },
        { sender: loggedInUser.id, message: 'Doing well, thanks!', timestamp: '2024-10-10T09:05:00Z' }
      ];
    });

    // Store chats in localStorage
    localStorage.setItem('chats', JSON.stringify(initialChats));

    // Update state
    setUsers(newUsers);
    setChats(initialChats);
  };

        // UseEffect to check if localStorage is empty or needs initialization
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || {};
    const storedChats = JSON.parse(localStorage.getItem('chats')) || {};

    // If no users or chats exist, populate the initial data
    if (Object.keys(storedUsers).length <= 1) {
      populateInitialData();
    } else {
      setUsers(storedUsers);
      setChats(storedChats);
    }
  }, [loggedInUser]);


//   useEffect(() => {
//     // Load users and chats from localStorage
//     const storedUsers = JSON.parse(localStorage.getItem('users')) || {};
//     const storedChats = JSON.parse(localStorage.getItem('chats')) || {};
//     setUsers(storedUsers);
//     setChats(storedChats);
//   }, []);

  const sendMessage = (message) => {
    const chatKey = loggedInUser.id < activeUser ? `${loggedInUser.id}-${activeUser}` : `${activeUser}-${loggedInUser.id}`;
    const newMessage = { sender: loggedInUser.id, message, timestamp: new Date().toISOString() };
    
    const updatedChats = {
      ...chats,
      [chatKey]: [...(chats[chatKey] || []), newMessage]
    };

    setChats(updatedChats);
    localStorage.setItem('chats', JSON.stringify(updatedChats));
  };

  const getActiveMessages = () => {
    if (!activeUser) return [];
    const chatKey = loggedInUser.id < activeUser ? `${loggedInUser.id}-${activeUser}` : `${activeUser}-${loggedInUser.id}`;
    return chats[chatKey] || [];
  };

  return (
    <div className="flex h-screen">
      <ChatSidebar users={users} activeUser={activeUser} setActiveUser={setActiveUser} loggedInUser={loggedInUser} />
      {activeUser ? (
        <ChatWindow
          messages={getActiveMessages()}
          activeUser={activeUser}
          loggedInUser={loggedInUser}
          sendMessage={sendMessage}
        />
      ) : (
        <div className="w-2/3 p-4 flex items-center justify-center text-gray-500">Select a user to chat with.</div>
      )}
    </div>
  );
};

export default ChatApp;
