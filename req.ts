// //const fetch = require("node-fetch");
// const accessToken =
//   "SFMyNTY.g2gDbQAAAAczMjo0MzYwbgYAmtxkzYABYgABUYA.Au83bpdR8GMPgLfg1gjakHd125wcBEiqhVftAZ_bNuE";
// const query = `
// query { 
// 	clients {
// 						businessName,
// 						id,
// 						identification,
// 						isActive,
// 						name,
// 						email,
// 		        givenName,
// 						notes,
// 						phoneNumbers {id, 
// 													preferred, 
// 													notes,
// 													client{
// 														businessName,
// 														givenName,
// 														notes
// 													},value
// 						}
// 					}
// } `;
// fetch("https://api.staging.vetspire.com/graphql", {
//   method: "POST",
//   body: JSON.stringify({ query }),
//   headers: {
//     Authorization: accessToken,
//     "Content-Type": "application/json",
//   },
// })
//   .then((res) => res.text())
//   .then((body) => console.log(body)) // {"data":{"repository":{"issues":{"totalCount":247}}}}
//   .catch((error) => console.error(error));
