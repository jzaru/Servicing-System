import bcrypt from 'bcrypt';

async function userSchema(
  username,
  email,
  password,
  salt
) {
  
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

export default userSchema;