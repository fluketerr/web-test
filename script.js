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
        console.log("ล็อกอินสำเร็จ!");
        loginScreen.style.display = "none";     // ซ่อนหน้าล็อกอิน
        surpriseScreen.style.display = "block"; // แสดงหน้าเซอร์ไพรส์!
        
        // --- เพิ่มบรรทัดนี้ครับ! ---
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
const card2 = document.getElementById("card-2-screen"); 
const heartContainer = document.querySelector(".heart-container"); // เพิ่มบรรทัดนี้

nextButton.addEventListener("click", function() {
    
    console.log("กำลังเปิดหน้าต่อไป...");
    card1.style.display = "none";
    card2.style.display = "block";
    
    // --- เพิ่มบรรทัดนี้ เพื่อสั่งให้หัวใจปรากฏ ---
    createHearts(); 
    
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