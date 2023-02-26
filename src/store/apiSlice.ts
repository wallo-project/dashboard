import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const apiSlice = createSlice({
  name: "api",
  initialState: {
    
    isConnected: false,
    apiAddress: "http://127.0.0.1:8080",
  },
  reducers: {
    setConnectionStatus: (state, action: PayloadAction<boolean>) => {
      state.isConnected = action.payload;
    },
    setApiAddress: (state, action: PayloadAction<{ ipAddress: string; port: string }>) => {
      state.apiAddress = `http://${action.payload.ipAddress}:${action.payload.port}`;
    },
  },
});

export const getApiAddress = (state: { api: { isConnected: boolean; apiAddress: string; };}) => state.api.apiAddress;

export const isConnected = (state: { api: { isConnected: boolean; apiAddress: string; }; }) => state.api.isConnected;

export const apiActions = apiSlice.actions;

export default apiSlice;
