import { rest } from "msw"
import { users } from "./users"

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    const body = req.body as string
    const { username } = JSON.parse(body) as { username: string }

    return res(ctx.json(users.find((user) => user.username === username)))
  }),
]
