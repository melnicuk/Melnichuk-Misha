document.addEventListener("DOMContentLoaded", function () {
  // --- Блок: Кошик ---
  const cartContainer = document.querySelector(".Koshuk");
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  if (cartItems.length === 0) {
    cartContainer.innerHTML += "<p style='font-size: 50px; margin-top: 50px; color: black; border: solid black 2px; border-radius: 10px; background-color:white;margin:10px; padding:10px;'>Ваш кошик порожній 😿</p>";
    return;
  }

  cartItems.forEach((product, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("cart-item");
    itemDiv.innerHTML = `
      <img src="img/${product.image}" class="cart-image">
      <div class="cart-info">
        <h5>${product.title}</h5>
        <p>${product.description}</p>
        <p><strong>${product.price} ₴</strong></p>
        <label>Кількість:
          <input type="number" min="1" value="${product.quantity}" data-index="${index}" class="quantity-input">
        </label>
        <button class="btn btn-danger remove-btn" data-index="${index}">🗑 Видалити</button>
      </div>
    `;
    cartContainer.appendChild(itemDiv);
  });

  document.querySelectorAll('.remove-btn').forEach(button => {
    button.addEventListener('click', function () {
      const index = this.getAttribute('data-index');
      cartItems.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cartItems));
      location.reload();
    });
  });

  document.querySelectorAll('.quantity-input').forEach(input => {
    input.addEventListener('change', function () {
      const index = this.getAttribute('data-index');
      const newQty = parseInt(this.value);
      if (newQty >= 1) {
        cartItems[index].quantity = newQty;
        localStorage.setItem("cart", JSON.stringify(cartItems));
      }
    });
  });

  const clearBtn = document.createElement("button");
  clearBtn.textContent = "Очистити кошик";
  clearBtn.classList.add("btn", "btn-warning", "mt-4");
  clearBtn.addEventListener("click", () => {
    localStorage.removeItem("cart");
    location.reload();
  });
  cartContainer.appendChild(clearBtn);

  // --- Блок: Показати/приховати форму ---
  const formToggle = document.getElementById("toggle-form");
  const formSection = document.getElementById("order-form-section");

  if (formToggle && formSection) {
    formToggle.addEventListener("click", function () {
      if (formSection.style.display === "none" || formSection.style.display === "") {
        formSection.style.display = "block";
        formSection.scrollIntoView({ behavior: "smooth" });
      } else {
        formSection.style.display = "none";
      }
    });
  }
});