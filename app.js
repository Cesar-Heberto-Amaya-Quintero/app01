const helloButton = document.getElementById('hello-button');
const petList = document.getElementById('pet-list');


const meme ={
    image: document.getElementById('meme-image'),
    title: document.getElementById('meme-title'),
    author: document.getElementById('meme-author')
}


const categories = {
    dogs: {
        button: document.getElementById('dogs-link'),
        content: document.getElementById('dogs')
    },
    cats: {
        button: document.getElementById('cats-link'),
        content: document.getElementById('cats')
    },
    mices: {
        button: document.getElementById('mices-link'),
        content: document.getElementById('mices')
    }
} //Objeto

let dogList = [
    {
        name: "Chihuahua",
        region: "México",
        description: "A tiny noise dog"
    },
    {
        name: "Beagle",
        region: "England",
        description: "A medium hunting dog"
    },
    {
        name: "German Sheperd",
        region: "Germany",
        description: "Big dog for farm work"
    },
    {
        name: "Husky",
        region: "Siberia",
        description: "Big dog for recue work in gelid weather"
    },

]; //Array

let catList= [
    {
        name: "American Shorthair Cat",
        region: "America",
        description: "An beautiful american cat"
    },
    {
        name: "Persian",
        region: "Iran",
        description: "Cat with great flur"
    },
    {
        name: "Siberian Cat",
        region: "Russia",
        description: "Cold resistant cat"
    },
    {
        name: "Bengal Cat",
        region: "Usa",
        description: "Cat that looks like a leopard"
    },

];

let micesList= [
    {
        name: "Black rat",
        region: "Asia",
        description: "Warm environment rat"
    },
    {
        name: "Muridae",
        region: "Africa",
        description: "It is a family of rodents"
    },
    {
        name: "Fieldmouse",
        region: "Europe",
        description: "Mouse that is in the field"
    },
    {
        name: "Bush rat",
        region: "Australian",
        description: "One of the most common species on the continent"
    },

];

categories.dogs.button.onclick = ()=> {

    if (categories.dogs.content.innerHTML){
        categories.dogs.content.innerHTML='';
        return;
    }

    dogList.forEach(dog =>{
        categories.dogs.content.innerHTML += `<li>
            <span>${dog.name}</span>
            <div>Region ${dog.region}</div>
            <div>Description: ${dog.description}</div>
        </li>`;
    })


} //Función anonima para gastar menos memoria

categories.cats.button.onclick = ()=>
{
    if (categories.cats.content.innerHTML){
        categories.cats.content.innerHTML='';
        return;
    }
    catList.forEach(cat=>{
        categories.cats.content.innerHTML += `<li>
        <span>${cat.name}</span>
        <div>Region ${cat.region}</div>
        <div>Description: ${cat.description}</div>
    </li>`
    })
}

categories.mices.button.onclick = () => 
{
    if (categories.mices.content.innerHTML)
    {
        categories.mices.content.innerHTML='';
        return;
    }
    micesList.forEach(mice=>{
        categories.mices.content.innerHTML += ` <li>
        <span>${mice.name}</span>
        <div>Region: ${mice.region}</div>
        <div>Description: ${mice.description}</div>
        </li>`
    })
}


const GetMemes = async ()=>{
    const data = await fetch('https://meme-api.herokuapp.com/gimme');
    const jsonData= await data.json();

    const {url, author, nsfw, postLink, spoiler, subreddit, title} = jsonData;//desestructuración
    meme.title.innerHTML = `title: ${title}`;
    meme.author.innerHTML = `author: ${author}`;
    meme.image.src = url;
}

GetMemes();