const sayHello = (req, res) => {
  console.log("games");

  res.status(201).json({
    status: 200,
    message: "Hello Games",
  });
};

module.exports = { sayHello };
