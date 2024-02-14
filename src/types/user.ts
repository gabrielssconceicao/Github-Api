export interface IUser {
  name: null | string;
  login: string;
  avatar_url: string;
  followers: number;
  following: number;
  location: null | string;
  html_url: string;
  bio: null | string;
  public_repos: number;
  repos_url: string;
}

export interface IUserResponse {
  user: IUser;
  status: number;
}
