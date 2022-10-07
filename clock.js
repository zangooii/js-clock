let date = new Date();

const plusO = (timeCondition) => {
  if (timeCondition < 10) {
    return "0" + timeCondition;
  } else {
    return timeCondition;
  }
};

const PA = (myHour) => {
  if (myHour > 12) {
    this.timeHalf = " PM";
    return myHour - 12;
  } else {
    this.timeHalf = " AM";
    return myHour;
  }
};

const timeChanges = () => {
  date = new Date();

  this.hour = plusO(PA(date.getHours()));
  this.minute = plusO(date.getMinutes());
  this.second = plusO(date.getSeconds());

  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("second").innerHTML = second;
  document.getElementById("half").innerHTML = this.timeHalf;
};

timeChanges();

setInterval(timeChanges, 1000);
