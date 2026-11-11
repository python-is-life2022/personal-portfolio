# پیش‌نمایش قالب فروشگاه سیمرغ

این صفحه یک نسخهٔ ایستای مستقل از قالب است و به سرور Django، پایگاه‌داده یا API فروشگاه وصل نمی‌شود.

برای به‌روزرسانی پیش‌نمایش، فایل‌های نسخهٔ جدید را در همین پوشه جایگزین کنید:

1. فایل HTML پیش‌نمایش: [index.html](./index.html)
2. استایل‌ها و اسکریپت‌ها: پوشهٔ [static](./static)
3. تصاویر و آیکن‌ها: `static/images`

فایل‌های اصلی قالب Django در `C:\Users\amirm\Desktop\simurgh store` هستند و خودکار به این پیش‌نمایش وصل نیستند. فایل `templates\store\home.html` را مستقیم روی `index.html` کپی نکنید؛ قالب اصلی از تگ‌ها و مسیرهای Django استفاده می‌کند. اگر نسخهٔ تازه را از آنجا منتقل می‌کنید، آن را به HTML ایستا تبدیل کنید و نشانگر `data-preview-mode="true"` و حالت بدون اتصال به API را نگه دارید. برای تغییر سادهٔ متن و ظاهر، فایل‌های همین پوشه را در VS Code ویرایش و ذخیره کنید.

تصویر کارت پروژه در [simurgh-store.png](../../assets/images/simurgh-store.png) است.

منبع فعلی قالب: `C:\Users\amirm\Desktop\simurgh store\templates\store\home.html`
