let box = document.querySelectorAll(".box");

let reset = document.querySelector(".reset");

let tern = document.querySelector(".h");

let img = document.querySelector(".image");

let flag = true;
let i = 0;
let click = new Audio("click2.mp3");
let gamesong = new Audio("gamesong.mp3");
let win = new Audio("winner.mp3");
let laugh = new Audio("laughing.mp3");

box.forEach((box) => {
  box.addEventListener("click", function () {
    gamesong.play();
    if (flag == true) {
      i++;
      box.innerHTML = "X";
      flag = false;
      tern.innerHTML = "Turn for O";
    } else {
      i++;
      box.innerHTML = "O";
      flag = true;
      tern.innerHTML = "Turn of X";
    }
    if (i == 9) {
      tern.innerHTML = "Draw";
      tern.style.color = "red";
      tern.style.fontWeight = "900";
      gamesong.pause();
      laugh.play();
    }
    box.disabled = true;
    click.play();
    checkwin();
  });
});

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

let checkwin = () => {
  for (pattern of winpattern) {
    // console.log(pattern[0], pattern[1], pattern[2]);
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
    i = 0;
  }
};

const resetgame = () => {
  gamesong.play();
  flag = true;
  tern.style.color = "black";
  img.style.display = "none";
  tern.innerHTML = "Turn of X";
  enable();
};

reset.addEventListener("click", resetgame);
