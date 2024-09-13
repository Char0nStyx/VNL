/**
 * VNL
 * it is expected that this code is loaded dynamically in mods.
 * See modBase repo.
 * var names are stored in VN.
 * users are expected to call the following function: loadVN()
 */

let VN = {};
function loadVN() {
  const remoteURL =
    "https://raw.githubusercontent.com/StateFarmNetwork/client-keys/main/statefarm_latest.json";
  var rReq = new XMLHttpRequest();
  rReq.open("GET", remoteURL, false);
  rReq.send();
  const status = rReq.status;
  if (!status === 200) {
    console.error("SSI: Error: Couldn't fetch variable names!" + url);
    return null;
  }
  const parsed = JSON.parse(rReq.responseText);
  VN = parsed.vars;
}
