export function login(username, password) {
  if (!password) {
    return "Password required";
  }

  if (username === "admin" && password === "1234") {
    return "success";
  }

  return "fail";
}