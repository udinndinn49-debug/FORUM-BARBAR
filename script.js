// Menunggu sampai semua konten HTML dimuat
document.addEventListener('DOMContentLoaded', () => {

    const themeToggle = document.getElementById('theme-toggle');
    const htmlEl = document.documentElement; // Target <html> tag

    // Fungsi untuk menerapkan tema
    function setTheme(theme) {
        // Set atribut data-theme di <html>
        htmlEl.setAttribute('data-theme', theme);
        
        // Update ikon tombol
        themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
        
        // Simpan preferensi tema ke localStorage
        localStorage.setItem('theme', theme);
    }

    // 1. Dapatkan tema yang tersimpan di localStorage
    let currentTheme = localStorage.getItem('theme');

    // 2. Jika tidak ada, cek preferensi OS
    if (!currentTheme) {
        currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    // 3. Terapkan tema saat halaman pertama kali dimuat
    setTheme(currentTheme);

    // 4. Tambahkan event listener untuk tombol
    themeToggle.addEventListener('click', () => {
        // Dapatkan tema saat ini dari atribut html
        const newTheme = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

});
