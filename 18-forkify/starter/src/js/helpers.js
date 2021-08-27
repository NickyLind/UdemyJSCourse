import { TIMEOUT_SEC } from "./config";

const timeout = function(s) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error(`Request took too long. Timeout after ${s} seconds`))
    }, s * 1000);
  });
};

export const getJSON = async function(url) {
  try {

    const response = await Promise.race([fetch(url) ,timeout(TIMEOUT_SEC)]);

    const data = await response.json();

    if(!response.ok) throw new Error(`${data.message} (${response.status})`);
    return data
  } catch (error) {
    throw error
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    return data;
  } catch (err) {
    throw err;
  }
};