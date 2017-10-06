var menu = document.getElementById('mainMenu');
var imgMenu = document.getElementById('imgMenu');

imgMenu.addEventListener("click", function(){
    menu.classList.toggle('hidden');
});

var btnAuthor = document.getElementById('btnAuthor');
var authorWrap = document.getElementById('authorWrap');

btnAuthor.addEventListener("click", function(){
    authorWrap.classList.toggle('hidden');
});