// Открытие попапов + ниже закрытие по клику вне окна

function openPopup() {
    var popup = document.querySelector('.popupOne');
    popup.style.display = 'flex';
    var popupF = document.querySelector('.popup-fade--1');
    popupF.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

function closePopup() {
  var popup = document.querySelector('.popupOne');
  popup.style.display = 'none';
  var popupF = document.querySelector('.popup-fade--1');
    popupF.style.display = 'none';
    document.body.style.overflow = 'auto';
}
function openPopup2() {
    var popup = document.querySelector('.popupTwo');
    popup.style.display = 'flex';
    var popupF = document.querySelector('.popup-fade--2');
    popupF.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

function closePopup2() {
  var popup = document.querySelector('.popupTwo');
  popup.style.display = 'none';
  var popupF = document.querySelector('.popup-fade--2');
    popupF.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function openPopup3() {
  var popup = document.querySelector('.popup-3');
  popup.style.display = 'flex';
  var popupF = document.querySelector('.popup-fade--3');
  popupF.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closePopup3() {
var popup = document.querySelector('.popup-3');
popup.style.display = 'none';
var popupF = document.querySelector('.popup-fade--3');
  popupF.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function openPopup4() {
  var popup = document.querySelector('.popup-4');
  popup.style.display = 'flex';
  var popupF = document.querySelector('.popup-fade--4');
  popupF.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closePopup4() {
var popup = document.querySelector('.popup-4');
popup.style.display = 'none';
var popupF = document.querySelector('.popup-fade--4');
  popupF.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function openPopup5() {
  var popup = document.querySelector('.popup-5');
  popup.style.display = 'flex';
  var popupF = document.querySelector('.popup-fade--5');
  popupF.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closePopup5() {
var popup = document.querySelector('.popup-5');
popup.style.display = 'none';
var popupF = document.querySelector('.popup-fade--5');
  popupF.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function openPopup6() {
  var popup = document.querySelector('.popup-6');
  popup.style.display = 'flex';
  var popupF = document.querySelector('.popup-fade--6');
  popupF.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closePopup6() {
var popup = document.querySelector('.popup-6');
popup.style.display = 'none';
var popupF = document.querySelector('.popup-fade--6');
  popupF.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function openPopup7() {
  var popup = document.querySelector('.popup-7');
  popup.style.display = 'flex';
  var popupF = document.querySelector('.popup-fade--7');
  popupF.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closePopup7() {
var popup = document.querySelector('.popup-7');
popup.style.display = 'none';
var popupF = document.querySelector('.popup-fade--7');
  popupF.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function openPopup8() {
  var popup = document.querySelector('.popup-8');
  popup.style.display = 'flex';
  var popupF = document.querySelector('.popup-fade--8');
  popupF.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closePopup8() {
var popup = document.querySelector('.popup-8');
popup.style.display = 'none';
var popupF = document.querySelector('.popup-fade--8');
  popupF.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Закрытие модального окна при нажатии вне него

document.onclick = function (g){
  var popup = document.querySelector(".popupOne");
  var popupF = document.querySelector('.popup-fade--1');
  if (popup.style.display === "flex" && popupF.style.display === "flex") {
    if (g.target.classList.contains("popup-fade--1")){
      popup.style.display = "none";
      popupF.style.display = "none";
      document.body.style.overflow = 'auto';
    }
  }

  var popupT = document.querySelector(".popupTwo");
  var popupFT = document.querySelector('.popup-fade--2');
  if (popupT.style.display === "flex" && popupFT.style.display === "flex") {
    if (g.target.classList.contains("popup-fade--2")){
      popupT.style.display = "none";
      popupFT.style.display = "none";
      document.body.style.overflow = 'auto';
    }
  }

  var popupT = document.querySelector(".popup-3");
  var popupFT = document.querySelector('.popup-fade--3');
  if (popupT.style.display === "flex" && popupFT.style.display === "flex") {
    if (g.target.classList.contains("popup-fade--3")){
      popupT.style.display = "none";
      popupFT.style.display = "none";
      document.body.style.overflow = 'auto';
    }
  }

  var popupT = document.querySelector(".popup-4");
  var popupFT = document.querySelector('.popup-fade--4');
  if (popupT.style.display === "flex" && popupFT.style.display === "flex") {
    if (g.target.classList.contains("popup-fade--4")){
      popupT.style.display = "none";
      popupFT.style.display = "none";
      document.body.style.overflow = 'auto';
    }
  }

  var popupT = document.querySelector(".popup-5");
  var popupFT = document.querySelector('.popup-fade--5');
  if (popupT.style.display === "flex" && popupFT.style.display === "flex") {
    if (g.target.classList.contains("popup-fade--5")){
      popupT.style.display = "none";
      popupFT.style.display = "none";
      document.body.style.overflow = 'auto';
    }
  }

  var popupT = document.querySelector(".popup-6");
  var popupFT = document.querySelector('.popup-fade--6');
  if (popupT.style.display === "flex" && popupFT.style.display === "flex") {
    if (g.target.classList.contains("popup-fade--6")){
      popupT.style.display = "none";
      popupFT.style.display = "none";
      document.body.style.overflow = 'auto';
    }
  }

  var popupT = document.querySelector(".popup-7");
  var popupFT = document.querySelector('.popup-fade--7');
  if (popupT.style.display === "flex" && popupFT.style.display === "flex") {
    if (g.target.classList.contains("popup-fade--7")){
      popupT.style.display = "none";
      popupFT.style.display = "none";
      document.body.style.overflow = 'auto';
    }
  }

  var popupT = document.querySelector(".popup-8");
  var popupFT = document.querySelector('.popup-fade--8');
  if (popupT.style.display === "flex" && popupFT.style.display === "flex") {
    if (g.target.classList.contains("popup-fade--8")){
      popupT.style.display = "none";
      popupFT.style.display = "none";
      document.body.style.overflow = 'auto';
    }
  }

};


// document.onclick = function (e) {
//     if (e.target.className != "pop-up") {
//         popup.style.display = "none";
//     };
// };
// Закрытие модального окна по ESC 
