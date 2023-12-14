export function fetchData(url, callback, method, body) {
    const options = makeOptions(method, body);
    fetch(url, options)
        .then(res => errorCheck(res))
        .then(data => callback(data))
        .catch(err => {
                if (err.status) {
                    err.fullError.then(e => console.log(e))
                } else {
                    console.log(err);
                }
            }
        );
}

function makeOptions(method, body) {
    method = method ? method : 'GET';
    const opts = {
        method: method,
        headers: {
            ...(['PUT', 'POST'].includes(method) && {"Content-type": "application/json"}),
            "Accept": "application/json",
            "Authorization": localStorage.getItem("jwtToken") || "Bearer "
        }
    }
    if (body) {
        opts.body = JSON.stringify(body);
        console.log(opts.body);
    }
    return opts;
}

function errorCheck(res) {
    if (!res.ok) {
        return Promise.reject({status: res.status, fullError: res.json()})
    }
    return res.json();
}