export enum Status {
  DEFAULT,
  FOUND,
  NOTFOUND,
}

export interface SearchState {
   status:Status,
   searchData?:any;
  }
  