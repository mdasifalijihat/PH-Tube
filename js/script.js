function loadCategories() {
    // fetch load data 
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        // 2. convert promise to json
        .then(res => res.json())
        // 3. send to data display
        .then(data => {
            displayCategories(data.categories)
        })
}

function loadVideos() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
}

// category:"Music"
// category_id: "1001"

function displayCategories(categories) {
    // get the conainer 
    const categoryContainer = document.getElementById('category-container');
    // loop operation on array of object 
    for (let cat of categories) {
        console.log(cat)
        // create element 
        const categoriDiv = document.createElement("div");
        categoriDiv.innerHTML = `
        <button class="btn btn-sm">${cat.category}</button>
        `
        // Append the element 
        categoryContainer.append(categoriDiv)
    }
}

// load categories 

const displayVideos = (videos) => {
    const videoContainer = document.getElementById('video-container');

    videos.forEach(video => {
        const viderCard = document.createElement("div");
        viderCard.innerHTML = `
      <div class="card bg-base-100 ">
            <figure class="relative">
                <img class="w-full h-[150px] object-cover" src="${video.thumbnail}" alt="Shoes" />
                <span class="absolute bottom-2 right-2 text-white bg-black px-2 text-sm rounded"> 3hrs 56 min ago
                </span>
            </figure>

            <div class="flex gap-3 px-0 py-5 ">
                <div class="profile">
                    <div class="avatar">
                        <div class="w-12 rounded-full">
                            <img src="${video.authors[0].profile_picture} " />
                        </div>
                    </div>

                </div>
                <div class="intro">
                    <h2 class="text-xl font-semibold"> ${video.title} </h2>
                    <p class="text-sm text-gray-500 flex gap-2"> ${video.authors[0].profile_name} <img class="w-5 h-5"
                            src="https://img.icons8.com/?size=48&id=FNbnqlDTjR45&format=gif" alt=""></p>
                    <p class="text-sm text-gray-500">${video.others.views} </p>
                </div>
            </div>
        </div>
        `;
        videoContainer.append(viderCard)
    })
}


loadCategories();
