// NOTE Get Code
const urlCode = 'https://api.instagram.com/oauth/authorize?client_id=141784087094952&redirect_uri=https://adamian17.github.io/adonisInstaFeed/&scope=user_profile,user_media&response_type=code'

// ########################################################################//

// This info needs to be in a .evn file 

const cid = 141784087094952; //numeric str require
const csid = 'ba2cb2daefe423edf39ff89248e40f82'; //str require
const grant_type ='authorization_code';
const redirect_url = 'https://adamian17.github.io/adonisInstaFeed/';//numeric str require
const code = 'AQDy0JG-29rg835cZhuRcpg_iqZh-swfBZ224SY60bASc-79qLTX9LWUKpDGqof_GTpZk0O0ms4vhO22PZVvcw39wzymd__6DQqLxUVM6E4j20GAQuHDjmCC_GvKTvcRBjErZykq4Th7H7BIClTk4H89narDqmUJHQR5OTYLe5dXZl4sH1uoHzgslB4RPjpmX2xD3yRmvYNNY5Ro6-vhVqO1kU0ozKjRSpRUCSI63a5NWQ'; //numeric str require // code only last 1 hour

//#######################################################################################################//

// NOTE 
// ANCHOR  res example 
// {"access_token": "...", "user_id": 17841401054327653}
// NOTE Body Header
const myHeaders = {
  client_id: cid,
  client_secret: csid,
  grant_type: grant_type,
  redirect_uri: redirect_url,
  code: code
}

const dataFeed = () => {

  const access_token = '';
  const user_id = '';

  fetch('https://api.instagram.com/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(myHeaders),
    }).then((res) => { return res.json() }).then((data) => {
      console.log(`Succes: ${data}`)
    }).catch((err) => console.log(`Error: ${err}`));

}

dataFeed();

// NOTE  Query Call
// fetch(`https://graph.instagram.com/${user_id}/media?fields=id,media_type,media_url,username,timestamp&access_token=${access_token}`)
// .then((res) => {
//   return res.json()
// }).then((data) => {
//   console.log(data.data)
//   data.data.forEach(element => {
//     // console.log(element)
//     const template = `
//       <img src=${element.media_url} alt="avatar"/>
//     `
//     $('.yo').append(template)
//   });
// })
//   .catch((err) => console.log(err));