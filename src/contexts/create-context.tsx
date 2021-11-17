import React from "react";
import { Action, Dispatch } from "./types";

export function createContext<T>(
  defaultValue: T,
  reducer: (state: T, { type }: Action) => T
) {
  const defaultDispatch = () => defaultValue;
  const StateCtx = React.createContext<T | undefined>(defaultValue);
  const DispatchCtx = React.createContext<Dispatch | undefined>(
    defaultDispatch
  );

  const Provider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = React.useReducer(reducer, defaultValue);

    const stateContext = React.useContext(StateCtx);
    const dispatchContext = React.useContext(DispatchCtx);

    if (!stateContext || !dispatchContext) {
      throw new Error("ctx must be used within its own Provider");
    }

    return (
      <DispatchCtx.Provider value={dispatch}>
        <StateCtx.Provider value={state}>{children}</StateCtx.Provider>
      </DispatchCtx.Provider>
    );
  };

  function useTheContext(): { state: T; dispatch: Dispatch } {
    const s = React.useContext(StateCtx);
    const d = React.useContext(DispatchCtx);

    if (!s || !d) {
      throw new Error("s must be used within its own Provider");
    }

    return { state: s, dispatch: d };
  }

  return { useTheContext, Provider };
}
