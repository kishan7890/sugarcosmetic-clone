

let banner = [
    {
        imgsrc : "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff0a3cb7d-cae6-4cd0-b7e3-4ceaa1a71213.gif&w=1920&q=75",
    },
    {
        imgsrc : "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff0a3cb7d-cae6-4cd0-b7e3-4ceaa1a71213.gif&w=1920&q=75",
    },
    {
        imgsrc : "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff0a3cb7d-cae6-4cd0-b7e3-4ceaa1a71213.gif&w=1920&q=75",
    },
    {
        imgsrc : "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff0a3cb7d-cae6-4cd0-b7e3-4ceaa1a71213.gif&w=1920&q=75",
    },
];

let products =[
    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/01_d630526f-38ae-49ba-8b9c-2191391c3f14.jpg?v=1680623387",
        title :"Matte Attack Transferproof Lipstick",
        price : "500",
    },
    {
        img : "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F370205924-01_1aef1c2e-8e41-42a2-89c5-70dab3b356ac.jpg%3Fv%3D1698238462&w=256&q=75",
        title :"Matte as Hell Crayons Lipstick Minis Set Of 3",
        price : "999",
    },
    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/01_d630526f-38ae-49ba-8b9c-2191391c3f14.jpg?v=1680623387",
        title :"Matte Attack Transferproof Lipstick",
        price : "500",
    },
    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/01_d630526f-38ae-49ba-8b9c-2191391c3f14.jpg?v=1680623387",
        title :"Matte Attack Transferproof Lipstick",
        price : "500",
    }, 
    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/01_d630526f-38ae-49ba-8b9c-2191391c3f14.jpg?v=1680623387",
        title :"Matte Attack Transferproof Lipstick",
        price : "500",
    },
    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/01_d630526f-38ae-49ba-8b9c-2191391c3f14.jpg?v=1680623387",
        title :"Matte Attack Transferproof Lipstick",
        price : "500",
    },
    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/01_d630526f-38ae-49ba-8b9c-2191391c3f14.jpg?v=1680623387",
        title :"Matte Attack Transferproof Lipstick",
        price : "500",
    },
    {
        img : "https://cdn.shopify.com/s/files/1/0906/2558/products/01_d630526f-38ae-49ba-8b9c-2191391c3f14.jpg?v=1680623387",
        title :"Matte Attack Transferproof Lipstick",
        price : "500",
    },
]

let festive_zone_banner = [
    {
        imgsrc : "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fd6b28fbf-4bc3-45b5-8353-9d9b02f5df24.jpg&w=1920&q=75",
    },

]

let kit = [
    {
        img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F522157922-wedding-kit-by-tamannaah-wbg-images_1.jpg%3Fv%3D1706621444&w=256&q=75",
        title:"Wedding Makeup kit By Tamannaah",
        price:"3499",
    },
    {
        img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F522157922-wedding-kit-by-tamannaah-wbg-images_1.jpg%3Fv%3D1706621444&w=256&q=75",
        title:"Wedding Makeup kit By Tamannaah",
        price:"3499",
    },
    {
        img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F522157922-wedding-kit-by-tamannaah-wbg-images_1.jpg%3Fv%3D1706621444&w=256&q=75",
        title:"Wedding Makeup kit By Tamannaah",
        price:"3499",
    },
    {
        img:"https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F522157922-wedding-kit-by-tamannaah-wbg-images_1.jpg%3Fv%3D1706621444&w=256&q=75",
        title:"Wedding Makeup kit By Tamannaah",
        price:"3499",
    },
]

let bannercontainer = document.getElementById("banner-container");
banner.forEach((ele,i)=>{
    // let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = ele.imgsrc;
    // div.append(img);
    bannercontainer.append(img);
});



let product = document.getElementById("products");
products.forEach((ele,i)=>{
    let card = createcard(ele,i);
    product.append(card);
})

let curatedkit = document.getElementById("curatedkit");
kit.forEach((ele,i)=>{
    console.log(ele);
    let card= createcard(ele,i);
    curatedkit.append(card);
})

function createcard(obj){
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src= obj.img;

    let title= document.createElement("h4");
    title.innerText = obj.title;
    let price = document.createElement("h3");
    price.innerText=obj.price;

    let wishlistbtn = document.createElement("button");
    wishlistbtn.innerText = "wishlist"
    wishlistbtn.id="wishlist";
    let btn = document.createElement("button");
    btn.innerText="Add to Bag";
    btn.id="addbag";

    div.append(img,title,price,wishlistbtn,btn);

    // product.append(div);
    return div;
}