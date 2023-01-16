import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store/reducers/root";

//Getting the state of the typed useSelector
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;