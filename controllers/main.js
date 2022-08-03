
const login = async (req, res) => {
  res.send("fake login.register")
}
const dashboard = async (req, res) => {
  const luckyNum = Math.floor(Math.random() * 100)
  res.status(200).json({msg:`hello john doe`, secret:`your secret number is ${luckyNum}`})
}

module.exports = {
  login, 
  dashboard
}