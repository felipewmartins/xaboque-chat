function inFocus() {
  let windows_focus = window.document.hasFocus();
  return windows_focus;
}
function notifyMe(msg) {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert("Seu browser não suporta notificações!");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    if (!inFocus()) {
      var notification = new Notification(msg);
      setTimeout(notification.close.bind(notification), 4000);
      notification.onclick = function(event) {
      event.preventDefault(); // prevent the browser from focusing the Notification's tab
      window.focus();
      }
    }
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification(msg);
        setTimeout(notification.close.bind(notification), 4000);
          notification.onclick = function () {
              window.focus();
          }
      }
    });
  }

  // At last, if the user has denied notifications, and you 
  // want to be respectful there is no need to bother them any more.
}