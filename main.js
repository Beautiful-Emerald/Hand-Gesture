Webcam.set({

    width:350,
    height:300,
    image_format:'png',
    png_quality:90
    });
    
    camera=document.getElementById("camera");
    Webcam.attach('#camera');
    
    function take_snapshot(){
    
    Webcam.snap(function(data_uri){
    
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'">';
    
    })}
    
    console.log("ml5 version: ",ml5.version);
    
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/fTJfO66Bu/model.json',modelLoaded);
    
    function modelLoaded(){
    console.log("modal loaded");
    }
   
    function speak(){

var synth=window.speechSynthesis;
speak_data= "The Prediction is "+prediction;
var utterThis=new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
        }

        function check(){
        img=document.getElementById("captured_image");
        classifier.classify(img,gotresult);
        }

        function gotresult(error,results){
        
        if(error){
        console.log(error);
        }

        else{
        console.log(results);
       
        prediction=results[0].label;
        

        speak();
    

       
        if (results[0].label=="Hifie"){
            document.getElementById("update_emoji").innerHTML="&#128075;"+"Hifie";
            }

            if (results[0].label=="Amazing"){
                document.getElementById("update_emoji").innerHTML="&#128077;"+"Amazing";
                }

                if (results[0].label=="Pointing"){
                    document.getElementById("update_emoji").innerHTML="&#128071;"+"Pointing";
                    }

                    if (results[0].label=="Namaste"){
                        document.getElementById("update_emoji").innerHTML="&#128080;"+"Namaste";
                        }
                        }}