function checkPassword() {
    const name = document.getElementById("name").value.trim();
    const input = document.getElementById("password").value;
    const correctPassword = "Excelsior";

    if (input !== "") {
        if (input === correctPassword) {
            document.cookie = "usernameMJ=" + encodeURIComponent(name)  + "; path=/; max-age=86400";
            if (name.toLowerCase().includes("maría josé")) {
                window.location.href = 'quiz.html?name=' + encodeURIComponent(name);
            } else {
                window.location.href = 'support.html?name=' + encodeURIComponent(name);
            }
        } else {
            alert("Try Again");
        }
    } else {
        alert("Please enter the password.");
    }
}
