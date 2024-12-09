function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
  
    // Додавання нуля перед однозначними числами
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    // Відображення часу на сторінці
    var clockDiv = document.getElementById('clock');
    clockDiv.innerHTML = hours + ":" + minutes + ":" + seconds;
  }
  
  // Оновлення годинника кожну секунду
  setInterval(displayTime, 1000);
  