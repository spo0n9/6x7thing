
const cartStorageKey = 'UserCart'

function cart(){
    var item = document.getElementById('product')
    var price = document.getElementById('price')
    var alert = document.getElementById('alert')
    alert.style.display = "block"
    console.log(item.innerHTML)
    console.log(price.innerHTML)
    let itemInCart = JSON.parse(localStorage.getItem(cartStorageKey));
    
    if(!itemInCart){
        itemInCart = [];
    }
    
    
    itemInCart.push({product:item.innerHTML,price:price.innerHTML});
    
    let cartValue = JSON.stringify(itemInCart);
    
    localStorage.setItem(cartStorageKey, cartValue)
    
}

function real(){
    var productName = document.getElementById('RealCart')
    let productPrice = document.getElementById('TotalPrice')
    let itemInCart = JSON.parse(localStorage.getItem(cartStorageKey));
    console.log(itemInCart)
    productName.innerHTML = itemInCart.map(x => `${x.product} ${x.price}`);
    productName.innerHTML = productName.innerHTML.replace(/,/g, '<hr>');
    let priceList = itemInCart.map(x => x.price);
    console.log(priceList);
    productPrice.innerHTML = itemInCart.map(x => x.price);
    productPrice.innerHTML = productPrice.innerHTML.replace(/,/g, ' ');
    productPrice.innerHTML = productPrice.innerHTML.replace(/\$/g, '');
    let x = (productPrice.innerHTML.split(' ').map(function(item) {
        return parseFloat(item, 10);
    })).reduce((a, b) => a + b, 0)
    console.log(x)
    finalprice = productPrice.innerHTML = x+2;
    document.getElementById('subtotal').innerHTML = `$${Math.round((100*x))/100}`;
    productPrice.innerHTML = `$${(Math.round((100*(x+2)))/100)}`;
    localStorage.setItem('final price', finalprice)
    console.log(finalprice)
    console.log(localStorage.getItem(cartStorageKey))
}

function clearcart(){
    localStorage.clear();
    location.reload()
}

function confirm(){
    document.getElementById('orderPrice').value = localStorage.getItem('TotalFinalPriceDefinitelyFinalNoMore')
    document.getElementById('orderProducts').value = localStorage.getItem(cartStorageKey)
}

function couponcode(){
    var a=document.getElementById("coupon");
        if((a.value.toLocaleLowerCase()=="axden")){
            let x = (localStorage.getItem('final price'))
            console.log(x*.95)
            localStorage.setItem('TotalFinalPriceDefinitelyFinalNoMore', Math.round(100*(x*.95))/100)
            document.getElementById('TotalPrice').innerHTML = `$${localStorage.getItem('TotalFinalPriceDefinitelyFinalNoMore')}`
            alert('Success!\n Enjoy 5% off and visit Ax Den on Discord!')
    }else if((a.value.toLocaleLowerCase()=="jaxonisan")){
        let x = (localStorage.getItem('final price'))
        console.log(x*.95)
        localStorage.setItem('TotalFinalPriceDefinitelyFinalNoMore', Math.round(100*(x*.95))/100)
        document.getElementById('TotalPrice').innerHTML = `$${localStorage.getItem('TotalFinalPriceDefinitelyFinalNoMore')}`
        alert('Success!\n Enjoy 5% off and visit Jaxonisan on YouTube!')
    }else{
        alert('Error: Coupon Code does not exist')
    }

}