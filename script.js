let url = 'https://dog.ceo/api/breeds/image/random';
let btn = document.querySelector("button");
let img = document.querySelector("img");


btn.addEventListener("click",async function(){
    let dogimg = await getdog();
    img.setAttribute("src",dogimg)
})

async function getdog(){
    let res = await axios.get(url);
    return res.data.message
}

getdog()