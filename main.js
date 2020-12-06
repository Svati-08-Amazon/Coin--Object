let coin = {
  state: 0,
  flip: function () {
    this.state = Math.round(Math.random());
  },

  toString: function () {
    if (this.state === 0) {
      return "Heads";
    } else {
      return "Tails";
    }
  },

  toHTML: function () {
    let images = document.createElement("img");

    images.style.width = "100px";
    images.style.height = "100px";

    if (this.state === 0) {
      images.src = "images/Heads.jpg";
      images.alt = "Quarter Heads";
    } else {
      images.src = "images/Tails.jpg";
    }
    return images;
  },
};

function display20Flips() {}
for (let i = 0; i < 20; i++) {
  coin.flip();
  coin.toString();
  document.body.append(coin.toString());
  let li = document.createElement("li");
  li.innerHTML = coin.toString();
  document.body.append(li);
}

function display20Images() {
  for (let i = 0; i < 20; i++) {
    coin.flip();
    document.body.append(coin.toHTML());
  }
}

display20Flips();
display20Images();
