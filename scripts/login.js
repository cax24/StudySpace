
const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    
    
    //stops form from refreshing the page
    event.preventDefault();

    const userEmail = document.getElementById("userEmail").value;

    if(userEmail.trim()!== ""){

        //redirect to homepage 
        window.location.href= "public/homepage.html";
    }
});

