require("dotenv").config();
const CustomAPIError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomAPIError(
      "please provide username and password....thanx",
      400
    );
  }

  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: `user created`, token });
};
const dashboard = async (req, res) => {
  const {id, username} = req.user
  const luckyNum = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `hello ${username}`,
    secret: `your id is ${id} and your secret number is ${luckyNum}`,
  });
};

module.exports = {
  login,
  dashboard,
};
