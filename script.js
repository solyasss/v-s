document.getElementById('noButton').addEventListener('mouseover', function() {
    const button = this;
    const moveButton = () => {
        const x = Math.random() * (window.innerWidth - button.offsetWidth);
        const y = Math.random() * (window.innerHeight - button.offsetHeight);
        button.style.transition = 'left 0.3s ease, top 0.3s ease';
        button.style.position = 'absolute';
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
    };

    moveButton();

    const interval = setInterval(moveButton, 100);

    button.addEventListener('mouseout', () => {
        clearInterval(interval);
    });
});