const LetsApi = document.getElementById('LetsApi');

const fetchCategories = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts')
    const data = await res.json();
    allPostData = data.posts;
    console.log(allPostData);
    displayCard(allPostData);

}

const displayCard = allPostData => {
    allPostData.forEach(post => {
        console.log(post)
        const postCard = document.createElement('div')
        postCard.classList = 'hero bg-base-200'
        postCard.innerHTML = `
        <span class="relative flex h-3 w-3">
        <span
            class="bottom-14 right-64 absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
    </span>
    <div class="hero-content flex-col lg:flex-row ">
        <img src="${post.image}"
            class="max-w-sm w-24 rounded-lg shadow-2xl " />
        <div>
            <span class="flex gap-5">
                <p># ${post.category}</p>
                <p>Author : ${post.author.name}</p>
            </span>
            <h1 class="text-xl font-bold">${post.title}</h1>
            <p class="py-6">It’s one thing to subject yourself to ha Halloween costume mishap
                <br> because, hey that’s your prerogative
            </p>
            <div class="flex gap-5">
                <span class="flex gap-2">
                    <img src="images/Vector.png" alt="">
                    <p>560</p>
                </span>
                <span class="flex gap-2">
                    <img src="images/tabler-icon-eye.png" alt="">
                    <p>1,800</p>
                </span>
                <span class="flex gap-2">
                    <img src="images/tabler-icon-clock-hour-9.png" alt="">
                    <p>5 min</p>
                </span>
                <span class="lg:pl-72">
                    <img src="images/Group 40106.png" alt="">
                </span>
            </div>
        </div>
    </div>
        `;
        LetsApi.appendChild(postCard);


    })
}



fetchCategories();