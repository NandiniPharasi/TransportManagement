// src/services/authService.js

export const login = async (username, password) => {
  const response = await fetch("http://localhost:8080/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  });

  if (!response.ok) {
    throw new Error("Invalid credentials");
  }

  const data = await response.json();
  localStorage.setItem("token", data.token);
  return data.token;
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const isLoggedIn = () => {
  return !!localStorage.getItem("token");
};

export const isAdmin = () => {
  const token = localStorage.getItem("token");
  return token && token.includes("ADMIN");
};
