import bcrypt from "bcryptjs";

const users = [
    {name:"Admin User", email: "admin@example.com", password:bcrypt.hashSync('12345', 10), isAdmin :true},
    {name:"John Doe", email: "john@example.com", password:bcrypt.hashSync('12345', 10)},
    {name:"Li Lei", email: "lei@example.com",password:bcrypt.hashSync('12345', 10)}


]
export default users;