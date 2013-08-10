Instagram Bot
-------------

Instagram auto like bot with web interface using nodejs, jquery, javascript and instagram api. 

`Demo <http://youtu.be/itOYPnIsMVQ>`_
--------------------------------------

http://www8355ue.sakura.ne.jp:3005/

http://youtu.be/itOYPnIsMVQ

Requirements
------------

- nodejs
- Instagram Developer keys

Deploy
------

**Important** When you register your instagram app, wait for at least 24 hours before you start autoliking
otherwise instagram will ban that app. Even if your app is banned, register another app and wait for 24 hours

Following is the instagram Error:

::

  { [Error: APIError: We've taken extra measures to protect the Instagram API from abnormal activity. Since you have recently created your API application, please contact apidevelopers@instagram.com to receive whitelisting for a higher rate limit.]
  code: 400,
  error_type: 'APIError',
  error_message: 'We\'ve taken extra measures to protect the Instagram API from abnormal activity. Since you have recently created your API application, please contact apidevelopers@instagram.com to receive whitelisting for a higher rate limit.',
  retry: [Function] }

**Step-0** Install nodejs.

**Step-1** Add javascript files named ``instagram-bot-api/bot/instaConfig.js``

**Step-2** Contents ``instaConfig.js``

::

  exports.client_id = 'XXXXXXXXXX';
  exports.client_secret = 'XXXXXXXXX';
  exports.redirect_uri = 'http://localhost:3000/handleauth'


**Last** Install the dependencies

::

  npm install
  nodemon app.js

**Start App** Go to your web browser and http://localhost:3000
