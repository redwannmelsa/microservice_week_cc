const adminMiddleware = async (req, res, next) => {
  try {
    const authRes = await fetch('http://auth-service:8081/getUserInfoFromToken', { headers: { "authorization": req.headers.authorization } })
    const user = await authRes.json()
    if (authRes.status !== 200) return res.status(authRes.status).json({ message: authRes.statusText })
    else if (user.user.role === 'Admin') {
      next()
    } else return res.status(401).json({ message: 'unauthorized' })
  } catch (error) {
    return res.status(500).json({ message: error })
  }

};

module.exports = {
  adminMiddleware
}