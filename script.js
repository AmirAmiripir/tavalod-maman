const intro = document.getElementById("intro");
const main = document.getElementById("main");
const start = document.getElementById("start");
const music = document.getElementById("music");
const play = document.getElementById("play");
const letter = document.getElementById("letter");

const text = `مامان جان 🤍

تولدت مبارک به قوی‌ترین و فداکارترین زن زندگی من

تو فقط مادر من نیستی
تو همیشه یکی از بزرگ‌ترین تکیه‌گاه‌های زندگی من بودی

هرچی از مهربونی و فداکاری‌هات بگم باز هم کمه
تو خیلی وقت‌ها خستگی‌هات رو پنهون کردی
که ما آرامش داشته باشیم
خیلی وقت‌ها از خودت گذشتی
تا حال ما خوب باشه

چیزی که بیشتر از همه دوست دارم
فکرهای قشنگ و دل پاک توئه
همیشه دلت برای خوب شدن حال آدم‌ها می‌خواد
و همیشه سعی کردی با محبت و صبوری
زندگی رو برای اطرافیانت قشنگ‌تر کنی

مامان
اگه امروز چیزی از خوب بودن و انسانیت می‌فهمم
بخش بزرگی ازش رو از تو یاد گرفتم

شاید همیشه نتونم با حرف‌هام نشون بدم
ولی بدون که از ته قلبم دوستت دارم
و به داشتن مادری مثل تو افتخار می‌کنم ❤️

آرزو می‌کنم همیشه سالم و خوشحال باشی
لبخندت هیچ‌وقت از روی لبت کم نشه
و هر چیزی که دلت می‌خواد
قشنگ‌تر از چیزی که تصور می‌کنی برات اتفاق بیفته

تولدت مبارک مامان عزیزم 🌷
دوستت دارم
بیشتر از چیزی که بشه با کلمه‌ها گفت 🤍`;

function openPage(){
  intro.classList.add("hide");
  setTimeout(() => {
    main.classList.add("show");
    document.body.classList.add("page-open");
    startTyping();
  }, 450);
}

start.addEventListener("click", () => {
  openPage();
  music.play().then(() => {
    play.innerHTML = "⏸ توقف موزیک";
  }).catch(() => {});
});

setTimeout(() => {
  if (!intro.classList.contains("hide")) openPage();
}, 5500);

play.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    play.innerHTML = "⏸ توقف موزیک";
  } else {
    music.pause();
    play.innerHTML = "🎵 پخش موزیک";
  }
});

let index = 0;
let typingStarted = false;

function startTyping(){
  if (typingStarted) return;
  typingStarted = true;
  setTimeout(typing, 650);
}

function typing(){
  if(index < text.length){
    letter.textContent += text[index];
    index++;
    setTimeout(typing, text[index - 1] === "\n" ? 180 : 28);
  }
}

// ذرات نور
const particles = document.getElementById("particles");
for(let i = 0; i < 70; i++){
  const p = document.createElement("span");
  p.className = "particle";
  p.style.left = Math.random() * 100 + "%";
  p.style.top = Math.random() * 100 + "%";
  p.style.animationDelay = Math.random() * 5 + "s";
  p.style.animationDuration = (3 + Math.random() * 5) + "s";
  particles.appendChild(p);
}

// گلبرگ‌های شناور
const petals = document.getElementById("petals");
const symbols = ["✦","✧","♡","❀","·"];
for(let i = 0; i < 28; i++){
  const petal = document.createElement("span");
  petal.className = "petal";
  petal.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  petal.style.left = Math.random() * 100 + "%";
  petal.style.animationDelay = Math.random() * 12 + "s";
  petal.style.animationDuration = (9 + Math.random() * 10) + "s";
  petal.style.fontSize = (10 + Math.random() * 14) + "px";
  petals.appendChild(petal);
}

// حرکت نرم کارت‌ها هنگام اسکرول
const revealItems = document.querySelectorAll(".quality, .letter-card, .finale, .photo-wrap");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold: 0.12});

revealItems.forEach(item => observer.observe(item));
