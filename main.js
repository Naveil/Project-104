Webcam.set({
    width:250,
    height:200,
    image_format: 'jpeg',
    jpeg_quality: 90
});

var camera = document.getElementById("camera");
Webcam.attach("#camera");

function createPicture(){
    Webcam.snap(function(data_uri){
        document.getElementById("picture").innerHTML = '<image id="image" src="'+data_uri+'">';

    });
}
console.log("m15 version:",m15.version);

var classifier = m15.imageClassifier('https://teachablemachine.withgoogle.com/models/H1Y4YfBs6/model.json'. modelLoaded);
function modelLoaded(){
    console.log("Model Loaded");
}