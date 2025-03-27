// Add your code here
/* document.addEventListener("DOMContentLoaded", () => {
    submitData("my user ", "myuser@example.com");
}); */
function submitData(name, email) {
    const formData = {
        name: name,
        email: email
    };

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        const body = document.querySelector("body");
        const p = document.createElement("p");
        p.textContent = `New User ID: ${data.id}`;
        body.appendChild(p);
    })
    .catch(error => {
        // error message
        const body = document.querySelector("body");
        const errorMessage = document.createElement("p");
        errorMessage.textContent = `Error: ${error.message}`;
        body.appendChild(errorMessage);
    });
}
