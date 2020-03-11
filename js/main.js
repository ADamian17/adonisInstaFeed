// NOTE Get Code
const urlCode = 'https://api.instagram.com/oauth/authorize?client_id=141784087094952&redirect_uri=https://adamian17.github.io/adonisInstaFeed/&scope=user_profile,user_media&response_type=code'

// ########################################################################//

// This info needs to be in a .evn file 

const cid = 141784087094952; //numeric str require
const csid = 'ba2cb2daefe423edf39ff89248e40f82'; //str require
const grant_type ='authorization_code';
const redirect_url = 'https://adamian17.github.io/adonisInstaFeed/';//numeric str require
const code = 'AQAQJvk1hodaiZP6cGy0-ClgYkQDOg4WkL4iZCnag8p9S2neU1Gm3Wq-tuB6RqZlUx2LRnO3QG0ab2YhNUbHcI8epdjCW_VxDSBa3QXxWcapnWAmVUIo7edD__NOEUhs8r8eNZ-UpDG7q-7yPH1LbnTc_SLDcAEm6zHqYqA8Chw0IlMTectiySaInTQfSxnuAc-RaycIFkls-v1Nyaqjkd1jySpLbt3oUc1ALSeODe00nw'; //numeric str require // code only last 1 hour

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