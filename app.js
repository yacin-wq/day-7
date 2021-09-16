
let futureDate = new Date(2021, 8, 16, 10, 59, 0);


let DaysTC = document.querySelector(".Days");
let HoursTC = document.querySelector(".Hours");
let MinutesTC = document.querySelector(".Minutes");
let SecondsTC = document.querySelector(".Seconds");



const futureTime= futureDate.getTime();


function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;

    console.log(t);
    // values in ms
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneminute = 60*1000;
    let days = t/oneDay;
    days = Math.floor(days);
    let hours = Math.floor( (t % oneDay)/oneHour );
    let minutes = Math.floor((t % oneHour)/oneminute);
    let secondes = Math.floor((t % oneminute) / 1000);
    DaysTC.textContent = `${days}`;
    HoursTC.textContent = `${hours}`;
    MinutesTC.textContent = `${minutes}`;
    SecondsTC.textContent = `${secondes}`;
    if(t < 0 ){
        DaysTC.textContent = `0`;
        HoursTC.textContent = `0`;
        MinutesTC.textContent = `0`;
        SecondsTC.textContent = `0`;
    }
}

  let countdown = setInterval(getRemainingTime,1000);
  getRemainingTime();