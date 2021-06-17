// Plate mouseenter mouseleave
const plate = document.querySelector('#plate');
const plateInfo = document.querySelector('#plate-info');
const dropdownLabel = document.querySelector('#dropdownLabel');
const dropdown = document.querySelectorAll('.dropdown');

plate.addEventListener('mouseenter', function() {
    plateInfo.style.display = 'block';
});
plate.addEventListener('mouseleave', function() {
    plateInfo.style.display = 'none';
});
// Dropdown

dropdownLabel.addEventListener('click', function() {
    if (this.parentNode.classList.contains('open')) {
        this.parentNode.classList.remove('open');
    } else {
        this.parentNode.classList.add('open');
    }
});
