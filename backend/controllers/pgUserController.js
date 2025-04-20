export const getPgUsers = async (PgUser, req, res) => {
  try {
    const users = await PgUser.findAll();

    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      source: "PostgreSQL",
      total: users.length,
      users,
    });
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({
      success: false,
      error: "PostgreSQL error while fetching users",
    });
  }
};


export const addPgUser = async (PgUser, req, res) => {
  const { name, email, mob_num } = req.body;

  if (!name || !email || !mob_num) {
    return res
      .status(400)
      .json({ error: "Name, Email, and Mobile Number are required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format." });
  }

  const mobRegex = /^[6-9]\d{9}$/;
  if (!mobRegex.test(mob_num)) {
    return res.status(400).json({ error: "Invalid mobile number format." });
  }

  try {
    const newUser = await PgUser.create({ name, email, mob_num });
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: newUser,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: "Error creating user" });
  }
};
