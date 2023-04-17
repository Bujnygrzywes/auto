class Auto {
  constructor(gearCount, maxSpeed) {
    this.gearCount = gearCount;
    this.maxSpeed = maxSpeed;
    this.state = {
      isTurnedOn: false,
      actualSpeed: 0,
      maxGearSpeed: 0,
      actualGear: 0,
    };
  }

  changeGearUp() {
    if (this.state.actualGear < this.gearCount) {
      this.state.actualGear++;
    }
    console.log(this.state.actualGear);
  }

  changeGearDown() {
    if (this.state.actualGear > 0) {
      this.state.actualGear--;
    }
    console.log(this.state.actualGear);
  }

  setSpeedUp() {
    switch (this.state.actualGear) {
      case 0:
        this.state.maxGearSpeed = 0;
        break;
      case 1:
        this.state.maxGearSpeed = 40;
        break;
      case 2:
        this.state.maxGearSpeed = 80;
        break;
      case 3:
        this.state.maxGearSpeed = 120;
        break;
      case 4:
        this.state.maxGearSpeed = 160;
        break;
      case 5:
        this.state.maxGearSpeed = 200;
        break;
    }
    if (this.state.isTurnedOn == true) {
      if (this.state.maxGearSpeed > this.state.actualSpeed) {
        this.state.actualSpeed += 20;
      } else {
        this.state.actualSpeed += 0;
      }
    }
    return this.state.actualSpeed;
  }

  setSpeedDown() {
    if (this.state.actualSpeed > 0) {
      this.state.actualSpeed -= 20;
    } else {
      this.state.actualSpeed = 0;
    }
    return this.state.actualSpeed;
  }

  setEngineOn() {
    if (this.state.isTurnedOn) {
      alert('silnik jest juz wlaczony');
    } else {
      alert('wlaczyles silnik');
    }
    this.state.isTurnedOn = true;
  }

  setEngineOf() {
    console.log(this.state.actualSpeed);
    if (this.state.actualSpeed === 0) {
      this.state.isTurnedOn = false;
      alert('wylaczono silnik');
    } else {
      this.state.isTurnedOn = true;
      alert('nie mozesz wylaczyc silnika przy tej predkosci');
    }
  }
}

const auto = new Auto(5, 200);

// alert(auto.onOfEngine());
// console.log(auto.setSpeedUp());
// console.log(auto.setSpeedUp());
// console.log(auto.state.actualGear);

// max predkosc na 1 biegu to 30
// max predkosc na 2 biegu to 60
// max predkosc na 3 biegu to 120
// max predkosc na 4 biegu to 160
// max predkosc na 5 biegu to 200

const engineOnBtn = document.querySelector('.engineOn');
const engineOfBtn = document.querySelector('.engineOf');
const accelerateBtn = document.querySelector('.accelerate');
const slowDownBtn = document.querySelector('.slowDown');
const gearUpBtn = document.querySelector('.gearUp');
const gearDownBtn = document.querySelector('.gearDown');
console.log(
  engineOnBtn,
  engineOfBtn,
  accelerateBtn,
  slowDownBtn,
  gearUpBtn,
  gearDownBtn
);

const maxGears = document.querySelector('.maxGears');
const maxSpeed = document.querySelector('.maxSpeed');
const speed = document.querySelector('.speed');
const gear = document.querySelector('.gear');

engineOnBtn.addEventListener('click', () => auto.setEngineOn());
engineOfBtn.addEventListener('click', () => auto.setEngineOf());
accelerateBtn.addEventListener('click', () => {
  auto.setSpeedUp();
  speed.innerHTML = `predkosc: ${auto.state.actualSpeed}`;
  maxSpeed.innerHTML = `maksymalna predkosc: ${auto.state.maxGearSpeed}`;
});
slowDownBtn.addEventListener('click', () => {
  auto.setSpeedDown();
  speed.innerHTML = `predkosc: ${auto.state.actualSpeed}`;
  maxSpeed.innerHTML = `maksymalna predkosc: ${auto.state.maxGearSpeed}`;
});
gearUpBtn.addEventListener('click', () => {
  auto.changeGearUp();
  gear.innerHTML = `bieg: ${auto.state.actualGear}`;
});
gearDownBtn.addEventListener('click', () => {
  auto.changeGearDown();
  gear.innerHTML = `bieg: ${auto.state.actualGear}`;
});
const img = document.querySelector('img');

let position = 0;

setInterval(() => {
  console.log(img.style.left, auto.state.actualSpeed + 'px');
  position += auto.state.actualSpeed / 15;
  img.style.left = `${position}px`;
}, 20);
