module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', {title: 'Express'});
    });
    app.get('/login', function (req, res) {
        res.render('login', {title: 'Welcome'});
    });
    app.get('/reg', function (req, res) {
        res.render('register', {title: 'Thanks'});
    });
    app.get('/home', function (req, res) {
        res.render('home', {title: 'Home'});
    })
};