const floorArea = document.querySelector("#floor-area");
const estimate = document.getElementById("estimate");
const lowEstimate = document.querySelectorAll(".estimate-row strong")[0];
const highEstimate = document.querySelectorAll(".estimate-row strong")[1];

/*floorArea.addEventListener("input",() => {
    const area = Number(floorArea.value);

    if(area <=0){
        estimate.textContent = 0;
        return;
    }

    const value = area * 3000;
    if(value <=0){
        low.textContent = 0;
        high.textContent = 0;
        return;
    }
    estimate.textContent = "$" + value.toLocaleString();
    const low = value * 0.95;
    document.getElementById("low").textContent = "$" + low.toLocaleString();
    const high = value * 1.05;
    document.getElementById("high").textContent = "$" + high.toLocaleString();
});*/

const button = document.querySelector(".primary-btn");

button.addEventListener("click", () => {

    const area = Number(floorArea.value);
    const errorMessage = document.querySelector(".error-message");

    if (area <= 0) {
        errorMessage.textContent = "Please enter a valid floor area.";
        return;
    }

    errorMessage.textContent = "";

    const value = area * 3000;

    estimate.textContent = "$" + value.toLocaleString();
    lowEstimate.textContent = "$" + (value * 0.95).toLocaleString();
    highEstimate.textContent = "$" + (value * 1.05).toLocaleString();

});


//Reset button functionality
const resetButton = document.querySelector(".reset-btn");
   
resetButton.addEventListener("click", () => {

    // Clear floor area
    floorArea.value = "";

    // Reset all dropdowns
    document.querySelectorAll("select").forEach(select => {
        select.selectedIndex = 0;
    });
    document.querySelectorAll('.feature input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });

    // Reset estimates
    estimate.textContent = "$0";
    lowEstimate.textContent = "$0";
    highEstimate.textContent = "$0";
     
    document.querySelector(".error-message").textContent = "";

});


//Email modal functionality
const emailModal = document.querySelector("#email-modal");

document.querySelector(".email-btn").addEventListener("click", () => {
    emailModal.classList.add("open");
    emailModal.setAttribute("aria-hidden", "false");
});

document.querySelector(".modal-close").addEventListener("click", () => {
    emailModal.classList.remove("open");
    emailModal.setAttribute("aria-hidden", "true");
});

//Order estimate modal functionality
const reportBtn = document.querySelector(".secondary-btn");
const emailBtn = document.querySelector("#send-email-btn");
reportBtn.addEventListener("click", () => {
    alert("This is a front-end prototype. Report ordering would be connected to the backend in the production application.");
});
emailBtn.addEventListener("click", () => {
    alert("This is a front-end prototype. Report ordering would be connected to the backend in the production application.");
});