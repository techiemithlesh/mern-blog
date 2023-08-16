
const auth = (req, res, next) => {
    const authenticated = true;
    if (authenticated) {
        console.log("You can access this page");
        next();
    }else{
        console.log("Not Accesible");
    }
}

module.exports = {auth};