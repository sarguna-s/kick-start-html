const container = document.createElement("section");
container.setAttribute("class", "container");

const image = document.createElement("img");
image.setAttribute("src", "./assets/images/briyani-image.jpg");

const wrapper = document.createElement("section");
wrapper.setAttribute("class", "wrapper");

const heading = document.createElement("heading");
heading.textContent = "Biryani";

const menuItems = document.createElement("p");
menuItems.textContent = "Chicken 65,Chilli chicken";

const price = document.createElement("p");
price.textContent = "$ 150";

const address = document.createElement("p");
address.textContent = "Chennai";

const button = document.createElement("button");
button.textContent = "Order Now";

wrapper.append(heading);
wrapper.append(menuItems);
wrapper.append(price);
wrapper.append(address);
wrapper.append(button);

container.append(image);
container.append(wrapper);

document.body.append(container);
