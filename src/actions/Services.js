import {
  CREATE_SERVICE,
  RETRIEVE_SERVICES,
  UPDATE_SERVICE,
  DELETE_SERVICE,
  DELETE_ALL_SERVICES,
} from "./types";

import ServiceDataService from "../services/ServiceService";

export const createService = (name, description) => async (dispatch) => {
  try {
    const res = await ServiceDataService.create({ name, description });

    dispatch({
      type: CREATE_SERVICE,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveServices = () => async (dispatch) => {
  try {
    const res = await ServiceDataService.getAll();

    dispatch({
      type: RETRIEVE_SERVICES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateService = (id, data) => async (dispatch) => {
  try {
    const res = await ServiceDataService.update(id, data);

    dispatch({
      type: UPDATE_SERVICE,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteService = (id) => async (dispatch) => {
  try {
    await ServiceDataService.remove(id);

    dispatch({
      type: DELETE_SERVICE,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllServices = () => async (dispatch) => {
  try {
    const res = await ServiceDataService.removeAll();

    dispatch({
      type: DELETE_ALL_SERVICES,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findServicesByTitle = (name) => async (dispatch) => {
  try {
    const res = await ServiceDataService.findByTitle(name);

    dispatch({
      type: RETRIEVE_SERVICES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};