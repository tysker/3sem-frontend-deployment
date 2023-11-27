export default function fetchAny(url, handleData, handleError, method, withToken, body) {

    if (properties.backendURL)
      url = properties.backendURL + url;
    const options = makeOptions(method, withToken, body);
    fetch(url, options)
      .then(res => handleHttpErrors(res))
      .then(data => handleData? handleData(data): null)
      .catch(err => {
        if (err.status) {
          err.fullError.then(e => {if(handleError) handleError(err.status+': '+e.message)});
          console.log("ERROR:",err.status);
        }
        else { console.log("Network error"); }
      }
      );
    console.log(options);
  
    function makeOptions(method, withToken, body) {
      method = method ? method : 'GET';
      var opts = {
        method: method,
        headers: {
          ...(['PUT', 'POST'].includes(method) && { //using spread operator to conditionally add member to headers object.
            "Content-type": "application/json"
          }),
          "Accept": "application/json"
        }
      }
      if (withToken && loggedIn()) {
        opts.headers["x-access-token"] = getToken();
      }
      if (body) {
        opts.body = JSON.stringify(body);
      }
      return opts;
    }
    function handleHttpErrors(res) {
      if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() })
      }
      return res.json();
    }
  }