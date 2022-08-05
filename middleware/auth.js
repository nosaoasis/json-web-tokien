const jwt = require("jsonwebtoken");
const {
  UnathenticatedError,
} = require("../errors");


const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnathenticatedError("You are not granted access");
  }
  
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { id, username } = decoded;
    req.user = { id, username };
    next();
  } catch (err) {
    console.log("an error occured", err);
    throw new UnathenticatedError("You are not granted access");
  }
};

module.exports = authMiddleware;
