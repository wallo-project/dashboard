/**
 * Component that contain the footer of the application.
 * 
 * @author WALL-O Dev Team
 * @version 1.0.0
 * @since 01/01/2023
 */

// import required elements
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// part of the store that contains API data, this allow to serve and sync data across all components
const apiSlice = createSlice({
  name: "api",
  initialState: {
    
    isConnected: false,
    apiAddress: "http://127.0.0.1:8081",
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

/**
 * Function to get the API Address.
 * 
 * @returns the api address as a string. 
 */
export const getApiAddress = (state: { api: { isConnected: boolean; apiAddress: string; };}) => state.api.apiAddress;

/**
 * Function to get the API connection status.
 * 
 * @returns the api connection status as a boolean. 
 */
export const isConnected = (state: { api: { isConnected: boolean; apiAddress: string; }; }) => state.api.isConnected;

export const apiActions = apiSlice.actions;

export default apiSlice;
