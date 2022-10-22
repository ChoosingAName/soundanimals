function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/yG_azhIwT/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error, results){
    if(error) {
        console.error(error);
    }   else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255);
        random_number_g=Math.floor(Math.random()*255);
        random_number_b=Math.floor(Math.random()*255);
        document.getElementById("result_label").innerHTML='I can hear - '+results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy - '+(results[0].confidence*100).toFixed[2]+'%';
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        img=document.getElementById('cat','dog','cow');
        

        if (results[0].label=='cat') {
            img.src='pexels-pixabay-104827.jpg';
        }   else if(results[0].label=='dog'){
            img.src='Screen Shot 2022-10-22 at 11.00.21 AM.png';
        }   else if(results[0].label=='cow'){
            img.src='monika-kubala-OpMfiq8nPIO-unsplash.jpg';
        }   else{
            img.src='Screen Shot 2022-10-22 at 11.04.40 AM.png';
        }
    }
}