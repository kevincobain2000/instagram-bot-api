Instagram Bot
-------------

Bot is working but the interface is still work in progress. This is work in progress

Demo
----

Here should be the youtube link

Description
-----------

Instagram auto like bot with web interface using nodejs, jquery, javascript and instagram api.

Requirements
------------

- nodejs

Deploy
------

**Important** When you register your instagram app, wait for at least 24 hours before you start autoliking
other instagram will ban that app. Even if your app is banned, register another app and wait for 24 hours

::

  { [Error: APIError: We've taken extra measures to protect the Instagram API from abnormal activity. Since you have recently created your API application, please contact apidevelopers@instagram.com to receive whitelisting for a higher rate limit.]
  code: 400,
  error_type: 'APIError',
  error_message: 'We\'ve taken extra measures to protect the Instagram API from abnormal activity. Since you have recently created your API application, please contact apidevelopers@instagram.com to receive whitelisting for a higher rate limit.',
  retry: [Function] }

Add javascript files named ``instagram-bot-api/bot/instaConfig.js``

Contents instaConfig.js

::

  exports.client_id = 'XXXXXXXXXX';
  exports.client_secret = 'XXXXXXXXX';
  exports.redirect_uri = 'yoururl.com/handleauth'


Install the dependencies

::

  npm install
  nodemon app.js
