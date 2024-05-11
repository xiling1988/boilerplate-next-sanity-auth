import blockContent from './blockContent'
import category from './category'
import post from './post'
import author from './author'
import user from './auth/user'
import account from './auth/account'
import verificationToken from './auth/verification-token'

export const schemaTypes = [
  post,
  author,
  category,
  blockContent,
  user,
  account,
  verificationToken,
]
