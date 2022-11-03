console.clear();
const navBtn = document.getElementById('nav-btn');
navBtn.addEventListener('click', function () { document.body.classList.toggle('nav-is-toggled'); });

const li = document.getElementsByTagName('li');
for (var i = 0, len = li.length; i < len; i += 1) {
    li[i].onclick = function () { document.body.classList.remove('nav-is-toggled'); };
}