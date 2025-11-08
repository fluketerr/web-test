// --- ส่วนที่ 1: ตรรกะการล็อกอิน ---

// ตั้งค่า Username และ Password ที่ถูกต้อง
// *** นี่คือส่วนสำคัญ! เปลี่ยนเป็นรหัสที่คุณต้องการ ***
const CORRECT_USERNAME = "fluke001"; // เช่น ชื่อเล่นแฟน
const CORRECT_PASSWORD = "1012"; // เช่น วันที่ 1 เดือน 1

// 1. หาองค์ประกอบที่ต้องใช้
const loginScreen = document.getElementById("login-screen");
const surpriseScreen = document.getElementById("surprise-screen");
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");
const loadingScreen = document.getElementById("loading-screen");
const confettiContainer = document.querySelector(".confetti-container");

// 2. ดักฟังเหตุการณ์เมื่อ "ฟอร์ม" ถูก "ส่ง" (กดยืนยัน)
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let enteredUsername = usernameInput.value;
    let enteredPassword = passwordInput.value;
    
    if (enteredUsername === CORRECT_USERNAME && enteredPassword === CORRECT_PASSWORD) {
        console.log("ล็อกอินสำเร็จ! กำลังแสดงหน้าโหลด...");
        loginScreen.style.display = "none";
        loadingScreen.style.display = "flex";

        setTimeout(function() {
            console.log("หน่วงเวลาเสร็จแล้ว! แสดงเซอร์ไพรส์");
            loadingScreen.style.display = "none";
            surpriseScreen.style.display = "block";
            surpriseScreen.classList.add('animate-in');
            createConfetti();
            document.body.style.backgroundColor = "#fce4ec";

        }, 2500); 
        
    } else {
        console.log("รหัสผ่านผิด!");
        errorMessage.textContent = "รหัสผ่านไม่ถูกน้า ลองอีกทีสิ!";
    }
});


// --- ส่วนที่ 2: ตรรกะปุ่มเซอร์ไพรส์ ---

const nextButton = document.getElementById("nextButton");
const card1 = document.getElementById("surprise-screen");
const card2 = document.getElementById("card-2-screen"); 
const heartContainer = document.querySelector(".heart-container"); 
const countdownContainer = document.getElementById("countdown-container");
const envelope = document.getElementById("envelope"); // <<< (เพิ่มใหม่)

nextButton.addEventListener("click", function() {
    
    console.log("กำลังเปิดหน้าต่อไป...");
    card1.style.display = "none";
    
    // (*** นี่คือจุดที่แก้ไข ***)
    // card2.style.display = "block"; // (ซ่อนไว้ก่อน)
    // card2.classList.add('animate-in');
    
    envelope.style.display = "block"; // <<< (เพิ่มใหม่) แสดงซองจดหมาย
    envelope.classList.add('animate-in'); // <<< (เพิ่มใหม่)
    
    countdownContainer.style.display = "block"; // แสดงกล่องตัวนับ!
    countdownContainer.classList.add('animate-in');

    createHearts(); 
    startTimer();
});

// --- (เพิ่มใหม่) ตรรกะการคลิกซองจดหมาย ---
envelope.addEventListener("click", function() {
    console.log("กำลังเปิดจดหมาย...");
    
    // 1. ซ่อนซองจดหมาย
    envelope.style.display = "none";
    
    // 2. แสดงการ์ดข้อความจริง
    card2.style.display = "block";
    card2.classList.add('animate-in'); // 3. เพิ่มอนิเมชั่น
});


// --- ฟังก์ชันสำหรับสร้างหัวใจ ---
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

// --- ส่วนที่ 3: ฟังก์ชันนับเวลา ---
function startTimer() {
    
    // *** ตั้งค่าวันครบรอบของคุณตรงนี้ ***
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
    setInterval(updateTimer, 1000);
}

// --- ฟังก์ชันสำหรับสร้างพลุกระดาษ (Confetti) ---
function createConfetti() {
    const numConfetti = 50;
    const colors = ['#d81b60', '#ff69b4', '#ff8dc7', '#ffb3d9'];

    for (let i = 0; i < numConfetti; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = -Math.random() * 50 + 'px';

        const size = Math.random() * 8 + 6;
        confetti.style.width = size + 'px';
        confetti.style.height = size + 'px';
        confetti.style.borderRadius = Math.random() < 0.5 ? '50%' : '2px';

        confetti.style.animationDelay = Math.random() * 1.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2.5) + 's';

        confettiContainer.appendChild(confetti);

        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
}