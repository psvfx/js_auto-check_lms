// ===== АВТОПЕРІВІРКА_Модуль5_КЛЮЧОВЕ СЛОВО this. ПРОТОТИПИ ТА КЛАСИ ===========

// ==========================================================
//             ==== ЗАВДАННЯ 1/20 ====
// ==========================================================

// ТЕОРІЯ------------------

// Всередині функцій можна використовувати зарезервоване ключове слово this. Під час виконання функції, в this записується посилання на об'єкт, в контексті якого вона була викликана. Таким чином, в тілі функції ми можемо отримати доступ до властивостей і методів цього об'єкта.

// const bookShelf = {
//   authors: ["Bernard Cornwell", "Robert Sheckley"],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley"]
// bookShelf.addAuthor("Tanith Lee");
// console.log(bookShelf.getAuthors()); // ["Bernard Cornwell", "Robert Sheckley", "Tanith Lee"]
// Методи getAuthors і addAuthor - це функції (методи об'єкта), які викликаються в контексті об'єкта bookShelf. Під час їх виконання в this записується посилання на об'єкт bookShelf і ми можемо звернутися до його властивостей і методів.

// ЗАВДАННЯ----------------

// Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.

// ТЕСТИ
// Метод checkPizza об'єкта pizzaPalace використовує this.
// Метод order об'єкта pizzaPalace використовує this
// Виклик pizzaPalace.order("Smoked") повертає рядок "Order accepted, preparing «Smoked» pizza"
// Виклик pizzaPalace.order("Four meats") повертає рядок "Order accepted, preparing «Four meats» pizza"
// Виклик pizzaPalace.order("Big Mike") повертає рядок "Sorry, there is no pizza named «Big Mike»"
// Виклик pizzaPalace.order("Viennese") повертає рядок "Sorry, there is no pizza named «Viennese»"

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// РОЗВ'ЯЗАННЯ-------------

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       console.log(`Sorry, there is no pizza named «${pizzaName}»`);
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }
//     console.log(`Order accepted, preparing «${pizzaName}» pizza`);
//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };

// pizzaPalace.order("Smoked"); // Order accepted, preparing «Smoked» pizza
// pizzaPalace.order("Four meats"); // Order accepted, preparing «Four meats» pizza
// pizzaPalace.order("Big Mike"); // Sorry, there is no pizza named «Big Mike»
// pizzaPalace.order("Viennese"); // Sorry, there is no pizza named «Viennese»

// ==========================================================
//             ==== ЗАВДАННЯ 2/20 ====
// ==========================================================

// ЗАДАЧА: АКАУНТ КОРИСТУВАЧА

// ЗАВДАННЯ----------------

// Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу доставки їжі. Виконай рефакторинг методів об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.

// Після оголошення об'єкта ми додали виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

// ТЕСТИ
// Оголошена змінна customer
// Значення змінної customer - це об'єкт з властивостями і методами
// Виклик customer.getDiscount() повертає поточне значення властивості discount
// Виклик customer.setDiscount(0.15) оновлює значення властивості discount
// Виклик customer.getBalance() повертає поточне значення властивості balance.
// Виклик customer.getOrders() повертає поточне значення властивості orders
// Виклик customer.addOrder(5000, "Steak") додає "Steak" в масив значень властивості orders і оновлює баланс
// Метод getBalance об'єкта customer використовує this
// Метод getDiscount об'єкта customer використовує this
// Метод setDiscount об'єкта customer використовує this
// Метод getOrders об'єкта customer використовує this
// Метод addOrder об'єкта customer використовує this

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return balance;
//   },
//   getDiscount() {
//     return discount;
//   },
//   setDiscount(value) {
//     discount = value;
//   },
//   getOrders() {
//     return orders;
//   },
//   addOrder(cost, order) {
//     balance -= cost - cost * discount;
//     orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// РОЗВ'ЯЗАННЯ-------------

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// ==========================================================
//             ==== ЗАВДАННЯ 3/20 ====
// ==========================================================

// ЗАДАЧА: ІСТОРІЯ ЗАМОВЛЕНЬ

// ЗАВДАННЯ----------------

// Тестувальники знайшли баги в коді сервісу зберігання історії замовлень їжі. Тобі необхідно виправити їх, правильно розставивши this в методах об'єкта historyService, щоб методи почали працювати правильно.

// ТЕСТИ
// Оголошена змінна historyService
// Значення змінної historyService - це об'єкт з вихідними властивостями та методами
// Виклик historyService.getOrdersLog() повертає рядок з переліком даних всіх замовлень з властивості orders
// Виклик historyService.getEmails() повертає масив всіх унікальних поштових адрес з властивості orders
// Виклик historyService.getOrdersByEmail("solomon@topmail.net") повертає [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
// Виклик historyService.getOrdersByEmail("artemis@coldmail.net") повертає [{ email: "artemis@coldmail.net", dish: "Pizza" }]
// Метод getOrdersLog об'єкта historyService використовує this
// Метод getEmails об'єкта historyService використовує this
// Метод getOrdersByEmail об'єкта historyService використовує this

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return orders
//       .map((order) => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = orders.map((order) => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return orders.filter((order) => order.email === email);
//   },
//   // Change code above this line
// };

// РОЗВ'ЯЗАННЯ-------------

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map((order) => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map((order) => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter((order) => order.email === email);
//   },
//   // Change code above this line
// };

// console.log(historyService.getOrdersLog());
// console.log(historyService.getEmails());
// console.log(historyService.getOrdersByEmail("solomon@topmail.net"));
// console.log(historyService.getOrdersByEmail("artemis@coldmail.net"));

// ==========================================================
//             ==== ЗАВДАННЯ 4/20 ====
// ==========================================================

// ТЕОРІЯ------------------

// Об'єкти можна організувати у ланцюжки таким чином, щоб здійснювався автоматичний пошук властивості в іншому об'єкті, не знайденої в одному об'єкті. Сполучною ланкою виступає спеціальна прихована властивість [[Prototype]], яка в консолі браузера відображається як __proto__.

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // { name: 'Mango', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true
// Метод Object.create(obj) створює і повертає новий об'єкт, зв'язуючи його з об'єктом obj. Об'єкт, на який вказує посилання в __proto__, називається прототипом. У нашому прикладі об'єкт animal - це прототип для об'єкта dog. Метод isPrototypeOf() перевіряє, чи є об'єкт animal прототипом для dog і чи повертає true або false.

// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.name); // 'Mango'

// console.log(dog.hasOwnProperty("legs")); // false
// console.log(dog.legs); // 4
// Звернення dog.name працює очевидним чином - повертає власну властивість name об'єкта dog. Звертаючись до dog.legs, інтерпретатор шукає властивість legs в об'єкті dog, не знаходить і продовжує пошук в об'єкті за посиланням з dog.__ proto__, тобто, у цьому випадку, в об'єкті animal - його прототипі.

// Тобто прототип - це резервне сховище властивостей і методів об'єкта, що автоматично використовується під час їх пошуку. Об'єкт, який виступає прототипом, може також мати свій прототип, наступний - свій, і так далі.

// Пошук властивості виконується до першого збігу. Інтерпретатор шукає властивість за ім'ям в об'єкті, якщо не знаходить, то звертається до властивості __proto__, тобто переходить за посиланням до об'єкта-прототипу, а потім - до прототипу прототипу. Якщо інтерпретатор дійде до кінця ланцюжка і не знайде властивості з таким ім'ям, то поверне undefined.

// ЗАВДАННЯ----------------

// Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.

// ТЕСТИ
// Оголошена змінна parent
// Значення змінної parent - це об'єкт
// Виклик parent.hasOwnProperty("surname") повертає true
// Виклик parent.hasOwnProperty("heritage") повертає true
// Оголошена змінна child
// Значення змінної child - це об'єкт
// Виклик child.hasOwnProperty("name") повертає true
// Звернення до child.name повертає "Jason"
// Виклик child.hasOwnProperty("age") повертає true
// Звернення до child.age повертає 27
// Виклик child.hasOwnProperty("surname") повертає false
// Звернення до child.surname повертає "Moore"
// Виклик child.hasOwnProperty("heritage") повертає false
// Звернення до child.heritage повертає "Irish"
// Виклик parent.isPrototypeOf(child) повертає true
// Використовується метод Object.create()

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = {};

// // Change code above this line
// child.name = "Jason";
// child.age = 27;

// РОЗВ'ЯЗАННЯ-------------

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;

// console.log(parent.hasOwnProperty("surname")); // true
// console.log(parent.hasOwnProperty("heritage")); // true
// console.log(child.hasOwnProperty("name")); // true
// console.log(child.name); // Jason
// console.log(child.hasOwnProperty("age")); // true
// console.log(child.age); // 27
// console.log(child.hasOwnProperty("surname")); // false
// console.log(child.surname); // Moore
// console.log(child.hasOwnProperty("heritage")); // false
// console.log(child.heritage); // Irish
// console.log(parent.isPrototypeOf(child)); // true

// ==========================================================
//             ==== ЗАВДАННЯ 5/20 ====
// ==========================================================

// ЗАДАЧА: ЛАНЦЮЖОК ПРОТОТИПІВ

// ЗАВДАННЯ----------------

// Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був прототипом для parent, а той, своєю чергою, був прототипом для child.

// ТЕСТИ
// Оголошена змінна ancestor
// Значення змінної ancestor - це об'єкт.
// Оголошена змінна parent
// Значення змінної parent - це об'єкт.
// Оголошена змінна child
// Значення змінної child - це об'єкт.
// Виклик ancestor.isPrototypeOf("parent") повертає true
// Виклик parent.isPrototypeOf("child") повертає true
// Виклик ancestor.hasOwnProperty("surname") повертає true
// Звернення до ancestor.surname повертає "Dawson"
// Виклик parent.hasOwnProperty("surname") повертає true
// Звернення до parent.surname повертає "Moore"
// Виклик child.hasOwnProperty("surname") повертає false
// Звернення до child.surname повертає "Moore"
// Виклик ancestor.hasOwnProperty("heritage") повертає true
// Звернення до ancestor.heritage повертає "Irish"
// Виклик parent.hasOwnProperty("heritage") повертає false
// Звернення до parent.heritage повертає "Irish"
// Виклик child.hasOwnProperty("heritage") повертає false
// Звернення до child.heritage повертає "Irish"
// Використовується метод Object.create()

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = {};
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = {};
// child.name = "Jason";
// child.age = 27;

// // Change code above this line

// РОЗВ'ЯЗАННЯ-------------

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(ancestor.isPrototypeOf(parent)); // true
// console.log(parent.isPrototypeOf(child)); // true
// console.log(ancestor.hasOwnProperty("surname")); // true
// console.log(ancestor.surname); // Dawson
// console.log(parent.hasOwnProperty("surname")); // true
// console.log(parent.surname); // Moore
// console.log(child.hasOwnProperty("surname")); // false
// console.log(child.surname); // Moore
// console.log(ancestor.hasOwnProperty("heritage")); // true
// console.log(ancestor.heritage); // Irish
// console.log(parent.hasOwnProperty("heritage")); // false
// console.log(parent.heritage); // Irish
// console.log(child.hasOwnProperty("heritage")); // false
// console.log(child.heritage); // Irish

// ==========================================================
//             ==== ЗАВДАННЯ 6/20 ====
// ==========================================================

// ТЕОРІЯ------------------

// Синтаксис літерала об'єкта дозволяє створити один об'єкт. Проте, часто потрібно створити багато однотипних об'єктів з однаковим набором властивостей, але різними значеннями і методами для взаємодії з ними. Все це потрібно робити динамічно, під час виконання програми. З цією метою використовують класи - спеціальний синтаксис оголошення функції для створення об'єктів.

// Оголошення класу починається з ключового слова class, після якого стоїть ім'я класу і фігурні дужки - його тіло. Класи прийнято називати з великої літери, а у назві відображати тип об'єкта (іменник), що створюється.

// class User {
//   // Тіло класу
// }

// const mango = new User();
// console.log(mango); // {}

// const poly = new User();
// console.log(poly); // {}
// Результат виклику new User() - це об'єкт, який називається екземпляром класу, тому що містить дані і поведінку, що описуються класом.

// ЗАВДАННЯ----------------

// Використовуючи ключове слово class, оголоси клас Car з порожнім тілом.

// Оголошений клас Car
// Результат виклику new Car() - це порожній об'єкт

// РОЗВ'ЯЗАННЯ-------------

// class Car {}

// console.log(new Car()); // Car {}

// ==========================================================
//             ==== ЗАВДАННЯ 7/20 ====
// ==========================================================

// ТЕОРІЯ------------------

// Для ініціалізації екземпляра в класі є метод constructor. Якщо він неоголошений, створюється конструктор за замовчуванням - порожня функція, яка не змінює екземпляр.

// class User {
//   // Синтаксис оголошення методу класу
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }
// Виклик класу з оператором new призводить до створення нового об'єкта і виклику конструктора в контексті цього об'єкта. Тобто this всередині конструктора буде посилатися на новостворений об'єкт. Це дозволяє додавати кожному об'єкту властивості з однаковими іменами, але різними значеннями.

// Властивості name та email називаються публічними властивостями, тому що вони будуть власними властивостями об'єкта-екземпляра і до них можна буде отримати доступ, звернувшись через крапку.

// ЗАВДАННЯ----------------

// Додай класу Car метод constructor, який приймає три параметри:

// brand - марка автомобіля.
// model - модель автомобіля.
// price - ціна автомобіля.
// Клас Car повинен створювати об'єкт з однойменними властивостями brand, model і price, значеннями яких повинні бути передані аргументи під час його виклику з оператором new.

// ТЕСТИ
// Оголошений клас Car
// Клас Car має метод constructor
// В результаті виклику new Car("Audi", "Q3", 36000) утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }
// В результаті виклику new Car("BMW", "X5", 58900) утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }
// В результаті виклику new Car("Nissan","Murano", 31700) утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }

// class Car {
//   // Change code below this line
//   // Change code above this line
// }

// РОЗВ'ЯЗАННЯ-------------

// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// console.log(new Car("Audi", "Q3", 36000)); // Car {brand: 'Audi', model: 'Q3', price: 36000}
// console.log(new Car("BMW", "X5", 58900)); // Car {brand: 'BMW', model: 'X5', price: 58900}
// console.log(new Car("Nissan", "Murano", 31700)); // Car {brand: 'Nissan', model: 'Murano', price: 31700}

// ==========================================================
//             ==== ЗАВДАННЯ 8/20 ====
// ==========================================================

// ТЕОРІЯ------------------

// Клас може приймати велику кількість вхідних даних для властивостей майбутнього об'єкта. Якщо параметрів багато (більше 2-х), то, як правило, застосовують патерн «Об'єкт параметрів». Ідея цього патерну у тому, щоб передавати як параметр один об'єкт з логічно іменованими властивостями. Значення властивостей такого об'єкта замінять набір аргументів.

// class User {
//   // Деструктуризуємо об'єкт
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });
// console.log(mango); // { name: "Mango", email: "mango@mail.com" }

// const poly = new User({
//   name: "Poly",
//   email: "poly@mail.com",
// });
// console.log(poly); // { name: "Poly", email: "poly@mail.com" }

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 9/20 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 10/20 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 11/20 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 12/20 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 13/20 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 14/20 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 15/20 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 16/20 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 17/20 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 18/20 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 19/20 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 20/20 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------
