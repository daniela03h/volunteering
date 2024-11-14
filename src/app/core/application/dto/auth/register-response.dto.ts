export interface IRegisterResponse {
  statusCode: number;
  message:    string;
  data:       RegisterData;
}

export interface RegisterData {
  email: string;
  name:  string;
  role:  string;
  photo: null;
  id:    number;
}
