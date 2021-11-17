import { Action, ActionNames } from "contexts/types";

export const initialState = {
  isOpen: false,
};
export interface DrawerState {
  isOpen: boolean;
}

export function reducer(state: DrawerState, { type }: Action) {
  switch (type) {
    case ActionNames.TOGGLE:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
}
