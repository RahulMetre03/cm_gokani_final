const toggle = document.querySelector('.music-toggle');
const buttons = document.querySelectorAll('.music-toggle button');
const groups = document.querySelectorAll('.music-group');

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {

        buttons.forEach(b => b.classList.remove('active'));
        groups.forEach(g => g.classList.remove('active'));

        btn.classList.add('active');
        document.getElementById(btn.dataset.target).classList.add('active');

        toggle.classList.toggle('apple-active', index === 1);
        wrapper.classList.toggle('apple-active', index === 1);
        wrapper_one.classList.toggle('apple-active', index === 1);
    });
});
