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

function makeCallButton({color, title}, messengersIcon) {
  const callButton = document.createElement("button");
  callButton.innerHTML = messengersIcon;
  callButton.className = "mess__call-btn";
  callButton.style.backgroundColor = color;
  callButton.title = title;
  return callButton;
}

function makeMess(config) {
  
  const messengers = {
    email: {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 512 512" width="30" style="enable-background:new 0 0 512 512;" >
      <path d="M467,61H45c-6.927,0-13.412,1.703-19.279,4.51L255,294.789l51.389-49.387c0,0,0.004-0.005,0.005-0.007
      c0.001-0.002,0.005-0.004,0.005-0.004L486.286,65.514C480.418,62.705,473.929,61,467,61z" fill="white"/>
      <path d="M507.496,86.728L338.213,256.002L507.49,425.279c2.807-5.867,4.51-12.352,4.51-19.279V106
      C512,99.077,510.301,92.593,507.496,86.728z" fill="white"/>
      <path d="M4.51,86.721C1.703,92.588,0,99.073,0,106v300c0,6.923,1.701,13.409,4.506,19.274L173.789,256L4.51,86.721z" fill="white"/>
      <path d="M317.002,277.213l-51.396,49.393c-2.93,2.93-6.768,4.395-10.605,4.395s-7.676-1.465-10.605-4.395L195,277.211
      L25.714,446.486C31.582,449.295,38.071,451,45,451h422c6.927,0,13.412-1.703,19.279-4.51L317.002,277.213z" fill="white"/></svg>`,
      pre: "mailto:",
      color: "#848484"
    },
    phone: {
      icon: `<svg xmlns="http://www.w3.org/2000/svg"  height="30" viewBox="0 0 512 512" width="30" >
      <path d="M436.992,74.953c-99.989-99.959-262.08-99.935-362.039,0.055s-99.935,262.08,0.055,362.039s262.08,99.935,362.039-0.055
      c48.006-48.021,74.968-113.146,74.953-181.047C511.986,188.055,485.005,122.951,436.992,74.953z M387.703,356.605
      c-0.011,0.011-0.022,0.023-0.034,0.034v-0.085l-12.971,12.885c-16.775,16.987-41.206,23.976-64.427,18.432
      c-23.395-6.262-45.635-16.23-65.877-29.525c-18.806-12.019-36.234-26.069-51.968-41.899
      c-14.477-14.371-27.483-30.151-38.827-47.104c-12.408-18.242-22.229-38.114-29.184-59.051
      c-7.973-24.596-1.366-51.585,17.067-69.717l15.189-15.189c4.223-4.242,11.085-4.257,15.326-0.034
      c0.011,0.011,0.023,0.022,0.034,0.034l47.957,47.957c4.242,4.223,4.257,11.085,0.034,15.326c-0.011,0.011-0.022,0.022-0.034,0.034
      l-28.16,28.16c-8.08,7.992-9.096,20.692-2.389,29.867c10.185,13.978,21.456,27.131,33.707,39.339
      c13.659,13.718,28.508,26.197,44.373,37.291c9.167,6.394,21.595,5.316,29.525-2.56l27.221-27.648
      c4.223-4.242,11.085-4.257,15.326-0.034c0.011,0.011,0.022,0.022,0.034,0.034l48.043,48.128
      C391.911,345.502,391.926,352.363,387.703,356.605z" fill="white"/></svg>`,
      pre: "tel:",
      color: "#EC5923"
    },
    viber: {
      icon: `<svg id="Bold" enable-background="new 0 0 24 24" 
      height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg">
      <path d="m23.155 13.893c.716-6.027-.344-9.832-2.256-11.553l.001-.001c-3.086-2.939
      -13.508-3.374-17.2.132-1.658 1.715-2.242 4.232-2.306 7.348-.064 3.117-.14 8.956 
      5.301 10.54h.005l-.005 2.419s-.037.98.589 1.177c.716.232 1.04-.223 3.267-2.883 
      3.724.323 6.584-.417 6.909-.525.752-.252 5.007-.815 5.695-6.654zm-12.237 5.477s
      -2.357 2.939-3.09 3.702c-.24.248-.503.225-.499-.267 0-.323.018-4.016.018-4.016
      -4.613-1.322-4.341-6.294-4.291-8.895.05-2.602.526-4.733 1.93-6.168 3.239-3.037 
      12.376-2.358 14.704-.17 2.846 2.523 1.833 9.651 1.839 9.894-.585 4.874-4.033 
      5.183-4.667 5.394-.271.09-2.786.737-5.944.526z" fill="white"/><path d="m12.222 4.297c-.385 
      0-.385.6 0 .605 2.987.023 5.447 2.105 5.474 5.924 0 .403.59.398.585-.005h-.001c
      -.032-4.115-2.718-6.501-6.058-6.524z" fill="white"/><path d="m16.151 10.193c-.009.398.58.417.585.014.049
      -2.269-1.35-4.138-3.979-4.335-.385-.028-.425.577-.041.605 2.28.173 3.481 1.729 3.435 3.716z" fill="white"/>
      <path d="m15.521 12.774c-.494-.286-.997-.108-1.205.173l-.435.563c-.221.286-.634.248-.634.248-3.014
      -.797-3.82-3.951-3.82-3.951s-.037-.427.239-.656l.544-.45c.272-.216.444-.736.167-1.247-.74-1.337
      -1.237-1.798-1.49-2.152-.266-.333-.666-.408-1.082-.183h-.009c-.865.506-1.812 1.453-1.509 2.428.517
       1.028 1.467 4.305 4.495 6.781 1.423 1.171 3.675 2.371 4.631 2.648l.009.014c.942.314 1.858-.67 
       2.347-1.561v-.007c.217-.431.145-.839-.172-1.106-.562-.548-1.41-1.153-2.076-1.542z" fill="white"/>
       <path d="m13.169 8.104c.961.056 1.427.558 1.477 1.589.018.403.603.375.585-.028-.064-1.346-.766
       -2.096-2.03-2.166-.385-.023-.421.582-.032.605z" fill="white"/></svg>`,
      pre: "viber://chat?number=%2B",
      color: "#7B519D"
    },
    facebook: {
      icon: `<svg id="Bold" enable-background="new 0 0 24 24" 
      height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg">
      <path d="m0 11.111c0 3.496 1.744 6.615 4.471 8.652v4.237l4.086-2.242c1.09.301 
      2.245.465 3.442.465 6.627 0 12-4.974 12-11.111.001-6.137-5.372-11.112-11.999
      -11.112s-12 4.974-12 11.111zm10.734-3.112 3.13 3.259 5.887-3.259-6.56 6.962-3.055
      -3.258-5.963 3.259z" fill="white"/></svg>`,
      pre: '',
      color: "#0084FF"
    },
    telegram: {
      icon:`<svg id="Bold" enable-background="new 0 0 24 24" 
      height="30" viewBox="0 0 24 24" width="30" xmlns="http://www.w3.org/2000/svg">
      <path d="m12 24c6.629 0 12-5.371 12-12s-5.371-12-12-12-12 5.371-12 12 5.371 12 
      12 12zm-6.509-12.26 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c
      -.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213
      -3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643
      -.204-.657-.643.136-.953z" fill="white"/></svg>`,
      pre: "https://t.me/",
      color: "#0088CC"
    }
  };

  const closeIcon = `<svg height="30" viewBox="0 0 512 512" width="30" xmlns="http://www.w3.org/2000/svg">
  <path d="m256 512c-141.160156 0-256-114.839844-256-256s114.839844-256 256-256 256 114.839844 256 256-114.839844
   256-256 256zm0-475.429688c-120.992188 0-219.429688 98.4375-219.429688 219.429688s98.4375 219.429688 219.429688 
   219.429688 219.429688-98.4375 219.429688-219.429688-98.4375-219.429688-219.429688-219.429688zm0 0" fill="white"/>
   <path d="m347.429688 365.714844c-4.679688 0-9.359376-1.785156-12.929688-5.359375l-182.855469-182.855469c
   -7.144531-7.144531-7.144531-18.714844 0-25.855469 7.140625-7.140625 18.714844-7.144531 25.855469 0l182.855469 
   182.855469c7.144531 7.144531 7.144531 18.714844 0 25.855469-3.570313 3.574219-8.246094 5.359375-12.925781 
   5.359375zm0 0" fill="white"/>
   <path d="m164.570312 365.714844c-4.679687 0-9.355468-1.785156-12.925781-5.359375-7.144531-7.140625-7.144531
   -18.714844 0-25.855469l182.855469-182.855469c7.144531-7.144531 18.714844-7.144531 25.855469 0 7.140625 
   7.140625 7.144531 18.714844 0 25.855469l-182.855469 182.855469c-3.570312 3.574219-8.25 5.359375-12.929688 
   5.359375zm0 0" fill="white"/></svg>`;

   const messengersIcon = `<svg enable-background="new 0 0 511.072 511.072" 
   height="30" viewBox="0 0 511.072 511.072" width="30" xmlns="http://www.w3.org/2000/svg">
   <path d="m74.39 480.536h-36.213l25.607-25.607c13.807-13.807 22.429-31.765 24.747-51.246-36.029-23.644
   -62.375-54.751-76.478-90.425-14.093-35.647-15.864-74.888-5.121-113.482 12.89-46.309 43.123-88.518 
   85.128-118.853 45.646-32.963 102.47-50.387 164.33-50.387 77.927 0 143.611 22.389 189.948 64.745 
   41.744 38.159 64.734 89.63 64.734 144.933 0 26.868-5.471 53.011-16.26 77.703-11.165 25.551-27.514 
   48.302-48.593 67.619-46.399 42.523-112.042 65-189.83 65-28.877 0-59.01-3.855-85.913-10.929-25.465 
   26.123-59.972 40.929-96.086 40.929zm182-420c-124.039 0-200.15 73.973-220.557 147.285-19.284 69.28 
   9.143 134.743 76.043 175.115l7.475 4.511-.23 8.727c-.456 17.274-4.574 33.912-11.945 48.952 
   17.949-6.073 34.236-17.083 46.99-32.151l6.342-7.493 9.405 2.813c26.393 7.894 57.104 12.241 86.477 
   12.241 154.372 0 224.682-93.473 224.682-180.322 0-46.776-19.524-90.384-54.976-122.79-40.713-37.216
   -99.397-56.888-169.706-56.888z" fill="white"/></svg>`;

  const libPath = document.getElementById('messengers-widget').src.match(/(https?:\/\/.+)\/js/)[1]

  document.body.innerHTML += `<div id="fb-root"></div>
  <div class="fb-customerchat"
         attribution="setup_tool"
         theme_color="#27ae60"
         logged_in_greeting="Привіт! Маєш питання? Пиши нам ;)"
         logged_out_greeting="Привіт! Маєш питання? Пиши нам ;)">
    </div>
    <script src="https://kit.fontawesome.com/c5b7962841.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="${libPath}/css/style.css">
    `;
  
    const btnsBlock = makeButtonsBlock(config, messengers);
  document.body.appendChild(btnsBlock);

  const callButton = makeCallButton(config, messengersIcon);
  document.body.appendChild(callButton);

  function showMessengers() {
    btnsBlock.classList.remove("mess__btns-block--hidden");
    callButton.innerHTML = closeIcon;
  }

  function hideMessengers() {
    btnsBlock.classList.add("mess__btns-block--hidden");
    callButton.innerHTML = messengersIcon;
  }

  callButton.onclick = () => {
    if (btnsBlock.classList.contains("mess__btns-block--hidden")) {
      showMessengers();
    } else {
      hideMessengers();
    }
  };
  
  btnsBlock.onclick = () => {
    hideMessengers();
  };
    
}

