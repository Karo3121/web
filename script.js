


const webcamElement = document.getElementById('webcam');
const photo = document.getElementById("photo")



navigator.mediaDevices.getUserMedia({video : true}).then((stream) => {
    
    
    webcamElement.srcObject = stream;
    
    const webcam = new Webcam(webcamElement);

    photo.src = webcam.snap()


}).catch((err) => {
    console.error(err)
})









