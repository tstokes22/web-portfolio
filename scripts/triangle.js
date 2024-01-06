let count = 7;
let triangle = "";
document.getElementById("addTaskBtn").addEventListener("click", () => {
    for(let i = 0; count > i; i++){
        triangle += "#";
        console.log(triangle);
    }
});