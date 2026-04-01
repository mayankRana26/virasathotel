export const getAdminDashboard = (req, res) => {
  res.json({
    success: true,
    message: "Welcome Admin 😏",
    user: req.user,
  });
};