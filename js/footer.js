const createFooter = () => {
    let footer = document.querySelector(".footer");
  
    footer.innerHTML = `
    <footer>
    <div class="footer-top">
      <div class="col">
      <h1><img src="images/Vector_1.svg" alt="" /><span>B</span>ook </BR> Souls</h1>
          <p id="logop">Get Engulphed and Explore a New <br>Magical World</p>
  </div>
      <div class="col">
          <h3>ABOUT</h3>
          <p>About Us</p>
          <p>Terms & Privacy</p>
          <p>Refund Policy</p>
      </div>
      <div class="col">
          <H3>CUSTOMER CARE</H3>
          <p>Contact Us</p>
          <p>Shipping</p>
          <p>FAQ</p>
      </div>
      <div class="col">
          <H3>OTHER</H3>
          <p>Gift Cards</p>
          <p>Media</p>
          <p>Backgrounds</p>
      </div>
      <div class="col">
          <H3>REWARDS</H3>
      </div>
      <div class="col">
          <H3>STAY IN TOUCH</H3>
          <div class="email-bar">
              <input type="text" placeholder="Email...">
              <button>GO</button>
          </div>
      </div>
  </div>
  <div class="payment-methods">
      <img src="images/Payment_methodes.svg" alt="">
  </div>
  <div class="footer-bottom">
      <p>Copyright <i class="fa-regular fa-copyright"></i> Book Souls Inc. All rights reserved</p>
      <img src="images/CRUELTY_FREE.svg" alt="">
  </div>
  </footer>
`;
  }
  createFooter();