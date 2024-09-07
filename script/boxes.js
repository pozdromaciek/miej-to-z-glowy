document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordion-box');

    accordions.forEach(box => {
        box.addEventListener('click', function () {
            const content = this.querySelector('.accordion-content');
            const icon = this.querySelector('.accordion-icon');

            if (this.classList.contains('active')) {
                // Zwinięcie boxu
                content.style.maxHeight = null;
                icon.textContent = '+';
            } else {
                // Rozwinięcie boxu
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.textContent = '−';
            }

            this.classList.toggle('active');
        });
    });
});
