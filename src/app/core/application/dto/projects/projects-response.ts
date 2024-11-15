export interface IProjectsResponse {
  statusCode: number;
  message:    string;
  data:       IProjectsResponseData;
}

export interface IProjectsResponseData {
  title:       string;
  description: string;
  startDate:   Date;
  endDate:     Date;
  organizer:   Organizer;
  id:          number;
  isActive:    boolean;
}

export interface Organizer {
  id:    number;
  email: string;
  role:  string;
}

