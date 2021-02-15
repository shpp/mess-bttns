document.body.onload = function() {
    console.log("hello");
    
    
    const config = {
      color: "#27ae60",
      messengers: {
        viber: "380681317564",
        phone: "+380681317564",
        email: "sadovam@gmail.com",
        telegram: "sadovam",
        facebook: "100007885214113",
      }
    };
    makeMess(config);
};



function makeMess(config) {
  
  const messengers = {
    email: {
      icon: '<i class="fas fa-envelope-square"></i>',
      pre: "mailto:"
    },
    phone: {
      icon: '<i class="fas fa-phone-square"></i>',
      pre: "tel:"
    },
    viber: {
      icon: '<i class="fab fa-viber"></i>',
      pre: "viber://chat?number=%2B"
    },
    facebook: {
      icon: '<i class="fab fa-facebook-messenger"></i>',
      pre: "fb-messenger://user-thread/"
    },
    telegram: {
      icon: '<i class="fab fa-telegram"></i>',
      pre: "https://t.me/"
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
    elm.style.color = config.color;
    btnsBlock.appendChild(elm);
  }
  
  const callButton = document.createElement("button");
  callButton.innerHTML = '<i class="far fa-comment"></i>';
  callButton.className = "mess__call-btn";
  callButton.style.backgroundColor = config.color;
  document.body.appendChild(callButton);
  callButton.onclick = () => btnsBlock.classList.toggle("mess__btns-block--hidden");
  btnsBlock.onclick = () => btnsBlock.classList.toggle("mess__btns-block--hidden");
    
}

