import React, { Component }  from 'react';
import axios from 'axios';
import moment from 'moment';
import { BASE_API_URL } from '../utils/constants';
import { setErrors } from './errors';
import Loader from "../components/Loader"

export const initiateGetJobs = (data, isLoadMore) => {
  // const a=true
  // if(a){
  //   return <Loader />;
  // }
  return async (dispatch) => {
    // {<Loader />}
    try {
      let a=true
      
      let { description, full_time, location, page } = data;

      description = description ? encodeURIComponent(description) : '';
      location = location ? encodeURIComponent(location) : '';
      full_time = full_time ? '&full_time=true' : '';

      if (page) {
        page = parseInt(page);
        page = isNaN(page) ? '' : `&page=${page}`;
      }

      const jobs = await axios.get(    
        `/jobs?description=${description}&location=${location}${full_time}${page}`
      );
      // const jobs = await axios.get('./jobs.json');
      const sortedJobs = jobs.data.sort(
        (a, b) =>
          moment(new Date(b.created_at)) - moment(new Date(a.created_at))
      );

      if (isLoadMore) {
        return dispatch(setLoadMoreJobs(sortedJobs));
      } else {
        return dispatch(setJobs(sortedJobs));
      }
      a=false
    } catch (error) {
      error.response && dispatch(setErrors(error.response.data));
    }
  };
};

export const setJobs = (jobs) => ({
  type: 'SET_JOBS',
  jobs
});

export const setLoadMoreJobs = (jobs) => ({
  type: 'LOAD_MORE_JOBS',
  jobs
});
