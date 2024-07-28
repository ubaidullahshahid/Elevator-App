const floors = [
    {
        floor: "3",
        index: 0,
        position: '0%',
    },
    {
        floor: "2",
        index: 1,
        position: '25%',
    },
    {
        floor: "1",
        index: 2,
        position: '50%',
    },
    {
        floor: "G",
        index: 3,
        position: '75%',
    },
];

let isLiftMoving = false;
const callingFloors = [];

const liftContainer = document.querySelector(".liftContainer");
const leftDoor = document.querySelector(".leftDoor");
const rightDoor = document.querySelector(".rightDoor");
const floorBtn = document.querySelectorAll(".floorBtn");

floorBtn.forEach((button, index) => {
    button.addEventListener("click", (e) => {
        if (!e.target.classList.contains("clickedBtn")) {
            e.target.classList.add("clickedBtn");
            callingFloors.push(floors[index]);
            setInLine();
        }
    });
});

function setInLine() {
    if (isLiftMoving || callingFloors.length === 0) {
        return
    };

    isLiftMoving = true;
    moveLift(callingFloors.shift(), () => {
        setTimeout(() => {
            isLiftMoving = false;
            setInLine();
        }, 2000);
    });
}

function moveLift(floor, callback) {
    liftContainer.style.top = floor.position;
    setTimeout(() => {
        floorBtn[floor.index].classList.remove("clickedBtn")
        let time = floor
        callback();
    }, 1000);
}
    