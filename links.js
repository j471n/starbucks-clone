const findStore = document.getElementById('find-store');

//? Redirecting to Starbucks website
findStore.addEventListener('click', () => {
    url = 'http://www.starbucks.in/store-locator';
    window.open(url);
});