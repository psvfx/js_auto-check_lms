// ===== АВТОПЕРІВІРКА_Модуль2_МАСИВИ та ФУНКЦІЇ ===========

// ==========================================================
//               ==== ЗАВДАННЯ 1/32 ====
// ==========================================================
// ТЕОРІЯ----------
// У функції може бути більше одного оператора return. Головне пам'ятати, що виконання функції переривається, коли інтерпретатор зустрічає повернення, і весь код після нього буде проігнорований в поточному виклику функції.
// Візьмемо вже знайому нам функцію перевірки повноліття. Вона працює, але тут є «зайвий» код, тобто тіло функції можна оптимізувати. В цьому випадку підійде спосіб (патерн) «раннє повернення».
// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     message = "Ви повнолітня людина";
//   } else {
//     message = "Ви неповнолітня людина";
//   }

//   return message;
// }
// console.log(checkAge(20));
// Якщо умова в if виконується, тобто приводиться до true, повертаємо рядок "You are an adult", і код нижче вже не виконається.
// Якщо умова в if не виконується, тобто приводиться до false, повертаємо рядок "You are a minor".
// Використовуючи патерн «раннє повернення» і те, що виконання функції переривається на операторі return, ми позбавляємося зайвої змінної і блоку else. Тобто цей спосіб допомагає «розгладити» розгалуження.

// ЗАВДАННЯ----------------
// Запиши умову в інструкції if таким чином, щоб функція працювала правильно.

// РОЗВ'ЯЗАННЯ-------------

// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// ==========================================================
//               ==== ЗАВДАННЯ 2/32 ====
// ==========================================================
// ЗАДАЧА: ПЕРЕВІРКА ПАРОЛЯ (РАННЄ ПОВЕРНЕННЯ)
// Функція checkPassword отримує пароль користувача у параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння.
// Виконай рефакторинг коду функції checkPassword, використовуючи патерн «раннє повернення»:
// видали змінну message
// видали else
// код повинен працювати так само, як і до оптимізації

// РОЗВ'ЯЗАННЯ-------------

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";

//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }

//   return "Access denied, wrong password!";
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// ==========================================================
//              ==== ЗАВДАННЯ 3/32 ====
// ==========================================================
// ЗАДАЧА: СКЛАД ТОВАРІВ 3.0
// Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.
// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Виконай рефакторинг коду функції checkStorage, використовуючи патерн «раннє повернення».

// РОЗВ'ЯЗАННЯ-------------

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }

//   return "The order is accepted, our manager will contact you";
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// ==========================================================
//                ==== ЗАВДАННЯ 4/32 ====
// ==========================================================
// ТЕОРІЯ----------
// Масив використовується для зберігання впорядкованої колекції елементів. Він оголошується відкритою і закритою квадратною дужкою [] - літералом масиву. Всередині дужок кожен елемент масиву розділяється комою.
// const planets = ["Earth", "Mars", "Venus"];
// Корисно
// Оголошуючи змінну для об'єкта або масиву, програмісти, як правило, використовують const. Вони роблять це для того, щоб випадково не перезаписати значення, оскільки спроба перезапису викличе помилку до того, як код потрапить до користувача.

// ЗАВДАННЯ----------------
// Оголоси змінну fruits і присвой їй масив фруктів - рядків "apple", "plum", "pear" і "orange".

// const fruits = ["apple", "plum", "pear", "orange"];

// console.log(fruits);

// ==========================================================
//                ==== ЗАВДАННЯ 5/32 ====
// ==========================================================
// ТЕОРІЯ----------
// Для доступу до значення елемента масиву застосовують синтаксис квадратних дужок масив[індекс].Між ім'ям змінної масиву і квадратними дужками не повинно бути пробілу.
// Увага
// Індексація елементів масиву починається з нуля.
// const planets = ["Earth", "Mars", "Venus"];
// planets[0]; // "Earth"
// planets[2]; // "Venus"

// ЗАВДАННЯ----------------
// Оголоси три змінні і присвой кожній з них значення, використовуючи нотацію квадратних дужок.
// Ім'я змінної     	Значення змінної
// firstElement	       перший елемент масиву
// secondElement	   другий елемент масиву
// lastElement	       останній елемент масиву

// РОЗВ'ЯЗАННЯ-------------

// const fruits = ["apple", "plum", "pear", "orange"];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// ==========================================================
//             ==== ЗАВДАННЯ 6/32 ====
// ==========================================================
// ТЕОРІЯ----------
// На відміну від рядків, елементи масиву можна змінювати, звернувшись до них за індексом і присвоївши інше значення.
// const numbers = [1, 2, 3, 4, 5];
// numbers[0] = 7;
// numbers[2] = 14;
// console.log(numbers); // [7, 2, 14, 4, 5];

// ЗАВДАННЯ----------------
// Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".

// РОЗВ'ЯЗАННЯ-------------

// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits); // ['apple', 'peach', 'pear', 'banana']

// ==========================================================
//             ==== ЗАВДАННЯ 7/32 ====
// ==========================================================
// ТЕОРІЯ----------
// Довжина масиву, тобто кількість його елементів, зберігається у властивості length. Це динамічна величина, яка змінюється автоматично під час додавання або видалення елементів.

// const planets = ["Earth", "Mars", "Venus"];
// console.log(planets.length); // 3

// ЗАВДАННЯ----------------
// Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits, використовуючи властивість length.
// ТЕСТИ
// Оголошена змінна fruitsArrayLength
// Значення змінної fruitsArrayLength - це число 4

// РОЗВ'ЯЗАННЯ-------------

// const fruits = ["apple", "peach", "pear", "banana"];

// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength); // 4

// ==========================================================
//             ==== ЗАВДАННЯ 8/32 ====
// ==========================================================

// ТЕОРІЯ------------------

// Найчастіше ми заздалегідь у коді не знаємо, яка буде довжина масиву.Для того щоб отримати значення останнього елемента, застосовується наступний підхід - довжина масиву завжди на одиницю більша за індекс останнього елемента.Використовуючи формулу довжина_масиву - 1, можна отримати значення останнього елемента масиву довільної довжини.

// const planets = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// planets[lastElementIndex]; // "Venus"

// ЗАВДАННЯ----------------

// Ім'я змінної	        Очікуване значення
// lastElementIndex    	Індекс останнього елемента масиву fruits через довжина_масиву - 1
// lastElement         	Значення останнього елемента масиву

// ТЕСТИ
// Оголошена змінна lastElementIndex
// Значення змінної lastElementIndex - це число 3
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "banana"

// РОЗВ'ЯЗАННЯ-------------

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length-1;
// const lastElement = fruits[lastElementIndex];

// ==========================================================
//             ==== ЗАВДАННЯ 9/32 ====
// ==========================================================

// ЗАДАЧА: КРАЙНІ ЕЛЕМЕНТИ МАСИВУ

// ЗАВДАННЯ----------------

// Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини.Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.

// ТЕСТИ
// Оголошена функція getExtremeElements(array)
// Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає [1, 5]
// Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає ["Earth", "Venus"]
// Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає ["apple", "banana"]

// РОЗВ'ЯЗАННЯ-------------

// function getExtremeElements(array) {
//   // Change code below this line
//   const arreyNew = [array[0], array[array.length - 1]];
//   return arreyNew;
//   // Change code above this line
// }
// getExtremeElements([1, 2, 3, 4, 5]);

// ==========================================================
//             ==== ЗАВДАННЯ 10/32 ====
// ==========================================================

// ТЕОРІЯ------------------

// Метод split(delimiter) дозволяє перетворити рядок на масив, "розбивши" його по роздільнику delimiter.Якщо роздільник - це порожній рядок, отримаємо масив окремих символів.Роздільником може бути один або кілька символів.

// const name = "Mango";
// console.log(name.split("")); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// console.log(message.split(" ")); // ["JavaScript", "essentials"]

// ЗАВДАННЯ----------------

// Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words результат поділу рядка message за роздільником delimiter - масив рядків.

// ТЕСТИ
// Оголошена функція splitMessage(message, delimiter)
// Виклик splitMessage("Mango hurries to the train", " ") повертає ["Mango", "hurries", "to", "the", "train"]
// Виклик splitMessage("Mango", "") повертає ["M", "a", "n", "g", "o"]
// Виклик splitMessage("best_for_week", "_") повертає ["best", "for", "week"]

// РОЗВ'ЯЗАННЯ-------------

// function splitMessage(message, delimiter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimiter);
//   // Change code above this line
//   return words;
// }

// ==========================================================
//             ==== ЗАВДАННЯ 11/32 ====
// ==========================================================

// ЗАДАЧА: ГРАВІРУВАННЯ ПРИКРАС

// ЗАВДАННЯ----------------

// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.
// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).
// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// ТЕСТИ
// Оголошена функція calculateEngravingPrice(message, pricePerWord)
// Виклик calculateEngravingPrice("JavaScript is in my blood", 10) повертає 50
// Виклик calculateEngravingPrice("JavaScript is in my blood", 20) повертає 100
// Виклик calculateEngravingPrice("Web-development is creative work", 40) повертає 160
// Виклик calculateEngravingPrice("Web-development is creative work", 20) повертає 80

// РОЗВ'ЯЗАННЯ-------------

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   let words;
//   words = message.split(" ");
//   const totalPrice = words.length * pricePerWord;
//   return totalPrice;

//   // Change code above this line
// }

// ==========================================================
//             ==== ЗАВДАННЯ 12/32 ====
// ==========================================================

// ТЕОРІЯ------------------

// Метод масивів join(delimiter) дозволяє з'єднати елементи масиву в рядок. У рядку елементи будуть розділені символом або групою символів, зазначених у delimiter. Тобто це зворотна операція методу рядків split(delimiter).

// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("*")); // 'JavaScript*is*amazing'

// ЗАВДАННЯ----------------

// Доповни код функції makeStringFromArray(array, delimiter) таким чином, щоб вона повертала у змінній string результат з'єднання елементів масиву array з роздільником delimiter - рядок.

// ТЕСТИ
// Оголошена функція makeStringFromArray(array, delimiter)
// Виклик makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") повертає "Mango hurries to the train"
// Виклик makeStringFromArray(["M", "a", "n", "g", "o"], "")) повертає "Mango"
// Виклик makeStringFromArray(["top", "picks", "for", "you"], "_") повертає "top_picks_for_you"

// РОЗВ'ЯЗАННЯ-------------

// function makeStringFromArray(array, delimiter) {
//   let string;
//   // Change code below this line

//   string = array.join(delimiter);
//   return string;

//   // Change code above this line
//   return string;
// }

// ==========================================================
//             ==== ЗАВДАННЯ 13/32 ====
// ==========================================================

// ЗАДАЧА: ГЕНЕРАТОР SLUG

// ЗАВДАННЯ----------------

// Термін slug - це людино-зрозумілий унікальний ідентифікатор, який використовується у веб-розробці для створення читабельних URL-адрес.

// Наприклад, замість того, щоб користувач побачив в адресному рядку mysite.com/posts/1q8fh74tx, можна зробити slug з назви статті. В результаті адреса буде приємнішою для сприйняття: mysite.com/posts/arrays-for-begginers.

// Увага
// Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире

// ТЕСТИ
// Оголошена функція slugify(title)
// Виклик slugify("Arrays for begginers") повертає "arrays-for-begginers"
// Виклик slugify("English for developer") повертає "english-for-developer"
// Виклик slugify("Ten secrets of JavaScript") повертає "ten-secrets-of-javascript"
// Виклик slugify("How to become a JUNIOR developer in TWO WEEKS") повертає "how-to-become-a-junior-developer-in-two-weeks"

// РОЗВ'ЯЗАННЯ-------------

// function slugify(title) {
//   // Change code below this line
//   let slag;
//   slag = title.toLowerCase().split(" ").join("-");
//   return slag;
//   // Change code above this line
// }

// ==========================================================
//             ==== ЗАВДАННЯ 14/32 ====
// ==========================================================

// ТЕОРІЯ------------------

// Метод slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його. Копія робиться від begin і до, але не включно, end - індекси елементів вихідного масиву.

// Якщо begin та end не вказані, буде створена повна копія вихідного масиву.
// Якщо не вказаний end, копіювання буде від start до кінця вихідного масиву.
// Якщо значення start від'ємне, а end не вказане, то будуть скопійовані останні N елементів.

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];

// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']
// console.log(planets.slice(-2)); // ['Jupiter', 'Saturn']
// console.log(planets.slice()); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn']

// ЗАВДАННЯ----------------

// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

// ТЕСТИ
// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "plum", "pear", "orange", "banana"]
// Оголошена змінна firstTwoEls
// Значення змінної firstTwoEls - це масив ["apple", "plum"]
// Оголошена змінна nonExtremeEls
// Значення змінної nonExtremeEls - це масив ["plum", "pear", "orange"]
// Оголошена змінна lastThreeEls
// Значення змінної lastThreeEls - це масив ["pear", "orange", "banana"]
// Змінній lastThreeEls присвоєна копія частини масиву fruits після застосування методу slice з правильними аргументами

// РОЗВ'ЯЗАННЯ-------------

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// ==========================================================
//             ==== ЗАВДАННЯ 15/32 ====
// ==========================================================

// ТЕОРІЯ------------------

// Метод concat використовується для об'єднання двох або більше масивів. Він не змінює масив на якому викликається, а повертає новий. Порядок аргументів методу впливає на порядок елементів нового масиву.

// const firstArray = ["Mercury", "Venus", "Earth"];
// const secondArray = ["Mars", "Jupiter"];
// const thirdArray = ["Saturn", "Uranus", "Neptune"];
// const allPlanets = firstArray.concat(secondArray, thirdArray);

// console.log(firstArray); // ['Mercury', 'Venus', 'Earth'];
// console.log(allPlanets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

// ЗАВДАННЯ----------------

// Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.

// ТЕСТИ
// Оголошена змінна oldClients
// Значення змінної oldClients - це масив ["Mango", "Ajax", "Poly", "Kiwi"]
// Оголошена змінна newClients
// Значення змінної newClients - це масив ["Peach", "Houston"]
// Оголошена змінна allClients
// Значення змінної allClients - це масив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
// Змінній allClients присвоєний масив після застосування методу concat з правильними аргументами

// РОЗВ'ЯЗАННЯ-------------

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];

// const allClients = oldClients.concat(newClients); // Change this line

// ==========================================================
//             ==== ЗАВДАННЯ 16/32 ====
// ==========================================================

// ЗАДАЧА: КОМПОЗИЦІЯ МАСИВІВ

// ЗАВДАННЯ----------------

// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів.В іншому випадку функція повинна повернути новий масив повністю.

// ТЕСТИ
// Оголошена функція makeArray(firstArray, secondArray, maxLength)
// Виклик makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає ["Mango", "Poly", "Ajax"]
// Виклик makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) повертає ["Mango", "Poly", "Houston", "Ajax"]
// Виклик makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) повертає ["Mango", "Ajax", "Chelsea"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) повертає ["Earth", "Jupiter"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) повертає []
// Виклик функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив

// РОЗВ'ЯЗАННЯ-------------

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const newArrey = firstArray.concat(secondArray);
//   if (newArrey.length > maxLength) {
//     return (newArreySlice = newArrey.slice(0, maxLength));
//   } else {
//     return newArrey;
//   }

//   // Change code above this line
// }

// ==========================================================
//             ==== ЗАВДАННЯ 17/32 ====
// ==========================================================

// ТЕОРІЯ------------------

// Цикли використовуються для багаторазового повторення коду. Оголошення циклу for складається з трьох виразів.

// for (Ініціалізація; Умова; Пост - вираз) {
//   // Тіло циклу
// }

// Ініціалізація - виконується один раз перед початком циклу. Використовується для створення змінної-лічильника і встановлення її початкового значення.
// Умова - вираз, що оцінюється перед кожною ітерацією (повторенням) циклу. Тіло циклу виконується тільки тоді, коли вираз приводиться до true. Цикл завершується, якщо значення буде false.
// Пост-вираз - виконується в кінці кожного повторення циклу, перед перевіркою умови. Використовується для оновлення змінної-лічильника.
// Тіло - набір інструкцій для виконання на кожному повторенні.Виконується, якщо вираз умови приводиться до true.

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }
// В прикладі оголошується змінна i, ініціалізується значенням 0, і цикл виконується (його тіло) доти, доки i <= 20, тобто умова приводиться до true. Після кожної ітерації лічильник збільшується на 5.

// ЗАВДАННЯ----------------

// Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.

// ТЕСТИ
// Оголошена змінна start
// Значення змінної start - це число 3
// Оголошена змінна end
// Значення змінної end - це число 7
// Оголошена змінна i - лічильник циклу
// Початкове значення змінної i дорівнює 3
// Умова циклу приводиться до true доти, доки i менше або дорівнює 7
// На кожній ітерації значення змінної i збільшується на одиницю
// Виведення у консоль змінної i покаже числа 3, 4, 5, 6, 7

// РОЗВ'ЯЗАННЯ-------------

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }

// ==========================================================
//             ==== ЗАВДАННЯ 18/32 ====
// ==========================================================

// ЗАДАЧА: СУМА ЧИСЕЛ (ЦИКЛ FOR)

// ЗАВДАННЯ----------------

// Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// ТЕСТИ
// Оголошена функція calculateTotal(number)
// Виклик функції calculateTotal(1) повертає 1
// Виклик функції calculateTotal(3) повертає 6
// Виклик функції calculateTotal(7) повертає 28
// Виклик функції calculateTotal(18) повертає 171
// Виклик функції calculateTotal(24) повертає 300
// Виклик функції calculateTotal() з випадковим числом повертає правильне значення

// РОЗВ'ЯЗАННЯ-------------

// function calculateTotal(number) {
//   // Change code below this line
//   let sumNumber = 0;
//   for (let i = 1; i <= number; i += 1) {
//     sumNumber += i;
//   }
//   return sumNumber;
//   // Change code above this line
// }

// ==========================================================
//             ==== ЗАВДАННЯ 19/32 ====
// ==========================================================

// ТЕОРІЯ----------
// Цикл for можна використовувати для ітерації по масиву, тобто «перебрати» його поелементно.

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// Для доступу до елементів використовується синтаксис квадратних дужок масив[індекс], де індекс - це значення лічильника циклу від 0 і до останнього індексу масиву, який на одиницю менший за довжину масиву.

// ЗАВДАННЯ----------------
// Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// ==========================================================
//             ==== ЗАВДАННЯ 20/32 ====
// ==========================================================

// ЗАДАЧА: ОБЧИСЛЕННЯ СУМИ ПОКУПКИ

// Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів.Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

// ==========================================================
//             ==== ЗАВДАННЯ 21/32 ====
// ==========================================================
// ЗАДАЧА: ПОШУК НАЙДОВШОГО СЛОВА
// ЗАВДАННЯ----------------
// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// function findLongestWord(string) {

//   const words = string.split(" ");
//   let longestWord = "";
//   for (const word of words)
//     if (word.length > longestWord.length) {
//       longestWord = word;
//         }

//   return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // jumped
// console.log(findLongestWord("Google do a roll")); // Google
// console.log(findLongestWord("May the force be with you")); // force

// ==========================================================
//             ==== ЗАВДАННЯ 22/32 ====
// ==========================================================
// ТЕОРІЯ----------
// Метод push() дозволяє додати один або кілька елементів в кінець масиву, без необхідності вказувати індекси елементів, що додаються.

// const planets = ["Earth", "Mars", "Venus"];
// planets.push("Jupiter");
// planets.push("Saturn", "Uranus", "Neptune");

// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']

// ЗАВДАННЯ----------------
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3)); //  [1, 2, 3]
// console.log(createArrayOfNumbers(14, 17)); //  [14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34)); //  [29, 30, 31, 32, 33, 34]

// ==========================================================
//             ==== ЗАВДАННЯ 23/32 ====
// ==========================================================
// ЗАДАЧА: ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ

// ЗАВДАННЯ----------------
// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).

// function filterArray(numbers, value) {
//   // Change code below this line
//   const numbersNew = [];
//   for (const number of numbers) {
//     if (number > value) {
//       numbersNew.push(number);
//     }
//   }
//   return numbersNew;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// ==========================================================
//             ==== ЗАВДАННЯ 24/32 ====
// ==========================================================
// ТЕОРІЯ----------
// Метод includes(value) перевіряє, чи присутній в масиві елемент зі значенням value, і повертає true або false відповідно.Сфера застосування цього методу зводиться до ситуацій, коли необхідно перевірити, чи присутній елемент в масиві, і не важлива його позиція(індекс).

// const planets = ["Earth", "Mars", "Venus"];

// console.log(planets.includes("Earth")); // true
// console.log(planets.includes("Mars")); // true
// console.log(planets.includes("Venus")); // true
// console.log(planets.includes("Jupiter")); // false

// ЗАВДАННЯ----------------
// Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.
// Доповни код функції таким чином, що якщо:
// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

// console.log(checkFruit("plum")); // true
// console.log(checkFruit("mandarin")); // false
// console.log(checkFruit("pear")); // true
// console.log(checkFruit("Pear")); // false
// console.log(checkFruit("apple")); // true

// ==========================================================
//             ==== ЗАВДАННЯ 25/32 ====
// ==========================================================
// ЗАДАЧА: СПІЛЬНІ ЕЛЕМЕНТИ

// ЗАВДАННЯ----------------
// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.
// Наприклад, у двох масивах [1, 3, 5] і [0, 8, 5, 3] спільними будуть числа 3 і 5, оскільки вони присутні в обох вихідних масивах. А числа 0, 1 і 8 присутні тільки в одному з масивів.
// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

// РОЗВ'ЯЗАННЯ-------------

// function getCommonElements(array1, array2) {
//   let commonElementsArrey = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       commonElementsArrey.push(array1[i]);
//     }
//   }
//   return commonElementsArrey;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []

// ==========================================================
//             ==== ЗАВДАННЯ 26/32 ====
// ==========================================================
// ТЕОРІЯ----------
// Інструкція for...of оголошує цикл, який перебирає ітерабельні об'єкти, такі як масиви та рядки. Тіло циклу буде виконуватися для значення кожного елемента. Це хороша заміна циклу for, якщо не потрібен доступ до лічильника ітерації.

// РОЗВ'ЯЗАННЯ-------------

// for (const variable of iterable) {
//   // тіло цикла
// }

// variable - змінна, яка буде зберігати значення елемента на кожній ітерації
// iterable - колекція, яка містить ітерабельні елементи, наприклад масив

// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets) {
//   console.log(planet);
// }

// ЗАВДАННЯ----------------
// Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

// РОЗВ'ЯЗАННЯ-------------

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let orderElem of order) {
//     total += orderElem;
//   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116
// console.log(calculateTotalPrice([])); // 0

// ==========================================================
//             ==== ЗАВДАННЯ 27/32 ====
// ==========================================================
// ЗАДАЧА: ФІЛЬТРАЦІЯ МАСИВУ ЧИСЕЛ 2.0

// ЗАВДАННЯ----------------
// Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.

// РОЗВ'ЯЗАННЯ-------------

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// ==========================================================
//             ==== ЗАВДАННЯ 28/32 ====
// ==========================================================

// ТЕОРІЯ----------
// Замість того, щоб повертати результат ділення, операція за модулем (%) повертає цілочисельну остачу від ділення двох чисел - діленого і дільника.

// 5 % 1 = 0;
// 5, поділене на 1, дорівнює 5, а остача - 0

// 5 % 2 = 1;
// 5, поділене на 2, дорівнює 2, а остача - 1

// 5 % 3 = 2;
// 5, поділене на 3, дорівнює 1, а остача - 2

// 5 % 4 = 1;
// 5, поділене на 4, дорівнює 1, а остача - 1

// 5 % 5 = 0;
//  5, поділене на 5, дорівнює 1, а остача - 0

// ЗАВДАННЯ----------------
// Доповни вираз остачі від ділення таким чином, щоб код проходив тести.

// Change code below this line
// const a = 3 % ;
// const b = 4 % ;
// const c = 11 % ;
// const d = 12 % ;
// const e = 8 % ;

// РОЗВ'ЯЗАННЯ-------------

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// console.log(a); // 0
// console.log(b); // 1
// console.log(c); // 3
// console.log(d); // 5
// console.log(e); // 2

// ==========================================================
//             ==== ЗАВДАННЯ 29/32 ====
// ==========================================================
// ЗАДАЧА: ПАРНІ ЧИСЛА

// ЗАВДАННЯ----------------
// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).

// РОЗВ'ЯЗАННЯ-------------

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const evenNumbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   return evenNumbers;
//   // Change cod e above this line
// }
// console.log(getEvenNumbers(2, 5)); // [2, 4]
// console.log(getEvenNumbers(3, 11)); // [4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12)); // [6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8)); // [8]
// console.log(getEvenNumbers(7, 7)); // []

// ==========================================================
//             ==== ЗАВДАННЯ 30/32 ====
// ==========================================================

// ТЕОРІЯ----------
// Перервати виконання циклу можна в будь-який момент. Для цього існує оператор break, який повністю припиняє виконання циклу і передає управління на рядок за його тілом.
// У прикладі шукаємо число 3. Щойно виконається умова if, цикл припинить своє виконання (буде перерваний).

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);

//   if (i === 3) {
//     console.log("Знайшли число 3, перериваємо виконання циклу");
//     break;
//   }
// }

// console.log("Лог після циклу");

// ЗАВДАННЯ----------------
// Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.

// РОЗВ'ЯЗАННЯ-------------

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number); // 10

// ==========================================================
//             ==== ЗАВДАННЯ 31/32 ====
// ==========================================================

// ТЕОРІЯ----------
// Якщо цикл знаходиться в тілі функції, то оператор break не припиняє виконання функції, а тільки перерве цикл. Для того щоб переривати виконання відразу циклу і функції, є оператор return.
// У прикладі шукаємо число 3. Щойно виконається умова if, робимо повернення, яке перерве виконання циклу і функції.

// function fn() {
//   for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 3) {
//       console.log(
//         "Знайшли число 3, робимо повернення, перериваючи цикл і функцію"
//       );
//       return i;
//     }
//   }

//   // Цей console.log не виконається
//   console.log("Лог після циклу в тілі функції");
// }

// const result = fn();
// console.log("Лог після виходу з функції");
// console.log(`Результат виконання функції ${result}`);

// ЗАВДАННЯ----------------

// Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:
//  - повертала перше число від start до end, яке ділиться на divisor без остачі
//  - не використала оператор break
//  - не використала змінну number

// function findNumber(start, end, divisor) {
//   // Change code below this line
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       break;
//     }
//   }

//   return number;
//   // Change code above this line
// }

// РОЗВ'ЯЗАННЯ-------------

// function findNumber(start, end, divisor) {
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }

//   return number;
//   // Change code above this line
// }

// console.log(findNumber(2, 6, 5)); // 5
// console.log(findNumber(8, 17, 3)); // 9
// console.log(findNumber(6, 9, 4)); // 8
// console.log(findNumber(16, 35, 7)); // 21

// ==========================================================
//             ==== ЗАВДАННЯ 32/32 ====
// ==========================================================

// ЗАДАЧА: ФУНКЦІЯ INCLUDES()

// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.
// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

// ЗАВДАННЯ----------------

// function includes(array, value) {
//   // Change code below this line
//   // Change code above this line
// }

// РОЗВ'ЯЗАННЯ-------------

// function includes(array, value) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i] === value) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3)); // true
// console.log(includes([1, 2, 3, 4, 5], 17)); // false
// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
// ); // true
// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")
// ); // false
// console.log(includes(["apple", "plum", "pear", "orange"], "plum")); // true
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi")); // false
