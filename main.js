// bai 1
let newEle = document.createElement("p");
newEle.id = "text";
newEle.textContent= "Noi dung";

newEle.style.color = "#777";
newEle.style.fontSize = "2rem";
newEle.textContent ="Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.";

document.body.appendChild(newEle);

// bai 2
let listItems = document.getElementsByTagName("li");
for (let i = 0; i < listItems.length; i++) {
    listItems[i].style.color = "blue";
}

//bai 3

let createEle8 = document.createElement("li");
createEle8.textContent = "Item 8";
let createEle9 = document.createElement("li");
createEle9.textContent = "Item 9";
let createEle10 = document.createElement("li");
createEle10.textContent = "Item 10";


let newList = document.getElementById("list");
newList.appendChild(createEle8);
newList.appendChild(createEle9);
newList.appendChild(createEle10);
let Items = newList.getElementsByTagName("li");
Items[0].style.color = "red";
Items[2].style.backgroundColor = "blue";
newList.removeChild(Items[3]);

let newItem = document.createElement("li");
newItem.textContent= "new Item";
newList.insertBefore(newItem, Items[3]);



