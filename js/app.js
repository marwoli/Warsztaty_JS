'use strict';
document.addEventListener('DOMContentLoaded', function() {// tutaj będziemy umieszczać kod ze wszystkich zadań
   const menuItem = document.querySelector(".for-dropdown");
    console.log(menuItem.style);
   const dropdown = document.querySelector(".dropdown");
    menuItem.addEventListener('mouseover', function() {
        dropdown.style.display = 'block';

    });
    menuItem.addEventListener('mouseout', function() {
        dropdown.style.display = 'none';
    });
    var buttons = document.querySelectorAll(".read-more");

    function showHide() {
        var textArea = this.previousElementSibling;

        if (textArea.style.display === 'none' || textArea.style.display === '') {
            textArea.style.display = 'block';
            this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
        } else {
            textArea.style.display = 'none';
            this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
        }
    }
    for (var i = 0; i <= buttons.length; i++) {
        buttons[i].addEventListener('click', showHide);
    }
});