// --- ส่วนที่ 1: ตรรกะการล็อกอิน ---

// ตั้งค่า Username และ Password ที่ถูกต้อง
const CORRECT_USERNAME = "fluke001";
const CORRECT_PASSWORD = "1012";

// 1. หาองค์ประกอบที่ต้องใช้
const loginScreen = document.getElementById("login-screen");
const surpriseScreen = document.getElementById("surprise-screen");
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");

// 2. ดักฟังเหตุการณ์เมื่อ "ฟอร์ม" ถูก "ส่ง"
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let enteredUsername = usernameInput.value;
    let enteredPassword = passwordInput.value;
    
    if (enteredUsername === CORRECT_USERNAME && enteredPassword === CORRECT_PASSWORD) {
        // ถ้าถูกต้อง!
        console.log("ล็อกอินสำเร็จ!");
        loginScreen.style.display = "none";
        surpriseScreen.style.display = "block"; // แสดงหน้าเซอร์ไพรส์!
        document.body.style.backgroundColor = "#fce4ec"; // เปลี่ยนพื้นหลังกลับเป็นสีชมพู!
        
    } else {
        // ถ้าผิด!
        console.log("รหัสผ่านผิด!");
        errorMessage.textContent = "รหัสผ่านไม่ถูกน้า ลองอีกทีสิ!";
    }
});


// --- ส่วนที่ 2: ตรรกะปุ่มเซอร์ไพรส์ ---

const nextButton = document.getElementById("nextButton");
const card1 = document.getElementById("surprise-screen");
const envelopeContainer = document.getElementById("envelope-container");
const heartContainer = document.querySelector(".heart-container"); 
const countdownContainer = document.getElementById("countdown-container");

nextButton.addEventListener("click", function() {
    card1.style.display = "none";
    envelopeContainer.style.display = "flex";
    countdownContainer.style.display = "block"; // <-- เหลือไว้แค่อันเดียว

    createHearts(); 
    startTimer(); // สั่งให้เริ่มนับเวลา!
});

// --- (เพิ่มใหม่) ฟังก์ชันสำหรับสร้างหัวใจ ---
function createHearts() {
    const numHearts = 15;
    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.bottom = "-10px";
        
        const size = Math.random() * 20 + 20;
        heart.style.width = size + "px";
        heart.style.height = size + "px";

        heart.style.animationDuration = Math.random() * 3 + 4 + "s";
        heart.style.animationDelay = Math.random() * 0.5 + "s";
        
        heartContainer.appendChild(heart);
        
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}

// --- (เพิ่มใหม่) ส่วนที่ 3: ฟังก์ชันนับเวลา ---

let timerInterval = null; // *** (เพิ่ม) สร้างตัวแปรไว้กันบั๊ก

function startTimer() {
    
    // *** (เพิ่ม) เช็คว่า timer ยังไม่ถูกรัน ***
    if (timerInterval) return; 

    // "8-11-2020" คือ เดือน 11 (November) วันที่ 8 ปี 2020
    const anniversaryDate = new Date(2020, 10, 8, 0, 0, 0); // (เดือน 10 คือ พฤศจิกายน)

    const timeDays = document.getElementById("time-days");
    const timeHours = document.getElementById("time-hours");
    const timeMinutes = document.getElementById("time-minutes");
    const timeSeconds = document.getElementById("time-seconds");

    function updateTimer() {
        const now = new Date();
        const diff = now - anniversaryDate;

        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);

        timeDays.textContent = days;
        timeHours.textContent = hours < 10 ? '0' + hours : hours;
        timeMinutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        timeSeconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    updateTimer(); 
    
    // *** (แก้ไข) เก็บ interval ไว้ในตัวแปร ***
    timerInterval = setInterval(updateTimer, 1000);
}

// --- (เพิ่มใหม่) ส่วนที่ 5: ตรรกะการเปิดซองจดหมาย ---

const envelope = document.getElementById("envelope-container");

envelope.addEventListener("click", function() {
    if (!envelope.classList.contains("open")) {
        console.log("กำลังเปิดซองจดหมาย...");
        envelope.classList.add("open");
    }
});