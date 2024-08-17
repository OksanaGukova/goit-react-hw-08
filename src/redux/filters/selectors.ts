import { RootState } from "../../components/App/App.types";

export const selectNameFilter = (state: RootState) => state.filters.name;
