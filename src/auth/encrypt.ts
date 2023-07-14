import * as bcrypt from 'bcrypt'

export function encodePassword(rawPassword) {
    const SALT = bcrypt.genSaltSync()
    return bcrypt.hashSync(rawPassword, SALT)
}

export function comparePassword(rawPassword: string, hash: string) {
    return bcrypt.compareSync(rawPassword, hash)
}