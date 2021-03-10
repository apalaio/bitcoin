const url =
  "https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=100&api_key=b84c4247dc10717852e3f2b16549fad187cd6081b46c011a274f385e92c11e1b";

export const getData = async () => {
  try {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    return jsonResponse.Data.Data;
  } catch (e) {
    console.log(e);
  }
};
