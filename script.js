
import Webcam from 'webcam-easy';



const webcamElement = document.getElementById('webcam');
const photo = document.getElementById("photo")

const webcam = new Webcam(webcamElement, 'user',);


navigator.mediaDevices.getUserMedia({video : true}).then((stream) => {
    
    
    webcamElement.srcObject = stream;

    photo.setAttribute("src", `${webcam.snap()}` ) 


}).catch((err) => {
    console.error(err)
})






