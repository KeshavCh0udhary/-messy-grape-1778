let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=3040f5b972084c11b5135e4e11bb78ab`
let fetchData = async()=>{
    let res = await fetch(url)
    let data = await res.json()
    console.log(data)
    displayData(data.articles)
}
fetchData()

let displayData = (data) =>{
    let container = document.getElementById("home-mid")

    data.forEach((el)=>{

        let box = document.createElement("div")
        box.setAttribute("class","data-boxes")
        
        let head = document.createElement("h4")
        head.innerText = "INDIA NEWS"
        head.style.color = "#00b1cd"


        let title = document.createElement("h5")
        title.innerText = el.title

        let image = document.createElement("img")
        image.src = el.urlToImage
        image.setAttribute("class","data-im")

        let publish = document.createElement("p")
        publish.innerText = el.publishedAt

        box.append(head,title,image,publish)
        container.append(box)




    })

}