import User from "../models/user.model.js";

export const RegisterUser = async (req, res, next) => {
  try {
    const { fullName, email, password, phone, gender, dob } = req.body;

    if (!fullName || !email || !password || !phone || !gender || !dob) {
      const error = new Error("All fields are required");
      error.status = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email Already Registered");
      error.status = 409;
      return next(error);
    }

    const photoUrl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;

    const photo = {
      url: photoUrl,
      publicId: null,
    };

    const newUser = await User.create({
      fullName,
      email,
      password,
      phone,
      gender,
      dob,
      photo,
    });

    res.status(201).json({ message: "User Created Successfully" });
  } catch (error) {
    next(error);
  }
};

export const LoginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("All fields are required");
      error.statuscode = 400;
      return next(error);
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not registered");
      error.statuscode = 404;
      return next(error);
    }

    if (password !== existingUser.password) {
      const error = new Error("Incorrect Password");
      error.statuscode = 401;
      return next(error);
    }

    res.status(200).json({ message: "Login Successfull" });

  } catch (error) {
    next(error);
  }
};

export const LogoutUser = async (req, res, next) => {
  try {
    res.json({ message: "Logout Successfull from Controller" });
  } catch (error) {
    next(error);
  }
};
