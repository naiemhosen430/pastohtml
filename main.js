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
