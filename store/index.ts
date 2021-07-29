import { Context, createWrapper, MakeStore } from 'next-redux-wrapper'
import { AnyAction, applyMiddleware, createStore, Store } from 'redux'
import thunk, { ThunkDispatch } from 'redux-thunk';
import { RootState, reducer } from './reducers'

const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper<RootState>(makeStore);

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>