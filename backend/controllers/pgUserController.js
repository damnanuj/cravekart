export const getPgUsers = async (PgUser, req, res) => {
  try {
    const users = await PgUser.findAll();
    res.json({ source: "PostgreSQL", users });
  } catch (err) {
    res.status(500).json({ error: "PostgreSQL error" });
  }
};

export const addPgUser = async (PgUser, req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Name and Email are required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format." });
  }

  try {
    const newUser = await PgUser.create({ name, email });
    res.status(201).json({ message: "User created", user: newUser });
  } catch (err) {
    res.status(500).json({ error: "Error creating user" });
  }
};
