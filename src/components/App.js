import React,{useState} from "react";
import TopNav from "./TopNav";
import Bottom from "./Bottom";
import TopNav2 from "./TopNav2";
import ContactsList from "./ContactsList";
import MessageBox from "./MessageBox";

function App() {
  const [onlist,setOnlist] = useState(true)

  const changeOnlist=()=>{
    if(onlist){
      setOnlist(false);
    }else{
      setOnlist(true);
    }
  }

  return (
    <div className="App">
      {onlist?<><TopNav/><ContactsList changeOnlist={changeOnlist}/></>:<><TopNav2 changeOnlist={changeOnlist}/><MessageBox/> <Bottom/></>} 
    </div>
  );
}

export default App;
