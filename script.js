





const webcamElement = document.getElementById('webcam');
const canvas = document.getElementById('canvas');
const photo = document.getElementById("photo")


navigator.mediaDevices.getUserMedia({video : true}).then((stream) => {
    
    
    webcamElement.srcObject = stream;

    canvas.getContext('2d').drawImage(webcamElement, 0, 0, 100, 100);
   
    const data = canvas.toDataURL("image/png");
    
    photo.setAttribute("src", data);


}).catch((err) => {
    console.error(err)
})










