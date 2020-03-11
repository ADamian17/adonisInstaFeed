// info
const cid = 141784087094952;
const csid = 'ba2cb2daefe423edf39ff89248e40f82';
const redirect_url = 'https://adamian17.github.io/adonisInstaFeed/';

// ########################################## Steps ##################################################
// NOTE 1
const urlCode = 'https://api.instagram.com/oauth/authorize?client_id=141784087094952&redirect_uri=https://adamian17.github.io/adonisInstaFeed/&scope=user_profile,user_media&response_type=code'

// code only last 1 hour
const code = 'AQDVHu9KZf24V7CruC7zJwr-4SFGpDxx-fKaIM9lUIoDCtpmjL7Ow_PX-FS77nxhbG4OtNTmQiYxySrz3iuuzNn9fh4F0zL_Ef_xXZ1zQzZhYTg70eanfFpu-HiXUptI68yljP4rdfPZqwsP-HQoCPo7trOgH-4O2PfpLchuApaN92fnXPcoEvLCIntlHmlkq4L03Vo-1toLEIcWd7Dhbib7cHhsFxk6hd1-CNqkX-_wNw';

// NOTE 2
// curl -X POST \
//   https://api.instagram.com/oauth/access_token \
//   -F client_id=141784087094952 \
//   -F client_secret=ba2cb2daefe423edf39ff89248e40f82\
//   -F grant_type=authorization_code \
//   -F redirect_uri=https://adamian17.github.io/adonisInstaFeed/ \
//   -F code=AQDVHu9KZf24V7CruC7zJwr-4SFGpDxx-fKaIM9lUIoDCtpmjL7Ow_PX-FS77nxhbG4OtNTmQiYxySrz3iuuzNn9fh4F0zL_Ef_xXZ1zQzZhYTg70eanfFpu-HiXUptI68yljP4rdfPZqwsP-HQoCPo7trOgH-4O2PfpLchuApaN92fnXPcoEvLCIntlHmlkq4L03Vo-1toLEIcWd7Dhbib7cHhsFxk6hd1-CNqkX-_wNw
// NOTE res example 
// {"access_token": "IGQVJYT3pXRmtXZA0VGNzc3dy1fQ0RobDFkOGNxOG40NFM0SGw3d3NBaXdyTXVJdjc3VHRIN0ZAOSUpJM3RvMHdXT19veEhKTHdDVVhPVF94UVpQNkdYeDdYd1ZAsUXlXWURQMTl4M3A5cHQ5Q3pBREJ5VFdnMEpiWjVmUVY0", "user_id": 17841401054327653}                                                                                                              


// NOTE 3



// NOTE  Calls
fetch('https://graph.instagram.com/17841401054327653/media?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJYT3pXRmtXZA0VGNzc3dy1fQ0RobDFkOGNxOG40NFM0SGw3d3NBaXdyTXVJdjc3VHRIN0ZAOSUpJM3RvMHdXT19veEhKTHdDVVhPVF94UVpQNkdYeDdYd1ZAsUXlXWURQMTl4M3A5cHQ5Q3pBREJ5VFdnMEpiWjVmUVY0').then((res) => {
  return res.json()
}).then((data) => {
  data.data.forEach(element => {
    console.log(element.media_url)
  });
})
  .catch((err) => console.log(err));