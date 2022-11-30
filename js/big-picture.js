const bigPicture = document.querySelector('.big-picture');
const bigImageUrl = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialCaption = bigPicture.querySelector('.social__caption');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const btnPictureCancel = bigPicture.querySelector('#picture-cancel');
const ESC_KEYCODE = 27;

/**
 *  Функция закрывает окно с большой фото
 * @return {void}
 */
const closeBigPictureModal = ()=> {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
  socialCommentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');
  // уберем обработчики событий для закарытия окна
  document.removeEventListener('keyup', escBtnBigPictureHandler);
  btnPictureCancel.removeEventListener('click', clickBtnClosePictureHandler);
}

/**
 * Функция слушатель события клик по кнопке закрытия окна большой фото
 * @param {Event} evtBtn
 * @return {void}
 */
const clickBtnClosePictureHandler = (evtBtn)=> {
  evtBtn.preventDefault();
  closeBigPictureModal();
}

/**
 * Функция слушатель события клавиши ESC для закрытия большой фото
 * @param {Event} evtKey
 * @return {void}
 */
const escBtnBigPictureHandler = (evtKey) => {
  if (evtKey.keyCode === ESC_KEYCODE){
    evtKey.preventDefault();
    closeBigPictureModal();
  }
};

/**
 * Функция создает список комментариев HtmlElement
 * @param {array} arrayOfComments массив объектов с данными комментариев
 * @returns {HTMLElement} fragmentComments => список комментариев c данными из массива
 */
const createCommentsElement = (arrayOfComments) => {
  const commentList = document.createElement('ul');
  commentList.classList.add('social__comments');
  const fragmentComments = document.createDocumentFragment();
  arrayOfComments.forEach(({avatar, message, name})=>{
    const commentItem = document.createElement('li');
    commentItem.classList.add('social__comment');

    const imgItem = document.createElement('img');
    imgItem.classList.add('social__picture');
    imgItem.src = avatar;
    imgItem.alt = name;
    imgItem.width = 35;
    imgItem.height = 35;

    const paragraphItem = document.createElement('p');
    paragraphItem.classList.add('social__text');
    paragraphItem.textContent = message;

    commentItem.append(imgItem, paragraphItem)
    commentList.appendChild(commentItem);
  });

  return fragmentComments.appendChild(commentList);
};

/**
 * Функция открывает модальное окно с больщой фото
 * и заполняет ее данными из кликнутой миниатюры
 * @param {array} param
 * @return {void}
 */
const showBigPicture = (post) => {
  bigImageUrl.src = post.url;
  likesCount.textContent = post.likes;
  commentsCount.textContent = post.comments.length;
  socialCaption.textContent = post.description;

  document.querySelector('.social__comments').parentNode.replaceChild(createCommentsElement(post.comments), document.querySelector('.social__comments'));

  document.body.classList.add('modal-open');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  bigPicture.classList.remove('hidden');
  // Добавим обработчики событий для закарытия окна
  document.addEventListener('keyup', escBtnBigPictureHandler);
  btnPictureCancel.addEventListener('click', clickBtnClosePictureHandler);
};

export {showBigPicture};
