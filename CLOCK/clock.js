function updateTime() {
    const now = new Date();
    const timezone = document.getElementById("timezone-select").value;
    const options = {
      timeZone: timezone,
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const time = now.toLocaleString("en-US", options);
    document.querySelector(".clock").textContent = time;
  }
  
  setInterval(updateTime, 1000);
  