window.onload = function() {
  // facebook messanger chat code belower

  window.fbAsyncInit = function() {
    FB.init({
        xfbml            : true,
        version          : 'v9.0'
    });
  };

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/ru_RU/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  
};



// Creates block of messengers buttons
function makeButtonsBlock(config, messengers) {
  
  const btnsBlock = document.createElement("div");
  btnsBlock.className = "mess__btns-block mess__btns-block--hidden";
  
  for (let m in config.messengers) {
    
    let div = document.createElement("div");
    div.className = "mess__btn";
    div.style.backgroundColor = messengers[m].color;
    
    let elm = document.createElement("a");
    // facebook messanger works throught his own chat
    if (m === "facebook") {
      document.getElementsByClassName("fb-customerchat")[0].setAttribute("page_id", config.messengers[m]);
      elm.onclick = (e) => {
        e.preventDefault();
        FB.CustomerChat.showDialog();
      };
    }
    
    elm.href = messengers[m].pre + config.messengers[m];
    elm.className = "mess__link";
    elm.innerHTML = messengers[m].icon;
    elm.target = "_blank";
    elm.title = config.titles[m];
    
    elm.style.color = "white";
    btnsBlock.appendChild(div);
    div.appendChild(elm);
  }

  return btnsBlock;
}

function makeCallButton({color, title}) {
  const callButton = document.createElement("button");
  callButton.innerHTML = '<i class="far fa-comment"></i>';
  callButton.className = "mess__call-btn";
  callButton.style.backgroundColor = color;
  callButton.title = title;
  return callButton;
}

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
      pre: '',
      color: "#0084FF"
    },
    telegram: {
      icon: '<i class="fab fa-telegram"></i>',
      pre: "https://t.me/",
      color: "#0088CC"
    }
  };

  document.body.innerHTML += `<div id="fb-root"></div>
  <div class="fb-customerchat"
         attribution="setup_tool"
         theme_color="#27ae60"
         logged_in_greeting="Привіт! Маєш питання? Пиши нам ;)"
         logged_out_greeting="Привіт! Маєш питання? Пиши нам ;)">
    </div>
    <script src="https://kit.fontawesome.com/c5b7962841.js" crossorigin="anonymous"></script>
    `;
  const btnsBlock = makeButtonsBlock(config, messengers);
  document.body.appendChild(btnsBlock);

  const callButton = makeCallButton(config);
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

