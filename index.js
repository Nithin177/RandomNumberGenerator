let x;
let y;
let z;

document.getElementById("btn").onclick = function () {
  let x = Math.floor(Math.random() * 6);
  let y = Math.floor(Math.random() * 6);
  let z = Math.floor(Math.random() * 6);

  document.getElementById("xlabel").innerHTML = x;
  document.getElementById("ylabel").innerHTML = y;
  document.getElementById("zlabel").innerHTML = z;
};
