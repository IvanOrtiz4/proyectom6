let currentViewType='init';
let map;

$(document).ready(function () {

    initMap();
    //printProducts('list');
    
    document.getElementById("viewMap").addEventListener("click", () => {
        printProducts('map')
    });
    document.getElementById("viewList").addEventListener("click", () => {
        printProducts('list')
    });


    document.getElementById("searchProduct").addEventListener("click",printCategories);


});


function printProducts(viewType){
    //alert("hola");
    $.ajax({
        method: "POST",
        dataType: "json",
        data: { "category" : "s", "orderBy" : "date" },
        url: "../ajax_json2_maps/php/getProducts.php",
        success: function( resp ) {
            console.log( resp );
            //alert('bien');
        }
    }).done(function (result) {
        console.log(result);
        
        if (result){
            showProducts(result.products,viewType);
        } else {
            // whatever treatment
            alert("Error fetching products");
        }

    });
}

function showProducts(products, viewType){
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
    console.log(viewType);
}

function showProductsList(products){

    for (var i = 0; i < products.length; i++) {
        console.log(products[i].Imagen);
        var productCard = 
        `<div class="col-lg-4 col-md-6 col-12 mb-3 align-self-center">
            <div class="card" style="width: 75%; margin:0 auto;">
                <img src="../img/`+products[i].id_imagen1+`" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">`+products[i].Nombre_producto+`</h5>
                    <h6 class="card-subtitle mb-2 text-muted">`+products[i].Precio+` €</h6>
                    <p class="card-text">`+products[i].Descripcion+`</p>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Més detalls
                    </button>
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Més detalls</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>`+products[i].Nombre_producto+`</p>
                        <p>`+products[i].Precio+` €</p>
                        <p>`+products[i].Descripcion+`</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
                </div>
        </div>
        
        
        `        
        ;
        document.getElementById("cardList").innerHTML += productCard;
    }

}

function printCategories(){
 
    /*$.ajax({
        method: "POST",
        dataType: "json",
        data: "",
        url: "../php/getCategories.php",
    }).done(function (result) {
        console.log(result);
        if (result.success){
            showCategories(result.categories);
        } else {
            // whatever treatment
            alert("Error fetching categories");
        }
    });*/

    $.ajax({
        method: "POST",
        dataType: "json",
        data: "",
        url: "../ajax_json2_maps/php/getCategories.php",
        success: function( resp ) {
            console.log( resp );
        }
    }).done(function (result) {
        console.log(result);
        if (result){
            showCategories(result.categories);
        } else {
            // whatever treatment
            alert("Error fetching categories");
        }
    });
}

function showCategories(categories){

    var categoriesHtml='';
 
    //categories = Object.values(categories);

    for (var i = 0; i < categories.length; i++) {
        console.log(categories[i]['Categoria']);
        categoriesHtml = categoriesHtml + `<option>${categories[i]['Categoria']}</option>`;
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
        markers[i] = L.marker([product.lat, product.lon]).addTo(map);
        console.log(product.Nombre_producto);
        popupContent = 
        `<img src="../img/`+product.id_imagen1+`" alt="">
        <h3>`+product.Nombre_producto+`</h3>
        <h4>`+product.Precio+` €</h4>
        <p>`+product.Descripcion+`</p>`;
    
        markers[i].bindPopup(popupContent);    
    });

    // Event listeners to open popups
    markers.forEach((marker) => {
        marker.on('click', () => {
            marker.openPopup();
        });
    });

} 