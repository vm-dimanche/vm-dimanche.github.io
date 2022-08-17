/* ---------- CLOCK TEXT ---------- */
const textHour = document.getElementById("text-hour");
const textMinutes = document.getElementById("text-minutes");
const textAmpm = document.getElementById("text-ampm");
const dateDay = document.getElementById("date-day");
const dateMonth = document.getElementById("date-month");
const dateYear = document.getElementById("date-year");

const clockText = () => {
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();

  let ampm;
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  if (hh >= 12) {
    hh -= 12;
    ampm = "pm";
  } else {
    ampm = "am";
  }

  if (hh == 0) {
    hh = 12;
  }

  if (hh < 10) {
    hh = `0${hh}`;
  }

  textHour.innerHTML = `${hh}:`;

  if (mm < 10) {
    mm = `0${mm}`;
  }

  textMinutes.innerHTML = mm;

  textAmpm.innerHTML = ampm;

  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  dateDay.innerHTML = day;
  dateMonth.innerHTML = `${months[month]}`;
  dateYear.innerHTML = year;
};

setInterval(clockText, 1000);
