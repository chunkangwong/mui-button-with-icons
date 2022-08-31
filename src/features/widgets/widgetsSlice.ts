import { createSlice } from "@reduxjs/toolkit";

interface Widget {
  name: string;
  title: string;
  favourite: boolean;
  active: boolean;
}

type WidgetsState = Widget[];

const initialState: WidgetsState = [
  { name: "widget1", title: "Widget 1", favourite: false, active: false },
  { name: "widget2", title: "Widget 2", favourite: true, active: false },
  { name: "widget3", title: "Widget 3", favourite: false, active: true },
  { name: "widget4", title: "Widget 4", favourite: true, active: true },
];

const widgetsSlice = createSlice({
  name: "widgets",
  initialState,
  reducers: {},
});

export const {} = widgetsSlice.actions;

export default widgetsSlice.reducer;
