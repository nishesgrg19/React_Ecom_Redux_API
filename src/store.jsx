import { configureStore } from '@reduxjs/toolkit';
import { rootreducer } from './reducer';

const store = configureStore({
    reducer:rootreducer
});

export default store;
