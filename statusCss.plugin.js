//META{"name":"statusCss"}*//;
var statusCss;

statusCss = (function() {
  var observer, status, statusElem;

  class statusCss {
    getName() {
      return "Status Css";
    }

    getDescription() {
      return "adds your status to <body> so you can style with it";
    }

    getAuthor() {
      return "square";
    }

    getVersion() {
      return "1.0.0";
    }

    load() {}

    start() {
      var o;
      observer = new MutationObserver(o = function() {
        var i, k, len, ref, v, x;
        ref = ["online", "idle", "dnd", "invisible", "offline", "streaming"];
        for (i = 0, len = ref.length; i < len; i++) {
          x = ref[i];
          status[x] = statusElem.classList.contains(`status-${x}`);
        }
        for (k in status) {
          v = status[k];
          document.body.classList.toggle(`own-status-${k}`, v);
        }
      });
      o();
      observer.observe(statusElem, {
        attributes: true
      });
    }

    stop() {
      var k;
      observer.disconnect();
      for (k in status) {
        document.body.classList.remove(`own-status-${k}`);
      }
    }

  };

  status = {};

  observer = null;

  statusElem = document.querySelector(".container-iksrDt .status");

  return statusCss;

})();
