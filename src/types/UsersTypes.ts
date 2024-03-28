export type UserType = {
  dob: string;
  email: string;
  gender: string;
  id: number;
  name: {
    first: string;
    last: string;
    title: string;
  };
  phone: string;
};

export type FormattedUserType = {
  dob: string;
  email: string;
  gender: string;
  id: number;
  name: string;
  phone: string;
};

export type UsersType = {
  results: UserType[];
};
