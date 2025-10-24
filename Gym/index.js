document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    function handleScroll() {
        if (window.scroll > 50){
            header.style.backgroundColor = 'white';
            header.style.boxshadow = '0 4px 10px rgba(0, 0, 0, 0.15)';
        } else{
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }
    }
    window.addEventListener('scroll', handleScroll);

});