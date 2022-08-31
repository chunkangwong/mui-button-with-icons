import { createSlice } from "@reduxjs/toolkit";

interface Widget {
  name: string;
  favourite: boolean;
  active: boolean;
}

type WidgetsState = Widget[];

const initialState: WidgetsState = [
  { name: "Widget 1", favourite: false, active: false },
  { name: "Widget 2", favourite: true, active: false },
  { name: "Widget 3", favourite: false, active: true },
  { name: "Widget 4", favourite: true, active: true },
];

const widgetsSlice = createSlice({
  name: "widgets",
  initialState,
  reducers: {},
});

export const {} = widgetsSlice.actions;

export default widgetsSlice.reducer;
