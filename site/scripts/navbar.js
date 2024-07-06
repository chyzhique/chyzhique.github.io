document.addEventListener('DOMContentLoaded', function() {
    const navbarHTML = `
          <div id="navbar" class="navbar">
          <span class="logo"><img class="flavicon" src="https://www.dropbox.com/scl/fi/a0qiv80qrjzu8vvvv2ouk/512sign.png?rlkey=ykjui910b9eufvs1n0yzbok2s&st=m0y64ssi&raw=1">ANGLOMOVA</span>
  <a href="https://chyzhique.github.io/site/index.html"><span class="material-symbols-outlined">home</span>Main</a>
  <a href="https://chyzhique.github.io/site/courses.html"><span class="material-symbols-outlined">dataset</span>Courses</a>
  <a href="https://chyzhique.github.io/site/lesson.html"><span class="material-symbols-outlined">bolt</span>Current lesson</a>
  <a href="https://chyzhique.github.io/site/materials.html"><span class="material-symbols-outlined">save</span>My Materials</a>
  <a href="https://chyzhique.github.io/site/profile.html" class="right"><span class="material-symbols-outlined">account_circle</span>Profile</a>
</div>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
});
