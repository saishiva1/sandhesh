import React, { useRef, useEffect } from "react";

export default function InputBox({ messagesList, setMessageList }) {
  const inputMsg = useRef();
  useEffect(() => {
    inputMsg.current.focus();
  });

  const sendMessage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (inputMsg.current.value) {
      setMessageList([
        { text: inputMsg.current.value, isFrom: true },
        ...messagesList,
      ]);
      inputMsg.current.value = "";
    }
  };

  const sendMessageOnEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.key === "Enter") {
      if (inputMsg.current.value) {
        setMessageList([
          { text: inputMsg.current.value, isFrom: true },
          ...messagesList,
        ]);
        inputMsg.current.value = "";
      }
    }
  };

  return (
    <section className="chat-bottom">
      <div className="enterText py-2 px-2 fixed bottom-0 left-0 text-black flex bg-header w-full justify-center items-center">
        <input
          ref={inputMsg}
          type="text"
          name="tomessage"
          id="textInput"
          className="mr-2 rounded-md w-3/4 py-1 outline-none"
          onKeyUp={sendMessageOnEnter}
        />
        <svg
          onClick={sendMessage}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 transform  rotate-90 text-body hover:cursor-pointer"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
        </svg>
      </div>
    </section>
  );
}
