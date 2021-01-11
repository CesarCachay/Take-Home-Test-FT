export type UserRepoProps = {
  path: string;
  user: string;
  repo: string;
};

export type CommitType = {
  id: string;
  author: string;
  email: string;
  date: string;
};

export type CommitItemProps = {
  data: CommitType;
};
