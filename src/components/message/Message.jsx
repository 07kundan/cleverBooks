import React, { useState } from "react";

function Message() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsActive(!isActive)}
        className="relative outline outline-2 bg-gradient-to-t from-blue-500 to-blue-900 ml-5 px-8 py-2 rounded-2xl"
      >
        Message
        {isActive && (
          <div className="absolute -bottom-8 w-80 left-1/2 -translate-x-1/2 bg-red-500">
            I can further improve as per requirements
          </div>
        )}
      </button>
    </>
  );
}

export default Message;
