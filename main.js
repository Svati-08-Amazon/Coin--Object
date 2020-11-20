let coin = {
  state: 0,
  flip: function () {
    /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
  },
  toString: function () {
    /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
  },
  toHTML: function () {
    let image = document.createElement("img");
    image.style.width = "100px";
    image.style.height = "100px";
    image.src = "./images/heads.jpg";
    /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
    return image;
  },
};

function display20flips() {
  for (let i = 1; i <= 20; i++) {
    let numDiv = document.createElement("div");
    numDiv.append(i);
    document.body.append(numDiv);
  }
}
