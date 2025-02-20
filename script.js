function checkPassword() {
    let password = document.getElementById("passwordInput").value;
    if (password === "31 May") {
        document.getElementById("passwordScreen").classList.add("hidden");
        document.getElementById("videoContainer").classList.remove("hidden");
        document.getElementById("firstVideo").play();
        setTimeout(() => {
            document.getElementById("videoContainer").classList.add("hidden");
            document.getElementById("questionScreen").classList.remove("hidden");
        }, 24000);
    } else {
        alert("Incorrect password!");
    }
}

function askSure() {
    document.getElementById("questionScreen").classList.add("hidden");
    document.getElementById("responseScreen").classList.remove("hidden");
    document.getElementById("responseText").innerText = "Are you sure? Think again";
    document.getElementById("stillNo").classList.remove("hidden");
    document.getElementById("goBack").classList.remove("hidden");
}

function resetToQuestion() {
    document.getElementById("responseScreen").classList.add("hidden");
    document.getElementById("questionScreen").classList.remove("hidden");
}

function askAgain() {
    document.getElementById("questionScreen").classList.add("hidden");
    document.getElementById("responseScreen").classList.remove("hidden");
    document.getElementById("responseText").innerText = "Itni jaldi kya h, aaram se socho";
    document.getElementById("stillNo").classList.remove("hidden");
    document.getElementById("goBack").classList.remove("hidden");
}

function askAgainMore() {
    document.getElementById("responseText").innerText = "Itna kyu bhao kha rhe ho🙃. Haa boldo na 🫠";
    document.getElementById("stillNo").classList.add("hidden");
    document.getElementById("okBtn").classList.remove("hidden");
}

function finalQuestion() {
    document.getElementById("responseScreen").classList.add("hidden");
    document.getElementById("finalScreen").classList.remove("hidden");
}

function moveNoButton() {
    let btn = document.getElementById("finalNo");
    btn.style.position = "absolute";
    btn.style.top = Math.random() * window.innerHeight + "px";
    btn.style.left = Math.random() * window.innerWidth + "px";
}

function loveMessage() {
    document.getElementById("finalScreen").classList.add("hidden");
    document.getElementById("loveScreen").classList.remove("hidden");
    setTimeout(() => {
        document.getElementById("loveScreen").classList.add("hidden");
        document.getElementById("secondVideoContainer").classList.remove("hidden");
        document.getElementById("secondVideo").play();
    }, 5000);
}
