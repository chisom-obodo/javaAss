function lifeInWeeks(age) {
   
/************Don't change the code above************/    
const years = 90;   
const currentAge = years - age;

const day = currentAge * 365;
const week = currentAge * 52;
const month = currentAge * 12;

console.log(`You have ${day} days, ${week} weeks, and ${month} months left.`)
  
       
/*************Don't change the code below**********/
}
lifeInWeeks(31);

// function lovecal(){

//     let female = prompt("Enter female name");
//     let male = prompt("Enter male name");

//     let cal = Math.floor(Math.random() * 100) +  1;
    
//     alert(`${female} and ${male} are ${cal}% match!!`)
// }
// lovecal()

function lovecal(female,male){

    let cal = Math.floor(Math.random() * 100);

    if(cal >= 50){
        console.log(`${female} and ${male} are ${cal}% match great love!! `)
    }
    else(
        console.log(`${female} and ${male} are ${cal}% you are not a match find new love!! `)
    )
    
    return cal;
}
lovecal("nancy" , "nelly")
