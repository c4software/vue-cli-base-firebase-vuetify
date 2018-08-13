import 'whatwg-fetch'

const buildHeaders = (authToken, header = {}) => {
  return new Headers(Object.assign({}, header, {"Accept-Language": "fr", "Authorization": "Bearer " + authToken}));
};

export const getJSON = (uri, authToken, data) => {
  return fetch(uri, {
    method: "GET",
    headers: buildHeaders(authToken, {'Content-Type': 'application/json'}),
    credentials: 'same-origin',
  })
    .then(handleErrors)
    .then(function (response) {
      return response.json();
    })
};

export const patchJSON = (uri, authToken, data) => {
  return fetch(uri, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: buildHeaders(authToken, {'Content-Type': 'application/json'}),
    credentials: 'same-origin'
  }).then(handleErrors)
    .then((response) => {
      return response.json();
    })
};

export const deleteApi = (uri, authToken, data) => {
  return fetch(uri, {
    method: 'DELETE',
    body: JSON.stringify(data),
    headers: buildHeaders(authToken, {}),
    credentials: 'same-origin'
  }).then(handleErrors)
};

export const deleteJson = (uri, authToken, data) => {
  return fetch(uri, {
    method: 'DELETE',
    body: JSON.stringify(data),
    headers: buildHeaders(authToken, {'Content-Type': 'application/json'}),
    credentials: 'same-origin'
  }).then(handleErrors)
};


export const postJSON = (uri, authToken, data) => {
  return fetch(uri, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: buildHeaders(authToken, {'Content-Type': 'application/json'}),
    credentials: 'same-origin'
  })
    .then(handleErrors)
    .then(function (response) {
      return response.json();
    }).catch((err) => {
      console.debug("Erreur lors de l'appel", err);
      throw err;
    })
};

const handleErrors = (response) => {
  if (!response.ok) {
    throw response;
  } else {
    return response;
  }
};
