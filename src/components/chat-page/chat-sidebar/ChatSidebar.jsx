import React from 'react';

const ChatSidebar = ({ users, activeUser, setActiveUser, loggedInUser }) => {
  console.log(loggedInUser.id)
  return (
    <div className="w-1/3 p-4 border-r px-4 pt-4 bg-[#F6F6F6] rounded-xl ">
        {/* Show the logged-in user's image and name */}
        <div className="flex items-center mb-4">
        <img
          src={loggedInUser.profile_picture}
          alt={loggedInUser.first_name}
          className="rounded-full w-12 h-12 mr-4"
        />
        <div>
          <span className="block font-bold">{loggedInUser.first_name} {loggedInUser.last_name}</span>
          <span className="text-sm text-gray-500">You</span>
        </div>
      </div>
      <input type="text" className="w-full p-2 mb-4" placeholder="Search Here..." />
      <ul>
        {Object.keys(users).map((userId) => {
          if (userId === String(loggedInUser.id)) return null; // Don't show the logged-in user
          return (
            <li
              key={userId}
              className={`flex items-center p-2 cursor-pointer ${activeUser === userId ? 'bg-gray-200' : ''}`}
              onClick={() => setActiveUser(userId)}
            >
              <img src={users[userId].profile_picture} alt={users[userId].profile_picture} className="rounded-full w-10 h-10 mr-4" />
              <span>{users[userId].first_name} {users[userId].last_name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChatSidebar;
