/**
 * Функция проверяет не привышет ли длина строки допустимого лимита
 * @param {string} str строка длину которой надо проверить
 * @param {number} lengthLimit предельная длина строки, которая допускается
 * @returns {boolean}
 */
const checkLength = (str, lengthLimit = 140) => str.length <= lengthLimit;

/**
  * Функция получает два числа min и max и возвращает случайное целое число в указанном диапазоне.
  * @param {number} min начальное значение диапазона (большее нуля).
  * @param {number} max конечное значение диапазона (большее нуля).
  * @returns {number|Nan} случайное число целое в указанном диопазоне включая переданные значения или Nan в случае ошибки.
  */
const getRandomInt = (min, max) => {
  if (min < 0 || max < 0 || min > max || min === max) {
    return NaN;
  }

   return Math.floor(Math.random() * (max - min +1)) + min;
};

/**
  * Функция возращает случайный элемент массива
  * @param {array} Массив
  * @returns {*} случайный элемент массива
  */
const getRendomItemOfArray = (array) => {
   return array[Math.floor(Math.random() * array.length)];
};

 //
/**
  * Функция возращает случайной длины массив от исходного массива
  * @param {array} array массив
  * @returns {array} возращает случайной длины массив от исходного массива
  */
const getRandomLengthArray = (array) => {
  return array.slice(0, getRandomInt(1, array.length));
};

/**
  * Функция перемешивает элементы массива
  * @param {array} array
  * @returns {array} Возвращает новый массив с перемешанными элементами массива
  */
const shuffle = (array) => {
  let cloneArray = array.slice();
  array.forEach((_, i)=>{
    let j = Math.floor(Math.random() * (i + 1));
    [cloneArray[j], cloneArray[i]] = [cloneArray[i], cloneArray[j]];
  });
  return cloneArray;
};

export {checkLength,
        getRandomInt,
        getRendomItemOfArray,
        getRandomLengthArray,
        shuffle,
        };
