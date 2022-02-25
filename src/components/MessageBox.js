import React from "react";
import Message from "./Message";

export default function Bottom({ messagesList }) {
  return (
    <section className="message-box text-textColor flex gap-4 overflow-scroll px-2 h-screen absolute bottom-14 flex-col-reverse w-full">
      {messagesList.map((message, index) => (
        <Message message={message} key={index} />
      ))}
    </section>
  );
}
