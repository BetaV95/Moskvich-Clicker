const moneyAccount = document.querySelector('.money-account');
let moneyForClick = document.querySelector('.money-for-click');
const moneyBtn = document.querySelector('.money-btn');

//кнопки улучшения//
const upgradeBtn1 = document.querySelector('.upgrade-btn-1');
const upgradeBtn5 = document.querySelector('.upgrade-btn-5');
const upgradeBtn20 = document.querySelector('.upgrade-btn-20');
const upgradeBtn100 = document.querySelector('.upgrade-btn-100');
const upgradeBtn1000 = document.querySelector('.upgrade-btn-1000');

//навигация по вкладкам//
const upgradesTab = document.querySelector('.upgades-tab-switch');
const passivesTab = document.querySelector('.passives-tab-switch');
const carShopTab = document.querySelector('.car-shop-tab-switch');

const upgradeList = document.querySelector('.upgrade-list');
const passivesList = document.querySelector('.passives-list');
const carShopList = document.querySelector('.car-shop-list');


let mCount = 0,
    mforClick = 1;

moneyBtn.addEventListener('click', () => {
    mCount += mforClick;
    moneyAccount.innerHTML = mCount;
    // localStorage.setItem('moneyAccount', mCount);
});
// console.log(JSON.parse(moneyAcc));
// moneyAccount.innerHTML = mCount;


//////////////////////////

function buyUpgrade(btnCode, moneyCount, clickUpgrade) {
    btnCode.addEventListener('click', () => {
        if(mCount >= moneyCount){mCount -= moneyCount;
        moneyAccount.innerHTML = mCount;
        mforClick += clickUpgrade;
        moneyForClick.innerHTML = mforClick;}
        else{alert('Недостаточно средств')};
    });
}
buyUpgrade(upgradeBtn1, 100, 1);
buyUpgrade(upgradeBtn5, 500, 5);
buyUpgrade(upgradeBtn20, 2000, 20);
buyUpgrade(upgradeBtn100, 10000, 100);
buyUpgrade(upgradeBtn1000, 100000, 1000);

//////////////////////////

upgradesTab.addEventListener('click', () => {
    upgradeList.style.display = 'block';
    passivesList.style.display = 'none';
    carShopList.style.display = 'none';
});

passivesTab.addEventListener('click', () => {
    passivesList.style.display = 'block';
    upgradeList.style.display = 'none';
    carShopList.style.display = 'none';
});

carShopTab.addEventListener('click', () => {
    carShopList.style.display = 'block';
    passivesList.style.display = 'none';
    upgradeList.style.display = 'none';
});

///////////////

const buyCar2 = document.querySelector('.buy-car-2');
const buyCar150 = document.querySelector('.buy-car-150');
const buyCar250 = document.querySelector('.buy-car-250');
const buyCar400 = document.querySelector('.buy-car-400');
const buyCar600 = document.querySelector('.buy-car-600');
const buyCar800 = document.querySelector('.buy-car-800');
const buyCar1000 = document.querySelector('.buy-car-1000');
const buyCar5000 = document.querySelector('.buy-car-5000');

function buyCar(carCode, carPrice, carRarity) {
    carCode.addEventListener('click', () => {
        if(carCode.classList.contains('bought')) {
            alert('Вы уже купили эту машину');
        }
        else{
            if(mCount >= carPrice) {
                mCount -= carPrice;
                moneyAccount.innerHTML = mCount;
                carCode.innerHTML = "Куплено";
                carCode.classList.remove(carRarity);
                carCode.classList.add('bought');
            }
            else{
                alert('Недостаточно средств');
            };
        }
    });
}
buyCar(buyCar150, 150000, 'regular-btn');
buyCar(buyCar250, 250000, 'regular-btn');
buyCar(buyCar400, 400000, 'rare-btn');
buyCar(buyCar600, 600000, 'rare-btn');
buyCar(buyCar800, 800000, 'legendary-btn');
buyCar(buyCar1000, 1000000, 'legendary-btn');
// buyCar(buyCar5000, 5000000, 'super-legendary-btn');
// buyCar(buyCar2, 7777777, 'regular-btn');

const coolCarImg1 = document.querySelector('.ilya-car-img');
const coolCarImg2 = document.querySelector('.cool-car-img');

function buyCoolCar(coolCarImgCode, carCode, carPrice, carRarity, imgChange) {
    carCode.addEventListener('click', () => {
        if(carCode.classList.contains('bought')) {
            alert('Вы уже купили эту машину');
        }
        else{
            if(mCount >= carPrice) {
                mCount -= carPrice;
                moneyAccount.innerHTML = mCount;
                coolCarImgCode.innerHTML = imgChange;
                carCode.innerHTML = "Куплено";
                carCode.classList.remove(carRarity);
                carCode.classList.add('bought');
            }
            else{
                alert('Недостаточно средств');
            };
        }
    });
}
buyCoolCar(coolCarImg2, buyCar2, 7777777, 'super-legendary-btn', '<img class="car-photo cool-car-photo" src="img/тачка.jpg">');
buyCoolCar(coolCarImg1, buyCar5000, 5000000, 'super-legendary-btn', '<img class="car-photo cool-car-photo" src="img/москвичилюша.jpg">');

//////////////////

let moneyPerSec = 0;

const buyShaurmaBtn = document.querySelector('.buy-shaurma-btn');
const buyGarageBtn = document.querySelector('.buy-garage-btn');
const buyRepairBtn = document.querySelector('.buy-repair-btn');

function buyPassive(buyBtn, passivPrice, mps) {
    buyBtn.addEventListener('click', () => {
        if(buyBtn.classList.contains('bought')) {
            alert('Вы уже купили это заведение');
        }
        else{
            if(mCount >= passivPrice) {
                mCount -= passivPrice;
                moneyAccount.innerHTML = mCount;
                buyBtn.innerHTML = "Куплено";
                // buyBtn.classList.remove(buyBtn);
                buyBtn.classList.add('bought');

                moneyPerSec += mps;
                setInterval(function() {
                    mCount += moneyPerSec;
                    moneyAccount.innerHTML = mCount;
                    console.log('mCount' + mCount);
                    console.log('moneyPerSec' + moneyPerSec);
                }, 1000);
            }
            else {
                alert('Недостаточно средств');
            }
        }
    });
}
buyPassive(buyShaurmaBtn, 300000, 100);
buyPassive(buyGarageBtn, 500000, 200);
buyPassive(buyRepairBtn, 700000, 400);
