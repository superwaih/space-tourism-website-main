document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel__item");
    console.log(items)
    const buttonsHtml = Array.from(items, () => {
      for(let i = 1; i <= items.length; i++){
        return `<span class="carousel__button">${i}</span>`;
      }
      
    });
  
    carousel.insertAdjacentHTML(
      "beforeend",
      `
          <div class="carousel__nav">
              ${buttonsHtml.join("")}
          </div>
      `
    );
  
    const buttons = carousel.querySelectorAll(".carousel__button");
  
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        // un-select all the items
        items.forEach((item) =>
          item.classList.remove("carousel__item--selected")
        );
        buttons.forEach((button) =>
          button.classList.remove("carousel__button--selected")
        );
  
        items[i].classList.add("carousel__item--selected");
        button.classList.add("carousel__button--selected");
      });
    });
  
    // Select the first item on page load
    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");
  });
  // Navabar Toggle Button
const navSlide = () => {
  const burger = document.querySelector('.menu-btn')
  const nav = document.querySelector('.navlinks')
  const closeBtn = document.querySelector('.menu-btn img')
console.log(closeBtn)
  burger.addEventListener('click', () => {
    nav.classList.toggle('active')
   
    if(nav.classList.contains('active')){
      closeBtn.src = './assets/shared/icon-close.svg'
    }else{
      closeBtn.src ='./assets/shared/icon-hamburger.svg'
    }
  })
}
navSlide()
