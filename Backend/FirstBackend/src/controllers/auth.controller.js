export const loginUser =async (req, res) => {
  try {
    const { fullName, phone, password, email, gender, dob } = req.body;
    if (!fullName || !phone || !password || !email || !gender || !dob) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: "User already exists" });
      return;
    }


  } catch (error) {}
};

export const logoutUser = (req, res) => {
  res.json({ message: "Logout successful from controller" });
};

export const registerUser = (req, res) => {
  res.json({ message: "Registration successful from controller" });
};
