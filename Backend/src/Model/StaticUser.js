async function userSchema(req) {
  const { username, email, password } = req.body;
  const hashedpassword = await bcrypt.hash(password, salt);
  return {
    Username: `${username}`,
    Email: `${email}`,
    Password: `${hashedpassword}`,
    DisplayName: null,
    Gender: null,
    Role: 'user',
    Createdat: new Date(),
  }
};

export default userSchema