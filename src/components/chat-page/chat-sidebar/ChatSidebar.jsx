import React from 'react';

const ChatSidebar = ({ users, activeUser, setActiveUser, loggedInUser }) => {
  return (
    <div className="w-1/3 p-4 border-r px-4 pt-4 bg-[#F6F6F6] rounded-xl ">
      <input type="text" className="w-full p-2 mb-4" placeholder="Search Here..." />
      <ul>
        {Object.keys(users).map((userId) => {
          if (userId === loggedInUser.id) return null; // Don't show the logged-in user
          return (
            <li
              key={userId}
              className={`flex items-center p-2 cursor-pointer ${activeUser === userId ? 'bg-gray-200' : ''}`}
              onClick={() => setActiveUser(userId)}
            >
              <img src={users[userId].profile_picture} alt="" className="rounded-full w-10 h-10 mr-4" />
              <span>{users[userId].first_name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChatSidebar;
