// ---------------------------------------------------------------
// i18n.js — English / Persian localization for armanlaalfam.ir
// ---------------------------------------------------------------
const translations = {
  en: {
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_skills: "Skills",
    nav_education: "Education",
    nav_contact: "Contact",
    nav_cta: "Download CV",

    hero_eyebrow: "Senior Full Stack Software Engineer",
    hero_h1: 'Hi, I\'m <span class="accent">Arman Laalfam</span> — I build production‑ready apps and services.',
    hero_sub: "I specialize in Flutter and full‑stack development, delivering scalable solutions for web and mobile platforms. With a strong focus on clean architecture and performance optimization, I create applications that are both robust and user‑friendly.",
    hero_btn_contact: "Get in touch",
    hero_btn_cv: "Download CV",
    stat1_num: "6+",
    stat1_label: "Years of experience",
    stat2_num: "5",
    stat2_label: "Companies as Flutter / full‑stack engineer",
    stat3_num: "650k+",
    stat3_label: "Active users served (Asanbar)",
    stat4_num: "911k+",
    stat4_label: "Combined users",

    projects_tag: "Selected work",
    projects_title: "Published projects, web and apps",
    projects_desc: "A selection of production websites and apps I've built and shipped, live right now on Cafe Bazaar, Google Play and the App Store.",

    proj1_name: "Furniture Online Shop",
    proj1_desc: "Responsive furniture e‑commerce website with a modern design and seamless user experience.",
    proj1_link: "Open Website ↗",

    proj2_name: "Furniture Admin Panel Online Shop",
    proj2_desc: "Responsive furniture e‑commerce admin panel website with a modern design and seamless user experience.",
    proj2_link: "Open Website ↗",

    proj3_name: "Asanbar Drivers",
    proj3_desc: "On‑demand freight platform connecting cargo firms with nearby truck drivers. Owned stabilization and core feature development, serving 50,000+ active users.",
    proj3_link: "Cafe Bazaar ↗",

    proj4_name: "Asanbar Broker",
    proj4_desc: "The broker‑side companion to Asanbar. Lets logistics brokers post loads, track shipments in real time and receive offers directly from carriers.",
    proj4_link: "Cafe Bazaar ↗",

    proj5_name: "TeaLink — Persian Hub",
    proj5_desc: "Community hub for the Persian diaspora, shipped as technical lead at Fluxodio with real‑time chat, notifications, and event registration.",
    proj5_link_play: "Google Play ↗",
    proj5_link_appstore: "App Store ↗",

    proj6_name: "Gerdoo",
    proj6_desc: "Production application built as technical lead at Fluxodio, owning architecture across mobile, backend and web layers.",
    proj6_link: "Cafe Bazaar ↗",

    proj7_name: "Startamin",
    proj7_desc: "Iran's first crowdfunding marketplace app — developed and launched end‑to‑end at Aaicco, from concept to store release in 6 months.",
    proj7_link: "Cafe Bazaar ↗",

    experience_tag: "Career",
    experience_title: "Professional experience",

    job1_title: "Senior Full Stack Software Engineer",
    job1_company: "Fluxodio · 8 months",
    job1_meta: "2025 Mar – 2025 Dec<br>Tehran, Iran",
    job1_b1: 'Acted as <b>technical lead</b> for two production applications (Tealink, Gerdoo), owning architecture decisions across <b>mobile, backend, and web</b> layers and reviewing code from a team of 5 engineers.',
    job1_b2: 'Designed and implemented backend services in <b>C#/.NET</b> supporting both applications, including real‑time notification service, Chats, Register Events, User Authentication.',
    job1_b3: 'Built and maintained web‑facing features using <b>React/TypeScript</b>, ensuring consistent business logic and data contracts across mobile, web, and backend.',
    job1_b4: 'Managed the full release lifecycle for iOS and Android, shipping 4 releases to Google Play and the Apple App Store with <b>zero rollback incidents</b>.',
    job1_b5: 'Mentored 5 engineers on clean code practices and Flutter architecture, raising team code review pass rate from <b>20% to 80%</b>.',

    job2_title: "Senior Full Stack Software Engineer",
    job2_company: "Asanbar · 1 year 6 months",
    job2_meta: "2023 Aug – 2025 Mar<br>Tehran, Iran",
    job2_b1: 'Owned development and stabilization of two large‑scale production applications (Driver and Owner platforms), serving <b>50,000+ active users</b>.',
    job2_b2: 'Reduced application <b>crash rate from 87% to 5%</b> by leading a cross‑cutting performance optimization initiative, directly improving user retention and app store ratings.',
    job2_b3: 'Designed and shipped core product features including map integration, identity verification, real‑time GPS tracking, and payment workflows, end‑to‑end from backend to UI.',
    job2_b4: 'Developed and maintained backend services in <b>C#/.NET</b> supporting the payments and identity‑verification APIs, integrated with PostgreSQL/MariaDB.',
    job2_b5: 'Refactored application state management architecture, cutting state‑related production bugs by <b>80%</b>.',
    job2_b6: 'Implemented native payment integration directly in Android using Java/Kotlin via Flutter method channels, bridging native payment SDKs with the Flutter application layer to ensure reliable transaction handling.',

    job3_title: "Senior Flutter Developer",
    job3_company: "Commit-m · 1 year 5 months",
    job3_meta: "2022 Mar – 2023 Aug<br>Tehran, Iran",
    job3_b1: 'Founded and led the <b>mobile engineering</b> effort for Footballiha, a social sports super‑app, growing the Flutter team from 1 to 4 engineers within two months.',
    job3_b2: 'Architected and delivered core platform features including real‑time chat, video playback and sharing, a digital wallet, and a token‑based rewards system; project was deprioritized when the company shifted strategic focus to another product.',
    job3_b3: 'Built an integrated in‑app shop and leaderboard system.',
    job3_b4: 'Established team coding standards and review processes as the team scaled from a solo effort to a 4‑person squad.',

    job4_title: "Mid-level Flutter Developer",
    job4_company: "Aaicco · 1 year",
    job4_meta: "2021 Mar – 2022 Mar<br>Tehran, Iran",
    job4_b1: 'Developed and launched <b>Startamin</b>, the company\'s first crowdfunding application, within 6 months, taking it from concept to App Store/Play Store release.',
    job4_b2: 'Implemented native Android payment integration in Java/Kotlin via Flutter method channels for the Startamin app, bridging native payment SDKs with the Flutter layer to enable secure transaction processing.',
    job4_b3: 'Built <b>Sabad360</b> (investment management) and <b>Time\'s Up</b> (2D board game with animations), covering UI implementation, state management, and API integration.',
    job4_b4: 'Promoted to Flutter mentor; trained an intern into a junior developer meeting production‑readiness standards within 2 months.',

    job5_title: "Junior Flutter Developer",
    job5_company: "Varknow · 3 months",
    job5_meta: "2020 Dec – 2021 Mar<br>Tehran, Iran",
    job5_b1: 'Promoted from intern to Junior Developer after 3 months and delivered two production apps: <b>Sutpe</b> (Sharif University hall booking and competition platform) and <b>Shenas</b> (dating app).',
    job5_b2: 'Implemented core user‑facing features including booking flows, competition registration, and results display.',

    job6_title: "Intern Flutter Developer",
    job6_company: "Varknow · 3 months",
    job6_meta: "2020 Sep – 2020 Dec<br>Tehran, Iran",
    job6_b1: 'Built <b>Doctora</b>, a medication and prescription management app, as an internship capstone project under senior mentorship.',
    job6_b2: 'Learned production Flutter development practices including state management, API integration, and UI testing fundamentals.',

    skills_tag: "Toolbox",
    skills_title: "Skills",
    skills_desc: "The stack I use to take a product from architecture through to release.",
    skill_h_mobile: "Mobile Development",
    skill_h_flutter: "Flutter Ecosystem",
    skill_h_backend: "Backend Development",
    skill_h_frontend: "Frontend Development",
    skill_h_arch: "Architecture & Design",
    skill_h_practices: "Engineering Practices",
    skill_h_db: "Database Development",
    skill_h_api: "API & Integration",
    skill_h_pm: "Project Management & Delivery",
    skill_h_monitor: "Monitoring & Observability",

    education_tag: "Foundation",
    education_title: "Education",
    edu_degree: "Bachelor of Computer Science",
    edu_school: "Tehran University",
    edu_meta: "2012 Sep – 2018 Sep · Tehran, Iran",
    edu_b1: '<b>Term 1 — 2D Chess (Java, Swing/AWT):</b> Built a fully functional 2D Chess game for Windows in Java using Swing and AWT, implementing complete game rules, piece movement logic, and turn‑based gameplay.',
    edu_b2: '<b>Term 2 — 2D Othello (Java, Swing/AWT):</b> Built a 2D Othello board game for Windows in Java using Swing and AWT, implementing board state management and flip logic across an 8×8 grid.',
    edu_b3: '<b>Pathfinding Board Game (Java, AI/Search Algorithms):</b> Designed and implemented a board game simulating a robot navigating from source to destination, building and benchmarking three shortest‑path algorithms — A*, IDA*, and Dijkstra — across three independent versions and comparing their performance in terms of speed and path optimality.',
    edu_b4: '<b>SMS Spam Detection Android App (AI & Data Mining):</b> Built an Android application for SMS spam detection, applying classification techniques to distinguish spam from legitimate messages.',
    edu_b5: '<b>Tech Stack Advisor Android App:</b> Built an Android application to assist technical leads in selecting the most suitable programming language and technology stack for a given project, based on project requirements and constraints.',
    lang_en_name: "English",
    lang_en_level: "B2",
    lang_fa_name: "Persian",
    lang_fa_level: "Native / Fluent",
    interest_ai: "AI Engineering - Machine Learning",
    interest_basketball: "Sports — Basketball Coach Certificate",
    interest_trx: "TRX Coach Certificate",
    interest_moto: "Motorcycle — Slalom Certificate",
    interest_adventure: "Adventure",
    interest_game: "Game",

    about_tag: "Background",
    about_title: "About me",
    about_p1: 'Senior Full Stack Software Engineer with 6+ years of experience delivering production software across the full stack: backend services in <b>C#/.NET</b>, cross‑platform mobile applications in <b>Flutter</b>, and web frontends in <b>React/TypeScript</b>.',
    about_p2: 'Proven track record leading mobile and backend workstreams end‑to‑end, from architecture decisions through to App Store and Play Store releases. Skilled in Clean Architecture, Entity Framework Core, RESTful API design, and relational database modeling (PostgreSQL, MariaDB).',
    about_p3: 'Experienced technical lead who mentors engineers and drives measurable improvements in performance and stability.',
    cv_title: "Resume / CV",
    cv_desc: "Get the full breakdown of my experience, skills and education as a PDF.",
    cv_btn: "Download CV (PDF) ↓",

    contact_title: "Let's work together",
    contact_desc: "Open to new roles and freelance mobile / full‑stack projects — feel free to reach out.",
    contact_email: "Email me",
    contact_call: "Call me",
    contact_linkedin: "LinkedIn ↗",
    contact_github: "GitHub ↗",

    footer_text: "Built with care.",
  },

  fa: {
    nav_projects: "پروژه‌ها",
    nav_experience: "سوابق کاری",
    nav_skills: "مهارت‌ها",
    nav_education: "تحصیلات",
    nav_contact: "تماس",
    nav_cta: "دانلود رزومه",

    hero_eyebrow: "مهندس نرم‌افزار ارشد فول‌استک",
    hero_h1: 'سلام، من <span class="accent">آرمان لعل‌فام</span> هستم — اپلیکیشن‌ها و سرویس‌های آماده تولید می‌سازم.',
    hero_sub: "تخصص من توسعه فلاتر و فول‌استک است و راهکارهای مقیاس‌پذیر برای وب و موبایل ارائه می‌دهم. با تمرکز جدی بر معماری تمیز و بهینه‌سازی عملکرد، اپلیکیشن‌هایی می‌سازم که هم پایدار و هم کاربرپسند هستند.",
    hero_btn_contact: "تماس با من",
    hero_btn_cv: "دانلود رزومه",
    stat1_num: "+۶",
    stat1_label: "سال سابقه کاری",
    stat2_num: "۵",
    stat2_label: "شرکت به‌عنوان مهندس فلاتر / فول‌استک",
    stat3_num: "+۶۵۰ هزار",
    stat3_label: "کاربر فعال (آسان‌بار)",
    stat4_num: "+۹۱۱ هزار",
    stat4_label: "مجموع کاربران",

    projects_tag: "نمونه‌کارها",
    projects_title: "پروژه‌های منتشرشده، وب و اپلیکیشن",
    projects_desc: "گزیده‌ای از وب‌سایت‌ها و اپلیکیشن‌های تولیدی که ساخته و منتشر کرده‌ام؛ هم‌اکنون در کافه‌بازار، گوگل‌پلی و اپ‌استور در دسترس هستند.",

    proj1_name: "فروشگاه اینترنتی مبلمان",
    proj1_desc: "وب‌سایت فروشگاهی مبلمان با طراحی مدرن، ریسپانسیو و تجربه کاربری روان.",
    proj1_link: "مشاهده وب‌سایت ↗",

    proj2_name: "پنل مدیریت فروشگاه اینترنتی مبلمان",
    proj2_desc: "پنل مدیریت فروشگاه اینترنتی مبلمان با طراحی مدرن، ریسپانسیو و تجربه کاربری روان.",
    proj2_link: "مشاهده وب‌سایت ↗",

    proj3_name: "آسان‌بار رانندگان",
    proj3_desc: "پلتفرم حمل‌ونقل بار که شرکت‌های باربری را به رانندگان کامیون نزدیک متصل می‌کند. مسئول پایدارسازی و توسعه ویژگی‌های اصلی برای بیش از ۵۰ هزار کاربر فعال.",
    proj3_link: "کافه‌بازار ↗",

    proj4_name: "آسان‌بار بروکر",
    proj4_desc: "اپلیکیشن مکمل سمت واسطه‌های باربری در آسان‌بار. به بروکرها امکان ثبت بار، رهگیری لحظه‌ای محموله و دریافت پیشنهاد مستقیم از رانندگان را می‌دهد.",
    proj4_link: "کافه‌بازار ↗",

    proj5_name: "تی‌لینک — هاب فارسی‌زبانان",
    proj5_desc: "هاب اجتماعی برای فارسی‌زبانان مقیم خارج، به‌عنوان لید فنی در فلوکسودیو با چت لحظه‌ای، اعلان‌ها و ثبت‌نام رویداد توسعه داده شده است.",
    proj5_link_play: "گوگل‌پلی ↗",
    proj5_link_appstore: "اپ‌استور ↗",

    proj6_name: "گردو",
    proj6_desc: "اپلیکیشن تولیدی که به‌عنوان لید فنی در فلوکسودیو ساخته شده و مسئولیت معماری در لایه‌های موبایل، بک‌اند و وب را برعهده داشتم.",
    proj6_link: "کافه‌بازار ↗",

    proj7_name: "استارتامین",
    proj7_desc: "اولین اپلیکیشن بازار تأمین مالی جمعی ایران — توسعه و انتشار سرتاسری در آی‌کو، از ایده تا انتشار در فروشگاه‌ها ظرف ۶ ماه.",
    proj7_link: "کافه‌بازار ↗",

    experience_tag: "مسیر شغلی",
    experience_title: "سوابق حرفه‌ای",

    job1_title: "مهندس نرم‌افزار ارشد فول‌استک",
    job1_company: "فلوکسودیو · ۸ ماه",
    job1_meta: "اسفند ۱۴۰۳ – آذر ۱۴۰۴<br>تهران، ایران",
    job1_b1: 'به‌عنوان <b>لید فنی</b> دو اپلیکیشن تولیدی (تی‌لینک، گردو) عمل کردم؛ مسئول تصمیمات معماری در لایه‌های <b>موبایل، بک‌اند و وب</b> و بازبینی کد تیمی ۵ نفره.',
    job1_b2: 'طراحی و پیاده‌سازی سرویس‌های بک‌اند با <b>#C/.NET</b> برای هر دو اپلیکیشن، شامل سرویس اعلان لحظه‌ای، چت، ثبت‌نام رویداد و احراز هویت کاربر.',
    job1_b3: 'ساخت و نگهداری ویژگی‌های وب با <b>React/TypeScript</b>، با تضمین یکپارچگی منطق کسب‌وکار و قراردادهای داده در موبایل، وب و بک‌اند.',
    job1_b4: 'مدیریت کامل چرخه انتشار iOS و اندروید، انتشار ۴ نسخه در گوگل‌پلی و اپ‌استور اپل <b>بدون هیچ بازگشتی</b>.',
    job1_b5: 'مربی‌گری ۵ مهندس در زمینه کد تمیز و معماری فلاتر؛ افزایش نرخ قبولی بازبینی کد تیم از <b>۲۰٪ به ۸۰٪</b>.',

    job2_title: "مهندس نرم‌افزار ارشد فول‌استک",
    job2_company: "آسان‌بار · ۱ سال و ۶ ماه",
    job2_meta: "مرداد ۱۴۰۲ – اسفند ۱۴۰۳<br>تهران، ایران",
    job2_b1: 'مسئول توسعه و پایدارسازی دو اپلیکیشن بزرگ‌مقیاس تولیدی (پلتفرم راننده و مالک بار)، با بیش از <b>۵۰ هزار کاربر فعال</b>.',
    job2_b2: 'کاهش <b>نرخ کرش از ۸۷٪ به ۵٪</b> با هدایت طرحی فراگیر برای بهینه‌سازی عملکرد، که مستقیماً حفظ کاربر و امتیاز فروشگاه‌ها را بهبود داد.',
    job2_b3: 'طراحی و انتشار ویژگی‌های اصلی محصول شامل یکپارچه‌سازی نقشه، احراز هویت، ردیابی لحظه‌ای GPS و گردش‌کار پرداخت، به‌صورت سرتاسری از بک‌اند تا رابط کاربری.',
    job2_b4: 'توسعه و نگهداری سرویس‌های بک‌اند با <b>#C/.NET</b> برای APIهای پرداخت و احراز هویت، یکپارچه‌شده با PostgreSQL/MariaDB.',
    job2_b5: 'بازطراحی معماری مدیریت state اپلیکیشن، با کاهش <b>۸۰٪</b> باگ‌های مرتبط با state در محیط تولید.',
    job2_b6: 'پیاده‌سازی مستقیم پرداخت بومی اندروید با Java/Kotlin از طریق Flutter method channels، برای اتصال SDKهای پرداخت بومی به لایه فلاتر و تضمین تراکنش‌های قابل‌اعتماد.',

    job3_title: "توسعه‌دهنده ارشد فلاتر",
    job3_company: "کامیت-ام · ۱ سال و ۵ ماه",
    job3_meta: "اسفند ۱۴۰۰ – مرداد ۱۴۰۲<br>تهران، ایران",
    job3_b1: 'بنیان‌گذاری و هدایت تیم مهندسی موبایل برای فوتبالیها، یک سوپراپ اجتماعی ورزشی؛ رشد تیم فلاتر از ۱ به ۴ مهندس ظرف دو ماه.',
    job3_b2: 'طراحی و تحویل ویژگی‌های اصلی پلتفرم شامل چت لحظه‌ای، پخش و اشتراک‌گذاری ویدیو، کیف‌پول دیجیتال و سیستم پاداش توکنی؛ پروژه پس از تغییر تمرکز استراتژیک شرکت متوقف شد.',
    job3_b3: 'ساخت فروشگاه درون‌برنامه‌ای یکپارچه و سیستم جدول امتیازات.',
    job3_b4: 'تدوین استانداردهای کدنویسی و فرآیندهای بازبینی تیم هم‌زمان با رشد تیم از یک نفر به گروهی ۴ نفره.',

    job4_title: "توسعه‌دهنده فلاتر (میدلول)",
    job4_company: "آی‌کو · ۱ سال",
    job4_meta: "اسفند ۱۳۹۹ – اسفند ۱۴۰۰<br>تهران، ایران",
    job4_b1: 'توسعه و انتشار <b>استارتامین</b>، اولین اپلیکیشن تأمین مالی جمعی شرکت، ظرف ۶ ماه؛ از ایده تا انتشار در اپ‌استور و گوگل‌پلی.',
    job4_b2: 'پیاده‌سازی پرداخت بومی اندروید با Java/Kotlin از طریق Flutter method channels برای اپلیکیشن استارتامین، جهت اتصال SDKهای پرداخت بومی به لایه فلاتر و تراکنش‌های امن.',
    job4_b3: 'ساخت <b>سبد۳۶۰</b> (مدیریت سرمایه‌گذاری) و <b>Time\'s Up</b> (بازی رومیزی دوبعدی با انیمیشن)، شامل پیاده‌سازی رابط کاربری، مدیریت state و یکپارچه‌سازی API.',
    job4_b4: 'ارتقا به مربی فلاتر؛ آموزش یک کارآموز تا سطح توسعه‌دهنده جونیور آماده تولید ظرف ۲ ماه.',

    job5_title: "توسعه‌دهنده جونیور فلاتر",
    job5_company: "ورکناو · ۳ ماه",
    job5_meta: "آذر ۱۳۹۹ – اسفند ۱۳۹۹<br>تهران، ایران",
    job5_b1: 'ارتقا از کارآموز به توسعه‌دهنده جونیور پس از ۳ ماه و تحویل دو اپلیکیشن تولیدی: <b>ستپه</b> (رزرو سالن و مسابقات دانشگاه شریف) و <b>شناس</b> (اپلیکیشن دوستیابی).',
    job5_b2: 'پیاده‌سازی ویژگی‌های کاربری اصلی شامل فرآیند رزرو، ثبت‌نام مسابقه و نمایش نتایج.',

    job6_title: "کارآموز توسعه‌دهنده فلاتر",
    job6_company: "ورکناو · ۳ ماه",
    job6_meta: "شهریور ۱۳۹۹ – آذر ۱۳۹۹<br>تهران، ایران",
    job6_b1: 'ساخت <b>دکترا</b>، اپلیکیشن مدیریت دارو و نسخه، به‌عنوان پروژه پایانی دوره کارآموزی زیر نظر مربیان ارشد.',
    job6_b2: 'آموختن اصول توسعه تولیدی فلاتر شامل مدیریت state، یکپارچه‌سازی API و مبانی تست رابط کاربری.',

    skills_tag: "جعبه‌ابزار",
    skills_title: "مهارت‌ها",
    skills_desc: "پشته فناوری که برای بردن یک محصول از معماری تا انتشار استفاده می‌کنم.",
    skill_h_mobile: "توسعه موبایل",
    skill_h_flutter: "اکوسیستم فلاتر",
    skill_h_backend: "توسعه بک‌اند",
    skill_h_frontend: "توسعه فرانت‌اند",
    skill_h_arch: "معماری و طراحی",
    skill_h_practices: "شیوه‌های مهندسی",
    skill_h_db: "توسعه پایگاه‌داده",
    skill_h_api: "API و یکپارچه‌سازی",
    skill_h_pm: "مدیریت پروژه و تحویل",
    skill_h_monitor: "مانیتورینگ و مشاهده‌پذیری",

    education_tag: "پیشینه تحصیلی",
    education_title: "تحصیلات",
    edu_degree: "کارشناسی مهندسی کامپیوتر",
    edu_school: "دانشگاه تهران",
    edu_meta: "شهریور ۱۳۹۱ – شهریور ۱۳۹۷ · تهران، ایران",
    edu_b1: '<b>ترم ۱ — شطرنج دوبعدی (جاوا، Swing/AWT):</b> ساخت یک بازی شطرنج دوبعدی کامل برای ویندوز با جاوا، Swing و AWT، شامل پیاده‌سازی کامل قوانین بازی، منطق حرکت مهره‌ها و بازی نوبتی.',
    edu_b2: '<b>ترم ۲ — اتللو دوبعدی (جاوا، Swing/AWT):</b> ساخت بازی اتللوی دوبعدی برای ویندوز با جاوا، Swing و AWT، شامل مدیریت وضعیت صفحه و منطق برگرداندن مهره‌ها در شبکه ۸×۸.',
    edu_b3: '<b>بازی رومیزی مسیریابی (جاوا، الگوریتم‌های هوش مصنوعی/جستجو):</b> طراحی و پیاده‌سازی بازی رومیزی شبیه‌سازی مسیر یک ربات از مبدأ تا مقصد، ساخت و بنچمارک سه الگوریتم کوتاه‌ترین مسیر — A*، *IDA و دایکسترا — در سه نسخه مستقل و مقایسه عملکرد آن‌ها از نظر سرعت و بهینگی مسیر.',
    edu_b4: '<b>اپلیکیشن اندروید تشخیص اسپم پیامکی (هوش مصنوعی و داده‌کاوی):</b> ساخت اپلیکیشن اندروید برای تشخیص پیامک‌های اسپم با استفاده از تکنیک‌های دسته‌بندی برای تفکیک پیام‌های اسپم از معتبر.',
    edu_b5: '<b>اپلیکیشن اندروید مشاور پشته فناوری:</b> ساخت اپلیکیشن اندروید برای کمک به لیدهای فنی در انتخاب مناسب‌ترین زبان برنامه‌نویسی و پشته فناوری برای یک پروژه، بر اساس نیازمندی‌ها و محدودیت‌های پروژه.',
    lang_en_name: "انگلیسی",
    lang_en_level: "B2",
    lang_fa_name: "فارسی",
    lang_fa_level: "زبان مادری / مسلط",
    interest_ai: "هوش مصنوعی - یادگیری ماشین",
    interest_basketball: "ورزش — مدرک مربی‌گری بسکتبال",
    interest_trx: "مدرک مربی‌گری TRX",
    interest_moto: "موتورسواری — مدرک اسلالوم",
    interest_adventure: "ماجراجویی",
    interest_game: "بازی",

    about_tag: "پیشینه",
    about_title: "درباره من",
    about_p1: 'مهندس نرم‌افزار ارشد فول‌استک با بیش از ۶ سال سابقه در ارائه نرم‌افزار تولیدی در سرتاسر پشته فناوری: سرویس‌های بک‌اند با <b>#C/.NET</b>، اپلیکیشن‌های موبایل چندسکویی با <b>فلاتر</b>، و فرانت‌اند وب با <b>React/TypeScript</b>.',
    about_p2: 'سابقه اثبات‌شده در هدایت سرتاسری کارهای موبایل و بک‌اند، از تصمیمات معماری تا انتشار در اپ‌استور و گوگل‌پلی. مسلط به Clean Architecture، Entity Framework Core، طراحی RESTful API و مدل‌سازی پایگاه‌داده رابطه‌ای (PostgreSQL، MariaDB).',
    about_p3: 'لید فنی باتجربه که مهندسان را مربی‌گری می‌کند و بهبودهای قابل‌سنجش در عملکرد و پایداری ایجاد می‌کند.',
    cv_title: "رزومه",
    cv_desc: "خلاصه کامل سوابق، مهارت‌ها و تحصیلات من را به‌صورت PDF دریافت کنید.",
    cv_btn: "دانلود رزومه (PDF) ↓",

    contact_title: "بیایید با هم کار کنیم",
    contact_desc: "برای نقش‌های جدید و پروژه‌های فریلنس موبایل / فول‌استک آماده‌ام — با خیال راحت پیام دهید.",
    contact_email: "ایمیل بزنید",
    contact_call: "تماس بگیرید",
    contact_linkedin: "لینکدین ↗",
    contact_github: "گیت‌هاب ↗",

    footer_text: "با دقت ساخته شده است.",
  }
};

const LANG_STORAGE_KEY = "site-lang";

function getInitialLang() {
  const saved = localStorage.getItem(LANG_STORAGE_KEY);
  if (saved === "en" || saved === "fa") return saved;
  return "en";
}

function applyLang(lang) {
  const dict = translations[lang];
  document.documentElement.setAttribute("lang", lang === "fa" ? "fa" : "en");
  document.documentElement.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
  document.body.classList.toggle("lang-fa", lang === "fa");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.querySelectorAll(".lang-toggle button").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  localStorage.setItem(LANG_STORAGE_KEY, lang);
}

function initLang() {
  const lang = getInitialLang();
  applyLang(lang);

  document.querySelectorAll(".lang-toggle button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const chosen = btn.getAttribute("data-lang");
      applyLang(chosen);
    });
  });
}

document.addEventListener("DOMContentLoaded", initLang);
