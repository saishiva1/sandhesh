import React from "react";
import mainLogo from "./imageplaceholder.png";

export default function TopNav2({changeOnlist}) {
    const backToContactList=(e)=>{
        e.preventDefault();
        e.stopPropagation();
        console.log('yes')
        changeOnlist();
}
  return (
    <section className="contact-nav">
      <nav className="flex justify-between py-3 px-2 bg-header fixed z-10 w-full top-0 flex-col-reverse">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-textColor mr-2 hover:cursor-pointer back"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={backToContactList}
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          <img src={mainLogo} className="w-8 h-8 rounded-full block mr-2" />
          <p className="font-medium text-xl text-textColor">Contact Name</p>
        </div>
      </nav>
    </section>
  );
}
