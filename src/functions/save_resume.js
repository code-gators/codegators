// import fetch from "node-fetch";

// exports.handler = async function(event, context) {
//   try {
//     const response = await fetch("https://api.chucknorris.io/jokes/random");
//     if (!response.ok) {
//       // NOT res.status >= 200 && res.status < 300
//       return { statusCode: response.status, body: response.statusText };
//     }
//     const data = await response.json();

//     return {
//       statusCode: 200,
//       body: data.value
//       // if you want to return whole json string
//       // headers: { 'Content-Type': 'application/json' },
//       // body: JSON.stringify(data)
//     };
//   } catch (err) {
//     console.log(err, event, context); // output to netlify function log
//     return {
//       statusCode: 500,
//       body: err.message // Could be a custom message or object i.e. JSON.stringify(err)
//     };
//   }
// };

export async function handler(event, context) {
  event;
  const { identity, user } = context.clientContext;
  if (identity.token) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: `Hello world ${Math.floor(
          Math.random() * 10
        )} ${JSON.stringify(user)}`
      })
    };
  } else {
    return {
      statusCode: 504,
      body: JSON.stringify({
        message: `Invalid Token`
      })
    };
  }
}
