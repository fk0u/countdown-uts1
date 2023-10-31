// Set the target date and time for the countdown
const targetDate = new Date("November 27, 2023 00:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time difference between the current date/time and the target date/time
  const timeDifference = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the calculated time in the HTML elements
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // Check if the countdown has expired
  if (timeDifference < 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").innerHTML = "Ujian Telah Berakhir";
  }
}, 1000);

    // Fungsi untuk menampilkan popup
    function showPopup() {
      var currentTime = new Date();
      var hours = currentTime.getHours();

      // Periksa apakah saat ini antara jam 10:00 pagi dan 12:00 siang
      if (hours >= 10 && hours < 12) {
        var popup = document.getElementById("popup");
        var popupContent = document.getElementById("popup-content");
        
        // Tampilkan popup
        popup.style.display = "block";
        
        // Tambahkan konten popup
        popupContent.innerHTML = "<h2>Ingin Mengerjakan Ulangan?</h2><button onclick='redirectToURL()'>Ya</button><button onclick='closePopup()'>Tidak</button>";
      }
    }

    // Fungsi untuk mengarahkan ke URL yang ditentukan
    function redirectToURL() {
      window.location.href = "https://aat.smkn7-smr.sch.id/";
    }

    // Fungsi untuk menutup popup
    function closePopup() {
      var popup = document.getElementById("popup");
      popup.style.display = "none";
    }

    // Panggil fungsi showPopup ketika halaman dimuat
    window.onload = showPopup;
