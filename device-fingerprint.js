import config from './config.json' with {type: "json"};

async function getAccessToken() {
  let tokenResponse = await fetch("https://auth.synamedia.com/oauth/token", {
  	method: "post",
  	body: JSON.stringify(config.oauth),
  	headers: {"Content-Type": "application/json"}
  });
  let json = await tokenResponse.json();
  return json.access_token;
}

async function displayFingerprint(accessToken, tenantId, params) {
  let res = await fetch(`https://api.senza.synamedia.com/tenants/1.1/${tenantId}/displayFingerprint`, {
  	method: "post",
  	body: JSON.stringify(params),
  	headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + accessToken
    }
  });
  console.log(res.status);
}

(async () => {
  const accessToken = await getAccessToken();
  await displayFingerprint(accessToken, config.tenantId, config.params);
})();
