// ===== АВТОПЕРІВІРКА_Модуль3_ОБ'ЄКТИ. ОПЕРАЦІЇ rest та spread ===========

// ==========================================================
//             ==== ЗАВДАННЯ 1/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// Об'єкти дозволяють описати і згрупувати характеристики об'єктів реального світу - користувача, книги, продукту магазину, чого завгодно. Об'єкти ще називають словниками, тобто вони містять терміни (властивості) та їх визначення (значення).

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };
// Для оголошення використовуються фігурні дужки {} - літерал об'єкта. При створенні об'єкта можна додати властивості, кожна з яких описується парами ключ:значення. Ключ ще називають ім'ям властивості і це завжди рядок. Значенням властивості можуть бути будь-які типи: примітиви, масиви, об'єкти, булі, функції тощо. Властивості розділяються комою.

// ЗАВДАННЯ----------------

// Присвой змінній apartment об'єкт, який описує квартиру з наступними характеристиками:

// imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
// descr - опис, значення "Spacious apartment in the city center";
// rating - рейтинг, значення 4;
// price - ціна, значення 2153;
// tags - метаінформація, масив["premium", "promoted", "top"].

// ТЕСТИ
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Об'єкт містить властивість imgUrl
// Значення властивості imgUrl - це рядок "https://via.placeholder.com/640x480"
// Об'єкт містить властивість descr
// Значення властивості descr - це рядок "Spacious apartment in the city center"
// Об'єкт містить властивість rating
// Значення властивості rating - це число 4
// Об'єкт містить властивість price
// Значення властивості price - це число 2153
// Об'єкт містить властивість tags
// Значення властивості tags - це масив ["premium", "promoted", "top"]

// const apartment = ;

// РОЗВ'ЯЗАННЯ-------------

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// ==========================================================
//             ==== ЗАВДАННЯ 2/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// Значенням властивості може бути інший об'єкт. Це використовується для зберігання вкладених і згрупованих даних.

// Наприклад, статистика користувача соціальної мережі складається з кількості послідовників, переглядів і лайків, і зберігати ці дані найзручніше у вигляді об'єкта. Те саме з місцем розташування, окремо країна і місто.

// В майбутньому це можна буде використовувати для пошуку користувачів за країною, містом, мінімальною або максимальною кількістю послідовників тощо.

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// ЗАВДАННЯ----------------

// Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника. Додай йому наступні властивості:

// name - ім'я власника, значення "Henry";
// phone - телефон, значення "982-126-1588";
// email - пошта, значення "henry.carter@aptmail.com".

// ТЕСТИ
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// В об'єкта змінної apartment присутні властивості imgUrl, descr, rating, price і tags зі значеннями
// В об'єкті apartment присутня властивість owner
// Значення властивості owner - це об'єкт
// В об'єкті owner присутня властивість name
// Значення властивості name - це "Henry"
// В об'єкті owner присутня властивість phone
// Значення властивості phone - це "982-126-1588"
// В об'єкті owner присутня властивість email
// Значення властивості email - це "henry.carter@aptmail.com"

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// РОЗВ'ЯЗАННЯ-------------

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// ==========================================================
//             ==== ЗАВДАННЯ 3/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// Перший спосіб отримати доступ до властивості об'єкта - це синтаксис об'єкт.ключ_властивості. Здебільшого використовується синтаксис «через крапку» і підходить тоді, коли ми заздалегідь знаємо ім'я (ключ) властивості, до якої хочемо отримати доступ.

// На місце звернення буде повернуте значення властивості з таким ім'ям.
// Якщо в об'єкті відсутня властивість з таким ім'ям, на місце звернення повернеться undefined.
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// const bookTitle = book.title;
// console.log(bookTitle); // "The Last Kingdom"

// const bookGenres = book.genres;
// console.log(bookGenres); // ["historical prose", "adventure"]

// const bookPrice = book.price;
// console.log(bookPrice); // undefined

// ЗАВДАННЯ----------------

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// В об'єкта змінної apartment присутні властивості imgUrl, descr, rating, price і tags зі значеннями

// ТЕСТИ
// Оголошена змінна aptRating
// Значення змінної aptRating - це число 4
// Оголошена змінна aptDescr
// Значення змінної aptDescr - це рядок "Spacious apartment in the city center"
// Оголошена змінна aptPrice
// Значення змінної aptPrice - це число 2153
// Оголошена змінна aptTags
// Значення змінної aptTags - це масив рядків["premium", "promoted", "top"]

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment;
// const aptDescr = apartment;
// const aptPrice = apartment;
// const aptTags = apartment;
// // Change code above this line

// РОЗВ'ЯЗАННЯ-------------

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;

// ==========================================================
//             ==== ЗАВДАННЯ 4/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi"],
// };
// Для доступу до вкладених властивостей використовується ланцюжок звернень «через крапку». Наприклад, якщо необхідно отримати значення країни користувача, записуємо user.location.country, де user.location - це звернення (шлях) до об'єкта у властивості location, а user.locaton.country - звернення до властивості country в цьому об'єкті. Тобто, «крапка» вказує наступну вкладеність.

// const location = user.location;
// console.log(location); // Об'єкт location

// const country = user.location.country;
// console.log(country); // "Jamaica"
// Якщо значення властивості - це масив, то у нашому прикладі user.hobbies - звернення до цього масиву. Далі можна отримати доступ до його елементів через квадратні дужки та індекс або використовувати властивості і методи.

// const hobbies = user.hobbies;
// console.log(hobbies); // ["swiming", "music", "sci-fi"]

// const firstHobby = user.hobbies[0];
// console.log(firstHobby); // "swiming"

// const numberOfHobbies = user.hobbies.length;
// console.log(numberOfHobbies); // 3

// ЗАВДАННЯ----------------

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// ownerName - ім'я власника;
// ownerPhone - телефон власника;
// ownerEmail - пошта власника;
// numberOfTags - кількість елементів масиву у властивості tags;
// firstTag - перший елемент масиву у властивості tags;
// lastTag - останній елемент масиву у властивості tags.

// ТЕСТИ
// Оголошена змінна apartment за допомогою const
// Значення змінної apartment - це об'єкт
// Оголошена змінна ownerName за допомогою const
// Значення змінної ownerName - це рядок "Henry"
// Оголошена змінна ownerPhone за допомогою const
// Значення змінної ownerPhone - це "982-126-1588"
// Оголошена змінна ownerEmail за допомогою const
// Значення змінної ownerEmail - це "henry.carter@aptmail.com"
// Оголошена змінна numberOfTags за допомогою const
// Значення змінної numberOfTags - це 3
// Оголошена змінна firstTag за допомогою const
// Значення змінної firstTag - це "premium"
// Оголошена змінна lastTag за допомогою const
// Значення змінної lastTag - це "top"

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment;
// const ownerPhone = apartment;
// const ownerEmail = apartment;
// const numberOfTags = apartment;
// const firstTag = apartment;
// const lastTag = apartment;
// // Change code above this line

// РОЗВ'ЯЗАННЯ-------------

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[2];

// ==========================================================
//             ==== ЗАВДАННЯ 5/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// Другий спосіб отримати доступ до властивості об'єкта - це синтаксис об'єкт["ключ_властивості"]. Схоже на звернення до елемента масиву з відмінністю в тому, що в дужках зазначається не індекс елемента, а ім'я властивості як рядок.

// Синтаксис «квадратних дужок» використовується значно рідше. Як правило у випадках, коли ім'я властивості заздалегідь невідоме або воно зберігається у змінній (як значення параметра функції, наприклад).

// На місце звернення буде повернуто значення властивості з таким ім'ям.
// Якщо в об'єкті відсутня властивість з таким ім'ям, на місце звернення повернеться undefined.
// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// const bookTitle = book["title"];
// console.log(bookTitle); // "The Last Kingdom"

// const bookGenres = book["genres"];
// console.log(bookGenres); // ["historical prose", "adventure"]

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // "Bernard Cornwell"

// ЗАВДАННЯ----------------

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment, використовуючи синтаксис «квадратних дужок».

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.

// ТЕСТИ
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна aptRating
// Значення змінної aptRating - це 4
// Оголошена змінна aptDescr
// Значення змінної aptDescr - це "Spacious apartment in the city center"
// Оголошена змінна aptPrice
// Значення змінної aptPrice - це 2153
// Оголошена змінна aptTags
// Значення змінної aptTags - це ["premium", "promoted", "top"]

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment;
// const aptDescr = apartment;
// const aptPrice = apartment;
// const aptTags = apartment;
// Change code above this line

// РОЗВ'ЯЗАННЯ-------------

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment["rating"];
// const aptDescr = apartment["descr"];
// const aptPrice = apartment["price"];
// const aptTags = apartment["tags"];

// ==========================================================
//             ==== ЗАВДАННЯ 6/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// Після того як об'єкт створений, значення його властивостей можна змінити. Для цього необхідно звернутися до них за ім'ям, наприклад, «через крапку», і присвоїти нове значення.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// book.rating = 9;
// book.public = false;
// book.genres.push("drama");

// console.log(book.rating); // 9
// console.log(book.public); // false
// console.log(book.genres); // ["historical prose", "adventure", "drama"]

// ЗАВДАННЯ----------------

// Доповни код, оновивши значення властивостей об'єкта apartment:

// ціну у властивості price на 5000;
// рейтинг квартири у властивості rating на 4.7;
// ім'я власника у вкладеній властивості name на "Henry Sibola";
// масив тегів у властивості tags, додавши в кінець рядок "trusted".

// ТЕСТИ
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Значення вкладеної властивості price - це число 5000
// Значення вкладеної властивості rating - це число 4.7
// Значення вкладеної властивості name - це рядок "Henry Sibola"
// Значення вкладеної властивості tags - це масив ["premium", "promoted", "top", "trusted"]

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line

// РОЗВ'ЯЗАННЯ-------------

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// ==========================================================
//             ==== ЗАВДАННЯ 7/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// Операція додавання нової властивості після створення об'єкта нічим не відрізняється від зміни значення вже існуючої властивості. Якщо під час запису значення за ім'ям, така властивість відсутня в об'єкті, вона буде створена.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   public: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // "en"

// ЗАВДАННЯ----------------

// Додай об'єкту apartment кілька нових властивостей:

// area - площа в квадратних метрах, число 60;
// rooms - кількість кімнат, число 3;
// location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".

// ТЕСТИ
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Значення вкладеної властивості area - це число 60
// Значення вкладеної властивості rooms - це число 3
// Значення вкладеної властивості location - це об'єкт
// Значення вкладеної властивості location.country - це рядок "Jamaica"
// Значення вкладеної властивості location.city - це рядок "Kingston"

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line

// РОЗВ'ЯЗАННЯ-------------

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Henry Sibola",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = "Jamaica";
// apartment.location.city = "Kingston";

// ==========================================================
//             ==== ЗАВДАННЯ 8/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// Іноді, під час створення об'єкта, значення властивості необхідно взяти зі змінної або параметра функції з таким самим ім'ям, як і сама властивість.

// Синтаксис у наступному прикладі занадто громіздкий, тому що доводиться дублювати ім'я властивості та ім'я змінної, в якій зберігається необхідне значення.

// const name = "Генрі Сибола";
// const age = 25;

// const user = {
//   name: name,
//   age: age,
// };

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25
// Синтаксис коротких властивостей (shorthand properties) вирішує цю проблему, дозволяючи використовувати ім'я змінної як ім'я властивості, а її значення як значення властивості.

// const name = "Генрі Сибола";
// const age = 25;

// const user = {
//   name,
//   age,
// };

// console.log(user.name); // "Генрі Сибола"
// console.log(user.age); // 25
// Тобто, під час оголошення об'єкта достатньо вказати тільки ім'я властивості, а значення буде взято зі змінної з аналогічним ім'ям.

// ЗАВДАННЯ----------------

// Доповни код оголошення об'єкта таким чином, щоб у нього були властивості name, price, image і tags зі значеннями зі змінних з аналогічними іменами. Обов'язково використовуй синтаксис коротких властивостей.

// ТЕСТИ
// Оголошена змінна product
// Значення змінної product - це об'єкт
// Значення вкладеної властивості name - це рядок "Repair Droid"
// Значення вкладеної властивості price - це число 2500
// Значення вкладеної властивості image - це рядок "https://via.placeholder.com/640x480"
// Значення вкладеної властивості tags - це масив["on sale", "trending", "best buy"]

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   // Change code below this line
//   // Change code above this line
// };

// РОЗВ'ЯЗАННЯ-------------

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };

// ==========================================================
//             ==== ЗАВДАННЯ 9/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// Бувають ситуації, коли під час оголошення об'єкта необхідно додати властивість з ім'ям, яке ми заздалегідь не знаємо, тому що воно зберігається як значення змінної або як результат виконання функції.

// Раніше для цього необхідно було спочатку створити об'єкт, а потім додавати властивості через квадратні дужки, що не зовсім зручно.

// const propName = "name";
// const user = {
//   age: 25,
// };

// user[propName] = "Генрі Сибола";
// console.log(user.name); // "Генрі Сибола"
// Синтаксис обчислюваних властивостей (computed properties) допомагає уникнути зайвого коду і, в деяких випадках, спростити його. Значенням обчислюваної властивості може бути будь-який валідний вираз.

// const propName = "name";
// const user = {
//   age: 25,
//   // Ім'я цієї властивості буде взято зі значення змінної propName
//   [propName]: "Генрі Сибола",
// };

// console.log(user.name); // "Генрі Сибола"

// ЗАВДАННЯ----------------

// Доповни код оголошення об'єкта credentials таким чином, щоб в результаті у нього були дві властивості: email і password, імена яких зберігаються у змінних emailInputName і passwordInputName.

// Значенням властивості email повинен бути рядок "henry.carter@aptmail.com", а значенням властивості password - рядок "jqueryismyjam".

// Оголошена змінна credentials
// Значення змінної credentials - це об'єкт
// Об'єкт credentials містить властивість email
// Значення вкладеної властивості email - це рядок "henry.carter@aptmail.com"
// Об'єкт credentials містить властивість password
// Значення вкладеної властивості password - це рядок "jqueryismyjam"

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line

//   // Change code above this line
// };

// РОЗВ'ЯЗАННЯ-------------

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
// };

// ==========================================================
//             ==== ЗАВДАННЯ 10/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// На відміну від масиву або рядка, об'єкт - це не ітерабельна сутність, тобто його не можна перебрати циклами for або for...of. Для перебирання об'єктів використовується спеціальний цикл for...in, який перебирає ключі об'єкта object.

// for (key in object) {
//   // інструкції
// }
// Змінна key доступна тільки в тілі циклу. На кожній ітерації в неї буде записано значення ключа (ім'я) властивості. Для того щоб отримати значення властивості з таким ключем (ім'ям), використовується синтаксис квадратних дужок.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

// ЗАВДАННЯ----------------

// Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.

// ТЕСТИ
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна keys
// Значення змінної keys - це масив ["descr", "rating", "price"]
// Оголошена змінна values
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153]

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// РОЗВ'ЯЗАННЯ-------------

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// ==========================================================
//             ==== ЗАВДАННЯ 11/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// Розберемо концепцію власних і невласних властивостей об'єкта і навчимося правильно використовувати цикл for...in.

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Mango";

// console.log(dog); // {name: 'Mango'}
// console.log(dog.name); // 'Mango'
// console.log(dog.legs); // 4
// Метод Object.create(animal) створює і повертає новий об'єкт, зв'язуючи його з об'єктом animal. Тому можна отримати значення властивості legs, звернувшись до неї як dog.legs, хоча вона відсутня в об'єкті dog - це невласна властивість з об'єкта animal.

// Оператор in, який використовується в циклі for...in, не розрізняє власні та невласні властивості об'єкта. Ця особливість заважає, оскільки ми завжди хочемо перебрати тільки власні властивості. Для того щоб дізнатися, чи є в об'єкті власна властивість, чи немає, використовується метод hasOwnProperty(key), який повертає true або false.

// // ❌ Повертає true для всіх властивостей
// console.log("name" in dog); // true
// console.log("legs" in dog); // true

// // ✅ Повертає true тільки для власних властивостей
// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.hasOwnProperty("legs")); // false
// Тому під час перебору циклом for...in необхідно на кожній ітерації додати перевірку на власну властивість. Навіть якщо зараз ми впевнені у тому, що об'єкт не містить невласні властивості, це захистить від можливих помилок в майбутньому.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Якщо це власна властивість - виконуємо тіло if
//   if (book.hasOwnProperty(key)) {
//     console.log(key);
//     console.log(book[key]);
//   }

//   // Якщо це невласна властивість - нічого не робимо
// }

// ЗАВДАННЯ----------------

// Виконай рефакторинг рішення попереднього завдання, додавши в цикл for...in перевірку на власну властивість.

// Оголошена змінна advert.
// Значення змінної advert - це об'єкт.
// Оголошена змінна apartment.
// Значення змінної apartment - це об'єкт.
// Оголошена змінна keys.
// Значення змінної keys - це масив ["descr", "rating", "price"].
// Оголошена змінна values.
// Значення змінної values - це масив["Spacious apartment in the city center", 4, 2153].

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line

//   keys.push(key);
//   values.push(apartment[key]);

//   // Change code above this line
// }

// РОЗВ'ЯЗАННЯ-------------

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }
// console.log(keys);
// console.log(values);

// ==========================================================
//             ==== ЗАВДАННЯ 12/41 ====
// ==========================================================

// ЗАДАЧА: ПІДРАХУНОК ВЛАСТИВОСТЕЙ

// ЗАВДАННЯ----------------

// Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта в параметрі object. Використовуй змінну propCount для зберігання кількості властивостей об'єкта.

// ТЕСТИ
// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line

//   // Change code above this line
//   return propCount;
// }

// РОЗВ'ЯЗАННЯ-------------

// function countProps(object) {
//   let propCount = 0;
//
//   const keys = Object.keys(object); // Створюємо масив властивостей методом Object.keys

//   // Перебираємо власні властивості масиву keys циклом for of та підраховуємо кількість елементів масиву, що відповідає кількості ключей об'єкта (технічно рахуємо кількість переборів в циклі):

//   for (const key of keys) {
//     propCount += 1;
//   }
//   // Change code above this line
//   console.log(propCount);
//   return propCount;
// }

// countProps({});
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// ==========================================================
//             ==== ЗАВДАННЯ 13/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// Вбудований клас Object має кілька корисних методів для роботи з об'єктами. Перший з них - це Object.keys(obj), який приймає об'єкт і повертає масив ключів його власних властивостей. Якщо в об'єкті немає властивостей, метод поверне порожній масив.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']
// Скомбінувавши результат Object.keys() і цикл for...of, можна зручно перебрати власні властивості об'єкта, не вдаючись до використання архаїчного циклу for...in з перевірками приналежності властивостей.

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   // Ключ
//   console.log(key);
//   // Значення властивості
//   console.log(book[key]);
// }
// Ми перебираємо масив ключів об'єкта і на кожній ітерації отримуємо значення властивості з таким ключем.

// ЗАВДАННЯ----------------

// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.

// ТЕСТИ
// Оголошена змінна apartment.
// Значення змінної apartment - це об'єкт.
// Оголошена змінна keys.
// Значення змінної keys - це масив ["descr", "rating", "price"].
// Значення змінної keys отримане за допомогою методу Object.keys().
// Оголошена змінна values.
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153].
// Значення змінної values отримане за допомогою циклу for...of.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = apartment;

// РОЗВ'ЯЗАННЯ-------------

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// console.log(keys);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);
// ==========================================================
//             ==== ЗАВДАННЯ 14/41 ====
// ==========================================================

// ЗАДАЧА. ПІДРАХУНОК ВЛАСТИВОСТЕЙ 2.0

// ЗАВДАННЯ----------------

// Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і, можливо, але не обов'язково, цикл for...of.

// ТЕСТИ
// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта
// Функція використовує метод Object.keys() і, можливо, цикл for...of

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Change code above this line
// }

// РОЗВ'ЯЗАННЯ-------------

function countProps(object) {
  // Change code below this line
  let propCount = 0;

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }

  return propCount;
  // Change code above this line
}

// ==========================================================
//             ==== ЗАВДАННЯ 15/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 16/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 17/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 18/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 19/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 20/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 21/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 22/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 23/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 24/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 25/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 26/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 27/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 28/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 29/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 30/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 31/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 32/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 33/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 34/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 35/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 36/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 37/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 38/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 39/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 40/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 41/41 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------
