import { createContext } from "../create-context";
import { reducer, initialState } from "./app.reducer";

const ctx = createContext(initialState, reducer);
export const useAppContext = ctx.useTheContext;
export const AppProvider = ctx.Provider;
