const loginService = require('../services/loginService');

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
<<<<<<< HEAD
    console.log("user and password : "+username +"||"+  password)
    const users = await loginService.login(username,password);
    if (users.length > 0) {
      console.log("login succs");
        res.json({ success: true, message: 'Login successful' });
      } else {
        console.log("login auth fail");
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
  } catch (err) {
    console.log("login error fail");
    console.log(err.message);
=======
    const users = await loginService.login(username,password);
    if (users.length > 0) {
        res.json({ success: true, message: 'Login successful' });
      } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
  } catch (err) {
>>>>>>> 829c441f83ac041ad15eb6d843481ccd16bd007d
    res.status(500).json({ error: err.message });
  }
};