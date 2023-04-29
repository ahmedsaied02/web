
const custom_select = () => {
    let book = document.querySelectorAll(".select_box");
    book.forEach(function (element) {
        element.innerHTML = `
        
        <div class="custom_select">
        <select name="selection">
            <option value="-">-</option>
            <option value="1900">Visa</option>
            <option value="1910">MasterCard</option>
            <option value="1920">AMEX</option>
            <option value="1920">PayPal</option>
            <option value="1920">Apple Pay</option>
        </select>
        </div>`;
    });
    
  }
  
  custom_select();