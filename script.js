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

// 2. ดักฟังเหตุการณ์เมื่อ "ฟอร์ม" ถูก "ส่ง" (กดยืนยัน)
loginForm.addEventListener("submit", function(event) {
    // ป้องกันไม่ให้หน้าเว็บรีโหลด (พฤติกรรมปกติของฟอร์ม)
    event.preventDefault(); 
    
    // 3. ดึงค่าที่ผู้ใช้กรอก
    let enteredUsername = usernameInput.value;
    let enteredPassword = passwordInput.value;
    
    // 4. ตรวจสอบว่าถูกต้องหรือไม่
    if (enteredUsername === CORRECT_USERNAME && enteredPassword === CORRECT_PASSWORD) {
        // ถ้าถูกต้อง!
        console.log("ล็อกอินสำเร็จ! กำลังแสดงหน้าโหลด...");
        loginScreen.style.display = "none";     // 1. ซ่อนหน้าล็อกอิน
        loadingScreen.style.display = "flex";   // 2. แสดงหน้าโหลด (ใช้ 'flex' เพราะเราตั้งค่าไว้ใน CSS)

        // 3. ตั้งเวลาหน่วง (เช่น 2.5 วินาที) ก่อนไปหน้าต่อไป
        setTimeout(function() {

            // 4. สิ่งที่จะเกิดขึ้นหลังหน่วงเวลา
            console.log("หน่วงเวลาเสร็จแล้ว! แสดงเซอร์ไพรส์");
            loadingScreen.style.display = "none";     // 4a. ซ่อนหน้าโหลด
            surpriseScreen.style.display = "block"; // 4b. แสดงหน้าเซอร์ไพรส์!
            surpriseScreen.classList.add('animate-in'); // <<< เพิ่มอนิเมชั่น
            document.body.style.backgroundColor = "#fce4ec"; // 4c. เปลี่ยนสีพื้นหลัง

        }, 2500); // <-- ตัวเลขตรงนี้คือ มิลลิวินาที (2500 = 2.5 วินาที)
                  // คุณสามารถปรับเลขได้ตามชอบเลยครับ
        
    } else {
        // ถ้าผิด!
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

nextButton.addEventListener("click", function() {
    
    console.log("กำลังเปิดหน้าต่อไป...");
    card1.style.display = "none";
    card2.style.display = "block";
    card2.classList.add('animate-in'); // <<< เพิ่มอนิเมชั่น

    countdownContainer.style.display = "block"; // แสดงกล่องตัวนับ!
    countdownContainer.classList.add('animate-in'); // <<< เพิ่มอนิเมชั่น

    createHearts(); 
    
    startTimer(); // สั่งให้เริ่มนับเวลา!
});

// --- (เพิ่มใหม่) ฟังก์ชันสำหรับสร้างหัวใจ ---
function createHearts() {
    const numHearts = 15; // จำนวนหัวใจที่ต้องการให้ลอย
    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement("div"); // สร้าง div สำหรับหัวใจ
        heart.classList.add("heart"); // ใส่ class "heart" เพื่อให้มีสไตล์
        
        // กำหนดตำแหน่งเริ่มต้นแบบสุ่ม (มาจากด้านล่างของจอ)
        heart.style.left = Math.random() * 100 + "vw"; // ตำแหน่งแนวนอน 0-100%
        heart.style.bottom = "-10px"; // เริ่มต้นใต้จอเล็กน้อย
        
        // กำหนดขนาดสุ่ม
        const size = Math.random() * 20 + 20; // ขนาด 20px ถึง 40px
        heart.style.width = size + "px";
        heart.style.height = size + "px";

        // กำหนดความเร็ว/ระยะเวลาอนิเมชั่นสุ่มเล็กน้อย
        heart.style.animationDuration = Math.random() * 3 + 4 + "s"; // 4-7 วินาที
        heart.style.animationDelay = Math.random() * 0.5 + "s"; // หน่วงเวลาเล็กน้อย
        
        heartContainer.appendChild(heart); // เพิ่มหัวใจเข้าไปใน container
        
        // ลบหัวใจออกเมื่ออนิเมชั่นจบ เพื่อไม่ให้ค้างใน DOM
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }
}

// --- (เพิ่มใหม่) ส่วนที่ 3: ฟังก์ชันนับเวลา ---

function startTimer() {
    
    // *** ตั้งค่าวันครบรอบของคุณตรงนี้ ***
    // (ปี, เดือน-1, วัน, ชั่วโมง, นาที, วินาที)
    // "8-11-2020" คือ เดือน 11 (November) วันที่ 8 ปี 2020
    const anniversaryDate = new Date(2020, 10, 8, 0, 0, 0); // (เดือน 10 คือ พฤศจิกายน)

    // หา element ที่จะแสดงผล
    const timeDays = document.getElementById("time-days");
    const timeHours = document.getElementById("time-hours");
    const timeMinutes = document.getElementById("time-minutes");
    const timeSeconds = document.getElementById("time-seconds");

    // สร้างฟังก์ชันที่จะทำงานทุกวินาที
    function updateTimer() {
        const now = new Date();
        const diff = now - anniversaryDate; // ผลต่างเป็นมิลลิวินาที

        // คำนวณ
        let days = Math.floor(diff / (1000 * 60 * 60 * 24));
        let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((diff % (1000 * 60)) / 1000);

        // นำไปแสดงผล (เพิ่ม '0' ข้างหน้าถ้าเลขน้อยกว่า 10)
        timeDays.textContent = days;
        timeHours.textContent = hours < 10 ? '0' + hours : hours;
        timeMinutes.textContent = minutes < 10 ? '0' + minutes : minutes;
        timeSeconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    }

    // เรียกใช้ครั้งแรกทันที (จะได้ไม่เห็นเลข 0)
    updateTimer(); 
    
    // สั่งให้มันทำงานทุกๆ 1 วินาที (1000ms)
    setInterval(updateTimer, 1000);
}