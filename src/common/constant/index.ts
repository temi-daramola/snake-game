
export const roles = {
  admin: "admin",
  superAdmin: "super-admin",
  customer: "customer",
};

export const appRoutes = {
  home: "/",
  landing: "/landing",

  
  signup: "/auth/signup",
  login: "/auth/login",
  confirmation: "/auth/confirmation/:email?",
  verify: "/auth/verify-email/:token?",

  forgotPassword: "/auth/forgot-password",
  resetPassword: "/auth/reset-password/:token",
  resetPasswordSuccess: "/auth/reset-password/success",

 // management routes
  dashboard: "/dashboard",
};


export const constants = {
appRoutes,
roles
}
