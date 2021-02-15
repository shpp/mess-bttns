document.body.onload = function() {
    console.log("hello");
    
    const messangers = {
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
    
    const config = {
      color: "green",
      messangers: [
        {name: "viber", contact: "380681317564"},
        {name: "phone", contact: "+380681317564"},
        {name: "email", contact: "sadovam@gmail.com"},
        {name: "telegram", contact: "sadovam"},
        {name: "facebook", contact: "100007885214113"},
      ]

    };
    makeMess(config, messangers);
};



function makeMess(config, messangers) {
  
  const btnsBlock = document.createElement("div");
  btnsBlock.className = "mess__btns-block mess__btns-block--hidden";
  document.body.appendChild(btnsBlock);
  
  for (m of config.messangers) {
    let elm = document.createElement("a");
    elm.href = messangers[m.name].pre + m.contact;
    elm.className = "mess__link";
    elm.innerHTML = messangers[m.name].icon;
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
    
}

