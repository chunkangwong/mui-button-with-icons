import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Widget {
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
  reducers: {
    setWidgetActive(
      state,
      action: PayloadAction<{ name: string; active: boolean }>
    ) {
      const { name, active } = action.payload;
      const selectedWidget = state.find((widget) => widget.name === name);
      if (selectedWidget) {
        selectedWidget.active = active;
      }
    },
    setWidgetFavourite(
      state,
      action: PayloadAction<{ name: string; favourite: boolean }>
    ) {
      const { name, favourite } = action.payload;
      const selectedWidget = state.find((widget) => widget.name === name);
      if (selectedWidget) {
        selectedWidget.favourite = favourite;
      }
    },
  },
});

export const { setWidgetActive, setWidgetFavourite } = widgetsSlice.actions;

export default widgetsSlice.reducer;
