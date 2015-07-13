#! /bin/sh

start(){
    echo "start $NAME ..."
    nohup $DAEMON > /dev/null &
    echo $! > $PIDFILE
    echo "start success, pid: $!"
}

stop(){
    echo "stop $NAME ..."
    pid=`cat $PIDFILE`
    kill $pid
    rm $PIDFILE
    echo "stop success" 
}

restart(){
    stop
    start
}

DAEMON="node chatServer.js"
NAME="chatServer"
PIDFILE="chatServer.pid"

if [ -z $1 ]
then
    echo 'Usage:  chat.sh start|stop|restart'
fi

case $1 in
    start)
        start
            ;;
    stop)
        stop
            ;;
    restart)
        restart
            ;;
esac
exit 0

