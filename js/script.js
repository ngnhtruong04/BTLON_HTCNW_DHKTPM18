const searchon = document.querySelector('#searchopen');
const searchoff = document.querySelector('#removesearch')
const searchinput = document.querySelector('.searchinput');

searchinput.style.display = "none";

searchon.addEventListener('click', () => {
    if (searchinput.style.display === 'none') {
        searchinput.style.display = 'flex';
    } else {
        searchinput.style.display = 'none';
    }
});

searchoff.addEventListener('click', () => {
    if (searchinput.style.display === 'flex') {
        searchinput.style.display = 'none';
    } else {
        searchinput.style.display = 'flex';
    }
});



//Login
// Get the modal
var modal = document.getElementById('loginModal');

// Get the button that opens the modal
var btn = document.getElementById("loginBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Slider header


//
const posts = [{
        title: "Gà nướng mật ong",
        desc: "Món gà nướng mật ong hương vị hấp dẫn lớp vỏ ngoài giòn và màu nâu hấp dẫn.",
        link: "../html/recipe/ga-nuong-mat-ong.html",
        bgImg: "../img/mon_an/ga-nuong-mat-ong.jpg",
        label: "Gà"
    },
    {
        title: "Bắp cải xào",
        desc: "Bắp cải xào tươi mát, giòn ngọt",
        link: "../html/recipe/bap-cai-xao.html",
        bgImg: "../img/mon_an/bap-cai-xao.jpg",
        label: "Bắp cải"
    },
    {
        title: "Canh bầu sườn heo",
        desc: "Canh bầu sườn heo ngọt thanh, tươi mát",
        link: "../html/recipe/canh-bau-suon-heo.html",
        bgImg: "../img/mon_an/canh-bau-suon-heo.jpg",
        label: "Bầu, sườn heo"
    },
    {
        title: "Canh khoai mỡ",
        desc: "Canh khoai mỡ bùi bùi với màu tím đẹp mắt",
        link: "../html/recipe/canh-khoai-mo.html",
        bgImg: "../img/mon_an/canh-khoai-mo.jpg",
        label: "Khoai mỡ"
    },
    {
        title: "Canh bắp cải cà chua",
        desc: "Canh bắp cải cà chua tươi với nước dùng chua chua ngọt ngọt tự nhiên ",
        link: "../html/recipe/canh-bap-cai-ca-chua.html",
        bgImg: "../img/mon_an/canh-bap-cai-ca-chua.jpg",
        label: "Bắp cải, cà chua"
    },
    {
        title: "Thịt heo kho tiêu",
        desc: "Thịt heo thấm đều gia vị cùng vị cay the",
        link: "../html/recipe/thit-heo-kho-tieu.html",
        bgImg: "../img/mon_an/thit-heo-kho-tieu.jpg",
        label: "Thịt heo"
    }
]

let currentSlide = 0;

function showSlide(slideIndex) {
    const slide = posts[slideIndex];
    document.querySelector('.headertitle').textContent = slide.title;
    document.querySelector('.headerpera').textContent = slide.desc;
    document.querySelector('.headerbtn').href = slide.link;
    document.querySelector('.headerimg').style.background = `url('${slide.bgImg}')`;
    // document.querySelector('.headerimg').style.backgroundImg = slide.bgImg;

}

//Initial Slide
showSlide(currentSlide);

//header posts change slider
const headerPosts = document.querySelector('.headercards');


const headerPostsCards = () => {
    const updateSlider = () => {
        headerPosts.innerHTML = '';
        for (let i = currentSlide; i < currentSlide + 5; i++) {
            const post = posts[i % posts.length];
            const postElement = document.createElement('a');
            postElement.classList.add('headercard');
            postElement.classList.add('flex');
            postElement.href = `${post.link}`;
            postElement.innerHTML = `
            <img src="${post.bgImg}" alt="">
                    <div class="hcardinfo">
                        <span>${post.label}</span>
                        <h3>${post.title}</h3>
                    </div>
            `
            headerPosts.appendChild(postElement);
        }
    };
    //left right scroll
    const leftbtn = document.getElementById('sleft');
    const rightbtn = document.getElementById('sright');

    leftbtn.addEventListener('click', () => {
        //5 posts show at headerslider
        currentSlide = (currentSlide - 5 + posts.length) % posts.length;
        updateSlider();
        showSlide(currentSlide);
    })

    rightbtn.addEventListener('click', () => {
        //5 posts show at headerslider
        currentSlide = (currentSlide + 5) % posts.length;
        updateSlider();
        showSlide(currentSlide);
    })



    //initialize the slider
    updateSlider();
};

headerPostsCards();

function nextSlide() {
    currentSlide = (currentSlide + 1) % posts.length;
    showSlide(currentSlide);
    headerPostsCards(currentSlide);
};
// Change slide every 3 seconds
setInterval(nextSlide, 3000);





// navonoff js

const navdiv = document.querySelector('.navonoff');
const navtoggle = document.querySelector('#checkbox2');
const navlist = document.querySelector('.navlist');

navtoggle.addEventListener('change', () => {
    if (navtoggle.checked) {
        navlist.style.right = '-150px'
    } else {
        navlist.style.right = '-400px'
    }
})