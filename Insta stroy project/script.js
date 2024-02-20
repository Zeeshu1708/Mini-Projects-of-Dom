var storyItem = [
    {dp : "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8fDB8fHww",story : "https://images.unsplash.com/photo-1542282088-fe8426682b8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyfGVufDB8fDB8fHww"
    },
    {dp : "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww",story : "https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?q=80&w=3519&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {dp : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",story : "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=3736&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {dp : "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",story : "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {dp : "https://images.unsplash.com/photo-1558487661-9d4f01e2ad64?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story : "https://images.unsplash.com/photo-1596321687344-547d323f094a?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
];

var allStory = "";
var storyBox = document.querySelector("#storyBox");

storyItem.forEach(function(elem,idx){
    allStory += `<div id="story">
    <img id="${idx}" src="${elem.dp}" alt="Profile Pic">
</div>`
});

storyBox.innerHTML = allStory;

storyBox.addEventListener("click",function(dets) {
    // console.log(storyItem[dets.target.id].story);
    document.querySelector("#fullWidth").style.display = "block";
    document.querySelector("#fullWidth").style.backgroundImage = `url(${storyItem[dets.target.id].story})`;
    document.querySelector(".progress").style.display = "block";

    setTimeout(() => {
        document.querySelector("#fullWidth").style.display = "none";
        document.querySelector(".progress").style.display = "none";

    }, 3000);
})