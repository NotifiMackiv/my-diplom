// Отримуємо елементи, з якими будемо працювати
const cartBtn = document.querySelector('.cart');
const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const searchResults = document.querySelector('#search-results');
const cartItems = document.querySelector('#cart-items');

// Додаємо подію на клік по кнопці кошика
cartBtn.addEventListener('click', () => {
	alert('Ви клікнули на кнопку кошика!');
});

// Додаємо подію на подання форми пошуку
searchForm.addEventListener('submit', (event) => {
	// Зупиняємо стандартну поведінку форми
	event.preventDefault();

	// Отримуємо дані з поля пошуку
	const searchTerm = searchInput.value;

	// Виконуємо пошук
	// ...

	// Відображаємо результати пошуку
	searchResults.innerHTML = '<p>Результати пошуку будуть тут</p>';
});

// Функція для додавання товару в кошик
function addToCart(item) {
	// Додаємо товар в кошик
	// ...

	// Оновлюємо відображення товарів в кошику
	cartItems.innerHTML = '<p>Товари в кошику будуть тут</p>';
}


// Створюємо об'єкт Cart
const Cart = {
	items: [],
	discount: 0.1, // 10% знижка
	total: function () {
		let sum = 0;
		for (let i = 0; i < this.items.length; i++) {
			sum += this.items[i].price;
		}
		return sum;
	},
	addItem: function (item) {
		this.items.push(item);
		// Оновлюємо вміст кошика на сторінці
		document.querySelector("#cart-items").innerHTML = this.renderItems();
	},
	removeItem: function (index) {
		this.items.splice(index, 1);
		// Оновлюємо вміст кошика на сторінці
		document.querySelector("#cart-items").innerHTML = this.renderItems();
	},
	applyDiscount: function () {
		this.total = this.total() * (1 - this.discount);
		// Оновлюємо відображення знижки на сторінці
		document.querySelector(".discount-amount").textContent = `${this.discount * 100}%`;
		document.querySelector(".total-amount").textContent = `${this.total} грн`;
	},
	renderItems: function () {
		let html = "";
		for (let i = 0; i < this.items.length; i++) {
			html += `<div class="cart-item">
					<span class="item-name">${this.items[i].name}</span>
					<span class="item-price">${this.items[i].price} грн</span>
					<button class="remove-from-cart" data-index="${i}">Видалити</button>
				</div>`;
		}
		return html;
	},
};

// Додаємо обробник подій на кнопки "Вибрати" для товарів
const addToCartButton = document.querySelectorAll(".add-to-cart");
addToCartButton.forEach(function (button) {
	button.addEventListener("click", function (event) {
		const product = event.target.parentNode;
		const name = product.querySelector("h3").textContent;
		const price = parseInt(product.querySelector(".price").textContent);
		Cart.addItem({ name, price });
	});
});

// Додаємо обробник подій на кнопки "Видалити" для товарів в кошику
const removeFromCartButtons = document.querySelectorAll(".remove-from-cart");
removeFromCartButtons.forEach(function (button) {
	button.addEventListener("click", function (event) {
		const index = event.target.getAttribute("data-index");
		Cart.removeItem(index);
	});
});

// Додаємо обробник подій на кнопку "Замовити зараз"
const orderButton = document.querySelector(".info-banner button");
orderButton.addEventListener("click", function () {
	alert("Ваше замовлення успішно оформлено!");
});

// Додаємо обробник подій на кнопки "Вибрати" в товарних блоках
const addToCartButtonns = document.querySelectorAll(".product button.add-to-cart");
addToCartButtonns.forEach(function (button) {
	button.addEventListener("click", function handleAddToCartClick() {
		const productName = this.parentElement.querySelector("h3").textContent;
		const productPrice = this.parentElement.querySelector(".price").textContent;
		addProductToCart(productName, productPrice);
	});
});

// Функція додавання товару в кошик
function addProductToCart(name, price) {
	const cartItemsContainer = document.querySelector("#cart-items");
	const cartItem = document.createElement("div");
	cartItem.classList.add("cart-item");
	cartItem.innerHTML = `<span>${name}</span> <span>${price}</span>`;
	cartItemsContainer.appendChild(cartItem);
}

// 1. Display a message when a user clicks on an offer card.
const offerCards = document.querySelectorAll('.offer-card');
offerCards.forEach(offerCard => {
	offerCard.addEventListener('click', () => {
		alert('Thank you for your interest in our offer!');
	});
});

// 2. Change the offer image when a user hovers over an offer card.
offerCards.forEach(offerCard => {
	const offerImage = offerCard.querySelector('img');
	const defaultImage = offerImage.src;
	const hoverImage = offerImage.getAttribute('data-hover-image');
	offerCard.addEventListener('mouseover', () => {
		offerImage.src = hoverImage;
	});
	offerCard.addEventListener('mouseout', () => {
		offerImage.src = defaultImage;
	});
});

const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
	button.addEventListener('click', () => {
		const product = button.parentNode;
		const name = product.querySelector('h3').textContent;
		const price = product.querySelector('.price').textContent;
		const cartItem = document.createElement('div');
		cartItem.innerHTML = `<span>${name}</span> <span>${price}</span>`;
		const cart = document.querySelector('.cart');
		cart.appendChild(cartItem);
	});
});

const productImages = document.querySelectorAll('.product img');
productImages.forEach(image => {
	const originalSrc = image.getAttribute('src');
	const hoverSrc = originalSrc.replace('.jpeg', '-hover.jpeg');
	image.addEventListener('mouseover', () => {
		image.setAttribute('src', hoverSrc);
	});
	image.addEventListener('mouseout', () => {
		image.setAttribute('src', originalSrc);
	});
});

const forms = document.querySelector('#testimonial-form');
forms.addEventListener('submit', (event) => {
	event.preventDefault();
	const nameInput = forms.querySelector('#name');
	const textInput = forms.querySelector('#text');
	const ratingInput = forms.querySelector('#rating');
	const name = nameInput.value;
	const text = textInput.value;
	const rating = ratingInput.value;
	const testimonial = document.createElement('div');
	testimonial.classList.add('testimonial');
	testimonial.innerHTML = `
    <div class="testimonial-info">
      <img src="images/avatar-placeholder.jpg" alt="Аватар користувача">
      <div class="testimonial-name">${name}</div>
    </div>
    <p class="testimonial-text">${text}</p>
    <div class="testimonial-rating">
      ${'★'.repeat(rating)}${'☆'.repeat(5 - rating)}
    </div>
  `;
	const testimonialsList = document.querySelector('.testimonials-list');
	testimonialsList.appendChild(testimonial);
	nameInput.value = '';
	textInput.value = '';
	ratingInput.value = '';
	// Відправка форми на сервер
	const formData = new FormData(forms);
	fetch('/submit-testimonial.php', {
		method: 'POST',
		body: formData
	});
});

// отримуємо форму
const orderForm = document.querySelector('form');

// слухаємо подію submit форми
orderForm.addEventListener('submit', (e) => {
	e.preventDefault(); // відміняємо стандартну поведінку форми

	// отримуємо значення полів форми
	const name = document.querySelector('#name').value;
	const phone = document.querySelector('#phone').value;
	const email = document.querySelector('#email').value;
	const address = document.querySelector('#address').value;
	const food = document.querySelector('#food').value;
	const quantity = document.querySelector('#quantity').value;
	const comments = document.querySelector('#comments').value;

	// виконуємо валідацію полів форми
	if (name === '' || phone === '' || email === '' || address === '' || quantity === '') {
		alert('Будь ласка, заповніть всі обов\'язкові поля форми.');
		return;
	}

	if (isNaN(quantity) || parseInt(quantity) <= 0) {
		alert('Кількість має бути числом більше 0.');
		return;
	}

	// виконуємо обробку даних форми
	const orderData = {
		name,
		phone,
		email,
		address,
		food,
		quantity,
		comments
	};

	console.log(orderData); // можна відправити дані на сервер або зберегти в локальному сховищі
	alert('Ваше замовлення прийнято!'); // показуємо користувачеві підтвердження успішного оформлення замовлення
});

// отримуємо елементи сторінки
const contactForm = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

// слухаємо подію submit форми
contactForm.addEventListener('submit', (e) => {
	e.preventDefault(); // відміняємо стандартну поведінку форми

	// отримуємо значення полів форми
	const name = nameInput.value;
	const email = emailInput.value;
	const message = messageInput.value;

	// виконуємо валідацію полів форми
	if (name === '' || email === '' || message === '') {
		alert("Будь ласка, заповніть всі обов'язкові поля форми.");
		return;
	}

	// виконуємо обробку даних форми
	const formData = {
		name,
		email,
		message
	};

	console.log(formData); // можна відправити дані на сервер або зберегти в локальному сховищі
	alert('Ваше повідомлення відправлено!'); // показуємо користувачеві підтвердження успішного відправлення повідомлення
});

// очищуємо поля форми при кліку на кнопку "Очистити"
document.querySelector('#reset-button').addEventListener('click', () => {
	nameInput.value = '';
	emailInput.value = '';
	messageInput.value = '';
});



