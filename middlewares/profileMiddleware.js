let profileMiddleware = (req, res, next) => {
    if ((req.session.userId) && (req.session.email)) {    
        next();
    } else {
        res.redirect('/users/login');
    }
}

module.exports = profileMiddleware;