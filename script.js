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


// --- ส่วนที่ 2: ตรรกะปุ่มเซอร์ไพรส์ (เขียนใหม่ทั้งหมด) ---
// (โค้ดนี้จะทำงานหลังจากล็อกอินสำเร็จ)

// 1. หาองค์ประกอบที่ต้องใช้
const nextButton = document.getElementById("nextButton"); // ปุ่ม "อ่านต่อ"
const card1 = document.getElementById("surprise-screen"); // การ์ดใบแรก
const card2 = document.getElementById("card-2-screen");   // การ์ดใบที่สอง

// 2. ดักฟังเหตุการณ์เมื่อคลิกปุ่ม "อ่านต่อ"
nextButton.addEventListener("click", function() {
    
    // 3. สลับการ์ด
    console.log("กำลังเปิดหน้าต่อไป...");
    card1.style.display = "none";  // ซ่อนการ์ดใบแรก
    card2.style.display = "block"; // แสดงการ์ดใบที่สอง!
    
    // ไม่ต้องมี alert แล้ว
});