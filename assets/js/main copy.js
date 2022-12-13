//navigation menu
const $navItems = $('.nav-menu');

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
    $navItems.append(`<li><a href="${navMenu[i].linkHref}">${navMenu[i].linkName}</a></li>`);
}


// Nav menu responsive

const $hamBtn = $(`.fa-bars`);
const $closeHamBtn = $(`.fa-xmark`);

const $navMenuResponsive = $(`nav`);

$hamBtn.click(function(){
    $navMenuResponsive.toggle();
    $navMenuResponsive.css(`transform`,`translateX(0%)`);
    $(`header`).css(`overflowX`,`visible`);
    
});
$closeHamBtn.click(function(){
    $navMenuResponsive.toggle();
    
});


//cart
const $modalCart = $(`.modalCart`);
const $modalCartBtn = $(`.userCartBtn`);

$modalCartBtn.click(function(){
    const $toCart = $(`.modalCart`);
    $toCart.toggle();
})

const ukupnaTxt = document.createElement(`p`);
const ukupnaText = document.createTextNode(`Total Price`);
ukupnaTxt.appendChild(ukupnaText);

let ukupnaCena = document.createElement(`p`);
ukupnaCena.style.textAlign = `end`;
ukupnaCena.innerHTML = 0;

const $sumBlock = $(`.sum`);
$sumBlock.append(ukupnaTxt);
$sumBlock.append(ukupnaCena);

//Sign in

const userBtn = document.querySelectorAll(`.userBtn`);
userBtn.forEach(btn => {
    btn.addEventListener(`click`, function(){
        const signIn = document.querySelector(`.modalLogin`);
        signIn.classList.toggle(`hidden`);
        signIn.classList.toggle(`flex`);
    })
});

//sign in validation

const reUser = /^[a-zA-Z0-9]+$/;
const rePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const $btnSignin = $(`#signin`);
const $userName = $(`#user`);
const $passWord = $(`#password`);
const $spanUser = $(`#userName`);
$spanUser.append('Incorrect username!');
const $spanPass = $(`#passwordRe`);
$spanPass.append(`Incorrect password!`);
const $spanSignIn = $(`#signInSuc`);

$btnSignin.click(function(e){
    e.preventDefault();
    var numFaultsS = 0;
    $spanSignIn.css(`display`,`none`);
    if(!($userName.val()).match(reUser)){
        $spanUser.css(`display`,`block`);
        $userName.css(`border`,`2px solid red`);
        numFaultsS++;
    }
    else if(($userName.val()).match(reUser)){
        $spanUser.css(`display`,`none`);
        $userName.css(`border`,`2px solid #3669BA`);
    }
    if(!($passWord.val()).match(rePassword)){
        $spanPass.css(`display`,`block`);
        $passWord.css(`border`,`2px solid red`);
        numFaultsS++;
    }
    else if(($passWord.val()).match(rePassword)){
        $spanPass.css(`display`,`none`);
        $passWord.css(`border`,`2px solid #3669BA`);
    }
    if(numFaultsS == 0){
        $spanSignIn.append(`Succesful.`);
        $spanSignIn.css({"display":"flex","color":"rgb(110, 220, 83)"});
    }
});



const url = window.location.href;
console.log(url)
// if(url == (`https://bane1110.github.io/LevixonTeach/`)|| url == (`https://bane1110.github.io/LevixonTeach/index.html`)){
if(url.includes(`index.html`)){
    console.log(url);
// our community

const $cBlock = $('#c-content');

const ourNiz = [
    {
        ico : '<i class="fa-solid fa-check"></i>',
        textP : `
        Our work and courses are approved by many great companies like Cisco and Oracle.
        `
    },
    {
        ico : ' <i class="fa-solid fa-users"></i>',
        textP : `
        We have really great community across whole globe. Our community is very helpful.
        `
    },
    {
        ico : '<i class="fa-solid fa-arrow-trend-up"></i>',
        textP : `
        Our company grows each day. Our courses are expanding and will continue to expand.
        `
    }
]


//For In loop for creating dynamic content on section Our Community
for(index in ourNiz){
    const cText = document.createElement(`div`);
    cText.classList.add(`c-text`);
    const cIcon = document.createElement(`div`);
    cIcon.classList.add(`c-icon`);
    cIcon.innerHTML = `${ourNiz[index].ico}`;
    cText.appendChild(cIcon);
    const elText = document.createElement('p');
    elText.innerHTML = `${ourNiz[index].textP}`;
    cText.appendChild(elText);
    //console.log(cText);
    $cBlock.append(cText);
}

//reviews

const $rBlock = $('#reviews');
const reviewNiz1 = [
    {
        rImg : '<img src="images/man1.png" alt="James McCorny profile picture"/>',
        rStars : `<i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>`,
        rName : '<h3>James McCorny</h3>',
        rText : `<p>
        At first I thought this was really bad no one should buy this. But after going through some of courses i can tell it makes a lot of difference now. 
        I just finished Web Developer bundle and I’m already able to create competition worthy web sites. I’m going to continue to study Web Development and if they upload more courses related to that topic, you know where to find me.
        </p>`
    },
    {
        rImg : '<img src="images/woman.png" alt="Carla Aniston profile picture"/>',
        rStars : `<i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>`,
        rName : '<h3>Carla Aniston</h3>',
        rText : `<p>
        I was very intrested in programming but did not know how to start. My friend suggested me this page and its courses. I was really surprised to see that they offer one of the newest programming language Swift. 
        I just started watching but I can tell it got more than you would expect. I love it it covers every detail of program.
        </p>`
    },
]
const reviewNiz2 = [
    {
        rImg : '<img src="images/woman2.png" alt="Shaila Cameron profile picture"/>',
        rStars : `<i class="fa-regular fa-star-half-stroke"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>`,
        rName : '<h3>Shaila Cameron</h3>',
        rText : `<p>
        Really nice courses. I went through C and C++ and they are very good in terms of information to time course last ratio. C could have been explained a little bit slower but other than that everything was top class. I have many suggestion and i connacted you via Email.
         The responses were really nice and profesional and i hope one day I can join this company.
        </p>`
    },
    {
        rImg : '<img src="images/man2.png" alt="Coby Ruhl profile picture"/>',
        rStars : `<i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>`,
        rName : '<h3>Coby Ruhl</h3>',
        rText : `<p>
        As a Software Engineer with 5+ years expiriance I wanted to test this courses. Everyone and i repeat EVERYONE of them are done with 100% effort. This is really what you can call foundation of your programming journey. 
        I hope new courses will be as profesional as this already availabl. Wishing all the best for the company.
        </p>`
    },
]

const comD1 = document.createElement(`div`);
    comD1.setAttribute(`class`, `comments slide-1`);
    const wrapSlide = document.createElement(`div`);
    wrapSlide.classList.add(`wrap-slide`);
    wrapSlide.appendChild(comD1);


for(index in reviewNiz1){
    

    const comC = document.createElement(`div`);
    comC.classList.add(`com-content`);

    const comLeft = document.createElement(`div`);
    comLeft.classList.add(`left`);

    const comImg = document.createElement(`div`);
    comImg.classList.add(`img-rev`);
    comImg.innerHTML = `${reviewNiz1[index].rImg}`;

    const comStars = document.createElement(`div`);
    comStars.classList.add(`stars`);
    comStars.innerHTML = `${reviewNiz1[index].rStars}`;

    comLeft.appendChild(comImg);
    comLeft.appendChild(comStars);
    comC.appendChild(comLeft);
    comD1.appendChild(comC);
    

    const comR = document.createElement(`div`);
    comR.classList.add(`right`);

    const comName = document.createElement(`div`);
    comName.classList.add(`name`);
    comName.innerHTML = `${reviewNiz1[index].rName}`;

    const hrTag = document.createElement(`hr`);


    const comTxt = document.createElement(`div`);
    comTxt.classList.add(`text-com`);
    comTxt.innerHTML = `${reviewNiz1[index].rText}`;


    comR.appendChild(comName);
    comR.appendChild(hrTag);
    comR.appendChild(comTxt);
    comC.appendChild(comR);
    comD1.appendChild(comC);

}


const comD2 = document.createElement(`div`);
    comD2.setAttribute(`class`, `comments slide-2`);
    wrapSlide.appendChild(comD2);
    $rBlock.append(wrapSlide);
    
for(index in reviewNiz2){
    

    const comC = document.createElement(`div`);
    comC.classList.add(`com-content`);

    const comLeft = document.createElement(`div`);
    comLeft.classList.add(`left`);

    const comImg = document.createElement(`div`);
    comImg.classList.add(`img-rev`);
    comImg.innerHTML = `${reviewNiz2[index].rImg}`;

    const comStars = document.createElement(`div`);
    comStars.classList.add(`stars`);
    comStars.innerHTML = `${reviewNiz2[index].rStars}`;

    comLeft.appendChild(comImg);
    comLeft.appendChild(comStars);
    comC.appendChild(comLeft);
    comD2.appendChild(comC);
    

    const comR = document.createElement(`div`);
    comR.classList.add(`right`);

    const comName = document.createElement(`div`);
    comName.classList.add(`name`);
    comName.innerHTML = `${reviewNiz2[index].rName}`;

    const hrTag = document.createElement(`hr`);


    const comTxt = document.createElement(`div`);
    comTxt.classList.add(`text-com`);
    comTxt.innerHTML = `${reviewNiz2[index].rText}`;


    comR.appendChild(comName);
    comR.appendChild(hrTag);
    comR.appendChild(comTxt);
    comC.appendChild(comR);
    comD2.appendChild(comC);

}
const btnSlider = document.createElement(`div`);
btnSlider.classList.add(`btnSlide`);
const btn1 = document.createElement(`div`);
btn1.setAttribute(`class`, `dot dot1 active-dot`);
const btn2 = document.createElement(`div`);
btn2.setAttribute(`class`, `dot dot2`);
btnSlider.appendChild(btn1);
btnSlider.appendChild(btn2);

$rBlock.append(btnSlider);


//Slider on review part of the page


const $btnSlide1 = $(`.dot1`);
const $btnSlide2 = $(`.dot2`);
const $slide1 = $(`.slide-1`);
const $slide2 = $(`.slide-2`);


$btnSlide2.click(function(){
    $btnSlide1.removeClass(`active-dot`);
    $btnSlide2.addClass(`active-dot`);

    $slide1.css(`transform`, `translateX(-125%)`);
    $slide2.css(`transform`,`translateX(0%)`);
    $slide2.css(`display`,`flex`);
})
$btnSlide1.click(function(){
    $btnSlide2.removeClass(`active-dot`);
    $btnSlide1.addClass(`active-dot`);

    $slide2.css(`transform`,`translateX(125%)`);
    $slide1.css(`transform`,`translateX(0%)`);
})

//Courses part of the main page content

const $couBlock = $(`#courses`);

const couNiz = [
    {
        couIcon:`<i class="fa-regular fa-circle-play"></i>`,
        couImg:`<img src="images/html.png" alt="Html programming course"/>`,
        couTxt:`<p>
        Front end Web Developer Bundle <br/>
        HTML + CSS + JavaScript
        </p>`
    },
    {
        couIcon:`<i class="fa-regular fa-circle-play"></i>`,
        couImg:`<img src="images/c-lang.png" alt="Programming language C course"/>`,
        couTxt:`<p>
        C Programming for Starters Bundle <br/>
        C + (C++) + (C#)
        </p>`
    },
    {
        couIcon:`<i class="fa-regular fa-circle-play"></i>`,
        couImg:`<img src="images/java.png" alt="Java programming course"/>`,
        couTxt:`<p>
        Sience Programming <br/>Bundle <br/>
        Python + Java
        </p>`
    }
]

const divCouContent = document.createElement(`div`);
divCouContent.setAttribute(`id`,`courses-content`);

for(index in couNiz){
    var imgBlock = document.createElement(`div`);
    imgBlock.classList.add(`co-img`);
    imgBlock.insertAdjacentHTML(`beforeend`, `${couNiz[index].couImg}`);

    var mainBlock = document.createElement(`div`);
    mainBlock.classList.add(`co-text`);
    mainBlock.insertAdjacentHTML(`beforeend`, `${couNiz[index].couIcon}`);
    mainBlock.appendChild(imgBlock);
    mainBlock.insertAdjacentHTML(`beforeend`, `${couNiz[index].couTxt}`);

    var couBtn = document.createElement(`button`);
    couBtn.classList.add(`btn-to-cart`);
    couBtn.innerHTML = `BUY NOW`;
    var spanCong = document.createElement(`span`);
    spanCong.classList.add(`added`);

    mainBlock.appendChild(couBtn);
    mainBlock.appendChild(spanCong);

    divCouContent.appendChild(mainBlock);
}

$couBlock.append(divCouContent);
const shopMoreBtn = document.createElement(`div`);
shopMoreBtn.classList.add(`btn-link`);
shopMoreBtn.innerHTML = `<a href="courses.html">SHOP MORE</a>`;
$couBlock.append(shopMoreBtn);

//Pop up section content

const sections = document.querySelectorAll(`.reveal`);

const elAppearOnScroll = function (){

    let options = {
        root: null,
        threshold: 0.2
    }

    const elAppear = function(entries, observer){
        let [entry] = entries;

        if(!entry.isIntersecting) return;

        if(entry.isIntersecting){
            entry.target.classList.remove(`section_hidden`)
        }

        observer.unobserve(entry.target);
    }

    let sectionObserver = new IntersectionObserver(elAppear, options);

    sections.forEach(section => {
        sectionObserver.observe(section);
        section.classList.add(`section_hidden`);
    })
}
elAppearOnScroll();

//Pop up welcome elements


const elAppearOnScrollElR = function (){

    let options = {
        root: null,
        threshold: 0
    }

    const elAppear = function(entries, observer){
        let [entry] = entries;

        if(!entry.isIntersecting) return;

        if(entry.isIntersecting){
            entry.target.classList.remove(`element_hiddenR`)
        }

        observer.unobserve(entry.target);
    }

    let imgObserver = new IntersectionObserver(elAppear, options);

    const imgTrans = document.querySelector(`.right-reveal`);
    imgObserver.observe(imgTrans);
    imgTrans.classList.add(`element_hiddenR`);
}
elAppearOnScrollElR();


const elAppearOnScrollElL = function (){

    let options = {
        root: null,
        threshold: 0
    }

    const elAppear = function(entries, observer){
        let [entry] = entries;

        if(!entry.isIntersecting) return;

        if(entry.isIntersecting){
            entry.target.classList.remove(`element_hiddenL`)
        }

        observer.unobserve(entry.target);
    }

    let txtObserver = new IntersectionObserver(elAppear, options);

    const txtTrans = document.querySelector(`.left-reveal`);
    txtObserver.observe(txtTrans);
    txtTrans.classList.add(`element_hiddenL`);
}
elAppearOnScrollElL();

//Form

const reFirstName = /^[A-Z][a-z]{1,15}$/;
const reLastName = /^([A-Z][a-z]{4,25})+$/;
const reMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


const $divForm = $(`#forma`);

const $formForma = $(`<form>`);
$formForma.attr({"action":"stranica.php","method":"post","name":"forma1","id":"forma1"});


const $firstName = $(`<input>`);
$firstName.attr({"type":"text","name":"first","id":"first-name","placeholder":"First Name"});

const $lastName = $(`<input>`);
$lastName.attr({"type":"text","name":"last","id":"last-name","placeholder":"Last Name"});

const $emailAddress = $(`<input>`);
$emailAddress.attr({"type":"mail","name":"mail","id":"mail","placeholder":"Email Address"});

const selOptions = [
    {
        value: `0`,
        option: `Choose topic`
    },
    {
        value: `course`,
        option: `Courses`
    },
    {
        value: `review`,
        option: `Review`
    },
    {
        value: `problem`,
        option: `Problem`
    },
    {
        value: `other`,
        option: `Other`
    }
]
const $selTag = $(`<select>`);
$selTag.attr("id","subject");

for(index in selOptions){
    var $optionsSelect = $(`<option>`);
    $optionsSelect.attr(`value`,`${selOptions[index].value}`);
    $optionsSelect.append(`${selOptions[index].option}`);

    $selTag.append($optionsSelect);
}

const $txtArea = $(`<textarea>`);
$txtArea.attr({"name":"text","id":"txta","cols":"30","rows":"5","placeholder":"Fell free to tell us what you have in mind"})

const $inputBtn = $(`<input>`);
$inputBtn.attr({"type":"submit","value":"SEND"})

$formForma.append($firstName);
const $spanFname = $(`<span>`);
$spanFname.attr(`id`, `firstName`);
$spanFname.append(`First name is incorrect! Example: Branko`);
$spanFname.css(`display`,`none`);
$formForma.append($spanFname);

$formForma.append($lastName);
const $spanLname = $(`<span>`);
$spanLname.attr(`id`, `lastName`);
$spanLname.append(`Last name is incorrect! Example: Pualic`);
$spanLname.css(`display`,`none`);
$formForma.append($spanLname);

$formForma.append($emailAddress);
const $spanMail = $(`<span>`);
$spanMail.attr(`id`, `emailRe`);
$spanMail.append(`E-Mail must contain @!`);
$spanMail.css(`display`,`none`);
$formForma.append($spanMail);

$formForma.append($selTag);
$formForma.append($txtArea);
const $spanTxtArea = $(`<span>`);
$spanTxtArea.attr(`id`, `txtArea`);
$spanTxtArea.append(`Text area must contain some information!`);
$spanTxtArea.css(`display`,`none`);
$formForma.append($spanTxtArea);

$formForma.append($inputBtn);

const $spanSuc = $(`<span>`);
$spanSuc.attr(`id`,`suc`);
$formForma.append($spanSuc);


$divForm.append($formForma);

//Form check


$inputBtn.click(function(e){
    e.preventDefault();
    var numFaults = 0;
    $spanSuc.css(`display`,`none`);
        if(!($firstName.val()).match(reFirstName)){
            $spanFname.css(`display`,`block`)
            $firstName.css(`border`,`2px solid red`);
            numFaults++;
        }
        else if(($firstName.val()).match(reFirstName)){
            $spanFname.css(`display`,`none`)
            $firstName.css(`border`,`2px solid #3669BA`);
        }
        if(!($lastName.val()).match(reLastName)){
            $spanLname.css(`display`,`block`);
            $lastName.css(`border`,`2px solid red`);
            numFaults++;
        }
        else if(($lastName.val()).match(reLastName)){
            $spanLname.css(`display`,`none`);
            $lastName.css(`border`,`2px solid #3669BA`);
        }
        if(!($emailAddress.val()).match(reMail)){
            $spanMail.css(`display`,`block`);
            $emailAddress.css(`border`,`2px solid red`);
            numFaults++;
        }
        else if(($emailAddress.val()).match(reMail)){
            $spanMail.css(`display`,`none`);
            $emailAddress.css(`border`,`2px solid #3669BA`);
        }
        if(($txtArea.val()) == ``){
            $spanTxtArea.css(`display`,`block`);
            $txtArea.css(`border`,`2px solid red`);
            numFaults++;
        }
        else if(!($txtArea.val()) == ``){
            $spanTxtArea.css(`display`,`none`);
            $txtArea.css(`border`,`2px solid #3669BA`);
        }
        if(($selTag.val()) == 0){
            $selTag.css(`border`,`2px solid red`);
            numFaults++;
        }
        else if(!($selTag.val()) == 0){
            $selTag.css(`border`,`2px solid #3669BA`);
        }
        if(numFaults == 0){
            $spanSuc.append(`You have successfully sent your message.`);
            $spanSuc.css({"display":"block","color":"rgb(110, 220, 83)"});
            $firstName.val(``);
            $lastName.val(``);
            $emailAddress.val(``);
            $selTag.val(0);
            $txtArea.val(``);
        }
})

//home page buy now functionality
const nizCoursesEl = [
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
var btnToCart = document.querySelectorAll(`.btn-to-cart`);

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

        $modalCart.append(cartMaterial);

        var spanTag = document.querySelectorAll(`.added`);
        spanTag[i].innerHTML = `Successfully added to your cart!`;
        var spanTimer = setTimeout(function(){
            spanTag[i].innerHTML = ``;
        },3000);


        ukupnaCena.innerHTML = Number(ukupnaCena.innerHTML) + Number(cartMatPrice.innerHTML);
    })
}

}



//Courses page content
// if(url == (`https://bane1110.github.io/LevixonTeach/courses.html`)){
if(url.includes(`courses.html`)){


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


//courses to cart function
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
var btnToCart = document.querySelectorAll(`.btn-to-cart`);

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

        $modalCart.append(cartMaterial);

        var spanTag = document.querySelectorAll(`.added`);
        spanTag[i].innerHTML = `Successfully added to your cart!`;
        var spanTimer = setTimeout(function(){
            spanTag[i].innerHTML = ``;
        },3000);


        ukupnaCena.innerHTML = Number(ukupnaCena.innerHTML) + Number(cartMatPrice.innerHTML);
    })
}
}