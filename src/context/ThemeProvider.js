import { useReducer } from 'react';

import { ThemeContext } from './ThemeContext';
import { themeReducer } from '../reducers/themeReducer';
import { initialState } from '../constants/themeState';

export default function ThemeProvider(props) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>{props.children}</ThemeContext.Provider>;
}
