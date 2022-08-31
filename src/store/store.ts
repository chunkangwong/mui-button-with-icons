import { configureStore } from "@reduxjs/toolkit";
import countReducer from "../features/count/countSlice";
import layersReducer from "../features/layers/layersSlice";
import widgetsReducer from "../features/widgets/widgetsSlice";

const store = configureStore({
  reducer: {
    count: countReducer,
    layers: layersReducer,
    widgets: widgetsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
