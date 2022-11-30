import {
  getRandomInt,
  getRendomItemOfArray,
  shuffle,
  } from  './util.js';

const NUMBER_OF_POSTS = 25;
const MIN_COMMENTS = 1;
const MAX_COMMENTS = 5;
const MAX_LIKES = 200;
const MIN_LIKES = 15;
const MAX_AVATAR = 6;
const MIN_AVATAR = 1;
const  MESSAGES = [
                    'Всё отлично!',
                    'В целом всё неплохо. Но не всё.',
                    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
                    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
                    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
                    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
                    'В этом вся вселенная!',
                    'Если бы я увидел это раньше моя жизнь была бы другой!'
                  ];
const DESCRIPTIONS = ['Прекрасный пляж',
                      'Все на пляж',
                      'Какое море синие',
                      'Ребята',
                      'Еда наше всё!',
                      'Машина просто супер',
                      'Ягодка',
                      'Напитки разные нужны',
                      'Виды бывают разные',
                      'Башмаки',
                      'Море и песок',
                      'А если белая машина',
                      'Нямка-нямка',
                      'Суши держите уши!',
                      'Читать не перечитать',
                      'Высота равно красота',
                      'Красная значит красивая',
                      'Огни ночи',
                      'Я под пальмочкой сижу',
                      'Вечерело',
                      'Закат солнца в ручную',
                      'Креветка на взоморье',
                      'Концерт и точка!',
                      'Путешествие на грани!',
                      'Удивительное рядом'
                    ];

const NAMES = ['Марфа','Африкан', 'Аврелий', 'Маркус', 'Гегемоний', 'Эрмеджилио', 'Зегна', 'Митра', 'Академий', 'Скриптоний'];

/**
 * Функция создает объект с данными одного комментария
 * @param {number} i id комментария
 * @returns {object} объект с данными одного комментария
 */
const createComment = (i) => {
  return {
    'id': i,
    'avatar': `img/avatar-${getRandomInt(MIN_AVATAR, MAX_AVATAR)}.svg`,
    'message': shuffle(MESSAGES).slice(0, getRandomInt(1, 2)).join(''),
    'name': getRendomItemOfArray(NAMES),
  }
};

// Количество комментариев к каждой фотографии вы определяете на своё усмотрение.
/**
 * Функция создает указанное кол-во случайных комментариев для постов
 * @param {number} amount кол-во случайных комментариев
 * @returns {Array} массив с объектами случайных данных для комментов
 */
const createComments = (numderOfComments) =>
  Array.from({length: numderOfComments}, (_, index) => createComment(index + 1));

/**
 * Функция создает и возвращает объект с случайными данными для постов
 * @param {number} index индекс поста
 * @returns {object} возвращает объект с случайными данными для постов
 */
const createPost = (index) => {
  index = index ?? 0;
  return {
    'id': index,
    'url': `photos/${index}.jpg`,
    'description': shuffle(DESCRIPTIONS)[index - 1],
    'likes': getRandomInt(MIN_LIKES, MAX_LIKES),
    'comments': createComments(getRandomInt(MIN_COMMENTS, MAX_COMMENTS)),
  };
}

/**
 * Функция создает указанное кол-во случайных данных для постов
 * @param {number} amount кол-во случайных данных для постов
 * @param {function name(params) {
  @param {number} индекс поста
 }} функция createPost - колбэк для создания постов
 * @returns {Array} массив с объектами случайных данных для постов
 */
const createPosts = (amount = NUMBER_OF_POSTS, cb = createPost) => Array.from({length: amount}, (_, postIndex) =>
  cb(postIndex + 1)
);

export {createPosts}
