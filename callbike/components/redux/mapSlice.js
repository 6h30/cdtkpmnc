// import { createSlice } from '@reduxjs/toolkit';

// const mapSlice = createSlice({
//   name: 'map',
//   initialState: {
//     routeDuration: null,
//     routeDistance: null,
//     destination: {
//       formattedAddress: '',
//       latitude: null,
//       longitude: null,
//     },
//   },
//   reducers: {
//     setRouteInfo: (state, action) => {
//       state.routeDuration = action.payload.duration;
//       state.routeDistance = action.payload.distance;
//     },
//     setDestination: (state, action) => {
//       state.destination = {
//         formattedAddress: action.payload.formattedAddress,
//         latitude: action.payload.latitude,
//         longitude: action.payload.longitude,
//       };
//     },
//   },
// });

// export const { setRouteInfo, setDestination } = mapSlice.actions;
// export default mapSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const mapSlice = createSlice({
  name: 'map',
  initialState: {
    routeDuration: null,
    routeDistance: null,
    destination: {
      formattedAddress: '',
      latitude: null,
      longitude: null,
    },
    pickupLocation: {  // Thêm trạng thái cho vị trí đón
      formattedAddress: 'Vị trí hiện tại',
      latitude: null,
      longitude: null,
    },
  },
  reducers: {
    setRouteInfo: (state, action) => {
      state.routeDuration = action.payload.duration;
      state.routeDistance = action.payload.distance;
    },
    setDestination: (state, action) => {
      state.destination = {
        formattedAddress: action.payload.formattedAddress,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
    },
    setPickupLocation: (state, action) => {  // Thêm bộ giảm cho vị trí đón
      state.pickupLocation = {
        formattedAddress: action.payload.formattedAddress,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
    },
  },
});

export const { setRouteInfo, setDestination, setPickupLocation } = mapSlice.actions;
export default mapSlice.reducer;
