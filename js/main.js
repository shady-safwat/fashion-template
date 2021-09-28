// close menu by closeIcon
let closeIcon = document.querySelector('.navbarFashion .button-close');
let menuIcon = document.querySelector('.navbarFashion .button-menuIcon');
let collapse = document.querySelector('.navbarFashion .collapse');
let navbarLogo = document.querySelector('.navbarFashion .logo');

    menuIcon.addEventListener('click',function(){
        collapse.style.display = 'block';
        closeIcon.style.display = 'block';
        menuIcon.style.display = 'none';
        navbarLogo.style.display = 'none';
    });

    closeIcon.addEventListener('click',function(){
        collapse.style.display = 'none';
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
        navbarLogo.style.display = 'block';
    });

// Featured Item
    //   1. change active for navbar
    let navbarLinks = document.querySelectorAll('.FeaturedItems  .navbar .nav .nav-item .nav-link');

    for(let i=0; i<navbarLinks.length; i++){
        navbarLinks[i].addEventListener('click',function(){
            for(let j=0; j<navbarLinks.length; j++){
                navbarLinks[j].classList.remove('active');
            }
            navbarLinks[i].classList.add('active');
        });
    }

    //  2. when clik on all links show all sections
    // sections
    let sectionAll = document.querySelector('.shopping-cards .all');
    let sectionMen = document.querySelector('.shopping-cards .men');
    let sectionWomen = document.querySelector('.shopping-cards .women');
    let sectionKids = document.querySelector('.shopping-cards .kids');
    // navbar-links
    let navAll = document.querySelector('.FeaturedItems .navbar .nav .nav-item .nav-all');
    let navMen = document.querySelector('.FeaturedItems  .navbar .nav .nav-item .nav-men');
    let navWomen = document.querySelector('.FeaturedItems  .navbar .nav .nav-item .nav-women');
    let navKids = document.querySelector('.FeaturedItems  .navbar .nav .nav-item .nav-kids');

    
    // All
    navAll.addEventListener('click',function(){
        sectionAll.style.display = 'block';
        sectionMen.style.display = 'none';
        sectionWomen.style.display = 'none';
        sectionKids.style.display = 'none';
    });

    // Men
    navMen.addEventListener('click',function(){
        sectionMen.style.display = 'block';
        sectionAll.style.display = 'none';
        sectionWomen.style.display = 'none';
        sectionKids.style.display = 'none';
    });

    // Women
    navWomen.addEventListener('click',function(){
        sectionWomen.style.display = 'block';
        sectionAll.style.display = 'none';
        sectionMen.style.display = 'none';
        sectionKids.style.display = 'none';
    });

    // Kids
    navKids.addEventListener('click',function(){
        sectionKids.style.display = 'block';
        sectionAll.style.display = 'none';
        sectionMen.style.display = 'none';
        sectionWomen.style.display = 'none';
    });

    // 3. dynamic padding shopping-sections when click on navbar links
    let shoppingSections = document.querySelectorAll('.shopping-cards .shopping-sections');
    let navBar = document.querySelector('.FeaturedItems .navbar');

    for(k=0; k<shoppingSections.length;k++){
        shoppingSections[k].style.paddingTop = navBar.clientTop + 'rem';
    }