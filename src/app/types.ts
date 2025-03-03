export interface apicall {
  data: userData;
  loading: boolean;
  error: string;
}

export interface userData {
  results: resultsData[];
}

export interface resultsData {
  name: nameData,
  email: string,
  picture: pictureData
}

export interface nameData {
  title: string;
  first: string;
  last: string;
}

export interface pictureData {
  medium : string
}
