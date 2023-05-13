// ===== АВТОПЕРІВІРКА_Модуль4_ПЕРЕБИРАЮЧІ МЕТОДИ МАСИВУ (array iterative methods) ===========

// ==========================================================
//             ==== ЗАВДАННЯ 1/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Функції не відрізняються від чисел, рядків або масивів - це просто спеціальний тип даних (об'єкт вищого порядку), значення, яке можна зберігати у змінній або передавати у якості аргументу в іншу функцію.

// function greet(name) {
//   return `Ласкаво просимо ${name}.`;
// }

// // Викликаємо функцію greet
// // і виводимо результат у консоль
// console.log(greet("Mango"));
// // Ласкаво просимо Манго.

// // Виводимо функцію greet
// // у консоль, не викликаючи її
// console.log(greet);
// /*
// ƒ greet() {
//      return `Ласкаво просимо ${name}.`;
// }
// */
// У першому лозі ми викликаємо функцію greet за допомогою круглих дужок, і в консоль виводиться результат її виконання. У другому лозі передається посилання на функцію, а не результат її виклику (відсутні круглі дужки), тому в консоль виводиться її тіло. Це означає, що функцію можна присвоїти у змінну або передати як аругмент іншої функції.

// ЗАВДАННЯ----------------

// Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza, а у змінній pointer було посилання на функцію makePizza.

// Оголошена функція makePizza
// Оголошена змінна result
// Значення змінної result - це рядок "Your pizza is being prepared, please wait."
// Значення змінної result отримане за допомогою виклику функції
// Оголошена змінна pointer
// Значення змінної pointer - це посилання на функцію makePizza

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = null;
// const pointer = null;

// // РОЗВ'ЯЗАННЯ-------------

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// console.log(result); // Your pizza is being prepared, please wait.
// console.log(pointer); // ƒ makePizza() { return "Your pizza is being prepared, please wait.";}

// ==========================================================
//             ==== ЗАВДАННЯ 2/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Функція зворотного виклику (callback, колбек) - це функція, яка передається іншій функції як аргумент, а та, в свою чергу, викликає передану функцію.

// Функція вищого порядку (higher order function) - функція, яка приймає у якості параметрів інші функції або повертає функцію у якості результату.

// // Колбек-функція
// function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// }

// // Функція вищого порядку
// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// registerGuest("Mango", greet);
// Ми передали посилання на функцію greet як аргумент, тому вона буде присвоєна в параметр callback і викликана всередині функції registerGuest за допомогою круглих дужок. Ім'я параметра для колбека може бути довільним, головне пам'ятати, що значенням буде функція.

// ЗАВДАННЯ----------------

// Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром (параметр callback) колбек-функцію і повертала її виклик. Функція deliverPizza або makePizza буде передаватися як колбек і очікувати аргументом ім'я готової піци, що доставляється.

// ТЕСТИ
// Оголошена функція deliverPizza
// Оголошена функція makePizza
// Оголошена функція makeMessage
// Функція makeMessage приймає два параметри, названі відповідно до завдання, pizzaName і callback
// Виклик makeMessage("Royal Grand", makePizza) повертає рядок "Pizza Royal Grand is being prepared, please wait..."
// Виклик makeMessage("Ultracheese", deliverPizza) повертає рядок "Delivering Ultracheese pizza."

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName) {
//   return;
// }

// РОЗВ'ЯЗАННЯ-------------

// // перша функція зворотнього виклику (колбек), котру використовує функція вищого порядку:

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// // друга функція зворотнього виклику (колбек), котру використовує функція вищого порядку:

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // функція вищого порядку, котра приймає у якості параметрів зммінні pizzaName та callback:

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);

// // повернуто фнукцію callback() з посиланням (пов'язану) на змінну callback із параметрів функції makeMessage. Функція callback () виступає по типу глушки - дефолтного параметру, котра замінюється на одну з функцій колбеків заданих в аргументах виклику функції вищого порядку

// }
// // Викликаємо вункцію вищого порядку з заданням аргументів:

// console.log(makeMessage("Royal Grand", makePizza));

// виводим в консоль результат виклику функції makeMessage з аргументами ("Назва піци", назва функція колбеку котру потрібно виконати)

// console.log(makeMessage("Ultracheese", deliverPizza));

// ==========================================================
//             ==== ЗАВДАННЯ 3/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Якщо колбек-функція - маленька, і потрібна тільки для передачі аргументом, її можна оголосити безпосередньо на момент виклику функції, в яку передаємо колбек. Така функція буде доступна тільки у якості значення параметра і більше ніде в коді.

// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// // Передаємо інлайн-функцію greet у якості колбека
// registerGuest("Mango", function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// });

// // Передаємо інлайн-функцію notify у якості колбека
// registerGuest("Poly", function notify(name) {
//   console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
// });

// ЗАВДАННЯ----------------

// Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом інлайн колбек-функцію eatPizza(pizzaName), яка логує рядок "Eating pizza <назва піци>".

// ТЕСТИ
// Оголошена функція makePizza
// Функція makePizza приймає два параметри
// Другим аргументом під час виклику makePizza("Ultracheese") передана функція eatPizza з єдиним параметром pizzaName

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese");

// РОЗВ'ЯЗАННЯ-------------

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
// });

// ==========================================================
//             ==== ЗАВДАННЯ 4/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Функція може приймати довільну кількість колбеків. Наприклад, уявімо, що ми пишемо логіку прийняття дзвінків для телефону. Програма повинна увімкнути автовідповідач, якщо абонент - недоступний, або з'єднати дзвінок в іншому випадку. Доступність абонента будемо імітувати генератором випадкового числа, щоб між різними викликами функції можна було отримати різні результати.

// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }

// processCall("Mango");
// Проблема такого підходу полягає у тому, що функція processCall робить занадто багато і прив'язує перевірку доступності абонента до двох заздалегідь визначених дій. Що буде, якщо в майбутньому, замість автовідповідача, потрібно буде залишати голограму?

// Ми могли б написати функцію таким чином, щоб вона повертала якесь значення, і потім за результатом її виконання, робити перевірки і виконувати потрібний код. Але перевірки не стосуються зовнішнього коду і будуть його засмічувати.

// Виконаємо рефакторинг функції таким чином, щоб вона приймала два колбеки onAvailable і onNotAvailable, і викликала їх за умовою.

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`З'єднуємо з ${name}, очікуйте...`);
//   // Логіка прийняття дзвінка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
//   // Логіка активації автовідповідача
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступний, записуємо голограму.`);
//   // Логіка запису голограми
// }

// processCall("Mango", takeCall, activateAnsweringMachine);
// processCall("Poly", takeCall, leaveHoloMessage);

// Колбеки застосовуються для обробки дій користувача на сторінці, на момент обробки запитів на сервер, виконання заздалегідь невідомих функцій тощо. У цьому і полягає їх суть - це функції, призначені для відкладеного виконання.

// ЗАВДАННЯ----------------

// Необхідно написати логіку обробки замовлення піци. Виконай рефакторинг методу order таким чином, щоб він приймав другим і третім параметром два колбеки onSuccess і onError.

// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onError, передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName, метод order повинен повертати результат виклику колбека onSuccess, передаючи йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй.

// ТЕСТИ
// Метод order оголошує три параметри
// Виклик pizzaPalace.order("Smoked", makePizza, onOrderError) повертає "Your order is accepted. Cooking pizza Smoked."
// Виклик pizzaPalace.order("Four meats", makePizza, onOrderError) повертає "Your order is accepted. Cooking pizza Four meats."
// Виклик pizzaPalace.order("Big Mike", makePizza, onOrderError) повертає "Error! There is no pizza with a name Big Mike in the assortment."
// Виклик pizzaPalace.order("Vienna", makePizza, onOrderError) повертає "Error! There is no pizza with a name Vienna in the assortment."

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName) {},
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// РОЗВ'ЯЗАННЯ-------------

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (!this.pizzas.includes(pizzaName)) {
//       return onError(
//         `There is no pizza with a name ${pizzaName} in the assortment.`
//       );
//     }
//     return onSuccess(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// pizzaPalace.order("Smoked", makePizza, onOrderError);
// pizzaPalace.order("Four meats", makePizza, onOrderError);
// pizzaPalace.order("Big Mike", makePizza, onOrderError);
// pizzaPalace.order("Vienna", makePizza, onOrderError);

// ==========================================================
//             ==== ЗАВДАННЯ 5/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Метод перебирання масиву, який використовується для заміни циклів for і for...of в роботі з колекцією.

// массив.forEach(function callback(element, index, array) {
//   // Тіло колбек-функції
// });
// Поелементо перебирає масив.
// Викликає колбек-функцію для кожного елемента масиву.
// Нічого не повертає.
// Аргументи колбек-функції - це значення поточного елемента element, його індекс index і власне вихідний масив array. Можна оголошувати тільки необхідні параметри, найчастіше - це елемент, головне не забувати про їх порядок.

// const numbers = [5, 10, 15, 20, 25];

// // Класичний for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Індекс ${i}, значення ${numbers[i]}`);
// }

// // Метод перебирання forEach
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });
// Єдиним випадком, коли варто використовувати цикли for або for...of для перебирання масиву, - це задачі з перериванням виконання циклу. Перервати виконання методу forEach не можна, він завжди перебирає масив до кінця.

// ЗАВДАННЯ----------------

// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел, і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і повертається як результат роботи функції.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// ТЕСТИ
// Оголошена функція calculateTotalPrice(orderedItems)
// Для перебирання масиву orderedItems використаний метод forEach
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }

//   // Change code above this line
//   return totalPrice;
// }

// РОЗВ'ЯЗАННЯ-------------

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(function (orderedItem) {
//     totalPrice += orderedItem;
//   });

//   // Change code above this line
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

// ==========================================================
//             ==== ЗАВДАННЯ 6/48 ====
// ==========================================================

// ЗАДАЧА. ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ

// ЗАВДАННЯ----------------

// Функція filterArray(numbers, value) приймає масив чисел numbers і повертає новий масив, в якому будуть тільки ті елементи оригінального масиву, які більші за значення параметра value.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// ТЕСТИ
// Оголошена функція filterArray(numbers, value)
// Для перебирання масиву numbers використаний метод forEach
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       filteredNumbers.push(numbers[i]);
//     }
//   }

//   // Change code above this line
//   return filteredNumbers;
// }

// РОЗВ'ЯЗАННЯ-------------

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// ==========================================================
//             ==== ЗАВДАННЯ 7/48 ====
// ==========================================================

// ЗАДАЧА. СПІЛЬНІ ЕЛЕМЕНТИ

// ЗАВДАННЯ----------------

// Функція getCommonElements(firstArray, secondArray) приймає два масиви довільної довжини в параметри firstArray і secondArray, і повертає новий масив їхніх спільних елементів, тобто тих, які присутні в обох масивах.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// Оголошена функція getCommonElements(firstArray, secondArray)
// Для перебирання параметра (масиву) використаний метод forEach
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   for (let i = 0; i < firstArray.length; i += 1) {
//     if (secondArray.includes(firstArray[i])) {
//       commonElements.push(firstArray[i]);
//     }
//   }

//   return commonElements;
//   // Change code above this line
// }

// РОЗВ'ЯЗАННЯ-------------

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(function (firstArrayElem) {
//     if (secondArray.includes(firstArrayElem)) {
//       commonElements.push(firstArrayElem);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []

// ==========================================================
//             ==== ЗАВДАННЯ 8/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Стрілочні функції мають скорочений, лаконічніший синтаксис, що зменшує обсяг коду, особливо коли функція маленька або якщо вона використовується як колбек.

// Усі стрілки створюються як функціональний вираз, і якщо функція - не анонімна, її необхідно присвоювати змінній.

// // Звичайне оголошення функції
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Те саме стрілочною функцією
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };
// Ключове слово function не використовується, замість цього відразу зазначається оголошення параметрів, після нього - символ => і тіло функції.

// Якщо параметрів декілька, то вони перераховуються через кому в круглих дужках, між знаками рівності = і стрілкою =>.

// const add = (a, b, c) => {
//   return a + b + c;
// };
// Якщо параметр один, його можна оголошувати без круглих дужок.

// const add = a => {
//   return a + 5;
// };
// Якщо параметри відсутні, то обов'язково повинні бути порожні круглі дужки.

// const greet = () => {
//   console.log("Привіт!");
// };

// ЗАВДАННЯ----------------

// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.

// Оголошена змінна calculateTotalPrice
// Змінній calculateTotalPrice присвоєна стрілочна функція з параметрами (quantity, pricePerItem)
// Виклик calculateTotalPrice(5, 100) повертає 500
// Виклик calculateTotalPrice(8, 60) повертає 480
// Виклик calculateTotalPrice(3, 400) повертає 1200
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line

// function calculateTotalPrice(quantity, pricePerItem) {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

// РОЗВ'ЯЗАННЯ-------------

// // Change code below this line

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// };

// console.log(calculateTotalPrice(5, 100)); // 500
// console.log(calculateTotalPrice(8, 60)); // 480
// console.log(calculateTotalPrice(3, 400)); // 1200

// ==========================================================
//             ==== ЗАВДАННЯ 9/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// У стрілочної функції після символу => знаходиться її тіло. Існує два варіанти: з фігурними дужками і без них.

// const add = (a, b, c) => {
//   console.log(a, b, c);
//   return a + b + c;
// };
// Якщо є фігурні дужки, і функція повинна повертати якесь значення, необхідно явно поставити return. Це називається явне повернення (explicit return). Такий синтаксис використовується у разі, якщо в тілі функції потрібно виконати ще якісь інструкції, крім повернення значення.

// const add = (a, b, c) => a + b + c;
// Якщо фігурні дужки відсутні, то повертається результат виразу, який стоїть після =>. Це називається неявне повернення (implicit return). У прикладі повернеться результат виразу додавання параметрів a, b і c.

// Синтаксис неявного повернення суттєво скорочує «шум» оголошення функції з тілом і виразом, що повертається, але доречний тільки тоді, коли в тілі функції не потрібно виконувати жодних додаткових інструкцій, крім повернення значення.

// // До
// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Після
// const arrowAdd = (a, b, c) => a + b + c;

// ЗАВДАННЯ----------------

// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона використовувала неявне повернення.

// ТЕСТИ
// Оголошена змінна calculateTotalPrice
// Змінній calculateTotalPrice присвоєна стрілочна функція з параметрами (quantity, pricePerItem)
// У функції використане неявне повернення
// Виклик calculateTotalPrice(5, 100) повертає 500
// Виклик calculateTotalPrice(8, 60) повертає 480
// Виклик calculateTotalPrice(3, 400) повертає 1200
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };
// // Change code above this line

// РОЗВ'ЯЗАННЯ-------------

// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// // Change code above this line

// console.log(calculateTotalPrice(5, 100)); // 500
// console.log(calculateTotalPrice(8, 60)); //480
// console.log(calculateTotalPrice(3, 400)); // 1200

// ==========================================================
//             ==== ЗАВДАННЯ 10/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Анонімні стрілочні функції відмінно підходять як колбеки для перебираючих методів масиву завдяки коротшому синтаксису оголошення, особливо, якщо не потрібне тіло функції.

// const numbers = [5, 10, 15, 20, 25];

// // Оголошення функції
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });

// // Анонімна стрілочна функція
// numbers.forEach((number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// });
// Стрілочну колбек-функцію також можна оголошувати окремо і передавати на неї посилання. Це варто робити, якщо одна функція використовується у декількох місцях програми або якщо вона громіздка.

// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Індекс ${index}, значення ${number}`);
// };

// numbers.forEach(logMessage);

// ЗАВДАННЯ----------------

// Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на стрілочну функцію. Заміни колбек-функцію, передану в метод forEach(), на стрілочну функцію.

// ТЕСТИ
// Оголошена змінна calculateTotalPrice
// Змінній calculateTotalPrice присвоєна стрілочна функція з параметром (orderedItems)
// Для перебирання масиву orderedItems використаний метод forEach
// Колбек для методу forEach - це стрілочна функція
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// // Change code above this line

// РОЗВ'ЯЗАННЯ-------------

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

// ==========================================================
//             ==== ЗАВДАННЯ 11/48 ====
// ==========================================================

// ЗАДАЧА. ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0

// ЗАВДАННЯ----------------

// Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.

// ТЕСТИ
// Оголошена змінна filterArray
// Змінній filterArray присвоєна стрілочна функція з параметрами (numbers, value)
// Для перебирання масиву numbers використаний метод forEach
// Колбек для методу forEach - це стрілочна функція
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// РОЗВ'ЯЗАННЯ-------------

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// ==========================================================
//             ==== ЗАВДАННЯ 12/48 ====
// ==========================================================

// ЗАДАЧА. СПІЛЬНІ ЕЛЕМЕНТИ 2.0

// ЗАВДАННЯ----------------

// Заміни оголошення функції getCommonElements() і колбек для методу forEach() на стрілочні функції.

// ТЕСТИ
// Оголошена змінна getCommonElements.
// Змінній getCommonElements присвоєна стрілочна функція з параметрами (firstArray, secondArray)
// Для перебирання масиву firstArray використаний метод forEach
// Колбек для методу forEach - це стрілочна функція
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

// РОЗВ'ЯЗАННЯ-------------

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
// };

// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []

// ==========================================================
//             ==== ЗАВДАННЯ 13/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Функція з побічними ефектами - це функція, яка в процесі виконання може змінювати або використовувати глобальні змінні, змінювати значення аргументів посилального типу, виконувати операції введення-виведення тощо.

// const dirtyMultiply = (array, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * value;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// dirtyMultiply(numbers, 2);
// // Відбулася мутація вихідних даних - масиву numbers
// console.log(numbers); // [2, 4, 6, 8, 10]
// Функція dirtyMultiply(array, value) множить кожен елемент масиву array на число value. Вона змінює (мутує) вихідний масив за посиланням.

// Чиста функція (pure function) - це функція, результат якої залежить тільки від значень переданих аргументів. За умови однакових аргументів вона завжди повертає один і той самий результат, і не має побічних ефектів, тобто не змінює значення аргументів.

// Напишемо реалізацію чистої функції множення елементів масиву, що повертає новий масив, не змінюючи вихідний.

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Мутація вихідних даних не відбулася
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функція повернула новий масив зі зміненими даними
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// ЗАВДАННЯ----------------

// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення якого - це парне число, додаючи до нього значення параметра value.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а створювала, наповнювала і повертала новий масив з оновленими значеннями.

// ТЕСТИ
// Оголошена функція changeEven(numbers, value)
// Функція changeEven не змінює значення параметра numbers
// Виклик changeEven([1, 2, 3, 4, 5], 10) повертає новий масив [1, 12, 3, 14, 5]
// Виклик changeEven([2, 8, 3, 7, 4, 6], 10) повертає новий масив [12, 18, 3, 7, 14, 16]
// Виклик changeEven([17, 24, 68, 31, 42], 100) повертає новий масив [17, 124, 168, 31, 142]
// Виклик changeEven([44, 13, 81, 92, 36, 54], 100) повертає новий масив [144, 13, 81, 192, 136, 154]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function changeEven(numbers, value) {
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   // Change code above this line
// }

// РОЗВ'ЯЗАННЯ-------------

// function changeEven(numbers, value) {
//   const newNumbers = [];

//   numbers.forEach((number) => {
//     number % 2 === 0
//       ? newNumbers.push(number + value)
//       : newNumbers.push(number);
//   });
//   return newNumbers;
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10)); // [1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // [12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100)); // [17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // [144, 13, 81, 192, 136, 154]

// ==========================================================
//             ==== ЗАВДАННЯ 14/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Більшість перебираючих методів масиву - це чисті функції. Вони створюють новий масив, заповнюють його, застосовуючи до значення кожного елемента зазначену колбек-функцію, після чого повертають цей новий масив.

// Метод map(callback) використовується для трансформації масиву. Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує у новий масив, який і буде результатом виконання методу.

// масив.map((element, index, array) => {
//   // Тіло колбек-функції
// });
// Поелементо перебирає оригінальний масив.
// Не змінює оригінальний масив.
// Результат роботи колбек-функції записується у новий масив.
// Повертає новий масив однакової довжини.
// Його можна використовувати для того, щоб змінити кожен елемент масиву. Оригінальний масив використовується як еталон, на основі якого можна зробити іншу колекцію.

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
// console.log(planetsInUpperCase); // ["EARTH", "MARS", "VENUS", "JUPITER"]

// const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
// console.log(planetsInLowerCase); // ["earth", "mars", "venus", "jupiter"]

// // Оригінальний масив не змінився
// console.log(planets); // ["Earth", "Mars", "Venus", "Jupiter"]
// Використання анонімних стрілочних функцій з неявним поверненням суттєво скорочує «шум» оголошення колбек-функції, що робить код чистішим і простішим для сприйняття.

// ЗАВДАННЯ----------------

// Доповни код таким чином, щоб у змінній planetsLengths вийшов масив довжин назв планет. Обов'язково використовуй метод map().

// ТЕСТИ
// Оголошена змінна planets
// Значення змінної planets - це масив ["Earth", "Mars", "Venus", "Jupiter"]
// Оголошена змінна planetsLengths
// Значення змінної planetsLengths - це масив [5, 4, 5, 7]
// Для перебирання масиву планет використаний метод map()

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets;

// РОЗВ'ЯЗАННЯ-------------

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map((planat) => planat.length);

// console.log(planetsLengths); // [5, 4, 5, 7]

// ==========================================================
//             ==== ЗАВДАННЯ 15/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Ми вже знаємо, що повсякденне завдання - це маніпуляція масивом об'єктів. Наприклад, отримати масив значень властивості з усіх об'єктів. У нас є масив студентів, а потрібно отримати окремий масив їхніх імен.

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const names = students.map(student => student.name);
// console.log(names); // ["Mango", "Poly", "Ajax", "Kiwi", "Houston"]
// Використовуючи метод map(), ми можемо перебрати масив об'єктів, і в колбек-функції повернути значення властивості кожного з них.

// ЗАВДАННЯ----------------

// Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв книг (властивість title) з усіх об'єктів масиву books.

// ТЕСТИ
// Оголошена змінна books
// Значення змінної books - це масив
// Оголошена змінна titles
// Значення змінної titles - це масив ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]
// Для перебирання масиву books використовується метод map() як чиста функція

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books;

// РОЗВ'ЯЗАННЯ-------------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map((book) => book.title);

// console.log(titles); // ['The Last Kingdom', 'Beside Still Waters', 'The Dream of a Ridiculous Man', 'Redder Than Blood', 'Enemy of God']

// ==========================================================
//             ==== ЗАВДАННЯ 16/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Метод flatMap(callback) - аналогічний методу map(), але застосовується у випадках, коли результат - це багатовимірний масив, який необхідно «розгладити».

// масив.flatMap((element, index, array) => {
//   // Тіло колбек-функції
// });
// У масиві students зберігається список студентів зі списком предметів, які відвідує студент, у властивості courses. Кілька студентів можуть відвідувати один і той самий предмет. Необхідно скласти список всіх предметів, які відвідує ця група студентів, поки що, навіть повторюваних.

// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// students.map(student => student.courses);
// // [["mathematics", "physics"], ["science", "mathematics"], ["physics", "biology"]]

// students.flatMap(student => student.courses);
// // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
// Він викликає колбек-функцію для кожного елемента вихідного масиву, а результат її роботи записує у новий масив. Відмінність від map() у тому, що новий масив «розгладжується» на глибину, що дорівнює одиниці (одна вкладеність). Цей розгладжений масив і є результатом роботи flatMap().

// ЗАВДАННЯ----------------

// Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив усіх жанрів книг (властивість genres) з масиву книг books.

// ТЕСТИ
// Оголошена змінна books
// Значення змінної books - це масив об'єктів
// Оголошена змінна genres
// Значення змінної genres - це масив [ "adventure", "history", "fiction", "horror", "mysticism" ]
// Для перебирання масиву books використовується метод flatMap()

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books;

// РОЗВ'ЯЗАННЯ-------------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap((genre) => genre.genres);

// console.log(genres); // ['adventure', 'history', 'fiction', 'horror', 'mysticism']

// ==========================================================
//             ==== ЗАВДАННЯ 17/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// ЗАВДАННЯ----------------

// Доповни функцію getUserNames(users) таким чином, щоб вона повертала масив імен користувачів (властивість name) з масиву об'єктів в параметрі users.

// Оголошена змінна getUserNames
// Змінній getUserNames присвоєна стрілочна функція з параметром (users).
// Для перебирання параметра users використовується метод map()
// Виклик функції із зазначеним масивом користувачів повертає масив ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const getUserNames = users => {

//   };
//   // Change code above this line

// РОЗВ'ЯЗАННЯ-------------

// const getUserNames = (users) => {
//   return users.map((user) => user.name);
// };

// ==========================================================
//             ==== ЗАВДАННЯ 18/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// Доповни функцію getUserEmails(users) таким чином, щоб вона повертала масив поштових адрес користувачів (властивість email) з масиву об'єктів в параметрі users.

// ТЕСТИ
// Оголошена змінна getUserNames
// Змінній getUserNames присвоєна стрілочна функція з параметром (users)
// Для перебирання параметра users використовується метод map()
// Виклик функції із зазначеним масивом користувачів повертає масив ["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const getUserEmails = users => {

//   };
//   // Change code above this line

// РОЗВ'ЯЗАННЯ-------------

// const getUserEmails = (users) => {
//   return users.map((user) => user.email);
// };

// ==========================================================
//             ==== ЗАВДАННЯ 19/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Метод filter(callback) використовується для єдиної операції - фільтрації масиву, тобто, коли необхідно вибрати більше одного елемента з колекції за певним критерієм.

// масив.filter((element, index, array) => {
//   // Тіло колбек-функції
// });
// Не змінює оригінальний масив.
// Поелементо перебирає оригінальний масив.
// Повертає новий масив.
// Додає у масив, що повертається, елементи, які задовольняють умови колбек-функції.
// Якщо колбек повернув true, елемент додається у масив, що повертається.
// Якщо колбек повернув false, елемент не додається у масив, що повертається.
// Якщо жоден елемент не задовольнив умову, повертає порожній масив.
// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// // Оригінальний масив не змінився
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// Тобто метод filter викликає колбек-функцію для кожного елемента вихідного масиву і, якщо результат її виконання - true, додає поточний елемент у новий масив.

// ЗАВДАННЯ----------------

// Доповни код таким чином, щоб у змінній evenNumbers утворився масив парних чисел з масиву numbers, а в змінній oddNumbers - масив непарних. Обов'язково використовуй метод filter().

// Оголошена змінна numbers
// Значення змінної numbers - це масив [17, 24, 82, 61, 36, 18, 47, 52, 73]
// Оголошена змінна evenNumbers
// Значення змінної evenNumbers - це масив [24, 82, 36, 18, 52]
// Оголошена змінна oddNumbers
// Значення змінної oddNumbers - це масив [17, 61, 47, 73]
// Для перебирання масиву numbers використаний метод filter()

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers;
// const oddNumbers = numbers;

// РОЗВ'ЯЗАННЯ-------------

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

// ==========================================================
//             ==== ЗАВДАННЯ 20/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Використовуючи метод filter(), можна виконати фільтрацію масиву таким чином, що у ньому залишаться тільки унікальні елементи. Цей прийом працює тільки з масивом примітивних значень - не об'єктів.

// Повернемося до групи студентів і масиву усіх відвідуваних предметів, які ми отримали методом flatMap().

// const students = [
//   { name: "Mango", courses: ["mathematics", "physics"] },
//   { name: "Poly", courses: ["science", "mathematics"] },
//   { name: "Kiwi", courses: ["physics", "biology"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
// У змінній allCourses зберігається масив усіх відвідуваних предметів, які можуть повторюватися. Завдання полягає у тому, щоб створити новий масив, в якому будуть тільки унікальні предмети, тобто без повторень.

// const uniqueCourses = allCourses.filter(
//   (course, index, array) => array.indexOf(course) === index
// );
// Використовуючи array.indexOf(course), виконуємо пошук першого збігу поточного елемента course і отримуємо його індекс в оригінальному масиві усіх курсів. В параметрі index зберігається індекс поточного елемента course, перебираючи масив методом filter.

// Якщо результат indexOf() і значення index рівні - це унікальний елемент, тому що таке значення зустрічається в масиві вперше, і на поточній ітерації фільтр обробляє саме його.

// # Масив усіх курсів
// ["mathematics", "physics", "science", "mathematics", "physics", "biology"];
// Для елемента "mathematics" під індексом 0:

// indexOf() поверне 0, тому що шукає перший збіг.
// Значення параметра index буде 0.
// Вони рівні, а отже, це унікальний елемент.
// Для елемента "mathematics" під індексом 3:

// indexOf() поверне 0, тому що шукає перший збіг.
// Значення параметра index буде 3.
// Вони не рівні, а отже, це повторюваний - не унікальний елемент.

// ЗАВДАННЯ----------------

// Доповни код таким чином, щоб у змінній allGenres був масив всіх жанрів книг (властивість genres) з масиву books, а у змінній uniqueGenres - масив унікальних жанрів, без повторень.

// Оголошена змінна books
// Значення змінної books - це масив об'єктів
// Оголошена змінна allGenres
// Значення змінної allGenres - це масив ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
// Оголошена змінна uniqueGenres
// Значення змінної uniqueGenres - це масив ["adventure", "history", "fiction", "mysticism", "horror"]
// Для обчислення значення змінної allGenders використаний метод flatMap()
// Для обчислення значення змінної uniqueGenres використаний метод filter()

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books;
// const uniqueGenres = allGenres;

// РОЗВ'ЯЗАННЯ-------------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genre, index, arrey) => arrey.indexOf(genre) === index
// );

// console.log(allGenres); // ['adventure', 'history', 'fiction', 'mysticism', 'horror', 'mysticism', 'adventure']
// console.log(uniqueGenres); // ['adventure', 'history', 'fiction', 'mysticism', 'horror']

// ==========================================================
//             ==== ЗАВДАННЯ 21/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Під час роботи з масивом об'єктів виконується фільтрація за значенням певної властивості. У підсумку, утворюється новий масив відфільтрованих об'єктів.

// Наприклад, у нас є масив студентів з балами за тест. Необхідно відфільтрувати кращих (бал вище 80), гірших (бал нижче 50) і середніх студентів (бал від 50 до 80).

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Mango і Kiwi

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Ajax

// // В колбек-функції зручно деструктуризувати властивості об'єкта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Poly і Houston

// ЗАВДАННЯ----------------

// Використовуючи метод filter(), доповни код таким чином, щоб:

// У змінній topRatedBooks утворився масив книг, рейтинг яких (властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.

// ТЕСТИ
// Оголошена змінна books
// Значення змінної books - це масив об'єктів
// Оголошена змінна MIN_RATING
// Значення змінної MIN_RATING - це число 8
// Оголошена змінна AUTHOR
// Значення змінної AUTHOR - це рядок "Bernard Cornwell"
// Оголошена змінна topRatedBooks
// Значення змінної topRatedBooks - це масив книг з рейтингом, вищим за 8
// Оголошена змінна booksByAuthor
// Значення змінної booksByAuthor - це масив книг, автор яких "Bernard Cornwell"
// Для перебирання масиву books використаний метод filter()

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books;
// const booksByAuthor = books;

// РОЗВ'ЯЗАННЯ-------------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(({ rating }) => rating >= MIN_RATING);
// const booksByAuthor = books.filter(({ author }) => author === AUTHOR);

// console.table(topRatedBooks);
// console.table(booksByAuthor);

// ==========================================================
//             ==== ЗАВДАННЯ 22/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// ЗАВДАННЯ----------------

// Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона повертала масив користувачів, у яких колір очей (властивість eyeColor) збігається зі значенням параметра color.

// ТЕСТИ
// Оголошена змінна getUsersWithEyeColor
// Змінній getUsersWithEyeColor присвоєна стрілочна функція з параметрами (users, color)
// Для перебирання параметра users використовується метод filter()
// Якщо значення параметра color - це "blue", функція повертає масив об'єктів користувачів з іменами Moore Hensley, Sharlene Bush і Carey Barr
// Якщо значення параметра color - це "green", функція повертає масив об'єктів користувачів з іменами Ross Vazquez і Elma Head
// Якщо значення параметра color - це "brown", функція повертає масив об'єктів користувачів з іменами Blackburn Dotson і Sheree Anthony
// Якщо значення параметра color - це будь-який інший рядок, функція повертає порожній масив
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const getUsersWithEyeColor = (users, color) => {

// };
// // Change code above this line

// РОЗВ'ЯЗАННЯ-------------

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(({ eyeColor }) => eyeColor === color);
// };

// ==========================================================
//             ==== ЗАВДАННЯ 23/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ];

// ЗАВДАННЯ----------------

// Доповни функцію getUsersWithAge(users, minAge, maxAge) таким чином, щоб вона повертала масив користувачів, вік яких (властивість age) потрапляє у проміжок від minAge до maxAge.

// ТЕСТИ
// Оголошена змінна getUsersWithAge
// Змінній getUsersWithAge присвоєна стрілочна функція з параметрами (users, minAge, maxAge)
// Для перебирання параметра users використовується метод filter()
// Якщо значення параметрів minAge і maxAge дорівнюють 20 і 30 відповідно, функція повертає масив об'єктів користувачів з іменами Ross Vazquez, Elma Head і Carey Barr
// Якщо значення параметрів minAge і maxAge дорівнюють 30 і 40 відповідно, функція повертає масив об'єктів користувачів з іменами Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony
// Якщо значення параметрів minAge і maxAge дорівнюють 80 і 100 відповідно, функція повертає порожній масив
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {

// };
// // Change code above this line

// РОЗВ'ЯЗАННЯ-------------

// const getUsersWithAge = (users, minAge, maxAge) => {
//   return users.filter(({ age }) => age >= minAge && age <= maxAge);
// };

// ==========================================================
//             ==== ЗАВДАННЯ 24/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// ЗАВДАННЯ----------------

// Доповни функцію getUsersWithFriend(users, friendName) таким чином, щоб вона повертала масив користувачів, у яких є один з ім'ям в параметрі friendName. Масив друзів користувача зберігається у властивості friends.

// ТЕСТИ
// Оголошена змінна getUsersWithFriend
// Змінній getUsersWithFriend присвоєна стрілочна функція з параметрами (users, friendName)
// Для перебирання параметра users використовується метод filter()
// Якщо значення параметра friendName - це рядок "Briana Decker", функція повертає масив об'єктів користувачів з іменами Sharlene Bush і Sheree Anthony
// Якщо значення параметра friendName - це рядок "Goldie Gentry", функція повертає масив об'єктів користувачів з іменами Elma Head і Sheree Anthony
// Якщо значення параметра friendName - це рядок "Adrian Cross", функція повертає порожній масив
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {

// };
// // Change code above this line

// РОЗВ'ЯЗАННЯ-------------

// const getUsersWithFriend = (users, friendName) =>
//   users.filter((user) => user.friends.includes(friendName));
// console.table(
//   getUsersWithFriend(
//     [
//       {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37,
//       },
//       {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34,
//       },
//       {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24,
//       },
//       {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21,
//       },
//       {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27,
//       },
//       {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38,
//       },
//       {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39,
//       },
//     ],
//     "Briana Decker"
//   )
// );

// ==========================================================
//             ==== ЗАВДАННЯ 25/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// ЗАВДАННЯ----------------

// Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів всіх користувачів (властивість friends). У декількох користувачів можуть бути однакові друзі, зроби так, щоб масив, що повертається, не містив повторень.

// Оголошена змінна getFriends
// Змінній getFriends присвоєна стрілочна функція з параметром (users)
// Виклик функції із зазначеним масивом користувачів повертає масив ["Sharron Pace", "Briana Decker", "Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner", "Goldie Gentry", "Aisha Tran", "Jordan Sampson", "Eddie Strong", "Jacklyn Lucas", "Linda Chapman"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const getFriends = (users) => {

// };
// // Change code above this line

// РОЗВ'ЯЗАННЯ-------------

// const getFriends = (users) => {
//   const allFrieds = users.flatMap((user) => user.friends);
//   const uniqueFriens = allFrieds.filter(
//     (friend, index, array) => array.indexOf(friend) === index
//   );
//   return uniqueFriens;
// };

// console.table([
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39,
//   },
// ]);

// ==========================================================
//             ==== ЗАВДАННЯ 26/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// ЗАВДАННЯ----------------

// Доповни функцію getActiveUsers(users) таким чином, щоб вона повертала масив активних користувачів, значення властивості isActive яких - true.

// Оголошена змінна getActiveUsers Змінній getActiveUsers присвоєна стрілочна функція з параметром users
// Для перебирання параметра users використовується метод filter()
// Виклик функції із зазначеним масивом користувачів повертає масив об'єктів користувачів з іменами Sharlene Bush, Elma Head, Carey Barr і Sheree Anthony
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const getActiveUsers = (users) => {

// };
// // Change code above this line

// РОЗВ'ЯЗАННЯ-------------

// const getActiveUsers = (users) =>
//   users.filter((user) => user.isActive === true);

// console.table(
//   getActiveUsers([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//       age: 37,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//       age: 34,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//       age: 24,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//       age: 21,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//       age: 27,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//       age: 38,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//       age: 39,
//     },
//   ])
// );

// ==========================================================
//             ==== ЗАВДАННЯ 27/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// ЗАВДАННЯ----------------

// Доповни функцію getInactiveUsers(users) таким чином, щоб вона повертала масив неактивних користувачів, значення властивості isActive яких - false.

// ТЕСТИ
// Оголошена змінна getInactiveUsers.
// Змінній getInactiveUsers присвоєна стрілочна функція з параметром users
// Для перебирання параметра users використовується метод filter()
// Виклик функції із зазначеним масивом користувачів повертає масив об'єктів користувачів з іменами Moore Hensley, Ross Vazquez і Blackburn Dotson
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const getInactiveUsers = (users) => {

// };
// // Change code above this line

// РОЗВ'ЯЗАННЯ-------------

// const getInactiveUsers = (users) =>
//   users.filter((user) => user.isActive === false); // або !== true

// ==========================================================
//             ==== ЗАВДАННЯ 28/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Якщо метод filter(callback) використовується для пошуку всіх елементів, що задовольняють умову, то метод find(callback) дозволяє знайти і повернути перший відповідний елемент, після чого перебирання масиву припиняється. Тобто він шукає до першого збігу.

// масив.find((element, index, array) => {
//   // Тіло колбек-функції
// });
// Не змінює оригінальний масив.
// Поелементо перебирає оригінальний масив.
// Повертає перший елемент, що задовольняє умову, тобто коли колбек повертає true.
// Якщо жоден елемент не задовольнив умову, тобто для всіх елементів колбек повернув false, метод повертає undefined.
// Метод find() використовується для одного завдання - пошуку елемента за унікальним значенням властивості. Наприклад, пошук користувача за поштою, автомобіля - за серійним номером, книги - за назвою тощо.

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// colorPickerOptions.find((option) => option.label === "blue"); // { label: "blue", color: "#2196F3" }
// colorPickerOptions.find((option) => option.label === "pink"); // { label: "pink", color: "#E91E63" }
// colorPickerOptions.find((option) => option.label === "white"); // undefined

// ЗАВДАННЯ----------------

// Використовуючи метод find(), доповни код таким чином, щоб:

// У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі значенням змінної BOOK_TITLE.
// У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням змінної AUTHOR.

// ТЕСТИ
// Оголошена змінна books
// Значення змінної books - це масив
// Оголошена змінна BOOK_TITLE
// Значення змінної BOOK_TITLE - це рядок "The Dream of a Ridiculous Man"
// Оголошена змінна AUTHOR
// Значення змінної AUTHOR - це рядок "Robert Sheckley"
// Оголошена змінна bookWithTitle
// Значення змінної bookWithTitle - це об'єкт книги з назвою вище "The Dream of a Ridiculous Man"
// Оголошена змінна bookByAuthor
// Значення змінної bookByAuthor - це об'єкт книги автора "Robert Sheckley"
// Для перебирання масиву books використаний метод find()

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books;
// const bookByAuthor = books;

// РОЗВ'ЯЗАННЯ-------------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";
// // Change code below this line

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

// console.table(bookWithTitle);
// console.table(bookByAuthor);

// ==========================================================
//             ==== ЗАВДАННЯ 29/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// ЗАВДАННЯ----------------

// Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала об'єкт користувача, пошта якого (властивість email) збігається зі значенням параметра email.

// ТЕСТИ
// Оголошена функція getUserWithEmail(users, email)
// Для перебирання параметра users використовується метод find()
// Якщо значення параметра email - це "shereeanthony@kog.com", функція повертає об'єкт користувача з ім'ям Sheree Anthony
// Якщо значення параметра email - це "elmahead@omatom.com", функція повертає об'єкт користувача з ім'ям Elma Head
// Якщо значення параметра email - це "blackburndotson@furnigeer.com", функція повертає об'єкт користувача з ім'ям Blackburn Dotson
// Якщо в масиві users відсутній користувач з поштою із параметра email, функція повертає undefined
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const getUserWithEmail = (users, email) => {

// };
// // Change code above this line

// РОЗВ'ЯЗАННЯ-------------

// const getUserWithEmail = (users, email) =>
//   users.find((user) => user.email === email);

// ==========================================================
//             ==== ЗАВДАННЯ 30/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Метод every(callback) перевіряє, чи проходять всі елементи масиву тест колбек-функції. Повертає true або false.

// масив.every((element, index, array) => {
//   // Тіло колбек-функції
// });
// Не змінює оригінальний масив.
// Поелементо перебирає оригінальний масив.
// Повертає true, якщо всі елементи масиву задовольняють умову.
// Повертає false, якщо хоча б один елемент масиву не задовольняє умову.
// Перебирання масиву припиняється, якщо колбек повертає false.
// // Усі елементи більші або дорівнюють нулю? - так
// [1, 2, 3, 4, 5].every((value) => value >= 0); // true

// // Усі елементи більші або дорівнюють нулю? - ні
// [1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false
// При роботі з масивом об'єктів перевіряється значення якоїсь їх властивості.

// ЗАВДАННЯ----------------

// Використовуючи метод every(), доповни код таким чином, щоб:

// У змінній eachElementInFirstIsEven був результат перевірки всіх елементів масиву firstArray на парність.
// У змінній eachElementInFirstIsOdd був результат перевірки всіх елементів масиву firstArray на непарність.
// У змінній eachElementInSecondIsEven був результат перевірки всіх елементів масиву secondArray на парність.
// У змінній eachElementInSecondIsOdd був результат перевірки всіх елементів масиву secondArray на непарність.
// У змінній eachElementInThirdIsEven був результат перевірки всіх елементів масиву thirdArray на парність.
// У змінній eachElementInThirdIsOdd був результат перевірки всіх елементів масиву thirdArray на непарність.

// ТЕСТИ
// Оголошена змінна firstArray
// Значення змінної firstArray - це масив [26, 94, 36, 18]
// Оголошена змінна secondArray
// Значення змінної secondArray - це масив [17, 61, 23]
// Оголошена змінна thirdArray
// Значення змінної thirdArray - це масив [17, 26, 94, 61, 36, 23, 18]
// Оголошена змінна eachElementInFirstIsEven
// Значення змінної eachElementInFirstIsEven - це буль true
// Оголошена змінна eachElementInFirstIsOdd
// Значення змінної eachElementInFirstIsOdd - це буль false
// Оголошена змінна eachElementInSecondIsEven
// Значення змінної eachElementInSecondIsEven - це буль false
// Оголошена змінна eachElementInSecondIsOdd
// Значення змінної eachElementInSecondIsOdd - це буль true
// Оголошена змінна eachElementInThirdIsEven
// Значення змінної eachElementInThirdIsEven - це буль false
// Оголошена змінна eachElementInThirdIsOdd
// Значення змінної eachElementInThirdIsOdd - це буль false
// Для перебирання масивів використаний метод every()

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray;
// const eachElementInFirstIsOdd = firstArray;

// const eachElementInSecondIsEven = secondArray;
// const eachElementInSecondIsOdd = secondArray;

// const eachElementInThirdIsEven = thirdArray;
// const eachElementInThirdIsOdd = thirdArray;

// РОЗВ'ЯЗАННЯ-------------

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);

// console.log(eachElementInFirstIsEven); // true
// console.log(eachElementInFirstIsOdd); // false
// console.log(eachElementInSecondIsEven); // false
// console.log(eachElementInSecondIsOdd); // true
// console.log(eachElementInThirdIsEven); // false
// console.log(eachElementInThirdIsOdd); // false

// ==========================================================
//             ==== ЗАВДАННЯ 31/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// ЗАВДАННЯ----------------

// Доповни функцію isEveryUserActive(users) таким чином, щоб вона перевіряла, чи всі користувачі зараз активні (властивість isActive) і повертала true або false.

// ТЕСТИ
// Оголошена змінна isEveryUserActive
// Змінній isEveryUserActive присвоєна стрілочна функція з параметром (users)
// Для перебирання параметра users використовується метод every()
// Виклик функції із зазначеним масивом користувачів повертає false
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const isEveryUserActive = (users) => {

// };
// // Change code above this line

// РОЗВ'ЯЗАННЯ-------------

// const isEveryUserActive = (users) => users.every((user) => user.isActive === true);

// ==========================================================
//             ==== ЗАВДАННЯ 32/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Метод some(callback) перевіряє, чи проходить хоча б один елемент масиву тест колбек-функції. Повертає true або false.

// масив.some((element, index, array) => {
//   // Callback function body
// });
// Не змінює оригінальний масив.
// Поелементо перебирає оригінальний масив.
// Повертає true, якщо хоча б один елемент масиву задовольняє умову.
// Повертає false, якщо жоден елемент масиву не задовольняє умову.
// Перебирання масиву припиняється, якщо колбек повертає true.
// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що більший або дорівнює нулю? - так
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Чи є хоча б один елемент, що менший нуля? - ні
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// // Чи є хоча б один елемент, що менший нуля? - так
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true

// ЗАВДАННЯ----------------

// Використовуючи метод some(), доповни код таким чином, щоб:

// У змінній anyElementInFirstIsEven був результат перевірки наявності парних елементів в масиві firstArray.
// У змінній anyElementInFirstIsOdd був результат перевірки наявності непарних елементів в масиві firstArray.
// У змінній anyElementInSecondIsEven був результат перевірки наявності парних елементів в масиві secondArray.
// У змінній anyElementInSecondIsOdd був результат перевірки наявності непарних елементів в масиві secondArray.
// У змінній anyElementInThirdIsEven був результат перевірки наявності парних елементів в масиві thirdArray.
// У змінній anyElementInThirdIsOdd був результат перевірки наявності непарних елементів в масиві thirdArray.

// ТЕСТИ
// Оголошена змінна firstArray
// Значення змінної firstArray - це масив [26, 94, 36, 18]
// Оголошена змінна secondArray
// Значення змінної secondArray - це масив [17, 61, 23]
// Оголошена змінна thirdArray
// Значення змінної thirdArray - це масив [17, 26, 94, 61, 36, 23, 18]
// Оголошена змінна anyElementInFirstIsEven
// Значення змінної anyElementInFirstIsEven - це буль true
// Оголошена змінна anyElementInFirstIsOdd
// Значення змінної anyElementInFirstIsOdd - це буль false
// Оголошена змінна anyElementInSecondIsEven
// Значення змінної anyElementInSecondIsEven - це буль false
// Оголошена змінна anyElementInSecondIsOdd
// Значення змінної anyElementInSecondIsOdd - це буль true
// Оголошена змінна anyElementInThirdIsEven
// Значення змінної anyElementInThirdIsEven - це буль true
// Оголошена змінна anyElementInThirdIsOdd
// Значення змінної anyElementInThirdIsOdd - це буль true
// Для перебирання масивів використаний метод some()

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray;
// const anyElementInFirstIsOdd = firstArray;

// const anyElementInSecondIsEven = secondArray;
// const anyElementInSecondIsOdd = secondArray;

// const anyElementInThirdIsEven = thirdArray;
// const anyElementInThirdIsOdd = thirdArray;

// РОЗВ'ЯЗАННЯ-------------

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);

// console.log(anyElementInFirstIsEven); // true
// console.log(anyElementInFirstIsOdd); // false
// console.log(anyElementInSecondIsEven); // false
// console.log(anyElementInSecondIsOdd); // true
// console.log(anyElementInThirdIsEven); // true
// console.log(anyElementInThirdIsOdd); // true

// ==========================================================
//             ==== ЗАВДАННЯ 33/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// ЗАВДАННЯ----------------

// Доповни функцію isAnyUserActive(users) таким чином, щоб вона перевіряла наявність активних користувачів (властивість isActive) і повертала true або false.

// ТЕСТИ
// Оголошена функція isAnyUserActive(users)
// Для перебирання параметра users використовується метод some()
// Виклик функції із зазначеним масивом користувачів повертає true
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const isAnyUserActive = users => {

// };
// // Change code above this line

// РОЗВ'ЯЗАННЯ-------------

// const isAnyUserActive = (users) => users.some((user) => user.isActive === true);

// ==========================================================
//             ==== ЗАВДАННЯ 34/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Метод reduce(callback, initialValue) використовується для послідовної обробки кожного елемента масиву із збереженням проміжного результату, як акумулятор. Трохи складніший за інші методи для засвоєння, але результат вартий того.

// массив.reduce((previousValue, element, index, array) => {
//   // Тіло колбек-функції
// }, initialValue);
// Не змінює оригінальний масив.
// Поелементо перебирає оригінальний масив.
// Повертає все, що завгодно.
// Робить все, що завгодно.
// Найлегше уявити його роботу на прикладі підрахунку суми елементів масиву.

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 32
// Перший параметр колбек-функції (previousValue) - це акумулятор, тобто проміжний результат. Значення, яке поверне колбек-функція на поточній ітерації, буде значенням цього параметра на наступній ітерації.

// Другим аргументом для reduce() можна передати необов'язкове початкове значення акумулятора - параметр initialValue.

// # Спочатку метод reduce() створює внутрішню змінну-акумулятор і
// # присвоює їй значення параметра initialValue або першого елемента
// # масиву, що перебирається, якщо initialValue не задане.
// previousValue = 0

// # Потім колбек-функція викликається для кожного елемента масиву. Поточне значення
// # параметра previousValue - це те, що повернула колбек-функція на минулій ітерації.
// Ітерація 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
// Ітерація 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
// Ітерація 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
// Ітерація 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
// Ітерація 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

// # Після завершення перебирання всього масиву, метод reduce() повертає значення акумулятора.
// Результат - 32
// Тобто метод reduce() використовується, коли необхідно взяти «багато» і привести до «одного». У повсякденних завданнях його застосування зводиться до роботи з числами.

// ЗАВДАННЯ----------------

// му сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх. Доповни код таким чином, щоб у змінній totalPlayTime вийшло загальний ігровий час з масиву playtimes.

// ТЕСТИ
// Оголошена змінна players
// Значення змінної players - це об'єкт гравців з ігровим часом кожного
// Оголошена змінна playtimes
// Значення змінної playtimes - це масив [1270, 468, 710, 244]
// Оголошена змінна totalPlayTime
// Значення змінної totalPlayTime - це число 2692
// Для перебирання масиву playtimes використовується метод reduce()
// Оголошена змінна averagePlayTime
// Значення змінної averagePlayTime - це число 673

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes;

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// РОЗВ'ЯЗАННЯ-------------

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce(
//   (previousTimePlayer, timeEveryPlayer) => previousTimePlayer + timeEveryPlayer,
//   0
// );

// console.log("Сумарний час гри, год :", totalPlayTime); // 2692

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log("Середній час гри, год", averagePlayTime); // 673

// ==========================================================
//             ==== ЗАВДАННЯ 35/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Під час роботи з масивом об'єктів виконується редукування за значенням певної властивості. Наприклад, у нас є масив студентів з балами за тест. Необхідно отримати середній бал.

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// // Назва акумулятора може бути довільною, це просто параметр функції
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);

// const averageScore = totalScore / students.length;

// ЗАВДАННЯ----------------

// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу. Розрахувати час для кожного з гравців можна, розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed).

// ТЕСТИ
// Оголошена змінна players
// Значення змінної players - це масив об'єктів гравців
// Оголошена змінна totalAveragePlaytimePerGame
// Значення змінної totalAveragePlaytimePerGame - це число 1023
// Для перебирання масиву players використовується метод reduce()

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players;

// РОЗВ'ЯЗАННЯ-------------

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce(
//   (total, player) => total + player.playtime / player.gamesPlayed,
//   0
// );

// console.log(totalAveragePlaytimePerGame); // 1023

// ==========================================================
//             ==== ЗАВДАННЯ 36/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// ЗАВДАННЯ----------------

// Доповни функцію calculateTotalBalance(users) таким чином, щоб вона рахувала і повертала суму всіх коштів (властивість balance), які зберігають користувачі з масиву users.

// ТЕСТИ
// Оголошена змінна calculateTotalBalance
// Змінній calculateTotalBalance присвоєна стрілочна функція з параметром (users)
// Для перебирання параметра users використовується метод reduce()
// Виклик функції із зазначеним масивом користувачів повертає число 20916
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const calculateTotalBalance = users => {

// };
// // Change code above this line

// РОЗВ'ЯЗАННЯ-------------

// const calculateTotalBalance = (users) =>
//   users.reduce((total, user) => total + user.balance, 0);
// console.log(
//   calculateTotalBalance([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       eyeColor: "blue",
//       friends: ["Sharron Pace"],
//       isActive: false,
//       balance: 2811,
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       eyeColor: "blue",
//       friends: ["Briana Decker", "Sharron Pace"],
//       isActive: true,
//       balance: 3821,
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       eyeColor: "green",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       isActive: false,
//       balance: 3793,
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       eyeColor: "green",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       isActive: true,
//       balance: 2278,
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       eyeColor: "blue",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       isActive: true,
//       balance: 3951,
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       eyeColor: "brown",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       isActive: false,
//       balance: 1498,
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       eyeColor: "brown",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       isActive: true,
//       balance: 2764,
//       gender: "female",
//     },
//   ])
// ); // 20916

// ==========================================================
//             ==== ЗАВДАННЯ 37/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Цей масив об'єктів ми будемо передавати в параметр users під час виклику функції із завдання.

// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// ЗАВДАННЯ----------------

// Доповни функцію getTotalFriendCount(users) таким чином, щоб вона рахувала і повертала загальну кількість друзів (властивість friends) усіх користувачів з масиву users.

// ТЕСТИ
// Оголошена змінна getTotalFriendCount
// Змінній getTotalFriendCount присвоєна стрілочна функція з параметром (users)
// Для перебирання параметра users використовується метод reduce()
// Виклик функції із зазначеним масивом користувачів повертає число 14
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const getTotalFriendCount = users => {

// };
// // Change code above this line

// РОЗВ'ЯЗАННЯ-------------

// const getTotalFriendCount = (users) =>
//   users.reduce((total, user) => total + user.friends.length, 0);

// ==========================================================
//             ==== ЗАВДАННЯ 38/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Метод sort() сортує елементи масиву, але на відміну від інших методів перебирання, він сортує вихідний масив.

// Сортує і змінює вихідний масив.
// Повертає змінений масив, тобто посилання на відсортований вихідний.
// За замовчуванням сортує за зростанням.
// Сортування відбувається шляхом приведення значень до рядка і порівняння порядкових номерів у таблиці Unicode.
// Такий масив чисел буде відсортований за зростанням.

// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]
// Але, оскільки за замовчуванням значення приводяться до рядка, стандартне сортування чисел працює незвично. Тому, у наступній вправі ми розглянемо як задавати свій порядок сортування.

// const scores = [27, 2, 41, 4, 7, 3, 75];
// scores.sort();
// console.log(scores); // [2, 27, 3, 4, 41, 7, 75]
// Масив рядків сортується за алфавітом.

// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];
// students.sort();
// console.log(students); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]
// Водночас порядковий номер великих літер менший, ніж у малих.

// const letters = ["b", "B", "a", "A", "c", "C"];
// letters.sort();
// console.log(letters); // ["A", "B", "C", "a", "b", "c"]
// Через те, що сортується вихідний масив, порушується принцип чистоти функцій і не можна зручно створити декілька похідних колекцій на основі вихідної. Наприклад, створити колекцію, відсортовану за зростанням, а іншу - за спаданням. Тому перед сортуванням роблять повну копію вихідного масиву і сортують вже її.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

// ЗАВДАННЯ----------------

// Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням, а у змінній alphabeticalAuthors - копія масиву імен авторів authors, відсортована за алфавітом.

// ТЕСТИ
// Оголошена змінна releaseDates
// Значення змінної releaseDates - це масив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Оголошена змінна authors
// Значення змінної authors - це масив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]
// Оголошена змінна ascendingReleaseDates
// Значення змінної ascendingReleaseDates - це масив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Оголошена змінна alphabeticalAuthors
// Значення змінної alphabeticalAuthors - це масив ["Bernard Cornwell", "Tanith Lee", "Robert Sheckley", "Fyodor Dostoevsky"]
// Використаний метод sort()

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = releaseDates;

// const alphabeticalAuthors = authors;

// РОЗВ'ЯЗАННЯ-------------

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates); // [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// console.log(alphabeticalAuthors); // ['Bernard Cornwell', 'Fyodor Dostoevsky', 'Robert Sheckley', 'Tanith Lee']

// ==========================================================
//             ==== ЗАВДАННЯ 39/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Для зазначення свого порядку сортування методу sort(compareFunction) потрібно передати колбек-функцію з двома параметрами. Це функція порівняння (compare function), порядок сортування залежить від її результату. Метод sort() буде викликати її для двох довільних елементів.

// масив.sort((a, b) => {
//   // Callback function body
// });
// a - перший елемент для порівняння.
// b - другий елемент для порівняння.
// Якщо виклик compareFunction(a, b) повертає будь-яке від'ємне значення, тобто a менше b, сортування поставить a перед b. Це сортування за зростанням.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]
// Якщо виклик compareFunction(a, b) повертає будь-яке додатне значення більше нуля, тобто b більше a, сортування поставить b перед a. Це сортування за спаданням.

// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]
// Якщо виклик compareFunction(a, b) поверне 0, сортування залишить a і b незмінними по відношенню один до одного, але відсортує їх по відношенню до всіх інших елементів. Але взагалі неважливо, що повертати, якщо їх взаємний порядок не має значення.

// ЗАВДАННЯ----------------

// Онлайн бібіліотеці необхідно відображати книги, відсортовані за датою видання, за її зростанням або спаданням. Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates, відсортована за зростанням, а у змінній descendingReleaseDates - копія, відсортована за спаданням.

// ТЕСТИ
// Оголошена змінна releaseDates
// Значення змінної releaseDates - це масив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Оголошена змінна ascendingReleaseDates
// Значення змінної ascendingReleaseDates - це масив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Оголошена змінна descendingReleaseDates
// Значення змінної descendingReleaseDates - це масив [2016, 2012, 2008, 1997, 1984, 1973, 1967]
// Використаний метод sort()

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = releaseDates;

// const descendingReleaseDates = releaseDates;

// РОЗВ'ЯЗАННЯ-------------

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates); // [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// console.log(descendingReleaseDates); // [2016, 2012, 2008, 1997, 1984, 1973, 1967]

// ==========================================================
//             ==== ЗАВДАННЯ 40/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Для сортування рядків в алфавітному порядку, за зростанням або спаданням, використовується метод рядків localeCompare().

// firstString.localeCompare(secondString)
// Він викликається на рядку, який потрібно порівняти (firstString) з тим, що був переданий йому як аргумент (secondString).

// "a".localeCompare("b"); // -1
// "b".localeCompare("a"); // 1
// "a".localeCompare("a"); // 0
// "b".localeCompare("b"); // 0
// Повертає від'ємне значення, якщо firstString повинен бути перед secondString.
// Повертає додатне значення більше нуля, якщо firstString повинен бути після secondString.
// Якщо рядки однакові, повертається нуль.
// Це зручно використовувати для сортування рядків, оскільки метод sort() очікує такі самі значення від колбек-функції.

// const students = ["Jacob", "Artemis", "Solomon", "Adrian", "Kai", "Ganymede"];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // [ "Adrian", "Artemis", "Ganymede", "Jacob", "Kai", "Solomon" ]

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // [ "Solomon", "Kai", "Jacob", "Ganymede", "Artemis", "Adrian" ]

// ЗАВДАННЯ----------------

// Онлайн бібіліотеці необхідно відображати книги, відсортовані за автором, в алфавітному і зворотному алфавітному порядку. Доповни код таким чином, щоб у змінній authorsInAlphabetOrder вийшла копія масиву authors, відсортована за алфавітом, а у змінній authorsInReversedOrder - копія, відсортована у зворотному алфавітному порядку.

// ТЕСТИ
// Оголошена змінна authors
// Значення змінної authors - це масив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"]
// Оголошена змінна authorsInAlphabetOrder
// Значення змінної authorsInAlphabetOrder - це масив ["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]
// Оголошена змінна authorsInReversedOrder
// Значення змінної authorsInReversedOrder - це масив ["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]
// Використаний метод sort()

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = authors;

// const authorsInReversedOrder = authors;

// РОЗВ'ЯЗАННЯ-------------

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder); // ['Bernard Cornwell', 'Fyodor Dostoevsky', 'Howard Lovecraft', 'Robert Sheckley', 'Tanith Lee']
// console.log(authorsInReversedOrder); // ['Tanith Lee', 'Robert Sheckley', 'Howard Lovecraft', 'Fyodor Dostoevsky', 'Bernard Cornwell']

// ==========================================================
//             ==== ЗАВДАННЯ 41/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// Під час роботи з масивом об'єктів, сортування виконується за числовим або рядковим значенням певної властивості. Наприклад, у нас є група студентів з балами за тест. Необхідно відсортувати масив об'єктів за зростанням і спаданням кількості балів, і за ім'ям студента.

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );

// ЗАВДАННЯ----------------

// Доповни код таким чином, щоб:

// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.

// ТЕСТИ
// Оголошена змінна books
// Значення змінної books - це вихідний масив об'єктів книг
// Оголошена змінна sortedByAuthorName
// Значення змінної sortedByAuthorName - це масив книг, відсортований за ім'ям автора в алфавітному порядку
// Оголошена змінна sortedByReversedAuthorName
// Значення змінної sortedByReversedAuthorName - це масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку
// Оголошена змінна sortedByAscendingRating
// Значення змінної sortedByAscendingRating - це масив книг, відсортований за зростанням рейтингу
// Оголошена змінна sortedByDescentingRating
// Значення змінної sortedByDescentingRating - це масив книг, відсортований за спаданням рейтингу
// Для перебирання масиву books використовується метод sort()

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = books;

// const sortedByReversedAuthorName = books;

// const sortedByAscendingRating = books;

// const sortedByDescentingRating = books;

// РОЗВ'ЯЗАННЯ-------------

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];
// Change code below this line

const sortedByAuthorName = books;

const sortedByReversedAuthorName = books;

const sortedByAscendingRating = books;

const sortedByDescentingRating = books;

// ==========================================================
//             ==== ЗАВДАННЯ 42/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 43/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 44/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 45/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 46/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 47/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------

// ==========================================================
//             ==== ЗАВДАННЯ 48/48 ====
// ==========================================================

// ТЕОРІЯ------------------

// ЗАВДАННЯ----------------

// РОЗВ'ЯЗАННЯ-------------
