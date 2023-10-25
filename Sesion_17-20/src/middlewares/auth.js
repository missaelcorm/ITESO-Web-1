const authMiddleware = (req, res, next) => {
    const token = req.query.token;

    if(token === "1234"){
        next();
    } else{
        res.status(401).send("You are not authorized");
    }
}

module.exports = authMiddleware;