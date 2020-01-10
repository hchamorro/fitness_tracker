const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = url;
    const decoded = jwt.verify(req.body.token, 'ftbrdky');
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Auth failed'
    });
  }
};
