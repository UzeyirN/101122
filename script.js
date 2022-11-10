let btn_add = document.getElementById("btn_add");
btn_add.onclick = () => {
    let value = document.getElementById("name").value;
    if (value.trim() != "") {
        console.log(value);
    }
    else {
        alert("Empthy !");
    }
}
let stu_list = document.querySelector("#stu_list");


btn_add.addEventListener("click", function () {

    stu_list.innerHTML += "<li>Keci</li>";
})
