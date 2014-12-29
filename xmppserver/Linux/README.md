Install XMPP server on Linux platform
==============


Start running some commands:
tar -xzvf openfire_3_9_3.tar.gz
mv openfire /usr/local.
Enter to the directory that containes the openfire install files, i.e. /usr/local/openfire, run command:
    # ./openfire
    Usage: ./openfire {start|stop}
    # ./openfire start
    Starting openfire


Then you can access the website http://localhost:9090, do the action according to the wizard based web step by step, you can choose use the built-in database or external database during process, if you choose the external database, you must install the database at first, or you can continue as the wizard.

After above steps, you can restart openfire and try the server with a client application, such as : Spark, Adium etc. Or our montageJS chatroom which we will show you tomorrow. We will install it on our testing server too. So everybody can have a try.