 export const loginUser = (req, res) => {
  res.json({ message: "Login successful from controller" });
};

export const logoutUser = (req, res) => {
  res.json({ message: "Logout successful from controller" });
};

export const registerUser = (req, res) => {
  res.json({ message: "Registration successful from controller" });
}