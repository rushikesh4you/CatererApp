# CatererApp

Tools that were used : 
Docker,Intelij,MongoDB,Java8+,Jquery,Bootstrap,Postman

Instructions :
1)Go to root of project from terminal and submit the command docker-compose up -d
2)Connect to container docker exec -it mongodb bash
3)mongo admin -uroot -proot
4)use catererDb
5)db.caterer.remove({}); ->clearData
6)db.caterer.find({}); ->select everything from caterer

7)Start the mainClass Of application  src\main\java\com\caterer\app\CatererApplication.java ->green arrow



1)register URL http://localhost:8080/caterer/v1/register
2)List http://localhost:8080/caterer/v1/

Extra helpful commands
clear the containers and data : docker-compose down
