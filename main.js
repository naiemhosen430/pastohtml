const datepicker = document.getElementById("datepicker");
const monthSelector = document.getElementById("monthSelector");
const yearSelector = document.getElementById("yearSelector");
const calendarBodyElement = document.getElementById("calendarBody");
let currentDate = new Date();

datepicker.addEventListener("change", handleDateChange);
monthSelector.selectedIndex = currentDate.getMonth();
fillYearSelector();
yearSelector.value = currentDate.getFullYear();

displayCalendar(currentDate);

function handleDateChange() {
  const selectedDate = new Date(datepicker.value);
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  if (
    selectedDate.getMonth() === currentMonth &&
    selectedDate.getFullYear() === currentYear
  ) {
    displayCalendar(selectedDate);
  } else {
    displayCalendar(new Date(currentYear, currentMonth, 1));
  }
}

function displayCalendar(date) {
  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();

  calendarBodyElement.innerHTML = "";

  let dayCounter = 1;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      const cell = document.createElement("td");
      if (i === 0 && j < firstDayOfMonth) {
        cell.textContent = "";
      } else if (dayCounter <= daysInMonth) {
        cell.textContent = dayCounter;
        dayCounter++;
      }
      row.appendChild(cell);
    }
    calendarBodyElement.appendChild(row);
  }
}

function changeMonth() {
  currentDate.setMonth(parseInt(monthSelector.value));
  displayCalendar(currentDate);
}

function nextMonth() {
  currentDate.setMonth(currentDate.getMonth() + 1);
  displayCalendar(currentDate);
  monthSelector.value = currentDate.getMonth();
}

function prevMonth() {
  currentDate.setMonth(currentDate.getMonth() - 1);
  displayCalendar(currentDate);
  monthSelector.value = currentDate.getMonth();
}

function changeYear() {
  currentDate.setFullYear(parseInt(yearSelector.value));
  displayCalendar(currentDate);
}

function nextYear() {
  currentDate.setFullYear(currentDate.getFullYear() + 1);
  displayCalendar(currentDate);
  yearSelector.value = currentDate.getFullYear();
}

function prevYear() {
  currentDate.setFullYear(currentDate.getFullYear() - 1);
  displayCalendar(currentDate);
  yearSelector.value = currentDate.getFullYear();
}

function fillYearSelector() {
  const currentYear = new Date().getFullYear();
  for (let year = currentYear - 10; year <= currentYear + 10; year++) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearSelector.appendChild(option);
  }
}

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".calendar-dates");

const currdate = document.querySelector(".calendar-current-date");

const prenexIcons = document.querySelectorAll(".calendar-navigation span");

// Array of month names
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Function to generate the calendar
const manipulate = () => {
  // Get the first day of the month
  let dayone = new Date(year, month, 1).getDay();

  // Get the last date of the month
  let lastdate = new Date(year, month + 1, 0).getDate();

  // Get the day of the last date of the month
  let dayend = new Date(year, month, lastdate).getDay();

  // Get the last date of the previous month
  let monthlastdate = new Date(year, month, 0).getDate();

  // Variable to store the generated calendar HTML
  let lit = "";

  // Loop to add the last dates of the previous month
  for (let i = dayone; i > 0; i--) {
    lit += `<li class="inactive">${monthlastdate - i + 1}</li>`;
  }

  // Loop to add the dates of the current month
  for (let i = 1; i <= lastdate; i++) {
    // Check if the current date is today
    let isToday =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? "active"
        : "";
    lit += `<li class="${isToday}">${i}</li>`;
  }

  // Loop to add the first dates of the next month
  for (let i = dayend; i < 6; i++) {
    lit += `<li class="inactive">${i - dayend + 1}</li>`;
  }

  // Update the text of the current date element
  // with the formatted current month and year
  currdate.innerText = `${months[month]} ${year}`;

  // update the HTML of the dates element
  // with the generated calendar
  day.innerHTML = lit;
};

manipulate();

// Attach a click event listener to each icon
prenexIcons.forEach((icon) => {
  // When an icon is clicked
  icon.addEventListener("click", () => {
    // Check if the icon is "calendar-prev"
    // or "calendar-next"
    month = icon.id === "calendar-prev" ? month - 1 : month + 1;

    // Check if the month is out of range
    if (month < 0 || month > 11) {
      // Set the date to the first day of the
      // month with the new year
      date = new Date(year, month, new Date().getDate());

      // Set the year to the new year
      year = date.getFullYear();

      // Set the month to the new month
      month = date.getMonth();
    } else {
      // Set the date to the current date
      date = new Date();
    }

    // Call the manipulate function to
    // update the calendar display
    manipulate();
  });
});
