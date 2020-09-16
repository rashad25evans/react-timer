export interface LengthState {
  breakLength: number;
  sessionLength: number;
  sessionSeconds: number;
}

export interface LengthAction {
  type: string;
  payload: number;
}
