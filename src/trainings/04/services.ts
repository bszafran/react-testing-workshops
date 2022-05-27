export function login(username: string, password: string) {
  return fetch("/login", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((response) => response.json())
}
