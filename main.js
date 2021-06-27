Webcam.set({
width:300,
height:300,
image_format:'png',
png_quality:100,
})
camera=document.getElementById(camera);
Webcam.attach("#camera");

function takephoto(){

Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML=`<img id=photo_img src=${data_uri}>`;
})

}


console.log("ml5 version: ",ml5.version);

TM_link= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/JtTs1e2WS/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model loaded successfully");
}

function check(){
var img = document.getElementById("photo_img");
TM_link.classify(img, get_result);

}


function get_result(error,result){
    if(error){
console.error(error);
}
else{
console.log(result);
document.getElementById("object").innerHTML=result[0].label;
document.getElementById("accuracy").innerHTML=result[0].confidence.toFixed(3);
}
}