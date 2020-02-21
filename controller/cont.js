const startup = require("./../model/startupmodel");

const catchasync = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
exports.getstartups = catchasync(async (req, res, next) => {
  const list = await startup.find({});
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.status(200).json({
    status: "success",
    data: {
      list
    }
  });
});

exports.add = catchasync(async (req, res, next) => {
  const newstartup = await startup.create(req.body);
  if (newstartup) {
    res.status(200).json({
      status: "success"
    });
  } else {
    res.status(400).json({
      status: "fail"
    });
  }
});
