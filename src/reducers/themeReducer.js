export function themeReducer(state, action) {
  switch (action.type) {
    case 'dark':
      return { dark: true };
    case 'light':
      return { dark: false };
    default:
      return state;
  }
}
