// controllers/authController.js
const axios = require("axios");

const userServiceUrl = process.env.USER_SERVICE_URL;

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const response = await axios.post(`${userServiceUrl}/api/users/validate`, {
    //   params: { username, password },
        username,
        password,
    });

    if (response.data) {
    //   res.json({ message: "Login successful", user: response.data });
        if(response.data.valid) {
            res.json({ message: "Login successful", user: response.data });
        } else {
            res.status(401).json({ message: "Invalid username or password" });
        }
    } else {
      res.status(401).json({ message: "Invalid username or password" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  login,
};
