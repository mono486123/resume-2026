# 🚀 施坤政 (Kun-Cheng Shih) - 個人互動式履歷網站 (v2.6)

這是一個基於 **HTML5 / CSS3 / JavaScript** 構建的響應式個人履歷網站，展示我在 **後端開發、人工智慧應用 (YOLO/GAN)** 以及 **數據分析** 領域的專業成果。

## 🛠️ 技術棧 (Tech Stack)
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla JS)
- **Icons:** Font Awesome (圖標庫)
- **Deployment:** GitHub Pages / GitHub Actions
- **Version Control:** Git

---

## 📝 開發紀錄與 Debug 日誌 (2026-01-10)

在本次專案開發與部署過程中，我遇到並解決了以下技術挑戰，這些紀錄展現了我具備從環境底層排除問題的能力：

### 1. 解決 GitHub Pages 部署延遲與「環境幽靈快取」 (Environment Cache)
- **問題：** 推送程式碼後，線上網頁內容始終無法即時更新，且 Git 紀錄出現分岔。
- **原因：** GitHub 伺服器端部署環境殘留舊紀錄，加上本地端重新初始化後與雲端紀錄不一致。
- **解決：** 採取「環境重建法」，透過 **重開全新的 Repository** 徹底清除所有雲端快取與 Git 紀錄衝突，確保網站以最純淨的狀態部署成功。

### 2. JavaScript 事件攔截與連結導向衝突
- **問題：** 平滑捲動腳本攔截了 `contact.html` 的跳轉。
- **解決：** 優化 `script.js` 判斷邏輯，使用 `href.startsWith('#')` 僅針對頁面內錨點執行動畫，確保外部頁面正常跳轉。

### 3. JS 作用域與全域函數呼叫問題 (Scope Issue)
- **問題：** Email 複製按鈕報錯 `copyEmail is not defined`。
- **原因：** 函數被定義於 `DOMContentLoaded` 的私有作用域內。
- **解決：** 將核心功能函數移至全域空間 (Global Scope)，解決 HTML `onclick` 無法存取私有函數的問題。

### 4. UI/UX 優化：隱藏式 Email 一鍵複製功能
- **問題：** 避開 `mailto:` 喚起外部軟體的不便，並維持介面簡潔。
- **解決：** 運用 **Clipboard API (navigator.clipboard)** 實現一鍵複製，並結合 HTML5 `data-*` 屬性隱藏地址，加入動態 CSS 視覺回饋。

---

## 📂 專案結構
- `index.html`: 主履歷頁面（AI 專案與研究計畫展示）。
- `contact.html`: 獨立聯絡頁面（LINE 與一鍵複製 Email）。
- `script.js`: 核心互動邏輯（捲動監聽、高亮顯示、複製功能）。
- `style.css`: 響應式佈局與視覺設計。
- `/pdf`: 專題研究檔案（已優化路徑相容性）。

---
© 2026 施坤政 Kun-Cheng Shih. All Rights Reserved.