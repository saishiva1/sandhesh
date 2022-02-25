import React from "react";

export default function Message({ message }) {
  
   return message.isFrom?  (
        <div className="flex w-3/5">
          <p className="to-message bg-body rounded-lg p-2">
            {message.text}
            <span className="time-stamp text-xs text-right block">
              {message.time}
            </span>
          </p>
        </div>
      ) :
       (
        <div className="flex w-3/5 my-0 mr-0 ml-auto justify-end">
          <p className="from-message bg-header rounded-lg p-2">
            {message.text}
            <span className="time-stamp text-xs text-right block">
              {message.time}
            </span>
          </p>
        </div>
      );
    
  }
