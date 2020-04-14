const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const verifyOptions = {
      issuer: 'ResumeBuilder',
      subject: 'Auth in Portfolio Site Generator',
      expiresIn: '2h'
    };
    const decodedToken = jwt.verify(
      token,
      process.env.JWT_KEY_PUBLIC,
      verifyOptions
    );
    req.userData = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Authorization failed'
    });
  }
};
