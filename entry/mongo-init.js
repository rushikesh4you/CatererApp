db.createUser(
    {
        user: "root",
        pwd: "root",
        roles: [
            {
                role: "readWrite",
                db: "catererDb"
            }
        ]
    }
);

db = db.getSiblingDB("catererDb");
db.caterer.drop();

db.caterer.save( {
    title : "Init document" ,
    author : "Rushikesh"
});


db.grantRolesToUser(
    "root",
    [
        { role: "write", db: "catererDb" }
    ]
)