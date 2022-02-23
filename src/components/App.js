import React, { useState } from "react";
import TopNav from "./TopNav";
import Bottom from "./Bottom";
import TopNav2 from "./TopNav2";
import ContactsList from "./ContactsList";
import MessageBox from "./MessageBox";

function App() {
  const staticMessage = [{ text: "hello", isFrom: true }];

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
      {onlist ? (
        <>
          <TopNav />
          <ContactsList changeOnlist={changeOnlist} />
        </>
      ) : (
        <>
          <TopNav2 changeOnlist={changeOnlist} />
          <MessageBox messagesList={messagesList} />
          <Bottom messagesList={messagesList} setMessageList={setMessageList} />
        </>
      )}
    </div>
  );
}

export default App;
