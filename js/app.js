'use strict';
document.addEventListener('DOMContentLoaded', function() {// tutaj będziemy umieszczać kod ze wszystkich zadań
   const menuItem = document.querySelector(".for-dropdown");
    console.log(menuItem.style);
   const dropdown = document.querySelector(".dropdown");
    menuItem.addEventListener('mouseover', function() {
        console.log('jakis tekst');
        dropdown.style.display = 'block';

    });
    menuItem.addEventListener('mouseout', function() {
        dropdown.style.display = 'none';
    })
});