document.addEventListener('DOMContentLoaded', function (){

    $('.responsive').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      
      
      
      let tab = function () {
          let tabNav = document.querySelectorAll('.tabs-nav__item'),
              tabContent = document.querySelectorAll('.tab'),
              tabName;
      
              tabNav.forEach(item =>{
                  item.addEventListener('click',selectTabNav )
              })
      
              function selectTabNav() {
                  tabNav.forEach(item => {
                      item.classList.remove('tabs-nav__item_active')
                  });
                  this.classList.add('tabs-nav__item_active');
                  tabName = this.getAttribute('data-tab-name');
                  selectContent(tabName); 
              }
      
              function selectContent(tabName) {
                  tabContent.forEach(item=> {
                      item.classList.contains(tabName) ? item.classList.add('tab_active') : item.classList.remove('tab_active');
                  })
              }
      };
      
      tab();


});

