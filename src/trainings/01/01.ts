import { User } from "../types"

export function getInitials(user: User) {
  const nameInitial = user.name.charAt(0)
  const surnameInitial = user.surname.charAt(0)

  return `${nameInitial}.${surnameInitial}.`
}
