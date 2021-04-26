let currentViewType='init';
let map;

$(document).ready(function () {

    initMap();
    printProducts('list');
    
    document.getElementById("viewMap").addEventListener("click", () => {
        printProducts('map')
    });
    document.getElementById("viewList").addEventListener("click", () => {
        printProducts('list')
    });

    document.getElementById("searchProduct").addEventListener("click",printCategories);

});

function printProducts(viewType){

    $.ajax({
        method: "POST",
        dataType: "json",
        data: { "category" : "hogar", "orderBy" : "date" },
        url: "php/getProducts.php",
    }).done(function (result) {
        console.log(result);
        if (result.success){
            showProducts(result.products,viewType);
        } else {
            // whatever treatment
            alert("Error fetching products");
        }
    });
}

function showProducts(products,viewType){

    if (viewType != currentViewType ){
        if (viewType == 'map'){
            document.getElementById("cardList").style.display='none';
            document.getElementById("map").style.display='flex';
            showProductsMap(products);
            currentViewType = 'map';
        } else {
            document.getElementById("map").style.display='none';
            document.getElementById("cardList").style.display='flex';
            showProductsList(products);
            currentViewType = 'list';
        }
    }
}

function showProductsList(products){

    for (var i = 0; i < products.length; i++) {
        var productCard = 
        `<div class="col-lg-4 col-md-6 col-12 mb-3 align-self-center">
            <div class="card" style="width: 75%; margin:0 auto;">
                <img src="`+products[i].img+`" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">`+products[i].name+`</h5>
                    <h6 class="card-subtitle mb-2 text-muted">`+products[i].price+` €</h6>
                    <p class="card-text">`+products[i].shortDescription+`</p>
                    <a href="#" class="btn btn-primary">Més informació</a>
                </div>
            </div>
        </div>`;
        document.getElementById("cardList").innerHTML += productCard;
    }
}

function printCategories(){
 
    $.ajax({
        method: "POST",
        dataType: "json",
        data: "",
        url: "php/getCategories.php",
    }).done(function (result) {
        console.log(result);
        if (result.success){
            showCategories(result.categories);
        } else {
            // whatever treatment
            alert("Error fetching categories");
        }
    });
    
}

function showCategories(categories){

    var categoriesHtml='';
    for (var i = 0; i < categories.length; i++) {
        categoriesHtml = categoriesHtml + `<option>${categories[i]}</option>`;
    }
    document.getElementById("formControlSelectCategory").innerHTML= categoriesHtml;

}

function initMap(){
    // load map
    map = L.map('map').setView([41.388, 2.159], 12);
    L.esri.basemapLayer('Topographic').addTo(map);
}

function showProductsMap(products){

    // Create markers and popups
    var markers = [];
    products.forEach((product, i) => {
        markers[i] = L.marker([product.lat, product.lng]).addTo(map);

        popupContent = 
        `<img src="`+product.img+`" alt="">
        <h3>`+product.name+`</h3>
        <h4>`+product.price+` €</h4>
        <p>`+product.shortDescription+`</p>`;
    
        markers[i].bindPopup(popupContent);    
    });

    // Event listeners to open popups
    markers.forEach((marker) => {
        marker.on('click', () => {
            marker.openPopup();
        });
    });

} 