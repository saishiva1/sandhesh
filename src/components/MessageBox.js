import React from 'react'

export default function Bottom() {
  return (
    <section className="message-box text-textColor flex overflow-scroll px-2 h-screen absolute bottom-14 flex-col-reverse w-full">
        {/* <!-- to message starts --> */}
        {/* <!-- absolute h-[87%] bottom-14 --> */}
        <div className="flex w-3/5">
            <p className="to-message bg-body rounded-lg p-2">
                y
                <span className="time-stamp text-xs text-right block">9:20am</span>
            </p>
        </div>
        {/* <!-- to message ends --> */}
        {/* <!-- from message starts --> */}
        <div className="flex w-3/5 my-0 mr-0 ml-auto justify-end">
            <p className="from-message bg-header rounded-lg p-2">
                hey! qwqcc qwdqw qwdqwc qqqwdqcq efief fefefej fe oehfowif buwhfw bf wfdw dw dwd dw dwd
                <span className="time-stamp text-xs text-right block">9:20am</span>
            </p>
        </div>
        {/* <!-- from message ends --> */}
    </section>
  )
}
