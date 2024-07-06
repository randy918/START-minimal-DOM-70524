//?  ████████████████████████████████████  DATA


//_ ████████████████████████████████████  PROMISES



//< ████████████████████████████████████  FUNCTIONS

//< ████████████████████████████████████  SECTION 1

let header = document.getElementById('header');
header.style.backgroundColor = 'yellow';

//< ████████████████████████████████████  SECTION 2

let classElements = document.getElementsByClassName('header');
for (let i = 0; i < classElements.length; i++) {

    document.getElementsByClassName('header')[i].style.backgroundColor = 'yellow';

}

//< ████████████████████████████████████  SECTION 3

let tagNames = document.getElementsByTagName('p');
for (let i = 0; i < tagNames.length; i++) {

    document.getElementsByTagName('p')[i].style.backgroundColor = 'yellow';
}


//< ████████████████████████████████████  SECTION 4

let singleQuery = document.querySelector('#query');

document.querySelector('#query').style.backgroundColor = 'yellow';



//< ████████████████████████████████████  SECTION 5

let allQuery = document.querySelectorAll('.query-all');


for(let i = 0; i < allQuery.length; i++){
    
    document.querySelectorAll('.query-all')[i].style.backgroundColor = 'yellow';


}

//_$ ████████████████████████████████████  QUERY SELECTORS

//^  ████████████████████████████████████  EVENT LISTENERS

//>  ████████████████████████████████████  REAL PROGRAM

//!  ████████████████████████████████████  FILTER array example [filter results]



