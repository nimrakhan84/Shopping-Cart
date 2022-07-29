// const cart = {};
const viewCart = document.getElementById('cart-view');
const cartBtn = document.querySelectorAll('.cart');
const cartCount = document.querySelectorAll('.cart-count');
const prices = document.querySelectorAll('.price');
const itemName = document.querySelectorAll('.card-text');
const addBtn = document.querySelectorAll('.add-item');
const delBtn = document.querySelectorAll('.del-item');
const cartinfo = document.getElementById('modal-cart-info1');

const hr = document.createElement('div');
hr.className = 'row';

const totalDiv = document.createElement('div');
totalDiv.className= 'row';

viewCart.addEventListener('click', () =>{
    console.log(cartinfo);
    let totalSum=0;
    for(i=0 ; i< cartCount.length;i++){

        let singleSum=0;
        items = parseInt(cartCount[i].innerHTML);
        price = prices[i].innerHTML;
        price=price.replace('$', '');
        itemsPrices=parseInt(price);
        if (items != 0 ){
            singleSum= items*itemsPrices;
            console.log(items,itemsPrices);
            console.log(singleSum);
            totalSum=totalSum + singleSum;
            const div= document.createElement('div');
            div.className='row';
            div.innerHTML=` <div class="col-3"><p>${itemName[i].innerHTML }</p></div>
                            <div class="col-3"><p>${prices[i].innerHTML}</p></div>
                            <div class="col-3"><p>${cartCount[i].innerHTML}</p></div>
                            <div class="col-3"><p>$${singleSum}</p></div>`
            
            cartinfo.append(div);

            console.log(cartCount[i].innerHTML, prices[i].innerHTML, itemName[i].innerHTML );
            console.log(i);
        }
            hr.innerHTML=`<div class="col-12"><hr></div>`;
            totalDiv.innerHTML=`<div class="col-9"><p>Total Amount</p></div>
                    <div class="col-3"><p>$${totalSum}</p></div>`;

            cartinfo.append(hr);
            cartinfo.append(totalDiv);
        
    }
    

})

addBtn.forEach(e=> {
    e.addEventListener('click', () =>{
        e.nextElementSibling.innerHTML= parseInt(e.nextElementSibling.innerHTML)+1;
        console.log(e.nextElementSibling.innerHTML);
    }
    )
})

delBtn.forEach(e=> {
    e.addEventListener('click', () =>{
        let item_counts= parseInt(e.previousElementSibling.innerHTML);
        if (item_counts != 0){
            item_counts= item_counts-1;
            if (item_counts== 0){
                e.parentElement.classList.add('d-none');
            }
            e.previousElementSibling.innerHTML = item_counts
            console.log(e.previousElementSibling.innerHTML);
        }
    }
    )
})



cartBtn.forEach(e => {
    e.addEventListener('click', () => {
    let cartCount = e.nextElementSibling.querySelector('.cart-count');
    if (cartCount.innerHTML == 0){
        e.nextElementSibling.classList.remove('d-none');
        e.nextElementSibling.querySelector('.cart-count').innerHTML= 1;
        console.log(e.nextElementSibling.querySelector('.cart-count').innerHTML);
    }
       
    })
}) 