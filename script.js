
navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
    // WEBCAM STREAM TO VIDEO
    let v = document.createElement("video");
    v.height = "100px"
    v.width = "100px"
    v.autoplay = true;
    v.srcObject = stream;
   
    // CAPTURE VIDEO FRAME TO CANVAS
    v.onloadedmetadata = () => {
      let cv = document.createElement("canvas"),
          cx = cv.getContext("2d");
      cv.width = v.videoWidth; cv.height = v.videoHeight;
      cx.drawImage(v, 0, 0, v.videoWidth, v.videoHeight);
    };
  });





