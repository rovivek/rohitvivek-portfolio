// Tab Switching Logic
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) tablink.classList.remove("active-link");
    for (tabcontent of tabcontents) tabcontent.classList.remove("active-tab");
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Mobile Menu Logic
var sidemeu = document.getElementById("sidemenu");
function openmenu() { sidemeu.style.right = "0"; }
function closemenu() { sidemeu.style.right = "-250px"; }

// Form Submission to Google Sheets
const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL_HERE'; // Keep your original URL
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Success! Let's build together.";
        setTimeout(() => { msg.innerHTML = ""; }, 5000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});
