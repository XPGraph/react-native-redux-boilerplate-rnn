exports.createReducer = function createReducer (initialState, handlers) {
  return function reducer (state, action) {
    let _state = state;
    if (_state === undefined) _state = initialState;

    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](_state, action);
    }
    return _state;

  };
};
