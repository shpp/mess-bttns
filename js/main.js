document.body.onload = function() {
    const config = {
      color: "#27ae60",
      messengers: {
        phone: "+380681317564",
        email: "sadovam@gmail.com",
        telegram: "sadovam",
        viber: "380681317564",
        facebook: "100007885214113",
      }
    };
    makeMess(config);
};

function makeMess(config) {
  
  const messengers = {
    email: {
      icon: '<i class="fas fa-envelope-square"></i>',
      pre: "mailto:",
      color: "#848484"
    },
    phone: {
      icon: '<i class="fas fa-phone-square"></i>',
      pre: "tel:",
      color: "#EC5923"
    },
    viber: {
      icon: '<i class="fab fa-viber"></i>',
      pre: "viber://chat?number=%2B",
      color: "#7B519D"
    },
    facebook: {
      icon: '<i class="fab fa-facebook-messenger"></i>',
      pre: "fb-messenger://user-thread/",
      color: "#0084FF"
    },
    telegram: {
      icon: '<i class="fab fa-telegram"></i>',
      pre: "https://t.me/",
      color: "#0088CC"
    }
  };

  const btnsBlock = document.createElement("div");
  btnsBlock.className = "mess__btns-block mess__btns-block--hidden";
  document.body.appendChild(btnsBlock);
  
  for (let m in config.messengers) {
    let elm = document.createElement("a");
    elm.href = messengers[m].pre + config.messengers[m];
    elm.className = "mess__link";
    elm.innerHTML = messengers[m].icon;
    elm.target = "_blank";
    elm.style.backgroundColor = messengers[m].color;
    elm.style.color = "white";
    btnsBlock.appendChild(elm);
  }
  
  const callButton = document.createElement("button");
  callButton.innerHTML = '<i class="far fa-comment"></i>';
  callButton.className = "mess__call-btn";
  callButton.style.backgroundColor = config.color;
  document.body.appendChild(callButton);
  
  function showMessangers() {
    btnsBlock.classList.remove("mess__btns-block--hidden");
    callButton.innerHTML = 'x';
  }

  function hideMessangers() {
    btnsBlock.classList.add("mess__btns-block--hidden");
    callButton.innerHTML = '<i class="far fa-comment"></i>';
  }

  callButton.onclick = () => {
    if (btnsBlock.classList.contains("mess__btns-block--hidden")) {
      showMessangers();
    } else {
      hideMessangers();
    }
  };
  
  btnsBlock.onclick = () => {
    hideMessangers();  
  };
    
}

