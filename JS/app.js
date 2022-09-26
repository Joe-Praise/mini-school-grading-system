let english, maths, chemistry, biology, french;
english = document.getElementById('English');
maths = document.getElementById('maths');
chemistry = document.getElementById('chemistry');
biology = document.getElementById('biology');
french = document.getElementById('french');



function englishGrades(){
    if( english.value < 40){
        document.getElementById('english_result').innerHTML = 'F'
    }else if(english.value > 40 && english.value <= 45){
        document.getElementById('english_result').innerHTML = 'E'
    }
    else if(english.value > 45 && english.value <= 50){
        document.getElementById('english_result').innerHTML = 'D'
    }else if(english.value > 50 && english.value <= 60){
        document.getElementById('english_result').innerHTML = 'C'
    }else if(english.value > 60 && english.value <= 69){
        document.getElementById('english_result').innerHTML = 'B'
    }else if(english.value >= 70){
        document.getElementById('english_result').innerHTML = 'A'
    }
}

function mathGardes(){
    if( maths.value < 40){
        document.getElementById('math_result').innerHTML = 'F'
    }else if(maths.value > 40 && maths.value <= 45){
        document.getElementById('math_result').innerHTML = 'E'
    }
    else if(maths.value > 45 && maths.value <= 50){
        document.getElementById('math_result').innerHTML = 'D'
    }else if(maths.value > 50 && maths.value <= 60){
        document.getElementById('math_result').innerHTML = 'C'
    }else if(maths.value > 60 && maths.value <= 69){
        document.getElementById('math_result').innerHTML = 'B'
    }else if(maths.value >= 70){
        document.getElementById('math_result').innerHTML = 'A'
    }
}

function chemistryGrades(){
    if( chemistry.value < 40){
        document.getElementById('chemistry_result').innerHTML = 'F'
    }else if(chemistry.value > 40 && chemistry.value <= 45){
        document.getElementById('chemistry_result').innerHTML = 'E'
    }
    else if(chemistry.value > 45 && chemistry.value <= 50){
        document.getElementById('chemistry_result').innerHTML = 'D'
    }else if(chemistry.value > 50 && chemistry.value <= 60){
        document.getElementById('chemistry_result').innerHTML = 'C'
    }else if(chemistry.value > 60 && chemistry.value <= 69){
        document.getElementById('chemistry_result').innerHTML = 'B'
    }else if(chemistry.value >= 70){
        document.getElementById('chemistry_result').innerHTML = 'A'
    }
}

function biologyGrades(){
    if( biology.value < 40){
        document.getElementById('biology_result').innerHTML = 'F'
    }else if(biology.value > 40 && biology.value <= 45){
        document.getElementById('biology_result').innerHTML = 'E'
    }
    else if(biology.value > 45 && biology.value <= 50){
        document.getElementById('biology_result').innerHTML = 'D'
    }else if(biology.value > 50 && biology.value <= 60){
        document.getElementById('biology_result').innerHTML = 'C'
    }else if(biology.value > 60 && biology.value <= 69){
        document.getElementById('biology_result').innerHTML = 'B'
    }else if(biology.value >= 70){
        document.getElementById('biology_result').innerHTML = 'A'
    }
}

function frenchGrades(){
    if( french.value < 40){
        document.getElementById('french_result').innerHTML = 'F'
    }else if(french.value > 40 && french.value <= 45){
        document.getElementById('french_result').innerHTML = 'E'
    }
    else if(french.value > 45 && french.value <= 50){
        document.getElementById('french_result').innerHTML = 'D'
    }else if(french.value > 50 && french.value <= 60){
        document.getElementById('french_result').innerHTML = 'C'
    }else if(french.value > 60 && french.value <= 69){
        document.getElementById('french_result').innerHTML = 'B'
    }else if(french.value >= 70){
        document.getElementById('french_result').innerHTML = 'A'
    }
}

function getToTal(){
    let total = parseInt(english.value) + parseInt(maths.value) + parseInt(chemistry.value) + parseInt(biology.value) + parseInt(french.value);
    
    document.getElementById('display_total').innerHTML = total;
}

function getAverage () {
    let average = ((parseInt(english.value) + parseInt(maths.value) + parseInt(chemistry.value) + parseInt(biology.value) + parseInt(french.value))/5);
    document.getElementById('average').innerHTML = average;

    if(average < 40){
        document.getElementById('remarks').innerHTML = 'You have to do better!';
    }else if(average > 40 && average <= 50 ){
        document.getElementById('remarks').innerHTML = 'You disappointed your teacher';
    }else if(average > 50 && average <= 60){
        document.getElementById('remarks').innerHTML = 'Good job! You can do better';
    }else if(average > 60 && average <= 70){
        document.getElementById('remarks').innerHTML = 'Great job! Keep it Up!'
    }else if(average > 70 && average <= 100){
        document.getElementById('remarks').innerHTML = 'Excellent Result! Keep Going Champ!'
    }

}

function getOutput(){
    englishGrades();
    mathGardes();
    chemistryGrades();
    biologyGrades();
    frenchGrades();
    getToTal();
    getAverage();
}
