


const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const snapSoundElement = document.getElementById('snapSound');
const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);



webcam.start()
   .then(result =>{
       console.log("webcam started");

       webcamElement.srcObj = result
       
       const photo = document.getElementById('photo')
       
       
       var picture = webcam.snap();
       
       photo.src = picture
   })
   .catch(err => {
       console.log(err);
   });
