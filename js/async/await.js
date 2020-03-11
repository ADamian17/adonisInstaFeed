// ####################### Using async/await ############################################### 

  // const dataFeed = async () => {

  //   // NOTE User Id & Access Token
  //   const accessData = await fetch('https://api.instagram.com/oauth/access_token', {
  //     method: 'POST',
  //     headers: {
  //       'client_id': cid,
  //       'client_secret': csid,
  //       'grant_type': 'authorization_code',
  //       'redirect_uri': redirect_url,
  //       'code': code
  //     }
  //   }).then((res) => {
  //     return res.json()
  //   }).then((data) => {
  //     console.log(data)
  //   }).catch((err) => console.log(err));
    

  //   // NOTE  Query Call
  //   const feedQuery = await fetch('https://graph.instagram.com/17841401054327653/media?fields=id,media_type,media_url,username,thumbnail_url,timestamp&access_token=IGQVJYT3pXRmtXZA0VGNzc3dy1fQ0RobDFkOGNxOG40NFM0SGw3d3NBaXdyTXVJdjc3VHRIN0ZAOSUpJM3RvMHdXT19veEhKTHdDVVhPVF94UVpQNkdYeDdYd1ZAsUXlXWURQMTl4M3A5cHQ5Q3pBREJ5VFdnMEpiWjVmUVY0').then((res) => {
  //     return res.json()
  //   }).then((data) => {
  //     console.log(data.data)
  //     data.data.forEach(element => {
  //       // console.log(element)
  //       const template = `
  //         <img src=${element.media_url} alt="avatar"/>
  //       `
  //       $('.yo').append(template)
  //     });
  //   })
  //     .catch((err) => console.log(err));


  // }