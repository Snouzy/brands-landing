import { createContext } from "../create-context";
import { reducer, initialState } from "./drawer.reducer";

const ctx = createContext(initialState, reducer);
export const useDrawerContext = ctx.useTheContext;
export const DrawerProvider = ctx.Provider;
