const url =
  "https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100&api_key=8ae55d463e1bf8d38b4a502ca47512f9b1dec21533ad9af7acb993e8ba952bc2";

export const getData = async () => {
  try {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    return jsonResponse.Data.Data;
  } catch (e) {
    console.log(e);
  }
};
