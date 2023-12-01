const baseUrl = "https://skypro-music-api.skyeng.tech";

export async function getTracks() {
  const response = await fetch(`${baseUrl}/catalog/track/all/`);

  if (!response.ok) {
    throw new Error("Server's problem");
  }

  const data = await response.json();
  return data;
}

export async function registerUser({ navigate, setIsAllow, email, password }) {
  await fetch(`${baseUrl}/user/signup/`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      username: email,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 201) {
        setIsAllow(true);
        localStorage.setItem("user", email);
        navigate("/");
        return response.json();
      }

      if (response.status === 400) {
        throw new Error("Incorrect request");
      }

      if (response.status === 500) {
        throw new Error("Server breaks");
      }
    })
    .then((json) => console.log(json));
}

export async function logInUser({
  setCurrentUser,
  navigate,
  setIsAllow,
  email,
  password,
}) {
  await fetch(`${baseUrl}/user/login/`, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
      "content-type": "application/json",
    },
  })
    .then((response) => {
      console.log(response);
      if (response.status === 200) {
        setIsAllow(true);
      }

      if (response.status === 400) {
        throw new Error("Incorrect request");
      }

      if (response.status === 401) {
        throw new Error("Wrong password or email");
      }

      if (response.status === 500) {
        throw new Error("Server breaks");
      }

      return response.json();
    })
    .then((json) => {
      console.log(json);
      setCurrentUser(json);
      localStorage.setItem("user", JSON.stringify(json));
    })
    .then(() => navigate("/"))
    .catch((err) => {
      if (err.message === "Incorrect request") {
        alert("Проверьте логин или пароль");
      } else if (err.message === "Wrong password or email") {
        alert("Проверьте логин или пароль");
      }
    });
}
