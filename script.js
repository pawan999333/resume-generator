function addNewWEField(){
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('weField')
    newNode.classList.add('mt-2')

    newNode.setAttribute('rows',3)
    newNode.setAttribute('placeholder','Enter here');


    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById('weAddButton');

    weOb.insertBefore(newNode,weAddButtonOb);

}

function addNewAQField(){
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('eqField')
    newNode.classList.add('mt-2')

    newNode.setAttribute('rows',3)
    newNode.setAttribute('placeholder','Enter here');


    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById('aqAddButton');

    aqOb.insertBefore(newNode,aqAddButtonOb);

}


function addNewProjectField(){
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control')
    newNode.classList.add('projectField')
    newNode.classList.add('mt-2')

    newNode.setAttribute('rows',3)
    newNode.setAttribute('placeholder','Enter here');


    let aqOb=document.getElementById("project");
    let aqAddButtonOb=document.getElementById('projectAddButton');

    aqOb.insertBefore(newNode,aqAddButtonOb);

}
// generating cv
function generateCV(){
    // console.log("generate cv")
    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1');


    nameT1.innerHTML=nameField;

    //direct
    document.getElementById('nameT2').innerHTML=
    document.getElementById('nameField').value;


    //contact
    document.getElementById('contactT').innerHTML=
    document.getElementById('contactField').value;
     
    //address
    document.getElementById('addressT').innerHTML=
    document.getElementById('addressField').value;

    document.getElementById('fbT').innerHTML=
    document.getElementById('fbField').value;

    document.getElementById('instaT').innerHTML=
    document.getElementById('instaField').value;

    document.getElementById('linkedT').innerHTML=
    document.getElementById('linkedField').value;

  //objective

  document.getElementById('objectiveT').innerHTML=
  document.getElementById('objectiveField').value;

  //we

  let wes=document.getElementsByClassName('weField');
  let str='';

  for(let e of wes){
    str=str+`<li>${e.value}</li>`;
  }

  document.getElementById('weT').innerHTML=str;

  //aq

  let eqs=document.getElementsByClassName('eqField');
  let str2='';

  for(let e of eqs){
    str2=str2+`<li>${e.value}</li>`;
  }

  document.getElementById('aqT').innerHTML=str2;

  //project


    let prs=document.getElementsByClassName('projectField');
    let str3='';
  
    for(let e of prs){
      str3=str3+`<li>${e.value}</li>`;
    }
  
    document.getElementById('projectT').innerHTML=str3;

    //code for setting image

    let file=document.getElementById('imgField').files[0]

    console.log(file);

    let reader=new FileReader()


    reader.readAsDataURL(file);

    console.log(reader.result,reader.onloadend);

    //set image to template

    reader.onloadend=function(){

        document.getElementById('imgTemplate').src=reader.result;
    }

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';

}
//print cv
function printCV(){
    
 
    document.getElementById('printButtonDiv').style.display='none';

    window.print();
}