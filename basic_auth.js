Meteor.startup(function () {
  var require = Npm.require;
  var connect = require('connect');
  var crypto = require('crypto');

  // skip authentication on localhost development
  var skip_auth = process.env['ROOT_URL'].match(/localhost/);
  if (skip_auth) return;

  console.log('*** adding basic auth middleware');
  WebApp.connectHandlers.stack.splice(0, 0, {
    route: '',
    handle: connect.basicAuth(function(user, pass){
      var passHash = crypto.createHash('md5').update('THESALT.'+pass).digest("hex");

      // To generate a password hash from the terminal use
      // $ echo -n "THESALT.NEWPASSWORD" | md5sum
      switch (user) {
      case 'beta':
        return (passHash === '82bc7461a7212c0b4512590c67c3f63');
      }
      return false;
    })
  });
});
