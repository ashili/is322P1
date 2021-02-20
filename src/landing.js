
(function () {
const phones =
    [{
        "id": 1,
        "model": "iphone 12",
        "image": "./images/i12.png",
        "description": "Lorem ipsum dolor sit Ut enim ad amco labori ex ea. ",
        "price": 1099,
        "os":"IOS",
        "brand":"apple"
    }, {
        "id": 5,
        "model": "Samsung S21",
        "image": "./images/s21.png",
        "description": "Lorem ipsum dolor sit ut aliquip ex ea commodo. ",
        "price": 999,
        "os":"android",
        "brand":"samsung"
    }, {
        "id": 2,
        "model": "iphone 11",
        "image": "./images/i11.png",
        "description": "Lorem ipsum dolor sit amet, consecte Ut enim ad.",
        "price": 999,
        "os":"IOS",
        "brand":"apple"
    }, {
        "id": 3,
        "model": "iphone XR",
        "image": "./images/ixr.png",
        "description": "Lorem ipsum dolor sit  quis nostrud exercit ex ea. ",
        "price": 699,
        "os":"IOS",
        "brand":"apple"
    }, {
        "id": 4,
        "model": "iphone SE",
        "image": "./images/ise.png",
        "description": "Lorem ipsum Ut enim ad minim vboris nisi ut ali. ",
        "price": 599,
        "os":"IOS",
        "brand":"apple"
    },  {
        "id": 6,
        "model": "Samsung S20",
        "image": "./images/s20.png",
        "description": "Lorem ipslamco laboris ex ea commodo. ",
        "price": 799,
        "os":"android",
        "brand":"samsung"
    }, {
        "id": 7,
        "model": "Samsung S10",
        "image": "./images/s10.png",
        "description": "Lorem Ut  nisi ex ea commodo gdfr commodo . ",
        "price": 649,
        "os":"android",
        "brand":"samsung"
    }, {
        "id": 8,
        "model": "Note 10",
        "image": "./images/i12.png",
        "description": "Lorem ipsmet. Ut enim ad minim, qui commodo. ",
        "price": 1199,
        "os":"android",
        "brand":"samsung"
    }]


function renderList(results) {
    const cards = document.querySelector('.cards');

    cards.innerHTML = '';
    const c = results.map(function (result) {

        return `
         <div class="card-container">
                <div class="card">
                    <div class="phone">
                        <div class="circle">
                            <img src="${result.image}" alt="">
                        </div>
                    </div>
                    <div class="info">
                        <h1 class="title">${result.model}</h1>
                        <h3 class="description">${result.description}</h3>
                        <h4 class="price">${result.price}$</h4>
                        <button class="purchase">Buy me</button>
                    </div>
                </div>
            </div>`
    });
    c.forEach(function (card) {
        cards.innerHTML += card;
    });
}
renderList(phones)

    function orderBy(sortValue) {


        let orderedList = '';
            if(sortValue === "model"){
            orderedList = phones.sort(function (a, b) {

                if (a.model.toUpperCase() < b.model.toUpperCase()) {
                    return -1;
                }
                if (a.model.toUpperCase() > b.model.toUpperCase()) {
                    return 1;
                }
                return 0;
            }) }
            else if(sortValue === "price"){
                orderedList = phones.sort(function (a, b) {

                    if (a.price < b.price) {
                        return -1;
                    }
                    if (a.price > b.price) {
                        return 1;
                    }
                    return 0;
                })
            }
        if(sortValue === "brand"){
            orderedList = phones.sort(function (a, b) {

                if (a.brand.toUpperCase() < b.brand.toUpperCase()) {
                    return -1;
                }
                if (a.brand.toUpperCase() > b.brand.toUpperCase()) {
                    return 1;
                }
                return 0;
            }) }

            phones.sort(function (a, b) {
                return a[sortValue] - b[sortValue];

            });
        renderList(orderedList);
    }

    document.querySelector('#orderBy').addEventListener('change', function(event){
        console.log(event.target.value);
        orderBy(event.target.value);
    });

    function togglePublished(criteria) {
        const filteredResults = phones.filter(function (c) {
            return c.os.toLowerCase() === criteria.toLowerCase();
        });
        renderList(filteredResults);
    }
    document.querySelector('#os').addEventListener('change', function(event){
        togglePublished(event.target.value);
    });
})();






