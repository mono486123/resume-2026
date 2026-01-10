// 1. 全域函數：放在最外面，確保 HTML 的 onclick 能抓到
function copyEmail(btn) {
    const emailAddress = btn.getAttribute('data-email');

    navigator.clipboard.writeText(emailAddress).then(() => {
        const originalContent = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> 已複製!';
        
        // 視覺回饋樣式
        btn.style.backgroundColor = '#27ae60';
        btn.style.borderColor = '#27ae60';
        btn.style.color = '#fff';

        setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.style.backgroundColor = 'transparent';
            btn.style.borderColor = '#3498db';
            btn.style.color = 'inherit';
        }, 2000);
    }).catch(err => {
        console.error('複製失敗: ', err);
        alert("複製失敗，請手動複製信箱");
    });
}

// 2. 網頁載入後的互動邏輯
document.addEventListener('DOMContentLoaded', () => {
    console.log("JS 已啟動 - 坤政履歷版本 2.5 (最終優化版)");

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    // --- 手機版選單切換 ---
    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            burger.classList.toggle('toggle'); 
        });
    }

    // --- 平滑捲動邏輯 ---
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // 只有當 href 是以 # 開頭才執行平滑捲動
            if (href && href.startsWith('#')) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault(); 
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                    
                    // 如果在手機版點選，點完後自動收起選單
                    if (nav.classList.contains('nav-active')) {
                        nav.classList.remove('nav-active');
                        burger.classList.remove('toggle');
                    }
                }
            }
        });
    });

    // --- 捲動監聽：背景變色與選單高亮 ---
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPos = window.scrollY || window.pageYOffset;

        // 導航列變色
        if (scrollPos > 50) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }

        // 偵測目前在哪個區塊
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollPos >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        // 選單高亮
        navLinks.forEach(link => {
            link.classList.remove('active');
            const linkHref = link.getAttribute('href');
            if (current && linkHref.includes(current)) {
                link.classList.add('active');
            }
        });
    });
});