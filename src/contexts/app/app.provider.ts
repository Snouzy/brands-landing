import { createContext } from "../create-context";
import { reducer, initialState } from "./app.reducer";

const ctx = createContext(initialState, reducer);
export const useStickyContext = ctx.useTheContext;
export const StickyProvider = ctx.Provider;
