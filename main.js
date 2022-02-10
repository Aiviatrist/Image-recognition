Webcam.set({
width:350,
height:300,
img_format:"png",
png_quality:90
});
var camera=document.getElementById("camera");
Webcam.attach(camera);

function lol(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML="<img id='hmmm' src='"+data_uri+"'>"
    })
}
console.log("ml5 version: ",ml5.version);
var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/15l9tIjTU/model.json",modelloaded);
function modelloaded(){
    console.log("model loaded!");
}
function why(){
    img=document.getElementById('hmmm');
    classifier.classify(img,gotresult);
}
function gotresult(error,results){
    if(error){
    console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}