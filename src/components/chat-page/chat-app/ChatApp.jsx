import React, { useState, useEffect } from "react";
import ChatSidebar from "../chat-sidebar/ChatSidebar";
import ChatWindow from "../chat-window/ChatWindow";

const ChatApp = () => {
  const [users, setUsers] = useState({});
  const [chats, setChats] = useState({});
  const [activeUser, setActiveUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("loggedInUser")));


  // Function to generate the chat key
  const generateChatKey = (user1Id, user2Id) => {
    return user1Id < user2Id
      ? `${user1Id}-${user2Id}`
      : `${user2Id}-${user1Id}`;
  };

  // Initial data function to populate users and chats
  const populateInitialData = () => {
    const initialUsers = [
      { id: "1", first_name: "David", last_name:"Johnson", profile_picture: "./wanda_parker.jpg" },
      { id: "2", first_name: "Lisa", last_name:"Agnes", profile_picture: "/janice.jpg" },
      { id: "3", first_name: "Jamie", last_name:"Drake", profile_picture: "/lucas.jpg" },
      { id: "4", first_name: "Ana", last_name:"Lucia", profile_picture: "/terry.jpg" },
    ];
    console.log("Populating initial data...", initialUsers);
    // Filter out the current user from the initial data
    const filteredUsers = initialUsers.filter(
      (user) => user.id !== loggedInUser.id
    );

    // Convert filteredUsers array to an object with id as the key
    const usersObject = filteredUsers.reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {});

    // Add the logged-in user to the users object
    const newUsers = {
      ...usersObject,
      [loggedInUser.id]: loggedInUser, 
    };

    localStorage.setItem("users", JSON.stringify(newUsers));
    console.log("now initial data...", newUsers);

    // Initialize some chats with random users
    let initialChats = {};
    filteredUsers.forEach((user) => {
      const chatKey = generateChatKey(loggedInUser.id, user.id);

      // Add some example messages for the current user and each other user
      initialChats[chatKey] = [
        {
          sender: user.id,
          message: `Hi ${loggedInUser.first_name}, how's it going?`,
          timestamp: "2024-10-10T09:00:00Z",
        },
      ];
    });

    // Store chats in localStorage
    localStorage.setItem("chats", JSON.stringify(initialChats));

    // Update state
    setUsers(newUsers);
    setChats(initialChats);
  };

  // UseEffect to check if localStorage is empty or needs initialization
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || {};
    const storedChats = JSON.parse(localStorage.getItem("chats")) || {};

    // If no users or chats exist, populate the initial data
    if (Object.keys(storedUsers).length <= 1) {
      populateInitialData();
    } else {
      setUsers(storedUsers);
      setChats(storedChats);
    }
  }, [loggedInUser]);

  const sendMessage = (message) => {
    const chatKey =
      loggedInUser.id < activeUser
        ? `${loggedInUser.id}-${activeUser}`
        : `${activeUser}-${loggedInUser.id}`;
    const newMessage = {
      sender: loggedInUser.id,
      message,
      timestamp: new Date().toISOString(),
    };

    const updatedChats = {
      ...chats,
      [chatKey]: [...(chats[chatKey] || []), newMessage],
    };

    setChats(updatedChats);
    localStorage.setItem("chats", JSON.stringify(updatedChats));
  };

  const getActiveMessages = () => {
    if (!activeUser) return [];
    const chatKey =
      loggedInUser.id < activeUser
        ? `${loggedInUser.id}-${activeUser}`
        : `${activeUser}-${loggedInUser.id}`;
    return chats[chatKey] || [];
  };

  return (
    <div className="w-full px-4 py-8 bg-white rounded-xl">
      <div className="w-full flex gap-4 min-h-[50vh]">
        <ChatSidebar
          users={users}
          activeUser={activeUser}
          setActiveUser={setActiveUser}
          loggedInUser={loggedInUser}
        />
        {activeUser ? (
          <ChatWindow
            messages={getActiveMessages()}
            activeUser={activeUser}
            loggedInUser={loggedInUser}
            sendMessage={sendMessage}
          />
        ) : (
          <div className="w-2/3 p-4 flex items-center justify-center text-gray-500">
            Select a user to chat with.
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatApp;
