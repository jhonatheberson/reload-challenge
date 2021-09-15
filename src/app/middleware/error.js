export default async (req, res, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
  res.status(error.status || 500)
  res.json({error: error.massage})
};
export default async (error ,req, res, next) => {
  res.status(error.status || 500)
  res.json({error: error.massage})
};
