Install XMPP server on Linux platform
==============

## Notice: the following operation must be done by root user.
    The install has been downloaded here. And you can download it from [here](http://igniterealtime.org/downloads/index.jsp);
### The steps is as follows:
    A. copy the openfire_3_9_3.tar.gz to /usr/local;
    B. enter /usr/local dir, run command: tar zxvf openfire_3_9_3.tar.gz;
    C. run command: cd openfire;
    D. run command: /usr/local/openfire/bin/openfire start
    E. open a browser, enter http://XXXXXXXXX:9090, XXXXXXXXX is hostname or IP of the computer where you place the openfire.
    F. During setting process based web, you can set these items, for example, language selection, server settings, database settings, profile settings, admin account etc.
    you can finish the setting task on webpage step by step. In general, for database settings, we can use built-in database. other setting, you can set them as you need.

    After above steps, you can restart openfire and try the server with a client application, such as : Spark, Adium etc.