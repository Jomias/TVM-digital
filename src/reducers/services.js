import {
    CREATE_SERVICE,
    RETRIEVE_SERVICES,
    UPDATE_SERVICE,
    DELETE_SERVICE,
    DELETE_ALL_SERVICES,
  } from "../actions/types";
  
  const initialState = [];
  
  const serviceReducer = (services = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_SERVICE:
        return [...services, payload];
  
      case RETRIEVE_SERVICES:
        return payload;
  
      case UPDATE_SERVICE:
        return services.map((service) => {
          if (service.id === payload.id) {
            return {
              ...service,
              ...payload,
            };
          } else {
            return service;
          }
        });
  
      case DELETE_SERVICE:
        return services.filter(({ id }) => id !== payload.id);
  
      case DELETE_ALL_SERVICES:
        return [];
  
      default:
        return services;
    }
  };
  
  export default serviceReducer;