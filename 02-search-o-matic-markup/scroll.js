window.addEventListener('scroll', function() {
    var element = document.getElementsByClassName('search-block__field');
    var element2 = document.getElementsByClassName('search-block__field-label__wrapper--input');
    element[0].classList.add('fix-top');
    element2[0].classList.add('fix-top-input');
    if (document.documentElement.scrollTop === 0) {
        element[0].classList.remove('fix-top');
        element2[0].classList.remove('fix-top-input')
    }
})