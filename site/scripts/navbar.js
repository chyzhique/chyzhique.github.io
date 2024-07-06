document.addEventListener('DOMContentLoaded', function() {
    const navbarHTML = `
          <div id="navbar" class="navbar">
          <span class="logo"><img class="flavicon" src="https://www.dropbox.com/scl/fi/a0qiv80qrjzu8vvvv2ouk/512sign.png?rlkey=ykjui910b9eufvs1n0yzbok2s&st=m0y64ssi&raw=1">ANGLOMOVA</span>
  <a href="https://chyzhique.github.io/site/index.html">Main</a>
  <a href="https://chyzhique.github.io/site/courses.html">Courses</a>
  <a href="https://chyzhique.github.io/site/lesson.html">Current lesson</a>
  <a href="https://chyzhique.github.io/site/materials.html">My Materials</a>
  <a href="https://chyzhique.github.io/site/pricing.html" class="right">Pricing</a>
</div>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
});
