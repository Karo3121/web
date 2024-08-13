





const webcamElement = document.getElementById('webcam');


navigator.mediaDevices.getUserMedia({video : true}).then((stream) => {
    
    
    webcamElement.srcObject = stream;


 


}).catch((err) => {
    console.error(err)
})

