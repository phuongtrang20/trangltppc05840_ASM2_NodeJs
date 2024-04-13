const bcrypt = require('bcryptjs');
const Login = require('../../models/User');

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // Tìm kiếm người dùng theo email
    const user = await Login.findOne({ where: { email } });

    // Kiểm tra người dùng tồn tại và mật khẩu đúng
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Lưu thông tin người dùng vào session
    req.session.user = {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
    };

    res.redirect('/admin'); // Điều hướng đến trang dashboard sau khi đăng nhập thành công
  } catch (error) {
    next(error);
  }
};
