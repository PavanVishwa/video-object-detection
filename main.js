objects=[];
video="";
status="";

function preload(){
    video=createVideo('The_Boss_baby_2.mp4');
    video.hide();
}

function setup(){
    canvas=createCanvas(500,450);
    canvas.center();
}

function draw(){
    image(video,0,0,500,450);
    if(status != ""){
        objectDetector.detect(video,gotResult);

        for(i=0; i < objects.length;i++){
            document.getElementById("status").innerHTML="Status :  objects  Detected";
            document.getElementById("Number_of_objects").innerHTML="Number of objects Detected are"+objects.length;
            fill("#ff0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("#0000FF");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height); 
        }                 
        }
    }


function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting objects";
}

function modelLoaded(){
    console.log("Model is loaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}





