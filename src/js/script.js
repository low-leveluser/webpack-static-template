const showMoreButton = document.querySelector('.button');
const hiddenItems = document.querySelectorAll('.hidden-item');
const showMoreButtonTech = document.querySelector('.button-tech');
const hiddenItemsTech = document.querySelectorAll('.hidden-item-tech');

showMoreButton.addEventListener('click', function(){

      if(showMoreButton.classList[1] === 'show-more'){

        showMoreButton.classList.remove('show-more');
        showMoreButton.classList.add('hide-more');
        showMoreButton.innerHTML = "Скрыть";

          for(i=0; i < hiddenItems.length; i++){
            hiddenItems[i].classList.remove('hidden-item')
            hiddenItems[i].classList.add('showed-item')
          }
      } else {

        showMoreButton.classList.remove('hide-more');
        showMoreButton.classList.add('show-more');
        showMoreButton.innerHTML = "Показать всё";

          for(i=0; i < hiddenItems.length; i++){
            hiddenItems[i].classList.remove('showed-item')
           hiddenItems[i].classList.add('hidden-item')
          }
      }
  });

  showMoreButtonTech.addEventListener('click', function(){

    if(showMoreButtonTech.classList[1] === 'show-more-tech'){

      showMoreButtonTech.classList.remove('show-more-tech');
      showMoreButtonTech.classList.add('hide-more-tech');
      showMoreButtonTech.innerHTML = "Скрыть";

        for(i=0; i < hiddenItems.length; i++){
          hiddenItemsTech[i].classList.remove('hidden-item-tech')
          hiddenItemsTech[i].classList.add('showed-item-tech')
        }
    } else {

      showMoreButtonTech.classList.remove('hide-more-tech');
      showMoreButtonTech.classList.add('show-more-tech');
      showMoreButtonTech.innerHTML = "Показать всё";

        for(i=0; i < hiddenItems.length; i++){
          hiddenItemsTech[i].classList.remove('showed-item-tech')
          hiddenItemsTech[i].classList.add('hidden-item-tech')
        }
    }
});
