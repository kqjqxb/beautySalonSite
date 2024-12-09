function displayDate() {
    var currentTime = new Date();
    var day = currentTime.getDate();
    var monthIndex = currentTime.getMonth();
    var year = currentTime.getFullYear();
  
    // Масив з назвами місяців
    var months = [
      "січня", "лютого", "березня", "квітня", "травня", "червня",
      "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"
    ];
  
    // Форматування дати
    var monthName = months[monthIndex];
    var dateStr = day + " " + monthName + " " + year;
  
    // Відображення дати на сторінці
    var dateDiv = document.getElementById('date');
    dateDiv.innerHTML = dateStr;
  }
  
  // Виклик функції відображення дати
  displayDate();
  