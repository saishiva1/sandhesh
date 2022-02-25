import React, { useRef, useState, useEffect } from "react";

export default function Auth() {
  const [isError, setIsError] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
const [otpElement,setOtpElement] = useState('');
  const telElement = useRef();
  
  useEffect(() => {
    telElement.current.focus();
  });

  const getOtp = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (
      Number.isNaN(+telElement.current.value) ||
      !telElement.current.value ||
      telElement.current.value.length !== 10
    ) {
      setIsError(true);
      setIsOtpSent(false);
    } else {
      setIsError(false);
      setIsOtpSent(true);
      console.log(otpElement)
    //   otpElement.focus();
    }
  };

  const verifyOtp = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(otpElement.value)
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <form className="text-textColor text-center flex justify-center flex-col text-xl">
        <p className=" mb-2">Login with phone number</p>
        <p className=" mb-2">
          <span>India +91</span>
        </p>
        <p className={isError ? "" : "mb-4"}>
          <input
            type={"tel"}
            className="block text-textColor bg-mainMessageBody p-1 outline-none border-b-2 border-b-textColor "
            placeholder="Enter Phone Number"
            ref={telElement}
          />
        </p>
        {isError ? (
          <>
            <p className="mb-2 text-left text-base text-red-400">
              <span>Invalid phone number</span>
            </p>
          </>
        ) : (
          <></>
        )}
        {isOtpSent ? (
        <p className={isError ? "" : "mb-4"}>
        <input
              type={"tel"}
              className="block text-textColor bg-mainMessageBody p-1 outline-none border-b-2 border-b-textColor "
              placeholder="Enter OTP"
              ref={e=>setOtpElement(e)}
            />
          </p>
        ) : (
          <></>
        )}
        <p>
          <button
            value="Next"
            className="text-textColor px-4 border-textColor border-2 cursor-pointer mb-2"
            onClick={!isOtpSent?getOtp:verifyOtp}
          >
            Next
          </button>
        </p>
      </form>
    </div>
  );
}
