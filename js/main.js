// NOTE Get Code
const urlCode = 'https://api.instagram.com/oauth/authorize?client_id=141784087094952&redirect_uri=https://adamian17.github.io/adonisInstaFeed/&scope=user_profile,user_media&response_type=code'

// ########################################################################//

// This info needs to be in a .evn file 
const code = 'AQCOdbLWAm2qRfqrY2KPYXYQ3WmmcFmWsyBPFiIVDSlJsj09zIabkmhw7HaszT_LsNUVPkORkjqKktGDAlCrAOUN72A31Enk9XhKPd3ASe3dk3eTFQ55JzYuKvJBtJYsBVbGwO0aC0CrDEuXbrBvcBeEtZlQBVy-wD4irMF6hSp9NreTYw08PSQga_Wkq-qOjuqsL9JGD0gVkQbr0E-5c_5KwJkCS9zKkwCQBPv7tP15Eg'; //numeric str require // code only last 1 hour

//#######################################################################################################//

// NOTE 
// ANCHOR  Responce example 
// {"access_token": "...", "user_id": 17841401054327653}

// NOTE Body Header

const formData = new FormData()
formData.append('client_id', 141784087094952)
formData.append('client_secret', 'ba2cb2daefe423edf39ff89248e40f82')
formData.append('grant_type', 'authorization_code')
formData.append('redirect_uri', 'https://adamian17.github.io/adonisInstaFeed/')
formData.append('code', code)

async function postData ( url ) {

  const res = await fetch( url, {
      method: 'POST',
      body: formData
    });
    return await res.json() 
}

postData('https://api.instagram.com/oauth/access_token' )
.then((res) => console.log(res)).catch((err) => console.log(`Error: ${err}`));

// const access_token = '';
// const user_id = ;

// NOTE  Query Call
// fetch(`https://graph.instagram.com/17841401054327653/media?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJWNlJSVWo0ZAHI0SnY4ZAGVoOUotVk9NaHU2SURINWRjSG9uSVo5ZA21Wa2tfTHh1NFN3ang4T3ltOExmWG14YS1Ebnc3VUhBcmEtMjAyQ1hab2ZAEclRrSmNSNWdiU1g4cVllUkVteWNkdmZA3c25qWUFtZAXktNzFBN2lF`)
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