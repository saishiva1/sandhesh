import React from "react";
import mainLogo from './imageplaceholder.png'

export default function ContactsList({changeOnlist}) {
     const openMessageBox=(e)=>{
            e.preventDefault();
            e.stopPropagation();
            changeOnlist();
    }
  return (
    <>
      <section className="mt-12 text-textColor messages">
        <div onClick={openMessageBox}>
          <div className="message-contact flex p-2 justify-items-start border-t-2 border-b-2 border-slate-500 items-center hover:cursor-pointer">
            <img
              src={mainLogo}
              className="w-10 h-10 rounded-full block mr-2"
            />
            <div className="w-full">
              <div className="flex justify-between items-center">
                <p>Contact Name</p>
                <p className="text-sm">yesterday</p>
              </div>
              <div className="flex">
                <p>latest message by the contact</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
