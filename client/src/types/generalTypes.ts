const USER = "USER";
const EXPERT = "EXPERT";
export const ROLES = [USER, EXPERT] as const;
export type Rol = typeof ROLES[number];

export const LANGUAGES = [
  "INGLES",
  "FRANCES",
  "ALEMAN",
  "ITALIANO",
  "PORTUGUES",
] as const;
export type Language = typeof LANGUAGES[number];

export const CATEGORY_ACTIVITY = [
  "REDACCION",
  "INTERPRETACION",
  "PRONUNCIACION",
] as const;
export type ActivityType = typeof CATEGORY_ACTIVITY[number];

export type CreateUserParams = {
  email: string;
  password: string;
  name: string;
  rol: Rol;
} & (
  | {
      rol: typeof USER;
    }
  | {
      rol: typeof EXPERT;
      idiomes: Language[];
      actType: ActivityType[];
    }
);
const params: CreateUserParams = {
  rol: "EXPERT",
  email: "email",
  password: "password",
  name: "name",
  actType: ["REDACCION"],
  idiomes: ["INGLES"],
};

// const { rol, ...rest } = params;
// if (rol === "USER") {
//   const userParams = rest as CreateUserParams;
// } else {
//   const expertParams = rest as CreateUserParams;
// }

export type CreateUserParams2<T extends Rol> = {
  email: string;
  password: string;
  name: string;
  rol: T;
} & (T extends typeof EXPERT
  ? { idiomes: Language[]; actType: ActivityType[] }
  : { });

const params2: CreateUserParams2<"USER"> = {
  rol: "USER",
  email: "email",
  password: "password",
  name: "name",
  // actType: ["REDACCION"],
  // idiomes: ["INGLES"],
};

if (params2.rol === "EXPERT") {
  const expertParams = params2 as CreateUserParams2<"EXPERT">;
} else if (params2.rol === "USER") {
  const userParams = params2 as CreateUserParams2<"USER">;
}
