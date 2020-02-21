const catchasync = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
exports.home = catchasync(async (req, res, next) => {
  res.status(200).render("home.html", {
    title: "home"
  });
});

exports.addstartup = catchasync(async (req, res, next) => {
  res.status(200).render("add.html", {
    title: "add startup"
  });
});
