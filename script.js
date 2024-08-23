document.querySelectorAll('.interactive-img').forEach(img => {
    img.addEventListener('click', function() {
        this.style.width = this.style.width === '200px' ? '400px' : '200px';
    });
});
