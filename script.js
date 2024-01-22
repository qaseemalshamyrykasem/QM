const api = "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"
const inp = document.getElementById('inp')
const images = document.querySelector('.images')

const getImages = async () => { 
    // make a request to openai api
    const methods = { 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api}`
        },
        body: JSON.stringify({
            "prompt": inp.value,
            "n": 4,
            "size": "1024x1024"
        })
    }

    const res = await fetch("https://api.openai.com/v1/images/generations", methods)
    // parse the response as json 
    const data = await res.json()
    console.log(data)
    const ListImages = data.data;
    images.innerHTML =""
    ListImages.map(photo => {
        const container = document.createElement("div")
        images.append(container)
        const img = document.createElement("img")
        container.append(img)
        img.src = photo.url
    
    })
}
