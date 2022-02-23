import React, { useState } from "react";

export default function Bottom({ messagesList }) {
  return (
    <section className="message-box text-textColor flex gap-4 overflow-scroll px-2 h-screen absolute bottom-14 flex-col-reverse w-full">
      {messagesList.map((message, index) => {
        if (message.isFrom) {
            return(
          <div key={index} className="flex w-3/5">
            <p className="to-message bg-body rounded-lg p-2">
              {message.text}
              <span className="time-stamp text-xs text-right block">
                9:20am
              </span>
            </p>
          </div>);
        } else {
            return(
          <div key={index} className="flex w-3/5 my-0 mr-0 ml-auto justify-end">
            <p className="from-message bg-header rounded-lg p-2">
              {message.text}
              <span className="time-stamp text-xs text-right block">
                9:20am
              </span>
            </p>
          </div>);
        }
      })}
    </section>
  );
}
