/*
 * Any copyright is dedicated to the Public Domain.
 * http://creativecommons.org/publicdomain/zero/1.0/
 */

window.addEventListener("load", function () {
  var ws1 = new MozWebSocket("ws://0.0.0.0:81");
  ws1.onopen = function() {
    ws1.send("test 1");
    ws1.close();
  };

  var ws2 = new window.frames[0].MozWebSocket("ws://0.0.0.0:82");
  ws2.onopen = function() {
    ws2.send("test 2");
    ws2.close();
  };
}, false);
