// show cart

(function(){

    const cartInfo = document.getElementById("cart-info");
    const cart = document.getElementById('cart');


    cartInfo.addEventListener('click', function(){
        cart.classList.toggle('show-cart');
    })

})();

// add items to the cart


(function(){

    const cartBtn = document.querySelectorAll('.store-item-icon');

    cartBtn.forEach(function(btn){
        btn.addEventListener("click", function(event){
            // console.log(event.target);

            if(event.target.parentElement.classList.contains('store-item-icon')){

                let fullPath =event.target.parentElement.previousElementSibling.src;
                let position = fullPath.indexOf('img') + 3;
                let partPath = fullPath.slice(position);
                // console.log(partPath);

                const item = {};
                item.img = `img-cart${partPath}`;

                let name = event.target.parentElement.parentElement.nextElementSibling.
                children[0].children[0].textContent;
                item.name = name;

                let price = event.target.parentElement.parentElement.nextElementSibling.
                    children[0].children[1].textContent;

                let finalPrice = price.slice(1).trim();
                item.price = finalPrice;

                console.log(finalPrice);

                // console.log(name);

                console.log(item);
            }


        })

    })





})();