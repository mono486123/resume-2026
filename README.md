
# 🚀 施坤政 (Kun-Cheng Shih) - 個人互動式履歷網站

這是一個基於 **HTML5 / CSS3 / JavaScript** 構建的響應式個人履歷網站，旨在展示我在 **後端開發、人工智慧應用 (YOLO/GAN)** 以及 **數據分析** 領域的專業成果。

## 🛠️ 技術棧 (Tech Stack)

* **Frontend:** HTML5, CSS3, JavaScript (Vanilla JS)
* **Icons:** Font Awesome (圖標庫)
* **Deployment:** GitHub Pages / GitHub Actions
* **Version Control:** Git

---

## 📝 開發紀錄與 Debug 日誌 (2026-01-10)

在今日的開發與部署過程中，我遇到並解決了以下技術挑戰，這些紀錄展現了我在系統維護上的 Debug 能力：

### 1. GitHub Pages 部署延遲與快取 (Cache) 處理

* **問題：** 推送程式碼後，網頁內容未即時更新。
* **原因：** GitHub Actions 的部署任務 (Build & Deploy) 存在時間差，且瀏覽器對 `.js` 與 `.css` 檔案有強大的快取機制。
* **解決：** - 透過 **GitHub Actions** 頁面確認兩道綠色勾勾完成。
* 使用瀏覽器 **Hard Reload (Ctrl + F5)** 強制清除快取。
* 在網址後方加上版本參數（如 `?v=2.5`）強制刷新 CDN 紀錄。



### 2. Git 推送衝突 (Non-fast-forward Error)

* **問題：** 執行 `git push` 時被拒絕。
* **原因：** 本地端與雲端倉庫的紀錄分叉（例如雲端自動生成了 README，而本地端已重新初始化）。
* **解決：** 使用 `git push -f origin main` 進行強制覆蓋，確保雲端檔案結構與本地端精確調整過的路徑（特別是 PDF 檔名大小寫）一致。

### 3. JavaScript 事件攔截導致跳轉失效

* **問題：** 點擊導航列的「聯絡方式」連結 (contact.html) 無反應。
* **原因：** 全域的平滑捲動 (Smooth Scroll) 腳本使用了 `e.preventDefault()` 攔截了所有 `<a>` 標籤，並試圖在當前頁面尋找對應 ID。
* **解決：** 優化 JS 邏輯，加入 `if (href.startsWith('#'))` 判斷，僅對頁面內錨點執行平滑捲動，放行外部連結與頁面跳轉。

### 4. JS 作用域與全域函數呼叫 (Scope Issue)

* **問題：** 點擊「Email 複製」按鈕時報錯 `copyEmail is not defined`。
* **原因：** 該函數被定義在 `DOMContentLoaded` 的私有作用域內，導致 HTML 中的 `onclick` 無法抓取全域定義。
* **解決：** 將 `copyEmail` 函數移至 Script 的全域範圍 (Global Scope)，確保 HTML 標籤能正確觸發 JS 邏輯。

### 5. UI/UX 優化：從 `mailto:` 到「一鍵複製」

* **問題：** 傳統的 `mailto:` 會強行喚起 Outlook 等外部郵件軟體，造成使用者體驗不佳。
* **解決：** - 隱藏原始 Email 文本，保持介面簡潔。
* 運用 **Clipboard API (navigator.clipboard)** 實現一鍵複製。
* 加入動態視覺回饋（按鈕變色並顯示「已複製!」）。



---

## 📂 專案結構

* `index.html`: 主履歷頁面（包含 YOLOv7+GPT, GAN, FGO 自動化等專案展示）。
* `contact.html`: 獨立聯絡資訊頁面，整合 LINE (ti/p 協議) 與 Email 複製功能。
* `script.js`: 負責平滑捲動、捲動偵測、導航列高亮及一鍵複製邏輯。
* `style.css`: 響應式佈局與組件樣式設計。
* `/pdf`: 存放學術研究計畫與專題檔案（已處理 Linux 環境之大小寫敏感問題）。

---

© 2026 施坤政 Kun-Cheng Shih. All Rights Reserved.

