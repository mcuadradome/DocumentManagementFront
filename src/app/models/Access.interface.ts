export interface User{
  username: string;
  password: string;
}

export interface UserResponse{
  user: {
    name: string,
  };
  email: string;
  pass: string;
  passRecovery: string;
  token: string;
  role: [];
}

