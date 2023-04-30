const createHeader = () => {
  let header = document.querySelector(".header");

  header.innerHTML = `
    <header>
        <p>
            <a href="login.html">Sign in</a> | <a href="#">Currency</a> |
            <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
        </p>
        <a href="index.html" class="back-to-home"><h1>
        <img src="images/Vector_1.svg" alt="" /><span>B</span>ook Souls 
    </h1></a>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><i class="fa-solid fa-x"></i></li>
        <li><a href="#">Categories</a></li>
        <li><i class="fa-solid fa-x"></i></li>
        <li><a href="about.html">About</a></li>
        <li><i class="fa-solid fa-x"></i></li>
        <li><a href="search.html">Library</a></li>
        <li><i class="fa-solid fa-x"></i></li>
        <li><a href="#">Promotions & Rewards</a></li>
      </ul>
      <div class="search_bar">
        <input type="text" placeholder="SEARCH..." />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </nav>
  </header>
  `;
}
createHeader();
