import { useState } from "react"
import { User } from "../types"
import { login } from "./services"

interface FormElements extends HTMLFormControlsCollection {
  username: HTMLInputElement
  password: HTMLInputElement
}

interface UserNameForm extends HTMLFormElement {
  readonly elements: FormElements
}

const ContactForm = () => {
  const [userData, setUserData] = useState<User | null>(null)

  const submit = async (event: React.FormEvent<UserNameForm>) => {
    event.preventDefault()

    const elements = event.currentTarget.elements
    const password = elements.password.value
    const username = elements.username.value

    const userData = await login(username, password)
    setUserData(userData)
  }

  if (userData) {
    return <div>Hello, {userData.name}</div>
  }

  return (
    <form onSubmit={submit}>
      <div>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" name="username" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" />
      </div>

      <button type="submit">Login</button>
    </form>
  )
}

export default ContactForm
