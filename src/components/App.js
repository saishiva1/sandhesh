import React, { useState } from "react";
import MainNav from "./MainNav";
import InputBox from "./InputBox";
import MessageBoxNav from "./MessageBoxNav";
import ContactsList from "./ContactsList";
import MessageBox from "./MessageBox";
import Auth from './Auth';

function App() {
  const staticMessage = [
    { text: "hello", isFrom: true, time: "9:30am",index:0 },
    { text: "hello", isFrom: false, time: "9:30am",index:1 },
  ];

  const [onlist, setOnlist] = useState(true);
  const [messagesList, setMessageList] = useState(staticMessage);

  const changeOnlist = () => {
    if (onlist) {
      setOnlist(false);
    } else {
      setOnlist(true);
    }
  };

  return (
    <div className="App">
        <Auth />
    </div>
  );
}

export default App;


/*
      {onlist ? (
        <>
          <MainNav />
          <ContactsList changeOnlist={changeOnlist} />
        </>
      ) : (
        <>
          <MessageBoxNav changeOnlist={changeOnlist} />
          <MessageBox messagesList={messagesList} />
          <InputBox
            messagesList={messagesList}
            setMessageList={setMessageList}
          />
        </>
      )}
*/