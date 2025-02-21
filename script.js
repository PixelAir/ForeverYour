const correctPassword = "31 May";

// Password Verification function checkPassword() { let input = document.getElementById("passwordInput").value; if (input === correctPassword) { document.getElementById("passwordScreen").style.display = "none"; document.getElementById("video1Container").style.display = "block";

// Play First Video
    let video1 = document.getElementById("video1");
    video1.play();
    video1.onended = () => {
        document.getElementById("video1Container").style.display = "none";
        document.getElementById("questionContainer").style.display = "block";
    };
} else {
    document.getElementById("errorMessage").innerText = "Incorrect Password!";
}

}

// Question Flow Logic function showAreYouSure() { document.getElementById("questionContainer").style.display = "none"; document.getElementById("areYouSureContainer").style.display = "block"; }

function showThinkAgain() { document.getElementById("questionContainer").style.display = "none"; document.getElementById("thinkAgainContainer").style.display = "block"; }

function showBhaoKha() { document.getElementById("thinkAgainContainer").style.display = "none"; document.getElementById("bhaoKhaContainer").style.display = "block"; }

function showFinalQuestion() { document.getElementById("areYouSureContainer").style.display = "none"; document.getElementById("bhaoKhaContainer").style.display = "none"; document.getElementById("thinkAgainContainer").style.display = "none"; document.getElementById("finalQuestionContainer").style.display = "block"; }

function showQuestionScreen() { document.getElementById("areYouSureContainer").style.display = "none"; document.getElementById("thinkAgainContainer").style.display = "none"; document.getElementById("bhaoKhaContainer").style.display = "none"; document.getElementById("questionContainer").style.display = "block"; }

function showLoveMessage() { document.getElementById("finalQuestionContainer").style.display = "none"; document.getElementById("loveMessageContainer").style.display = "block";

// Start Second Video after 5 seconds
setTimeout(() => {
    document.getElementById("loveMessageContainer").style.display = "none";
    document.getElementById("video2Container").style.display = "block";
    
    let video2 = document.getElementById("video2");  
    video2.play();
}, 5000);

}

