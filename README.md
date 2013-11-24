Instagram Bot
-------------

Bot is working but the interface is still work in progress. This is work in progress

Demo
----

Soon

Description
-----------

Instagram auto like bot with web interface using nodejs, jquery, javascript and instagram api.


Deploy
------

**Step-1** Install nodejs on your computer http://nodejs.org/

**Step-2** Download the zip https://github.com/kevincobain2000/instagram-bot-api/archive/master.zip

**Step-3** Register your api on instagram developer, Just google instagram developer. 
When You register you should have following configs there

<pre>
WEBSITE URL    http://localhost:3000/
REDIRECT URI   http://localhost:3000/handleauth
</pre>

**Step4** Go to this folder ``/Downloads/instagram-bot-api-master/bot`` and create a new file. Name it instaConfig.js

Contents instaConfig.js

<pre>
  exports.client_id = 'XXXXXXXXXX';
  exports.client_secret = 'XXXXXXXXX';
  exports.redirect_uri = 'http://localhost:3000/handleauth';
</pre>

**Important** When you register your instagram app, wait for at least 24 hours before you start autoliking
other instagram will ban that app. 

*Even if your app is banned, register another app and wait for 24 hours !*

<pre>

  { [Error: APIError: We've taken extra measures to protect the Instagram API from abnormal activity. 
  Since you have recently created your API application, please contact apidevelopers@instagram.com to receive whitelisting for a higher rate limit.]
 </pre>

Go to this folder <pre>``/Downloads/instagram-bot-api-master`` </pre> and type from terminal install the dependencies

<pre>
  sudo npm install
  node app.js
</pre>

**Last-Step** Go to the browser localhost:3000

All Done !
