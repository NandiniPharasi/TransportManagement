export function getUserRole() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.roles || [];
  } catch (e) {
    return [];
  }
}

export function isAdmin() {
  return getUserRole().includes("ROLE_ADMIN");
}
