



const webcamElement = document.getElementById('webcam');
const canvas = document.getElementById('canvas');


navigator.mediaDevices.getUserMedia({video : true}).then((stream) => {
    
    
    webcamElement.srcObject = stream;
    canvas.getContext('2d').drawImage(webcamElement, 0, 0, webcamElement.width, webcamElement.height);
   
}).catch((err) => {
    console.error(err)
})





