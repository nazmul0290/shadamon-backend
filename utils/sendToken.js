export const sendToken = (user, statusCode, res) => {
  const token = user.getJsonToken();

  res
    .status(statusCode)
    .cookie("token", token, { sameSite: "none", secure: true })
    .json({
      success: true,
      user,
      token,
    });
};
