import { Action, ActionNames } from "contexts/types";

export const initialState = {
  isSticky: false,
  isSidebarSticky: true,
  emailStatus: "idle" as const,
};

export interface AppState {
  isSticky: boolean;
  isSidebarSticky: boolean;
  emailStatus: "idle" | "pending" | "resolved" | "rejected";
}

export function reducer(state: AppState, { type }: Action) {
  console.log("type", type);
  switch (type) {
    case ActionNames.SET_EMAIL_START: {
      return { ...state, emailStatus: "pending" as const };
    }
    case ActionNames.SET_EMAIL_RESOLVED: {
      return { ...state, emailStatus: "resolved" as const };
    }
    case ActionNames.SET_EMAIL_REJECTED: {
      return { ...state, emailStatus: "rejected" as const };
    }
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
