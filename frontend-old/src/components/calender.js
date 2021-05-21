import React from "react"
const Calender = ({ calSrcURL, calTitle, ...props }) => (
  <div className="calender">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      style="border-width:0"
      width="800"
      height="600"
      frameborder="0"
      scrolling="no"
    />
  </div>
)
export default Calender

