export interface TimeState {
  breakLength: number;
  sessionLength: number;
}

export interface TimeAction {
  type: string;
  payload: number;
}