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
let currentFloor = 1;

floors.forEach((e, i) => {
  container.innerHTML += `<div class='floor'><button class="elevator-btn">${e.number}</button></div>`;
});

const elevatorBtns = document.querySelectorAll(".elevator-btn");

elevatorBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    let comingFloor = btn.innerText;
    elevator.style.transition = `${Math.abs(
      comingFloor - currentFloor
    )}s linear`;
    elevator.style.bottom = floors[i].position;

    btn.disabled = true;
    btn.style.backgroundColor = "#074c7767";

    setTimeout(() => {
      currentFloor = btn.innerText;
      btn.disabled = false;
      btn.style.backgroundColor = "#074c77";
    }, Math.abs(comingFloor - currentFloor) * 1000);
  });
});
