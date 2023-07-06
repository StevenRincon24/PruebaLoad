class Usuario {
  constructor(id, user, password) {
    this.id = id;
    this.user = user;
    this.password = password;
  }

  static validarNombre(username) {
    const users = new Map();

    users.set("steven.rincon", {
      id: 1,
      user: "steven.rincon",
      password: "1234",
    });
    users.set("ivan.sierra", { id: 2, user: "ivan.sierra", password: "12345" });

    for (const [key, user] of users.entries()) {
      if (user.user === username) {
        return user;
      }
    }

    return null;
  }

  static validarPassword(usuario, password) {
    return usuario.password === password;
  }
}

module.exports = Usuario;
