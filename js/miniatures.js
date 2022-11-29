import {createPosts} from './data.js';
import {showBigPicture} from './big-picture.js';
const posts = createPosts();
const picturesContainer = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content;

/**
 * Функция создает и вставляет на страницу посты с данными из массива
 * @param {array} array массив с данными о постах
 * @returns {void} вставляет на страницу посты с данными из массива
 */
const showPosts = (array = posts) => {
  const fragment = document.createDocumentFragment();

  array.forEach((post) => {
    const userPost = templatePicture.querySelector('.picture').cloneNode(true);
    userPost.querySelector('.picture__img').src = post.url;
    userPost.querySelector('.picture__comments').textContent = post.comments.length;
    userPost.querySelector('.picture__likes').textContent = post.likes;
    userPost.querySelector('.picture__img').addEventListener('click', () => {
      showBigPicture(post);
    });
    fragment.appendChild(userPost);
  });
  picturesContainer.appendChild(fragment);
};

export {showPosts};
