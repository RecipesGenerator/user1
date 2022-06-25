firebase.database().ref('users/' + userEmail.replace(/\./g, "DOT")).once('value').then(function (snap) {
  let userInfo = snap.val();
  if (userInfo) {
    if (userInfo.blogLink) {
      blogLink = userInfo.blogLink;
      localStorage.setItem("blogLink", userInfo.blogLink);
    }
    if (userInfo.platform) {
      platform = userInfo.platform;
      localStorage.setItem("platform", userInfo.platform);
    }
    if (userInfo.firstName) {
      firstName = userInfo.firstName;
      localStorage.setItem("firstName", userInfo.firstName);
    }
    if (userInfo.lastName) {
      lastName = userInfo.lastName;
      localStorage.setItem("lastName", userInfo.lastName);
    }
    if (userInfo.noJS) {
      noJS = true;
      localStorage.setItem("noJS", "true");
    } else {
      noJS = false;
    }
    if (userInfo.noStyles) {
      noStyles = true;
      localStorage.setItem("noStyles", "true");
    } else {
      noStyles = false;
    }
    if (userInfo.isFullCode) {
      isFullCode = true;
      localStorage.setItem("isFullCode", "true");
    } else {
      isFullCode = false;
    }
    if (userInfo.noJS || userInfo.noStyles || platform == 'godaddy') {
      setSchema('microdata');
    }
  }
});
