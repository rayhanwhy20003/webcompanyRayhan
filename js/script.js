const navbarnav = document.querySelector('.navbar-nav');
const navbar = document.querySelector('.navbar');
document.querySelector('#hamburger-menu').onclick = () =>{
    navbarnav.classList.toggle('active');
};


const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !hamburger.contains(e.target)){
        navbarnav.classList.remove('active');
    }
})

ScrollReveal({ 
    reset: true,
    distance: '125px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.content',{ origin: 'left' });
ScrollReveal().reveal('.about-img',{ origin: 'bottom' });
ScrollReveal().reveal('.proyek-card',{ origin: 'bottom' });
ScrollReveal().reveal('.card-blog',{ origin: 'bottom' });
ScrollReveal().reveal('form',{ origin: 'right' });
ScrollReveal().reveal('.map',{ origin: 'left' });
ScrollReveal().reveal('footer',{ origin: 'bottom' });

const btn = document.querySelector('.btn');
btn.addEventListener('click', () =>{
    alert('BELOM ADA  APA APA , DEVELOPERNYA MAGER😒😒😒');
});

//1
const itemdetail = document.querySelector('#item-detail-modal');
const itembtn = document.querySelector('.detail');

itembtn.onclick = (e) =>{
    itemdetail.style.display = 'flex';
    e.preventDefault();
};
document.querySelector('.close-icon').onclick = (e) =>{
    itemdetail.style.display = 'none';
    e.preventDefault();
}


//2
const itemdetail1 = document.querySelector('#item-detail-modal-1');
const itembtn1 = document.querySelector('.detail-1')
itembtn1.onclick = (e) =>{
    itemdetail1.style.display = 'flex';
    e.preventDefault();
};
document.querySelector('.close-icon1').onclick = (e) =>{
    itemdetail1.style.display = 'none';
    e.preventDefault();
}

//3
const itemdetail2 = document.querySelector('#item-detail-modal-2');
const itembtn2 = document.querySelector('.detail-2')
itembtn2.onclick = (e) =>{
    itemdetail2.style.display = 'flex';
    e.preventDefault();
};
document.querySelector('.close-icon2').onclick = (e) =>{
    itemdetail2.style.display = 'none';
    e.preventDefault();
}

//4
const itemdetail3 = document.querySelector('#item-detail-modal-3');
const itembtn3 = document.querySelector('.detail-3')
itembtn3.onclick = (e) =>{
    itemdetail3.style.display = 'flex';
    e.preventDefault();
};
document.querySelector('.close-icon3').onclick = (e) =>{
    itemdetail3.style.display = 'none';
    e.preventDefault();
}
const modal3 = document.querySelector('#item-detail-modal-3');

//5
const itemdetail4 = document.querySelector('#item-detail-modal-4');
const itembtn4 = document.querySelector('.detail-4')
itembtn4.onclick = (e) =>{
    itemdetail4.style.display = 'flex';
    e.preventDefault();
};
document.querySelector('.close-icon4').onclick = (e) =>{
    itemdetail4.style.display = 'none';
    e.preventDefault();
}


//6
const itemdetail5 = document.querySelector('#item-detail-modal-5');
const itembtn5 = document.querySelector('.detail-5')
itembtn5.onclick = (e) =>{
    itemdetail5.style.display = 'flex';
    e.preventDefault();
};
document.querySelector('.close-icon5').onclick = (e) =>{
    itemdetail5.style.display = 'none';
    e.preventDefault();
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzSHJEZKl4DZ2-V2ySyizse3jAyshtr3SggBJ8NNiBjo2CDPkfJTLWzRRz7DfkzySs/exec';
const form = document.forms['submit-to-google-sheet'];
const info = document.querySelector('.info');

    
      form.addEventListener('submit', e => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response =>  {
            info.innerHTML = "Pesan anda sudah berhasil terkirim";
            form.reset();
            console.log('Success!', response)
        })
          .catch(error => console.error('Error!', error.message));
      });