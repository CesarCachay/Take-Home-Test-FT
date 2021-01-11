export type UserType = {
  id: number;
  avatarUrl: string;
  name: string;
};

export type UserItemProps = {
  user: UserType;
};

export type UsersListProps = {
  users: Array<UserType>;
};
