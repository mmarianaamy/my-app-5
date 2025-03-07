export interface apicall {
  loading: boolean;
  error: string;
  userHistory: resultsData[];
}

export interface userData {
  results: resultsData[];
}

export interface resultsData {
  name: nameData,
  email: string,
  picture: pictureData,
  dob: dobData,
  location: locationData,
  phone: string,
  cell: string,
  login: loginData
}

export interface loginData {
  username: string,
  password: string
}

export interface locationData {
  street: streetData
  city: string,
  state: string,
  country: string
}

export interface streetData {
  number : number
  name: string
}

export interface dobData {
  age: string
}

export interface nameData {
  title: string;
  first: string;
  last: string;
}

export interface pictureData {
  medium : string
}

export interface j {
  results: resultsData[]
}