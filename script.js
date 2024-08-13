


const webcamElement = document.getElementById('webcam');
const canvas = document.getElementById('canvas');


navigator.mediaDevices.getUserMedia({video : true}).then((stream) => {
    
    
    webcamElement.srcObject = stream;
    console.log( typeof (canvas.getContext('2d').drawImage(webcamElement, 0, 0, canvas.width, canvas.height)))

}).catch((err) => {
    console.error(err)
})





