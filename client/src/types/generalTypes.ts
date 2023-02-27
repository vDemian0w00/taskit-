export type CreateUserParams = {
  email: string;
  password: string;
  name: string;

  rol: Rol;
};

export type Rol = "USER" | "EXPERT";
