
const webcamElement = document.getElementById('webcam');
const canvas = document.getElementById('canvas');


navigator.mediaDevices.getUserMedia({video : true}).then((stream) => {
    
    
    webcamElement.srcObject = stream;
    canvas.srcObject = canvas.getContext('2d').drawImage(webcamElement, 0, 0, canvas.width, canvas.height);
    let image_data_url = canvas.toDataURL('image/jpeg');

    console.log(image_data_url);
}).catch((err) => {
    console.error(err)
})








