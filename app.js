const floors = [
  {
    number: 4,
    position: "76%",
  },
  {
    number: 3,
    position: "50.5%",
  },
  {
    number: 2,
    position: "25.5%",
  },
  {
    number: 1,
    position: "0%",
  },
];
let container = document.querySelector(".building-container");
let elevator = document.querySelector(".elevator");
let leftDoor = document.querySelector(".left-door");
let rightDoor = document.querySelector(".right-door");
let door = document.querySelectorAll(".door");
let currentFloor = 1;
let processing = false;
let arr = [];

floors.forEach((e, i) => {
  container.innerHTML += `<div class='floor'><button class="elevator-btn">${e.number}</button></div>`;
});

const elevatorBtns = document.querySelectorAll(".elevator-btn");

elevatorBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    btn.style.backgroundColor = "darkgreen";
    arr.push({ number: parseInt(btn.innerText), index: i });
    elevatorMoving();
  });
});
const elevatorMoving = () => {
  if (processing || arr.length === 0) return;
  const { number: comingFloor, index } = arr.shift();
  processing = true;
  elevatorBtns[index].style.backgroundColor = "#074c7767";
  elevatorBtns[index].disabled = true;
  elevator.style.transition = `${Math.abs(comingFloor - currentFloor)}s linear`;
  elevator.style.bottom = floors[index].position;
  setTimeout(() => {
    currentFloor = elevatorBtns[index].innerText;
    leftDoor.style.left = "-50%";
    rightDoor.style.right = "-50%";
    setTimeout(() => {
      leftDoor.style.left = "0px";
      rightDoor.style.right = "0px";
    }, 2000);
    setTimeout(() => {
      elevatorBtns[index].disabled = false;
      elevatorBtns[index].style.backgroundColor = "#074c77";
      processing = false;
      elevatorMoving();
    }, 4000);
  }, Math.abs(comingFloor - currentFloor) * 1000);
};
