function showMessage() {
    alert("Welcome to Car World!");
}

const characters = ["Porsche GT3", "Mercedes AMG", "Lamborghini Aventador", "Alpine 110s", "Toyota Supra MK4"];

let list = document.getElementById("ModelsList");

characters.forEach(function(character) {
    let li = document.createElement("li");
    li.textContent = character;
    list.appendChild(li);
});