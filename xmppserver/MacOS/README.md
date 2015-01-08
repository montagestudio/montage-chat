Install XMPP server on MacOS platform
================

## Notice: the following operation must be done by root user.

  The install package has been downloaded here. And you can download it from [here](http://igniterealtime.org/downloads/index.jsp);
## The steps are as follows:
    A. copy the openfire_3_9_3.dmg to your home directory;
    B. double-click the file, openfire_3_9_3.dmg, then double-click the openfire.pkg in the pop-up window;
    C. install it as other application on MacOS step by step as direction on window;
    D. after installation process, you can enter /usr/local dir;
    E. run command: cd openfire;
    F. run command: nohup sh /usr/local/openfire/bin/openfire.sh start &  ;
    G. open a browser, enter http://XXXXXXXXX:9090, XXXXXXXXX is hostname or IP of the computer where you place the openfire.
    H. During setting process based web, you can set these items, for example, language selection, server settings, database settings, profile settings, admin account etc.
    you can finish the setting task on webpage step by step. In general, for database settings, we can use built-in database. other setting, you can set them as you need.

    After above steps, you can restart openfire and try the server with a client application, such as : Spark, Adium etc.