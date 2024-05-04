import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import Locale from "../../types/Locale";
import Messages from "../../types/Messages";

interface IntlState {
  locale: Locale;
  messages?: Messages;
}

const initialState: IntlState = {
  locale: "en",
};

export const intlSlice = createSlice({
  name: "intl",
  initialState,
  reducers: {
    changeLocale: (state, action: PayloadAction<Locale>) => {
      state.locale = action.payload;
    },
    changeMessages: (state, action: PayloadAction<Messages>) => {
      state.messages = action.payload;
    },
  },
});

export const { changeLocale, changeMessages } = intlSlice.actions;

export default intlSlice.reducer;
