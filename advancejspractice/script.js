function pencil(name, color, price) {
  this.name = name;
  this.color = color;
  this.price = price;
  this.write = function (text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = color;
    document.body.append(h1);
  };
}
let pencil1 = new pencil("doms", "black", 20);
let pencil2 = new pencil("natraj", "white", 30);
