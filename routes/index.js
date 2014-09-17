
/*
 * GET home page.
 */

module.exports = function(app) {
  app.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
  });
  app.get('/reg',function(req,res){
  	res.render('reg', { title: 'Express' })
  });
  app.get('/login', function (req, res) {
    res.render('login', { title: 'Express' });
  });
  app.get('/car', function (req, res) {
    res.render('car', { title: 'Express' });
  });
   app.post('/reg', function (req, res) {
    
  });
  app.use(function (req, res) {
  res.render("404");
});
};