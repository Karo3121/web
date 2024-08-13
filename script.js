
const webcamElement = document.getElementById('webcam');
const canvas = document.getElementById('canvas');
const photo = document.getElementById("photo")


navigator.mediaDevices.getUserMedia({video : true}).then((stream) => {
    
    
    webcamElement.srcObject = stream;

    photo.src = webcamElement.snap


}).catch((err) => {
    console.error(err)
})











