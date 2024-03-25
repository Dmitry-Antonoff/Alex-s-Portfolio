const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

router.post('/registration', async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const hashPass = await bcrypt.hash(password, 10);
    await User.create({
      userName,
      email,
      password: hashPass,
      role: 'USER',
    });
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(401);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) {
    return res.sendStatus(401);
  }
  const passwordIsValid = await bcrypt.compare(password, user.password);
  if (!passwordIsValid) {
    return res.sendStatus(401);
  }
  req.session.user = user;
  return res.sendStatus(200);
});

router.get('/logout', (req, res) => {
  req.session.destroy((e) => {
    if (e) {
      console.log(e);
      return;
    }
    res.clearCookie('UserAuth');
    res.redirect('/');
  });
});

module.exports = router;
