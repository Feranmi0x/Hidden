const hiddenContent = document.querySelector('.hidden-content');
const revealBtn = document.querySelector('.reveal-btn');

function hideContent() {
    if (hiddenContent.classList.contains('reveal-btn')) {
        hiddenContent.classList.remove('reveal-btn')
    } else {
        hiddenContent.classList.add('reveal-btn')
    }
}
revealBtn.addEventListener('click', hideContent);
