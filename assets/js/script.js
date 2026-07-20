// ==========================
// FAQ Accordion
// ==========================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        item.classList.toggle("active");

    });

    

});

// ==========================
// Forgot Password
// ==========================

const forgotForm = document.getElementById("forgotForm");

if (forgotForm) {

    forgotForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("email").value;

        if (email === "") {

            alert("Silakan masukkan email.");

            return;

        }

        alert("Link reset password berhasil dikirim.");

        forgotForm.reset();

    });

}

// ==========================
// Show Password
// ==========================

const toggles = document.querySelectorAll(".toggle-password");

toggles.forEach(icon=>{

icon.addEventListener("click",()=>{

const input=icon.previousElementSibling;

if(input.type==="password"){

input.type="text";

icon.classList.remove("bi-eye-slash");

icon.classList.add("bi-eye");

}else{

input.type="password";

icon.classList.remove("bi-eye");

icon.classList.add("bi-eye-slash");

}

});

});