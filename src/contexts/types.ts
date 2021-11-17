export interface Action {
  type: ActionNames;
  payload?: unknown;
}

export type Dispatch = React.Dispatch<Action>;

export enum ActionNames {
  SET_STICKY = "SET_STICKY",
  REMOVE_STICKY = "REMOVE_STICKY",
  SET_SIDEBAR_STICKY = "SET_SIDEBAR_STICKY",
  REMOVE_SIDEBAR_STICKY = "REMOVE_SIDEBAR_STICKY",
  TOGGLE = "TOGGLE",
}
