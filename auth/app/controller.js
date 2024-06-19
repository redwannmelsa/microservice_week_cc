const jwt = require('jsonwebtoken')
require('dotenv').config()
const bcrypt = require('bcrypt')

const User = require('./model')

async function createUser(req, res) {
  const { name, email, password, role } = req.body
  try {
    const newUser = new User({
      name,
      email,
      password,
      role
    })

    await newUser.save()

    res.status(201).json({ message: 'User successfully created' })
  } catch (error) {
    res.status(500).json({ message: 'Could not create user', error: error.message })
  }
}

async function login(req, res) {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email: email });

    if (user == null) {
      res.status(404).json({
        error: 'User not found'
      })
    } else {
      const valid = await bcrypt.compare(password, user.password)
      if (!valid) {
        res.status(401).json({ error: 'Wrong password' })
      } else {
        res.status(200).json({
          jwt: jwt.sign(
            {
              name: user.name,
              email: user.email,
              role: user.role,
              id: user._id
            },
            process.env.TOKEN_SECRET)
        })
      }
    }
  } catch (e) {
    res.status(500).json({ error: e })
  }
}

function getUserInfoFromToken(req, res) {
  res.status(200).json({ user: req.user })
}

module.exports = { createUser, login, getUserInfoFromToken }