//navigation menu
const navItems = document.querySelector('.nav-menu');

const navMenu = [
    {
        linkHref:"index.html#us",
        linkName:"Our Story"
    },
    {
        linkHref:"courses.html",
        linkName:"Courses"
    },
    {
        linkHref:"index.html#reviews",
        linkName:"Reviews"
    },
    {
        linkHref:"index.html#contact",
        linkName:"Contact"
    }
];

for(let i in navMenu){
    navItems.insertAdjacentHTML(`beforeend`, `<li><a href="${navMenu[i].linkHref}">${navMenu[i].linkName}</a></li>`);
}

//Courses page content

const mainBlock = document.querySelector('main');
const coursesNiz1 = [
    {
        coursesPlayBtn: `<i class="fa-regular fa-circle-play"></i>`,
        coursesImg: `<img src="images/html.png" alt="Html programming course"/>`,
        coursesTxt: `<h3>HTML course</h3>
        <p>Learn how to create whole structure of your website from zero.</p>
        <p><i class="fa-solid fa-check"></i> SEO Friendly!</p>
        <p><i class="fa-solid fa-check"></i> XML included!</p>
        <p><i class="fa-solid fa-check"></i> API!</p>
        <p><i class="fa-solid fa-check"></i> 10+ Hours!</p>
        <p><i class="fa-solid fa-check"></i> 1500+ Downloads!</p>
        <p>Price: 100<i class="fa-solid fa-dollar-sign"></i></p>`
    },
    {
        coursesPlayBtn: `<i class="fa-regular fa-circle-play"></i>`,
        coursesImg: `<img src="images/css.png" alt="CSS programming course"/>`,
        coursesTxt: `<h3>CSS course</h3>
        <p>CSS will help you design your created website. It will bring your imaginative creativity into reality!</p>
        <p><i class="fa-solid fa-check"></i> Layouts: Float, Flex, Grid!</p>
        <p><i class="fa-solid fa-check"></i> CSS pseudo classes!</p>
        <p><i class="fa-solid fa-check"></i> Responsive Design!</p>
        <p><i class="fa-solid fa-check"></i> 24+ Hours!</p>
        <p><i class="fa-solid fa-check"></i> 2300+ Downloads!</p>
        <p>Price: 100<i class="fa-solid fa-dollar-sign"></i></p>`
    },
    {
        coursesPlayBtn: `<i class="fa-regular fa-circle-play"></i>`,
        coursesImg: `<img src="images/js.png" alt="JavaScript programming course"/>`,
        coursesTxt: `<h3>JavaScript course</h3>
        <p>This course is focusing on dynamics and interactivity of the websites.</p>
        <p><i class="fa-solid fa-check"></i> Fundamentals!</p>
        <p><i class="fa-solid fa-check"></i> Form and Interactivity!</p>
        <p><i class="fa-solid fa-check"></i> Libraries and Frameworks!</p>
        <p><i class="fa-solid fa-check"></i> 55+ Hours!</p>
        <p><i class="fa-solid fa-check"></i> 113 350+ Downloads!</p>
        <p>Price: 160<i class="fa-solid fa-dollar-sign"></i></p>`
    }
]

const coursesNiz2 = [
    {
        coursesPlayBtn: `<i class="fa-regular fa-circle-play"></i>`,
        coursesImg: `<img src="images/c-lang.png" alt="Programming language C course"/>`,
        coursesTxt: `<h3>Language C course</h3>
        <p>Learn the basics of the programming Language C. First programming language, base for all!</p>
        <p><i class="fa-solid fa-check"></i> Fundamentals!</p>
        <p><i class="fa-solid fa-check"></i> Libraries!</p>
        <p><i class="fa-solid fa-check"></i> Loops!</p>
        <p><i class="fa-solid fa-check"></i> 40+ Hours!</p>
        <p><i class="fa-solid fa-check"></i> 56 500+ Downloads!</p>
        <p>Price: 100<i class="fa-solid fa-dollar-sign"></i></p>`
    },
    {
        coursesPlayBtn: `<i class="fa-regular fa-circle-play"></i>`,
        coursesImg: `<img src="images/cplus.png" alt="Programming language C++ course"/>`,
        coursesTxt: `<h3>Language C++ course</h3>
        <p>C++ is very vastly used in programming the games. Now you can create your own game.</p>
        <p><i class="fa-solid fa-check"></i> Fundamentals!</p>
        <p><i class="fa-solid fa-check"></i> Libraries!</p>
        <p><i class="fa-solid fa-check"></i> Logic!</p>
        <p><i class="fa-solid fa-check"></i> 60+ Hours!</p>
        <p><i class="fa-solid fa-check"></i> 95 000+ Downloads!</p>
        <p>Price: 150<i class="fa-solid fa-dollar-sign"></i></p>`
    },
    {
        coursesPlayBtn: `<i class="fa-regular fa-circle-play"></i>`,
        coursesImg: `<img src="images/c-s.png" alt="Programming language C# course"/>`,
        coursesTxt: `<h3>Language C# course</h3>
        <p>Learn the fundamentals of object oriented programs. C# for starters is the best choice.</p>
        <p><i class="fa-solid fa-check"></i> Fundamentals!</p>
        <p><i class="fa-solid fa-check"></i> Classes and Forms!</p>
        <p><i class="fa-solid fa-check"></i> Libraries!</p>
        <p><i class="fa-solid fa-check"></i> 60+ Hours!</p>
        <p><i class="fa-solid fa-check"></i> 110 000+ Downloads!</p>
        <p>Price: 150<i class="fa-solid fa-dollar-sign"></i></p>`
    },
]

const coursesNiz3 = [
    {
        coursesPlayBtn: `<i class="fa-regular fa-circle-play"></i>`,
        coursesImg: `<img src="images/python.jpg" alt="Programming language Python course"/>`,
        coursesTxt: `<h3>Python course</h3>
        <p>Learn one of the easiest and most used programming language.</p>
        <p><i class="fa-solid fa-check"></i> Fundamentals!</p>
        <p><i class="fa-solid fa-check"></i> Libraries!</p>
        <p><i class="fa-solid fa-check"></i> Implementation!</p>
        <p><i class="fa-solid fa-check"></i> 90+ Hours!</p>
        <p><i class="fa-solid fa-check"></i> 350 000+ Downloads!</p>
        <p>Price: 140<i class="fa-solid fa-dollar-sign"></i></p>`
    },
    {
        coursesPlayBtn: `<i class="fa-regular fa-circle-play"></i>`,
        coursesImg: `<img src="images/java.png" alt="Programming language Java course"/>`,
        coursesTxt: `<h3>Java course</h3>
        <p>Java is used to construct applications in laptops, data centres, game consoles and other devices.</p>
        <p><i class="fa-solid fa-check"></i> Fundamentals!</p>
        <p><i class="fa-solid fa-check"></i> Libraries!</p>
        <p><i class="fa-solid fa-check"></i> Science!</p>
        <p><i class="fa-solid fa-check"></i> 90+ Hours!</p>
        <p><i class="fa-solid fa-check"></i> 250 000+ Downloads!</p>
        <p>Price: 140<i class="fa-solid fa-dollar-sign"></i></p>`
    },
    {
        coursesPlayBtn: `<i class="fa-regular fa-circle-play"></i>`,
        coursesImg: `<img src="images/swift.png" alt="Programming language Swift course"/>`,
        coursesTxt: `<h3>Swift course</h3>
        <p>Newest programming language used in IOS devices for buidling applications. </p>
        <p><i class="fa-solid fa-check"></i> Basics!</p>
        <p><i class="fa-solid fa-check"></i> Functions!</p>
        <p><i class="fa-solid fa-check"></i> Implementation!</p>
        <p><i class="fa-solid fa-check"></i> 50+ Hours!</p>
        <p><i class="fa-solid fa-check"></i> 78 000+ Downloads!</p>
        <p>Price: 100<i class="fa-solid fa-dollar-sign"></i></p>`
    }
]

const coursesNiz4 = [
    {
        coursesPlayBtn: `<i class="fa-regular fa-circle-play"></i>`,
        coursesImg: `<img src="images/html.png" alt="Html programming course"/>`,
        coursesTxt: `<h3>Front End Developer</h3>
        <p>Learn how to create, design and implement function to your website.</p>
        <p><i class="fa-solid fa-check"></i> HTML course included!</p>
        <p><i class="fa-solid fa-check"></i> CSS courses included!</p>
        <p><i class="fa-solid fa-check"></i> JavaScript course included!</p>
        <p><i class="fa-solid fa-check"></i> 100+ Hours!</p>
        <p><i class="fa-solid fa-check"></i> 10 000+ Downloads!</p>
        <p>Price: 330<i class="fa-solid fa-dollar-sign"></i></p>`
    },
    {
        coursesPlayBtn: `<i class="fa-regular fa-circle-play"></i>`,
        coursesImg: `<img src="images/c-lang.png" alt="Programming language C course"/>`,
        coursesTxt: `<h3>C Programming for Starters</h3>
        <p>Basic and very intresting. Learn how to create everyday used applications.</p>
        <p><i class="fa-solid fa-check"></i> Language C included!</p>
        <p><i class="fa-solid fa-check"></i> Language C++ included!</p>
        <p><i class="fa-solid fa-check"></i> Language C# included!</p>
        <p><i class="fa-solid fa-check"></i> 150+ Hours!</p>
        <p><i class="fa-solid fa-check"></i> 26 000+ Downloads!</p>
        <p>Price: 370<i class="fa-solid fa-dollar-sign"></i></p>`
    },
    {
        coursesPlayBtn: `<i class="fa-regular fa-circle-play"></i>`,
        coursesImg: `<img src="images/python.jpg" alt="Programming language Python course"/>`,
        coursesTxt: `<h3>Sience Programming</h3>
        <p>If you love data science based programs you must buy this.</p>
        <p><i class="fa-solid fa-check"></i> Python course included!</p>
        <p><i class="fa-solid fa-check"></i> Java course included!</p>
        <p><i class="fa-solid fa-check"></i> 200+ Hours!</p>
        <p><i class="fa-solid fa-check"></i> 65 000+ Downloads!</p>
        <p>Price: 250<i class="fa-solid fa-dollar-sign"></i></p>`
    }
]


//Content of the web page

//Creating web design part

mainBlock.insertAdjacentHTML(`beforeend`,`<h2 class="all-h">Web Design</h2>`);




var divRow1 = document.createElement(`div`);
divRow1.classList.add(`row`);
    for(let i = 0; i<coursesNiz1.length; i++){
        //button
        var btnShop = document.createElement(`button`);
        btnShop.classList.add(`btn-to-cart`);
        btnShop.innerHTML = `BUY NOW`;

        //other elements
        var divImg = document.createElement(`div`);
        divImg.classList.add(`courses-img`);
        divImg.insertAdjacentHTML(`beforeend`,`${coursesNiz1[i].coursesImg}`);
        var divContent = document.createElement(`div`);
        divContent.classList.add(`courses-desc`);
        divContent.insertAdjacentHTML(`beforeend`,`${coursesNiz1[i].coursesTxt}`);
        var divColumn = document.createElement(`div`);
        divColumn.classList.add(`column`);
        divColumn.insertAdjacentHTML(`beforeend`,`${coursesNiz1[i].coursesPlayBtn}`);

        var spanCong = document.createElement(`span`);
        spanCong.classList.add(`added`);
        
        divColumn.appendChild(divImg);
        divColumn.appendChild(divContent);
        divColumn.appendChild(btnShop);
        divColumn.appendChild(spanCong);
    
        divRow1.appendChild(divColumn);
    }
var divWeb1 = document.createElement(`div`);
divWeb1.classList.add(`web`);
divWeb1.appendChild(divRow1);

mainBlock.appendChild(divWeb1);

//Creating programming part

mainBlock.insertAdjacentHTML(`beforeend`,`<h2 class="all-h">Programming</h2>`);

var divRow2 = document.createElement(`div`);
divRow2.classList.add(`row`);

for(let i = 0; i<coursesNiz2.length; i++){
    //button
    var btnShop = document.createElement(`button`);
    btnShop.classList.add(`btn-to-cart`);
    btnShop.innerHTML = `BUY NOW`;

    //other elements
    var divImg = document.createElement(`div`);
    divImg.classList.add(`courses-img`);
    divImg.insertAdjacentHTML(`beforeend`,`${coursesNiz2[i].coursesImg}`);
    var divContent = document.createElement(`div`);
    divContent.classList.add(`courses-desc`);
    divContent.insertAdjacentHTML(`beforeend`,`${coursesNiz2[i].coursesTxt}`);
    var divColumn = document.createElement(`div`);
    divColumn.classList.add(`column`);
    divColumn.insertAdjacentHTML(`beforeend`,`${coursesNiz2[i].coursesPlayBtn}`);
    var spanCong = document.createElement(`span`);
    spanCong.classList.add(`added`);

    divColumn.appendChild(divImg);
    divColumn.appendChild(divContent);
    divColumn.appendChild(btnShop);
    divColumn.appendChild(spanCong);

    divRow2.appendChild(divColumn);
}
var divWeb2 = document.createElement(`div`);
divWeb2.classList.add(`web`);
divWeb2.appendChild(divRow2);


var divRow3 = document.createElement(`div`);
divRow3.classList.add(`row`);

for(let i = 0; i<coursesNiz3.length; i++){
    //button
    var btnShop = document.createElement(`button`);
    btnShop.classList.add(`btn-to-cart`);
    btnShop.innerHTML = `BUY NOW`;

    //other elements
    var divImg = document.createElement(`div`);
    divImg.classList.add(`courses-img`);
    divImg.insertAdjacentHTML(`beforeend`,`${coursesNiz3[i].coursesImg}`);
    var divContent = document.createElement(`div`);
    divContent.classList.add(`courses-desc`);
    divContent.insertAdjacentHTML(`beforeend`,`${coursesNiz3[i].coursesTxt}`);
    var divColumn = document.createElement(`div`);
    divColumn.classList.add(`column`);
    divColumn.insertAdjacentHTML(`beforeend`,`${coursesNiz3[i].coursesPlayBtn}`);
    var spanCong = document.createElement(`span`);
    spanCong.classList.add(`added`);

    divColumn.appendChild(divImg);
    divColumn.appendChild(divContent);
    divColumn.appendChild(btnShop);
    divColumn.appendChild(spanCong);

    divRow3.appendChild(divColumn);
}
divWeb2.appendChild(divRow3);

mainBlock.appendChild(divWeb2);

//Creating bundle part

mainBlock.insertAdjacentHTML(`beforeend`,`<h2 class="all-h">Bundles</h2>` )

var divRow4 = document.createElement(`div`);
divRow4.classList.add(`row`);

for(let i = 0; i<coursesNiz4.length; i++){
    //button
    var btnShop = document.createElement(`button`);
    btnShop.classList.add(`btn-to-cart`);
    btnShop.innerHTML = `BUY NOW`;

    //other elements
    var divImg = document.createElement(`div`);
    divImg.classList.add(`courses-img`);
    divImg.insertAdjacentHTML(`beforeend`,`${coursesNiz4[i].coursesImg}`);
    var divContent = document.createElement(`div`);
    divContent.classList.add(`courses-desc`);
    divContent.insertAdjacentHTML(`beforeend`,`${coursesNiz4[i].coursesTxt}`);
    var divColumn = document.createElement(`div`);
    divColumn.classList.add(`column`);
    divColumn.insertAdjacentHTML(`beforeend`,`${coursesNiz4[i].coursesPlayBtn}`);
    var spanCong = document.createElement(`span`);
    spanCong.classList.add(`added`);
    

    divColumn.appendChild(divImg);
    divColumn.appendChild(divContent);
    divColumn.appendChild(btnShop);
    divColumn.appendChild(spanCong);

    divRow4.appendChild(divColumn);
}
var divWeb3 = document.createElement(`div`);
divWeb3.classList.add(`web`);
divWeb3.appendChild(divRow4);

mainBlock.appendChild(divWeb3);


// Nav menu responsive

const hamBtn = document.querySelector(`.fa-bars`);
const closeHamBtn = document.querySelector(`.fa-xmark`);

const navMenuResponsive = document.querySelector(`nav`);

hamBtn.addEventListener(`click`, function(){
    navMenuResponsive.classList.toggle(`showmenu`);
    document.querySelector(`header`).style.overflowX = `visible`;
});
closeHamBtn.addEventListener(`click`, function(){
    navMenuResponsive.classList.toggle(`showmenu`);
    document.querySelector(`header`).style.overflowX = `hidden`;
});


//Sign in

const userBtn = document.querySelector(`.userBtn`);
userBtn.addEventListener(`click`, function(){
    const signIn = document.querySelector(`.modalLogin`);
    signIn.classList.toggle(`hidden`);
    signIn.classList.toggle(`flex`);
})

//sign in validation

const reUser = /^[a-zA-Z0-9]+$/;
const rePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const btnSignin = document.querySelector(`#signin`);
const userName = document.querySelector(`#user`);
const passWord = document.querySelector(`#password`);
const spanUser = document.querySelector(`#userName`);
spanUser.innerHTML = 'Incorrect username!';
const spanPass = document.querySelector(`#passwordRe`);
spanPass.innerHTML = `Incorrect password!`;
const spanSignIn = document.querySelector(`#signInSuc`);

btnSignin.addEventListener(`click`, function(e){
    e.preventDefault();
    var numFaultsS = 0;
    spanSignIn.style.display = `none`;
    if(!userName.value.match(reUser)){
        spanUser.style.display = `block`;
        userName.style.border = `2px solid red`;
        numFaultsS++;
    }
    else if(userName.value.match(reUser)){
        spanUser.style.display = `none`;
        userName.style.border = `2px solid #3669BA`;
    }
    if(!passWord.value.match(rePassword)){
        spanPass.style.display = `block`;
        passWord.style.border = `2px solid red`;
        numFaultsS++;
    }
    else if(passWord.value.match(rePassword)){
        spanPass.style.display = `none`;
        passWord.style.border = `2px solid #3669BA`;
    }
    if(numFaultsS == 0){
        spanSignIn.innerHTML = `Succesful.`;
        spanSignIn.style.display = `flex`;
        spanSignIn.style.color = `rgb(110, 220, 83)`;
    }
});

//Cart 
const modalCart = document.querySelector(`.modalCart`);
const modalCartBtn = document.querySelector(`.userCartBtn`);

modalCartBtn.addEventListener(`click`, function(){
    const toCart = document.querySelector(`.modalCart`);
    toCart.classList.toggle(`hidden`);
})

const ukupnaTxt = document.createElement(`p`);
const ukupnaText = document.createTextNode(`Total Price`);
ukupnaTxt.appendChild(ukupnaText);

let ukupnaCena = document.createElement(`p`);
ukupnaCena.style.textAlign = `end`;
ukupnaCena.innerHTML = 0;

const sumBlock = document.querySelector(`.sum`);
sumBlock.appendChild(ukupnaTxt);
sumBlock.appendChild(ukupnaCena);

var btnToCart = document.querySelectorAll(`.btn-to-cart`);
const nizCoursesEl = [
    {
        name:`HTML Course`,
        price: 100
    },
    {
        name:`CSS Course`,
        price: 100
    },
    {
        name:`JavaScript Course`,
        price: 160
    },
    {
        name:`Lang. C Course`,
        price: 100
    },
    {
        name:`Lang. C++ Course`,
        price: 150
    },
    {
        name:`Lang. C# Course`,
        price: 150
    },
    {
        name:`Python Course`,
        price: 140
    },
    {
        name:`Java Course`,
        price: 140
    },
    {
        name:`Swift Course`,
        price: 100
    },
    {
        name:`Front end Bundle`,
        price: 330
    },
    {
        name:`Programming Bundle`,
        price: 370
    },
    {
        name:`Science Bundle`,
        price: 250
    }
]

for(let i=0; i<btnToCart.length; i++){
    btnToCart[i].addEventListener(`click`, function(){
        var cartMaterial = document.createElement(`div`); 
        cartMaterial.style.display = `flex`;
        cartMaterial.style.justifyContent = `space-between`;
        var cartMatText = document.createElement(`p`);
        cartMatText.innerHTML = nizCoursesEl[i].name;

        var cartMatPrice = document.createElement(`p`);
        cartMatPrice.innerHTML = nizCoursesEl[i].price;
        cartMatPrice.style.textAlign = `end`;

        
        cartMaterial.appendChild(cartMatText);
        cartMaterial.appendChild(cartMatPrice);

        modalCart.appendChild(cartMaterial);

        var spanTag = document.querySelectorAll(`.added`);
        spanTag[i].innerHTML = `Successfully added to your cart!`;
        var spanTimer = setTimeout(function(){
            spanTag[i].innerHTML = ``;
        },3000);


        ukupnaCena.innerHTML = Number(ukupnaCena.innerHTML) + Number(cartMatPrice.innerHTML);
    })
}

