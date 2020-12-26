import React from "react";
import "./Download.css";
function Download(props) {
  return (
    <div className="download">
      <div className="downloadseparator container">
        <div className="downloadcol1">
          <h2>Download the app</h2>
          <p>Always on the go</p>
          <p>Food - whenever and wherever you want it!</p>
          <div className="app-download">
            <p>
              <img
                className="logosmall"
                src="https://i.imgur.com/aUes1pc.png"
              />
            </p>
            <p>
              <img
                className="logosmall"
                src="https://i.imgur.com/OUPW1PK.png"
              />
            </p>
          </div>
        </div>
        <div className="downloadcol2">
          <img src="https://foodmandu.com/img/download_app_frame.png" />
        </div>
      </div>
    </div>
  );
}

export default Download;
