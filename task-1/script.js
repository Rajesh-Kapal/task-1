var userName = prompt("Please Enter Your Name","User");



function calculateClick (){
    const year = document.getElementById('year').value;
    const month = document.getElementById('month').value;
    const date = document.getElementById('date').value;

    var today = new Date();
    let birthDate = new Date(year,month-1, date);

    let yearDiff = today.getFullYear()-birthDate.getFullYear() ;
    let monthDiff = today.getMonth()- birthDate.getMonth();
    let dayDiff = today.getDate()-birthDate.getDate();

    if(monthDiff < 0 || (monthDiff === 0 && today.getDate()) || birthDate.getDate()){
        --yearDiff;
    }

    if(!year || !month || !date){
        document.getElementById('result').innerHTML="Please Enter a Valid DOB";
        return;
    }

    if(yearDiff > 0){
        document.getElementById('result').innerHTML=`Hello ${userName} <br> Your age is ${yearDiff} years ${monthDiff} months ${dayDiff} days.`;
   
    }
}

