function loadCategories(){
    // fetch load data 
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    // 2. convert promise to json
    .then(res => res.json())
    // 3. send to data display
    .then(data => {
        displayCategories(data.categories)
    })
}

// category:"Music"
// category_id: "1001"

function displayCategories(categories){
    // get the conainer 
  const categoryContainer = document.getElementById('category-container');
    // loop operation on array of object 
    for(let cat of categories ){
        console.log(cat)
        // create element 
        const categoriDiv = document.createElement("div");
        categoriDiv.innerHTML=`
        <button class="btn btn-sm">${cat.category}</button>
        `
        // Append the element 
        categoryContainer.append(categoriDiv)
    }
}

loadCategories();