
function removedActiveclass(){
    const aciveButton = document.getElementsByClassName('active');
    for(let btn of aciveButton){
        btn.classList.remove("active");
    }
    console.log(aciveButton)
}


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
        .then((data) => {
            document.getElementById('btn-all').classList.add('active');
            displayVideos(data.videos)
        })
}

// load categories 
const loadCategoryVideos = (id) => {
   
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
    console.log(url);

    fetch(url)
    .then(res => res.json())
    .then((data) => {
        removedActiveclass()
        const clickedButton = document.getElementById(`btn-${id}`);
        clickedButton.classList.add("active"); 
        displayVideos(data.category)
    })
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
        const categoryDiv = document.createElement("div");
        categoryDiv.innerHTML = `
        <button id="btn-${cat.category_id}" onclick = "loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[red] hover:text-white">${cat.category}</button>
        `
        // Append the element 
        categoryContainer.append(categoryDiv)
    }
}



const displayVideos = (videos) => {
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = ''; 

    if(videos.length ==0){
        videoContainer.innerHTML = `
         <div class="col-span-full flex flex-col text-center justify-center items-center py-20 gap-4" >
            <img class="w-[120px]" src="img/Icon.png" alt="">
            <h2 class="text-2xl font-bold"> Oops!! Sorry, There is no content here </h2>
        </div>
        `;  
        return; 
    }

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
