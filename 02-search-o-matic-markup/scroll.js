export const scrollPages = () => {
    window.addEventListener('scroll', function () {
        const searchBlock = document.querySelector('.search-block__field');
        const fieldInput = document.querySelector('.search-block__field-label__wrapper--input');
        const isTopBody = document.documentElement.scrollTop === 0;
        const searchBlockHasClass = searchBlock.classList.contains("fix-top");
        const fieldInputHasClass = fieldInput.classList.contains("fix-top-input");

        if (!searchBlockHasClass && !isTopBody && !fieldInputHasClass) {
            searchBlock.classList.add("fix-top");
            fieldInput.classList.add("fix-top-input");
        }

        if (isTopBody) {
            searchBlock.classList.remove('fix-top');
            fieldInput.classList.remove('fix-top-input')
        }

    })
};