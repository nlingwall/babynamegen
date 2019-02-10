//script.js BabyName Project
// need to set up checked so that they default to false and change to true when selected.



var nameLast = document.getElementById('input-last');
console.log(nameLast.value);
var buttonName = document.getElementById('name-it');
var maleRadio = document.getElementById('male-button');
console.log(maleRadio.checked);
var femaleRadio = document.getElementById('female-button');
console.log(femaleRadio.checked);
var otherRadio = document.getElementById('other-button');
console.log(otherRadio.checked);
var displayDiv = document.getElementById("name-add");


function boyName(){
    var boyName = getRandElem(boy);
    return boyName;
}

console.log(boyName());

function girlName(){
    var girlName = getRandElem(girl);
    return girlName;
}

function otherName(){
    var otherName = getRandElem(other);
    return otherName;
}


function selectName(){
    if(maleRadio.checked === true){
        return boyName();
    }
    else if(femaleRadio.checked === true){
        return girlName();
    }
    else{
        return otherName ();
    }
}

console.log(selectName());

function middleName(){
    if(maleRadio.checked === true || femaleRadio.checked === true ){
        return otherName();
    }
    else{
        return boyName();
    }
}
console.log(middleName());





function getRandElem(arr){
    return arr[genRandNum(0,arr.length -1)];
}

function genRandNum(min,max) {
    return Math.floor(Math.random() * (max +1 - min)+min);
}



maleRadio.addEventListener('click',changeInputTextMale)
femaleRadio.addEventListener('click',changeInputTextFemale)
otherRadio.addEventListener('click',changeInputTextOther)
buttonName.addEventListener('click',test)

function test(){
    if(maleRadio.checked === false && femaleRadio.checked === false  && otherRadio.checked === false ){
        return alert("Please select a gender.");
    }
    else if(nameLast.value === ''){
        return alert("Please enter a last name.");
    }    
    else{
        return createName();
    }
}



function changeInputTextMale(event){
    var inputBoy = "Blue";
    var nameBoy = "DodgerBlue";
    var trueBoy = true;
    nameLast.style.color =inputBoy;
    buttonName.style.backgroundColor = nameBoy;
    maleRadio.checked = trueBoy;
    femaleRadio.checked = false;
    otherRadio.checked = false;

}

function changeInputTextFemale(event){
    var inputGirl = "Pink";
    var nameGirl = 'HotPink';
    nameLast.style.color =inputGirl;
    buttonName.style.backgroundColor = nameGirl;
}

function changeInputTextOther(event){
    var inputOther = "Green";
    var nameOther = 'DarkGreen';
    nameLast.style.color =inputOther;
    buttonName.style.backgroundColor = nameOther;
}

function createName(event){
    var totalName = selectName()+' '+middleName()+' '+ nameLast.value.charAt(0).toUpperCase() + nameLast.value.slice(1).toLowerCase()+' ';
    var displayName = document.createElement('div');
    displayName.innerText = totalName;
    displayName.id = "nameFull";
    
    if(maleRadio.checked === true){
        displayName.style.color = "darkblue";
    }
    else if(femaleRadio.checked === true){
        displayName.style.color = "deeppink";
    }
    else{
        displayName.style.color = "forestgreen";
    }
    displayName.style.fontFamily = 'fantasy';
    displayName.style.fontSize ='2em';
    if(document.getElementById("nameFull")){
        displayDiv.removeChild(document.getElementById("nameFull"));
        displayDiv.appendChild(displayName);
    }
    else{
        displayDiv.appendChild(displayName);
    }
    
    
    //displayDiv.innerHTML = displayName.innerText;
}

