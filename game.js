let box = document.querySelectorAll(".box");

let reset = document.querySelector(".reset");

let tern = document.querySelector(".h");

let img = document.querySelector(".image");
let flag = true;

let click = new Audio("click2.mp3");
let gamesong = new Audio("gamesong.mp3");
let win = new Audio("winner.mp3");

let winpattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

box.forEach((box) => {
  box.addEventListener("click", function () {
    gamesong.play();
    if (flag == true) {
      box.innerHTML = "X";
      flag = false;
      tern.innerHTML = "Turn for O";
    } else {
      box.innerHTML = "O";
      flag = true;
      tern.innerHTML = "Turn for X";
    }
    box.disabled = true;
    click.play();
    checkwin();
  });
});

let checkwin = () => {
  for (pattern of winpattern) {
    let pos1val = box[pattern[0]].innerText;
    let pos2val = box[pattern[1]].innerText;
    let pos3val = box[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val == pos2val && pos2val == pos3val) {
        if (flag == false) {
          tern.innerHTML = "X is Winner";
          tern.style.color = "red";
          img.style.display = "block";
          win.play();
          gamesong.pause();
          for (let boxs of box) {
            boxs.disabled = true;
          }
        } else {
          tern.innerHTML = "O is Winner";
          win.play();
          gamesong.pause();
          tern.style.color = "red";
          img.style.display = "block";
          console.log(tern.innerHTML);
          box.disabled = true;
          for (let boxs of box) {
            boxs.disabled = true;
          }
        }
      }
    }
  }
};

const enable = () => {
  for (let boxes of box) {
    boxes.disabled = false;
    boxes.innerText = "";
  }
};

const resetgame = () => {
  gamesong.play();
  flag = true;
  tern.style.color = "black";
  img.style.display = "none";
  tern.innerHTML = "Tern of X";
  enable();
};

reset.addEventListener("click", resetgame);
