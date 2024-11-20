export interface IProjectsRequest{
  title:       string;
  description: string;
  startDate:   Date;
  endDate:     Date;
}

export interface IProjectEditRequest extends IProjectsRequest {
  id: number
}