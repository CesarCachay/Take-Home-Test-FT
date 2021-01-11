export type RepoInfoType = {
  id: number;
  htmlUrl: string;
  name: string;
  description: string;
  language: string;
};

export type RepoListProps = {
  repos: Array<RepoInfoType>;
};
