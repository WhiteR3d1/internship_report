// ============================================================
// WEEK DATA — แก้ไข/เพิ่มสัปดาห์ของคุณตรงนี้ได้เลย
// แต่ละ object คือหนึ่งสัปดาห์ — แก้ dates / title ของสัปดาห์
// และแก้ date / detail / images ของแต่ละวันใน days ได้ตามจริง
// images: ใส่ path รูปภาพได้สูงสุด 3 รูปต่อวัน เช่น ["images/week1-day1-a.jpg", "images/week1-day1-b.jpg"]
// จำนวนรูปเท่าไหร่ ระบบจะแบ่งพื้นที่ให้เท่า ๆ กันอัตโนมัติ (1 รูป = เต็มแถว, 2 รูป = ครึ่งแถว, 3 รูป = แบ่งสาม)
// ถ้ายังไม่มีรูปให้เว้นเป็น []
// ============================================================
const weeks = [
  {
    dates: "[20 เมษายน] – [24 เมษายน]",
    title: "สัปดาห์ที่ 1",
    days: [
      { date: "[20 เมษายน]", detail: "[ยกเครื่อง Server ทั้ง 4 เครื่องเเล้วลองเเก้ไขปัญหาเรื่องที่เครื่องบูทไม่ได้เเละลง CentOS 8]", images: ["images/weeks/20260420_1.jpg","images/weeks/20260420_2.jpg","images/weeks/20260420_3.jpg"] },
      { date: "[21 เมษายน]", detail: "[เปลี่ยน HDD ของ Server เเละลง Ubuntu Server 24 เเละ NextCloud เพื่อทำเป็น Server ไว้เก็บรูปกิจกรรมต่างๆ]", images: ["images/weeks/20260421_1.jpg","images/weeks/20260421_2.jpg"] },
      { date: "[22 เมษายน]", detail: "[เเก้ Error เเลพทำการเพิ่ม User ให้กับเจ้าหน้าที่เก็บภาพถ่าย]", images: ["images/weeks/20260422_1.jpg"] },
      { date: "[23 เมษายน]", detail: "[ลง Windows เเละกำหนด URL ให้กับ Server]", images: ["images/weeks/20260423_1.jpg","images/weeks/20260423_2.jpg"] },
      { date: "[24 เมษายน]", detail: "[ทำ Server อีกตัวหนึ่งโดย ลง Nginx, PHP เเละ PHPMyAdmin ]", images: ["images/weeks/20260424_1.jpg"] },
    ],
  },
  {
    dates: "[27 เมษายน] – [1 พฤษภาคม]",
    title: "สัปดาห์ที่ 2",
    days: [
      { date: "[27 เมษายน]", detail: "[ออกไปถอดทีวีออกเพราะไม่ได้ใช้เเล้วเเละกลับมาลง Ubuntu Server 24 ในเครื่อง Server เพื่อที่จะเอาไว้รันเว็บจาก WordPress]", images: ["images/weeks/20260427_1.jpg","images/weeks/20260427_2.jpg","images/weeks/20260427_3.jpg"] },
      { date: "[28 เมษายน]", detail: "[ยก switch hub 2 ตัว เเละทำความสะอาด เก็บของ ห้องศูนย์ดิจิทัลเเละสื่อสารองค์กร]", images: ["images/weeks/20260428_1.jpg"] },
      { date: "[29 เมษายน]", detail: "[วัดขนาดห้อง เพื่อที่จะเอาเดินท่อสายไฟใหม่ เเละวัดขนาด ระยะห่าง เพื่อจะติดตั้งทีวีที่ถอดมา เอาไว้ดูกล้องวงจรปิด]", images: ["images/weeks/20260429_1.jpg","images/weeks/20260429_2.jpg"] },
      { date: "[30 เมษายน]", detail: "[การรื้อท่อเดินสายไฟเก่าออกพร้อมทั้งสายที่มาจากห้อง Server เเละทำการเดินท่อสายไฟใหญ่กว่าเดิมใหม่]", images: ["images/weeks/20260430_3.jpg","images/weeks/20260430_1.jpg","images/weeks/20260430_2.jpg"] },
      { date: "[1 พฤษภาคม]", detail: "[ติดตั้งจอทีวีเเละจัดสายห้องคอมพิวเตอร์ 1 ]", images: ["images/weeks/20260501_1.jpg","images/weeks/20260501_2.jpg"] },
    ],
  },
  {
    dates: "[4 พฤษภาคม] – [8 พฤษภาคม]",
    title: "สัปดาห์ที่ 3",
    days: [
      { date: "[4 พฤษภาคม]", holiday: "[วันหยุดเนื่องจาก วันฉัตรมงคล]" },
      { date: "[5 พฤษภาคม]", detail: "[ทำการซ้อมคอมพิวเตอร์เพื่อให้พร้อมลง Windows]", images: ["images/weeks/20260505_1.jpg","images/weeks/20260505_2.jpg","images/weeks/20260505_3.jpg"] },
      { date: "[6 พฤษภาคม]", holiday: "[วันลาเนื่องจาก ไม่สบาย]"},
      { date: "[7 พฤษภาคม]", detail: "[เเก้ไขเครื่องที่ไม่สามารถเปิดได้เเละทยอยลง Windows ในเครื่องที่พร้อมลง]", images: ["images/weeks/20260507_1.jpg"] },
      { date: "[8 พฤษภาคม]", detail: "[ทยอยลง Windows ในเครื่องที่พร้อมลงต่อไปเเละทำ inflow graphic การใช้งานระบบเก็บรูปภาพกิจกรรม]", images: ["images/weeks/20260508_1.jpg","images/weeks/20260508_2.jpg"] },
    ],
  },
  {
    dates: "[11 พฤษภาคม] – [15 พฤษภาคม]",
    title: "สัปดาห์ที่ 4",
    days: [
      { date: "[11 พฤษภาคม]", detail: "[ทยอยลง Windows ต่อเเละตอนบ่ายไปช่วยเช็คชื่อนักศึกษาที่เข้าถ่ายรูปติดบัตรนักศึกษา]", images: ["images/weeks/20260511_1.jpg","images/weeks/20260511_2.JPG"] },
      { date: "[12 พฤษภาคม]", detail: "[ทยอยลง Windows ต่อเเละเเก้ไขปัญหาที่เกิดขึ้นกับเครื่องคอมพิวเตอร์]", images: ["images/weeks/20260512_1.jpg","images/weeks/20260512_2.jpg","images/weeks/20260512_3.jpg"] },
      { date: "[13 พฤษภาคม]", holiday: "วันพืชมงคล" },
      { date: "[14 พฤษภาคม]", detail: "[เเก้ไขปัญหาที่เกิดขึ้นกับเครื่องคอมพิวเตอร์เเละลง Windows จนเสร็จ]", images: ["images/weeks/20260514_1.jpg"] },
      { date: "[15 พฤษภาคม]", detail: "[ขึ้นนั่งร้านเพื่อทำความสะอาดตู้แร็คเเละเปลี่ยน switch hub poe 8 port เป็น 24 port กับจัดสายให้สวยงาม]", images: ["images/weeks/20260515_1.jpg","images/weeks/20260515_2.jpg"] },
    ],
  },
  {
    dates: "[18 พฤษภาคม] – [22 พฤษภาคม]",
    title: "สัปดาห์ที่ 5",
    days: [
      { date: "[18 พฤษภาคม]", detail: "[ยก Server มาเปลี่ยน HDD เเละทำการลง Ubuntu Server เพื่อเอาไว้เก็บเว็บถวายพระพรออนไลน์]", images: ["images/weeks/20260518_1.jpg"] },
      { date: "[19 พฤษภาคม]", detail: "[สร้างเว็บถวายพระพรออนไลน์]", images: ["images/weeks/20260519_1.jpg"] },
      { date: "[20 พฤษภาคม]", detail: "[ทำการเซ็ด ip จริงกับกำหนด URL ให้กับ Server ตัวนี้เเละเอาเข้าไปติดตั้งในห้อง Server]", images: ["images/weeks/20260520_1.jpg","images/weeks/20260520_2.jpg"] },
      { date: "[21 พฤษภาคม]", detail: "[เช็คคุณภาพ SSD เเล้วลง Windows เเละ ลง Windows ให้กับเครื่อง All in one]", images: ["images/weeks/20260521_1.jpg","images/weeks/20260521_2.jpg","images/weeks/20260521_3.jpg"] },
      { date: "[22 พฤษภาคม]", detail: "[ทำรูปที่จะเอาไปใช้ในเว็บถวายพระพรออนไลน์]", images: ["images/weeks/20260522_1.jpg","images/weeks/20260522_2.jpg"] },
    ],
  },
  {
    dates: "[25 พฤษภาคม] – [29 พฤษภาคม]",
    title: "สัปดาห์ที่ 6",
    days: [
      { date: "[25 พฤษภาคม]", detail: "[เข้าร่วมพิธีถวายพระพรเนื่องในวันเฉลิมพระชนมพรรษาสมเด็จพระนางเจ้าฯ พระบรมราชินี เเละสร้าง Databases ใน Server]", images: ["images/weeks/20260525_1.JPG","images/weeks/20260525_2.jpg"] },
      { date: "[26 พฤษภาคม]", detail: "[สร้างเว็บถวายพระพรออนไลน์เเละทำรูปที่จะเอาไปใช้ในเว็บถวายพระพรออนไลน์]", images: ["images/weeks/20260526_2.jpg","images/weeks/20260526_1.jpg"] },
      { date: "[27 พฤษภาคม]", detail: "[เข้าสังเกตการสอนในคาบเช้าเเละตอนบ่ายได้ไปเป็นผู้สอนนักศึกษา ปวช.2]", images: ["images/weeks/20260527_1.jpg","images/weeks/20260527_2.jpg"] },
      { date: "[28 พฤษภาคม]", detail: "[ช่วงเข้าได้ไปเป็นผู้สอนนักศึกษา ปวช.1 เเละช่วงบ่ายได้ไปเป็นผู้สอนนักศึกษา ปวช.2]", images: ["images/weeks/20260528_2.jpg","images/weeks/20260528_1.jpg"] },
      { date: "[29 พฤษภาคม]", detail: "[ช่วงเข้าได้ไปเป็นผู้สอนนักศึกษา ปวช.2 เเละช่วงบ่ายได้ไปเป็นผู้สอนนักศึกษา ปวช.1]", images: ["images/weeks/20260529_1.jpg","images/weeks/20260529_2.jpg"] },
    ],
  },
  {
    dates: "[1 มิถุนายม] – [5 มิถุนายม]",
    title: "สัปดาห์ที่ 7",
    days: [
      { date: "[1 มิถุนายม]", holiday: "วันหยุดชดเชยวันวิสาขบูชา" },
      { date: "[2 มิถุนายม]", detail: "[เข้าร่วมการอบรม Link Certified Network Cabling for Engineering 2026 ยกระดับสกิลสายสัญญาณและเครือข่าย]", images: ["images/weeks/20260602_1.jpg","images/weeks/20260602_2.jpg"] },
      { date: "[3 มิถุนายม]", holiday: "วันเฉลิมพระชนมพรรษาสมเด็จพระนางเจ้าฯ พระบรมราชินี" },
      { date: "[4 มิถุนายม]", detail: "[เเก้ไขเว็บไซต์ให้ใช้งานกับมือถือได้]", images: ["images/weeks/20260604_1.jpg","images/weeks/20260604_2.jpg"] },
      { date: "[5 มิถุนายม]", detail: "[ขึ้นไปเช็ค Wifi ให้กับแผนกบัญชีเเละลงมาจัดห้องไปอบรม]", images: ["images/weeks/20260605_1.jpg"] },
    ],
  },
  {
    dates: "[8 มิถุนายม] – [12 มิถุนายม]",
    title: "สัปดาห์ที่ 8",
    days: [
      { date: "[8 มิถุนายม]", detail: "[ขึ้นไปติดตั้ง Access Point ให้กับตึกพาณิชย์ชั้น 4]", images: ["images/weeks/20260608_1.jpg","images/weeks/20260608_2.jpg"] },
      { date: "[9 มิถุนายม]", detail: "[ขึ้นตึกอิเล็กทรอนิกส์เพื่อเเก้ไขปัญหาอินเตอร์เน็ตโดยการเป็น SFP Module เเละ ทำการความสะอาดหัวเครื่องปริ้น HP]", images: ["images/weeks/20260609_1.jpg","images/weeks/20260609_2.jpg"] },
      { date: "[10 มิถุนายม]", detail: "[ช่วงเข้าทำการตรวจเครื่องปริ้น canon เเละช่วงบ่ายเข้าไปเซ็ตระบบ Meeting Zoom ให้กับผู้บริหาร]", images: ["images/weeks/20260610_1.jpg"] },
      { date: "[11 มิถุนายม]", detail: "[ช่วงเช้าได้เข้าไปเป็นผู้สอนนักศึกษา ปวช.1 เเละช่วงบ่ายทำการซ้อมเครื่องปริ้น canon]", images: ["images/weeks/20260611_1.jpg"] },
      { date: "[12 มิถุนายม]", detail: "[ช่วงเช้าได้เข้าไปเป็นผู้สอนนักศึกษา ปวช.1 เเละช่วงบ่ายได้ลองการสไปลซ์สายไฟเบอร์ออปติก กับปอกสายไฟเบอร์ออปติก]", images: ["images/weeks/20260612_1.jpg"] },
    ],
  },
  {
    dates: "[15 มิถุนายม] – [16 มิถุนายม]",
    title: "สัปดาห์ที่ 9",
    days: [
      { date: "[15 มิถุนายม]", detail: "[สังเกตการสอนในช่วงเช้าเเละเข้าไปดูการก่อสร้างห้อง imac ]", images: ["images/weeks/20260615_1.jpg","images/weeks/20260615_2.jpg","images/weeks/20260615_3.jpg"] },
      { date: "[16 มิถุนายม]", detail: "[ช่วงเข้าไปดูการก่อสร้างห้อง imac กับการ Set Up imac เเละช่วงบ่ายพยายามสไปลซ์ให้ค่าความสูญเสียสัญญาณโดยประมาณได้ 0.00 dB]", images: ["images/weeks/20260616_1.jpg"] },
    ],
  },
];

// ============================================================
// RENDER LOGBOOK — การ์ดสัปดาห์แบบ 3 ต่อแถว คลิกเพื่อไปหน้ารายละเอียด
// ============================================================
function renderLogbook() {
  const container = document.getElementById("logbookGrid");
  if (!container) return;

  container.innerHTML = weeks
    .map((week, i) => {
      const weekNo = String(i + 1).padStart(2, "0");
      return `
      <a class="week-card" href="week.html?w=${i + 1}">
        <span class="week-stamp">
          <span class="w-no">${weekNo}</span>
          <span class="w-of">WEEK</span>
        </span>
        <span class="week-title-group">
          <p class="week-title">${week.title}</p>
          <span class="week-dates">${week.dates}</span>
        </span>
        <span class="week-card-arrow">→</span>
      </a>`;
    })
    .join("");
}

// ============================================================
// RENDER WEEK DETAIL PAGE (week.html?w=N)
// ============================================================
function renderWeekDetail() {
  const container = document.getElementById("weekDetail");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const weekNo = parseInt(params.get("w"), 10);
  const week = weeks[weekNo - 1];

  if (!week) {
    container.innerHTML = `<p>ไม่พบข้อมูลสัปดาห์นี้ — <a href="index.html#logbook">กลับไปหน้าบันทึกรายสัปดาห์</a></p>`;
    return;
  }

  document.title = `${week.title} — สมุดบันทึกฝึกงาน`;

  const daysHtml = week.days
    .map((day, i) => {
      if (day.holiday) {
        return `
        <article class="day-card day-off">
          <div class="day-card-head">
            <span class="day-number">Day ${i + 1}</span>
            <span class="day-date">${day.date}</span>
          </div>
          <div class="day-body">
            <span class="day-off-badge">วันหยุด — ${day.holiday}</span>
          </div>
        </article>`;
      }

      const images = day.images && day.images.length > 0 ? day.images : [];
      const imagesHtml = images.length > 0
        ? images
            .map((src, imgIdx) => `<div class="day-image"><img src="${src}" alt="รูปภาพวันที่ ${i + 1} ภาพที่ ${imgIdx + 1}"></div>`)
            .join("")
        : `<div class="day-image">[แนบรูปภาพวันที่ ${i + 1}]</div>`;
      return `
      <article class="day-card">
        <div class="day-card-head">
          <span class="day-number">Day ${i + 1}</span>
          <span class="day-date">${day.date}</span>
        </div>
        <div class="day-body">
          <h4>รายละเอียดงาน</h4>
          <p>${day.detail}</p>
          <div class="day-images">${imagesHtml}</div>
        </div>
      </article>`;
    })
    .join("");

  container.innerHTML = `
    <div class="week-detail-head">
      <div class="week-detail-eyebrow">
        <span class="week-stamp">
          <span class="w-no">${String(weekNo).padStart(2, "0")}</span>
          <span class="w-of">WEEK</span>
        </span>
      </div>
      <h1 class="week-detail-title">${week.title}</h1>
      <span class="week-detail-dates">${week.dates}</span>
    </div>
    <div class="day-list">${daysHtml}</div>
  `;
}

// ============================================================
// MOBILE MENU TOGGLE
// ============================================================
function setupMenuToggle() {
  const btn = document.getElementById("menuToggle");
  const nav = document.getElementById("navlinks");
  if (!btn || !nav) return;
  btn.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("open"))
  );
}

// ============================================================
// ACTIVE NAV LINK ON SCROLL
// ============================================================
function setupScrollSpy() {
  const sections = document.querySelectorAll("main > section[id]");
  const navlinks = document.querySelectorAll(".navlink");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navlinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

// ============================================================
// INIT
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  renderLogbook();
  renderWeekDetail();
  setupMenuToggle();
  setupScrollSpy();
});
