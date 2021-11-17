import { Action, ActionNames } from "contexts/types";

export const initialState = {
  isSticky: false,
  isSidebarSticky: true,
};

export interface AppState {
  isSticky: boolean;
  isSidebarSticky: boolean;
}

export function reducer(state: AppState, { type }: Action) {
  switch (type) {
    case ActionNames.SET_STICKY:
      return {
        ...state,
        isSticky: true,
      };
    case ActionNames.REMOVE_STICKY:
      return {
        ...state,
        isSticky: false,
      };
    case ActionNames.SET_SIDEBAR_STICKY:
      return {
        ...state,
        isSidebarSticky: true,
      };
    case ActionNames.REMOVE_SIDEBAR_STICKY:
      return {
        ...state,
        isSidebarSticky: false,
      };
    default: {
      return state;
    }
  }
}
