// หาสิ่งที่ต้อง "ฟัง" ก่อน ในที่นี้คือปุ่ม
// เราใช้ document.getElementById เพื่อหาปุ่มที่เราตั้งชื่อไว้ว่า "surpriseButton" ใน HTML
const surpriseBtn = document.getElementById("surpriseButton");

// เพิ่ม "Event Listener" (ตัวดักฟังเหตุการณ์)
// ให้มันรอ "คลิก" (click)
surpriseBtn.addEventListener("click", function() {
    
    // เมื่อมีการคลิก ให้ทำสิ่งนี้:
    // แสดงกล่องข้อความแจ้งเตือน (alert)
    alert("รักนะครับ! ❤️");
    
    // หรือคุณจะเปลี่ยนข้อความในหน้าเว็บก็ได้
    // เช่น:
    // const header = document.querySelector("h1");
    // header.textContent = "I Love You!";
});