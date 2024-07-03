document.addEventListener('DOMContentLoaded', function() {
    const navbarHTML = `
          <div id="navbar" class="navbar">
  <a href="https://chyzhique.github.io/site/index.html">Main</a>
  <a href="https://chyzhique.github.io/site/courses.html">Courses</a>
  <a href="https://chyzhique.github.io/site/lesson.html">Current lesson</a>
  <a href="https://chyzhique.github.io/site/materials.html">My Materials</a>
  <a href="https://chyzhique.github.io/site/pricing.html" class="right">Pricing</a>
</div>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
});
