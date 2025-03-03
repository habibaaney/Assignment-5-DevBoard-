
// todays date card
 function formatDate() {
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            const date = new Date();
            const dayOfWeek = days[date.getDay()];
            const day = date.getDate();  
            const month = months[date.getMonth()];  
            const year = date.getFullYear(); 

            return `${dayOfWeek}, ${day} ${month} ${year}`;
        }

        document.getElementById("todays-date").innerText = formatDate();

  // task card "Completed" buttons
  const taskButtons = document.querySelectorAll(".card .btn.btn-primary");
  if (taskButtons.length > 0) {
    let completedCount = 0;
    const totalTasks = taskButtons.length;

    taskButtons.forEach((button) => {
      button.addEventListener("click", function () {
        
        if (confirm("Board updated successfully.")) {
          button.disabled = true;

          
          const assignedElem = document.getElementById("assigned-task-number");
          if (assignedElem) {
            let assignedCount = parseInt(assignedElem.textContent) || 0;
           
            if (assignedCount > 0) {
              assignedCount = assignedCount - 1;
              } else {
                  assignedCount = 0;
              }
            assignedElem.textContent = assignedCount;
          }

          
          const completedElem = document.getElementById(
            "completed-task-number"
          );
          if (completedElem) {
            let compCount = parseInt(completedElem.textContent) || 0;
            compCount++;
            completedElem.textContent = compCount;
          }

          const card = button.closest(".card");
          let cardTitle = "";
          if (card) {
            const titleElem = card.querySelector(".card-title");
            if (titleElem) {
              cardTitle = titleElem.textContent;
            }
          }

          const now = new Date();
          let hours = now.getHours();
          let minutes = now.getMinutes();
          let seconds = now.getSeconds();
          const ampm = hours >= 12 ? "PM" : "AM";
          hours = hours % 12;
          hours = hours ? hours : 12; 
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
          const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

          // activity log message
          const p = document.createElement("p");
          p.innerHTML = `You have Complete <span id="activity-log-text">${cardTitle}</span> at ${timeString}`;

          const activityLog = document.getElementById("activity-log");
          if (activityLog) {
            activityLog.appendChild(p);
          }

          completedCount++;

          if (completedCount === totalTasks) {
            alert("Congratulations!You have completed all the current task.");
          }
        }
      });
    });
  }

  
  //  Clear History button
  const clearHistoryBtn = document.querySelector(
    ".container_2 button.btn.btn-primary"
  );
  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener("click", function () {
      const activityLog = document.getElementById("activity-log");
      if (activityLog) {
        activityLog.innerHTML = "";
      }
    });
  }

//  background color change button

  const bgColorBtn = document.getElementById("bg-color-change");
  if (bgColorBtn) {
    bgColorBtn.addEventListener("click", function ()
     {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      document.body.style.backgroundColor = randomColor;
    });
  }

