
const api = "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";
const inp = document.getElementById('inp');
const images = document.querySelector('.images');

const getImages = async () => { 
    // make a request to the OpenAI API
    const methods = { 
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // Use template string syntax and include a space after "Bearer"
            "Authorization": `Bearer ${api}`
        },
        // The payload should match the API's expectation
        body: JSON.stringify({
            "prompt": inp.value,
            "n": 4,
            // Modified to match the correct parameter format
            "size": "1024x1024"
        })
    };

    try {
        const res = await fetch("https://api.openai.com/v1/images/generations", methods);
        // parse the response as json
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        // Assuming the API returns an array of images in data.data
        const listImages = data.data;
        images.innerHTML = "";
        listImages.map(photo => {
            const container = document.createElement("div");
            images.append(container);
            const img = document.createElement("img");
            container.append(img);
            // Assign the image source attribute to the image's URL
            img.src = photo.url;
        });
    } catch (error) {
        console.error("Fetching images failed: ", error);
    }
};

// Don't forget to handle situations such as when the input is empty or the API key isn't valid, as these may also throw errors.
```

تأكد من أن الـ JSON الذي تقوم بإرساله يطابق
