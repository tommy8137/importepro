import { handleActions } from 'redux-actions';
import { Observable, Subject, pipe, of, from, interval, merge, fromEvent, SubscriptionLike, concat, forkJoin, } from 'rxjs';
import { ofType } from 'redux-observable';
import { mergeMap, concatMap, tap, mapTo, map, catchError, retry, retryWhen, takeUntil, flatMap, delay, } from 'rxjs/operators';
import Resource from '~~apis/resource';
import * as LoadingActions from '~~redux/Loading/LoadingActions';
import * as NotificationSystemActions from '~~hoc/NotificationSystem/NotificationSystemActions';
import { getErrorMessage } from '~~utils/ErrorCodeUtils';

// All Actions Here ---------------------------------------------------------------------------------------------------------------------------
const actionTypes = {
  // Parameters
  RUBBER_CLEAN_SHEET___GET_RUBBER_PARAMETER: 'RUBBER_CLEAN_SHEET___GET_RUBBER_PARAMETER',
  RUBBER_CLEAN_SHEET___GET_RUBBER_PARAMETER_SUCCESS: 'RUBBER_CLEAN_SHEET___GET_RUBBER_PARAMETER_SUCCESS',
  RUBBER_CLEAN_SHEET___PUT_RUBBER_PARAMETER: 'RUBBER_CLEAN_SHEET___PUT_RUBBER_PARAMETER',

  // Machine Price
  RUBBER_CLEAN_SHEET___GET_RUBBER_MACHINE_PRICE: 'RUBBER_CLEAN_SHEET___GET_RUBBER_MACHINE_PRICE',
  RUBBER_CLEAN_SHEET___GET_RUBBER_MACHINE_PRICE_SUCCESS: 'RUBBER_CLEAN_SHEET___GET_RUBBER_MACHINE_PRICE_SUCCESS',
  RUBBER_CLEAN_SHEET___PUT_RUBBER_MACHINE_PRICE: 'RUBBER_CLEAN_SHEET___PUT_RUBBER_MACHINE_PRICE',

  // stamping price
  RUBBER_CLEAN_SHEET___GET_STAMPING_PRICE: 'RUBBER_CLEAN_SHEET___GET_STAMPING_PRICE',
  RUBBER_CLEAN_SHEET___GET_STAMPING_PRICE_SUCCESS: 'RUBBER_CLEAN_SHEET___GET_STAMPING_PRICE_SUCCESS',
  RUBBER_CLEAN_SHEET___PUT_STAMPING_PRICE: 'RUBBER_CLEAN_SHEET___PUT_STAMPING_PRICE',

  // Adhesive Price
  RUBBER_CLEAN_SHEET___GET_ADHESIVE_PRICE: 'RUBBER_CLEAN_SHEET___GET_ADHESIVE_PRICE',
  RUBBER_CLEAN_SHEET___GET_ADHESIVE_PRICE_SUCCESS: 'RUBBER_CLEAN_SHEET___GET_ADHESIVE_PRICE_SUCCESS',
  RUBBER_CLEAN_SHEET___PUT_ADHESIVE_PRICE: 'RUBBER_CLEAN_SHEET___PUT_ADHESIVE_PRICE',

  // Printing Price
  RUBBER_CLEAN_SHEET___GET_PRINTING_PRICE: 'RUBBER_CLEAN_SHEET___GET_PRINTING_PRICE',
  RUBBER_CLEAN_SHEET___GET_PRINTING_PRICE_SUCCESS: 'RUBBER_CLEAN_SHEET___GET_PRINTING_PRICE_SUCCESS',
  RUBBER_CLEAN_SHEET___PUT_PRINTING_PRICE: 'RUBBER_CLEAN_SHEET___PUT_PRINTING_PRICE',


  // Machine Rate Price
  RUBBER_CLEAN_SHEET___GET_RUBBER_MACHINE_RATE: 'RUBBER_CLEAN_SHEET___GET_RUBBER_MACHINE_RATE',
  RUBBER_CLEAN_SHEET___GET_RUBBER_MACHINE_RATE_SUCCESS: 'RUBBER_CLEAN_SHEET___GET_RUBBER_MACHINE_RATE_SUCCESS',
  RUBBER_CLEAN_SHEET___PUT_RUBBER_MACHINE_RATE: 'RUBBER_CLEAN_SHEET___PUT_RUBBER_MACHINE_RATE',
  RUBBER_CLEAN_SHEET___ADD_RUBBER_MACHINE_RATE: 'RUBBER_CLEAN_SHEET___ADD_RUBBER_MACHINE_RATE',
  RUBBER_CLEAN_SHEET___ARCHIVE_RUBBER_MACHINE_RATE: 'RUBBER_CLEAN_SHEET___ARCHIVE_RUBBER_MACHINE_RATE',
  RUBBER_CLEAN_SHEET___UNARCHIVE_RUBBER_MACHINE_RATE: 'RUBBER_CLEAN_SHEET___UNARCHIVE_RUBBER_MACHINE_RATE',
  RUBBER_CLEAN_SHEET___SET_RUBBER_MACHINE_RATE_MODAL: 'RUBBER_CLEAN_SHEET___SET_RUBBER_MACHINE_RATE_MODAL',
};

/* Parameters ============================================================================================================================================== */
/* Actions */
export const getRubberParameter = () => {
  return {
    type: actionTypes.RUBBER_CLEAN_SHEET___GET_RUBBER_PARAMETER,
  };
};

export const getRubberParameterSuccess = response => {
  return {
    type: actionTypes.RUBBER_CLEAN_SHEET___GET_RUBBER_PARAMETER_SUCCESS,
    ...response.data,
  };
};

export const putRubberParameter = data => {
  return {
    type: actionTypes.RUBBER_CLEAN_SHEET___PUT_RUBBER_PARAMETER,
    data,
  };
};

/* Epics */
export const getRubberParameterEpic = (action$, state$) => {
  return action$.pipe(
    ofType(actionTypes.RUBBER_CLEAN_SHEET___GET_RUBBER_PARAMETER),
    mergeMap(action => {
      return concat(
        of(LoadingActions.toggleLoadingStatus(true)),
        from(Resource.RubberCleanSheetResource.getRubberParameter()).pipe(
          mergeMap(response => {
            return concat(of(LoadingActions.toggleLoadingStatus(false)), of(getRubberParameterSuccess(response)));
          }),
          catchError(error => {
            return concat(
              of(LoadingActions.toggleLoadingStatus(false)),
              of(
                NotificationSystemActions.pushNotification({
                  message: '取得列表有誤，請稍後再試',
                  level: 'error',
                }),
              ),
            );
          }),
        ),
      );
    }),
  );
};

export const putRubberParameterEpic = (action$, state$) => {
  return action$.pipe(
    ofType(actionTypes.RUBBER_CLEAN_SHEET___PUT_RUBBER_PARAMETER),
    mergeMap(action => {
      const { data } = action;
      return concat(
        of(LoadingActions.toggleLoadingStatus(true)),
        from(Resource.DatabaseResource.updateCleanSheetParameters(data)).pipe(
          mergeMap(response => {
            return concat(
              of(LoadingActions.toggleLoadingStatus(false)),
              of(getRubberParameter()),
              of(
                NotificationSystemActions.pushNotification({
                  message: '更新成功',
                  level: 'success',
                }),
              ),
            );
          }),
          catchError(error => {
            return concat(
              of(LoadingActions.toggleLoadingStatus(false)),
              of(
                NotificationSystemActions.pushNotification({
                  message: '取得列表有誤，請稍後再試',
                  level: 'error',
                }),
              ),
            );
          }),
        ),
      );
    }),
  );
};


/* Reducers */
const RUBBER_CLEAN_SHEET___GET_RUBBER_PARAMETER_SUCCESS = (state, payload) => {
  return {
    ...state,
    rubberParameter: {
      ...state.rubberParameter,
      ...payload,
    },
  };
};

/* Machine Price  ========================================================================================================================================== */
/* Actions */
export const getRubberMachinePrice = () => {
  return {
    type: actionTypes.RUBBER_CLEAN_SHEET___GET_RUBBER_MACHINE_PRICE,
  };
};

export const getRubberMachinePriceSuccess = response => {
  return {
    type: actionTypes.RUBBER_CLEAN_SHEET___GET_RUBBER_MACHINE_PRICE_SUCCESS,
    ...response.data,
  };
};

export const putRubberMachinePrice = data => {
  return {
    type: actionTypes.RUBBER_CLEAN_SHEET___PUT_RUBBER_MACHINE_PRICE,
    data,
  };
};

/* Epics */
export const getRubberMachinePriceEpic = (action$, state$) => {
  return action$.pipe(
    ofType(actionTypes.RUBBER_CLEAN_SHEET___GET_RUBBER_MACHINE_PRICE),
    mergeMap(action => {
      return concat(
        of(LoadingActions.toggleLoadingStatus(true)),
        from(Resource.RubberCleanSheetResource.getRubberMachinePrice()).pipe(
          mergeMap(response => {
            return concat(of(LoadingActions.toggleLoadingStatus(false)), of(getRubberMachinePriceSuccess(response)));
          }),
          catchError(error => {
            return concat(
              of(LoadingActions.toggleLoadingStatus(false)),
              of(
                NotificationSystemActions.pushNotification({
                  message: '取得列表有誤，請稍後再試',
                  level: 'error',
                }),
              ),
            );
          }),
        ),
      );
    }),
  );
};

export const putRubberMachinePriceEpic = (action$, state$) => {
  return action$.pipe(
    ofType(actionTypes.RUBBER_CLEAN_SHEET___PUT_RUBBER_MACHINE_PRICE),
    mergeMap(action => {
      const { data } = action;
      return concat(
        of(LoadingActions.toggleLoadingStatus(true)),
        from(Resource.RubberCleanSheetResource.putRubberMachinePrice(data)).pipe(
          mergeMap(response => {
            return concat(
              of(LoadingActions.toggleLoadingStatus(false)),
              of(getRubberMachinePrice()),
              of(
                NotificationSystemActions.pushNotification({
                  message: '更新成功',
                  level: 'success',
                }),
              ),
            );
          }),
          catchError(error => {
            return concat(
              of(LoadingActions.toggleLoadingStatus(false)),
              of(
                NotificationSystemActions.pushNotification({
                  message: '取得列表有誤，請稍後再試',
                  level: 'error',
                }),
              ),
            );
          }),
        ),
      );
    }),
  );
};


/* Reducers */
const RUBBER_CLEAN_SHEET___GET_RUBBER_MACHINE_PRICE_SUCCESS = (state, payload) => {
  return {
    ...state,
    machinePrice: {
      ...state.machinePrice,
      ...payload,
    },
  };
};


/* stamping price ==================================================================================================================================== */
/* Actions */
export const getStampingPrice = () => {
  return {
    type: actionTypes.RUBBER_CLEAN_SHEET___GET_STAMPING_PRICE,
  };
};

export const getStampingPriceSuccess = response => {
  return {
    type: actionTypes.RUBBER_CLEAN_SHEET___GET_STAMPING_PRICE_SUCCESS,
    ...response.data,
  };
};

export const putStampingPrice = data => {
  return {
    type: actionTypes.RUBBER_CLEAN_SHEET___PUT_STAMPING_PRICE,
    data,
  };
};
/* Epics */
export const getStampingPriceEpic = (action$, state$) => {
  return action$.pipe(
    ofType(actionTypes.RUBBER_CLEAN_SHEET___GET_STAMPING_PRICE),
    mergeMap(action => {
      return concat(
        of(LoadingActions.toggleLoadingStatus(true)),
        from(Resource.RubberCleanSheetResource.getStampingPrice()).pipe(
          mergeMap(response => {
            return concat(of(LoadingActions.toggleLoadingStatus(false)), of(getStampingPriceSuccess(response)));
          }),
          catchError(error => {
            return concat(
              of(LoadingActions.toggleLoadingStatus(false)),
              of(
                NotificationSystemActions.pushNotification({
                  message: '取得列表有誤，請稍後再試',
                  level: 'error',
                }),
              ),
            );
          }),
        ),
      );
    }),
  );
};

export const putStampingPriceEpic = (action$, state$) => {
  return action$.pipe(
    ofType(actionTypes.RUBBER_CLEAN_SHEET___PUT_STAMPING_PRICE),
    mergeMap(action => {
      const { data } = action;
      return concat(
        of(LoadingActions.toggleLoadingStatus(true)),
        from(Resource.RubberCleanSheetResource.putStampingPrice(data)).pipe(
          mergeMap(response => {
            return concat(
              of(LoadingActions.toggleLoadingStatus(false)),
              of(getStampingPrice()),
              of(
                NotificationSystemActions.pushNotification({
                  message: '更新成功',
                  level: 'success',
                }),
              ),
            );
          }),
          catchError(error => {
            return concat(
              of(LoadingActions.toggleLoadingStatus(false)),
              of(
                NotificationSystemActions.pushNotification({
                  message: '取得列表有誤，請稍後再試',
                  level: 'error',
                }),
              ),
            );
          }),
        ),
      );
    }),
  );
};
/* Reducers */
const RUBBER_CLEAN_SHEET___GET_STAMPING_PRICE_SUCCESS = (state, payload) => {
  return {
    ...state,
    stampingPrice: {
      ...state.stampingPrice,
      ...payload,
    },
  };
};

/* Adhesive Price  ========================================================================================================================================= */
/* Actions */
export const getAdhesivePrice = () => {
  return {
    type: actionTypes.RUBBER_CLEAN_SHEET___GET_ADHESIVE_PRICE,
  };
};

export const getAdhesivePriceSuccess = response => {
  return {
    type: actionTypes.RUBBER_CLEAN_SHEET___GET_ADHESIVE_PRICE_SUCCESS,
    ...response.data,
  };
};

export const putAdhesivePrice = data => {
  return {
    type: actionTypes.RUBBER_CLEAN_SHEET___PUT_ADHESIVE_PRICE,
    data,
  };
};

/* Epics */
export const getAdhesivePriceEpic = (action$, state$) => {
  return action$.pipe(
    ofType(actionTypes.RUBBER_CLEAN_SHEET___GET_ADHESIVE_PRICE),
    mergeMap(action => {
      return concat(
        of(LoadingActions.toggleLoadingStatus(true)),
        from(Resource.RubberCleanSheetResource.getAdhesivePrice()).pipe(
          mergeMap(response => {
            return concat(of(LoadingActions.toggleLoadingStatus(false)), of(getAdhesivePriceSuccess(response)));
          }),
          catchError(error => {
            return concat(
              of(LoadingActions.toggleLoadingStatus(false)),
              of(
                NotificationSystemActions.pushNotification({
                  message: '取得列表有誤，請稍後再試',
                  level: 'error',
                }),
              ),
            );
          }),
        ),
      );
    }),
  );
};

export const putAdhesivePriceEpic = (action$, state$) => {
  return action$.pipe(
    ofType(actionTypes.RUBBER_CLEAN_SHEET___PUT_ADHESIVE_PRICE),
    mergeMap(action => {
      const { data } = action;
      return concat(
        of(LoadingActions.toggleLoadingStatus(true)),
        from(Resource.RubberCleanSheetResource.putAdhesivePrice(data)).pipe(
          mergeMap(response => {
            return concat(
              of(LoadingActions.toggleLoadingStatus(false)),
              of(getAdhesivePrice()),
              of(
                NotificationSystemActions.pushNotification({
                  message: '更新成功',
                  level: 'success',
                }),
              ),
            );
          }),
          catchError(error => {
            return concat(
              of(LoadingActions.toggleLoadingStatus(false)),
              of(
                NotificationSystemActions.pushNotification({
                  message: '取得列表有誤，請稍後再試',
                  level: 'error',
                }),
              ),
            );
          }),
        ),
      );
    }),
  );
};

/* Reducers */
const RUBBER_CLEAN_SHEET___GET_ADHESIVE_PRICE_SUCCESS = (state, payload) => {
  return {
    ...state,
    adhesivePrice: {
      ...state.adhesivePrice,
      ...payload,
    },
  };
};

/* Printing Price  ========================================================================================================================================= */
/* Actions */
export const getPrintingPrice = () => {
  return {
    type: actionTypes.RUBBER_CLEAN_SHEET___GET_PRINTING_PRICE,
  };
};

export const getPrintingPriceSuccess = response => {
  return {
    type: actionTypes.RUBBER_CLEAN_SHEET___GET_PRINTING_PRICE_SUCCESS,
    ...response.data,
  };
};

export const putPrintingPrice = data => {
  return {
    type: actionTypes.RUBBER_CLEAN_SHEET___PUT_PRINTING_PRICE,
    data,
  };
};
/* Epics */
export const getPrintingPriceEpic = (action$, state$) => {
  return action$.pipe(
    ofType(actionTypes.RUBBER_CLEAN_SHEET___GET_PRINTING_PRICE),
    mergeMap(action => {
      return concat(
        of(LoadingActions.toggleLoadingStatus(true)),
        from(Resource.RubberCleanSheetResource.getPrintingPrice()).pipe(
          mergeMap(response => {
            return concat(of(LoadingActions.toggleLoadingStatus(false)), of(getPrintingPriceSuccess(response)));
          }),
          catchError(error => {
            return concat(
              of(LoadingActions.toggleLoadingStatus(false)),
              of(
                NotificationSystemActions.pushNotification({
                  message: '取得列表有誤，請稍後再試',
                  level: 'error',
                }),
              ),
            );
          }),
        ),
      );
    }),
  );
};

export const putPrintingPriceEpic = (action$, state$) => {
  return action$.pipe(
    ofType(actionTypes.RUBBER_CLEAN_SHEET___PUT_PRINTING_PRICE),
    mergeMap(action => {
      const { data } = action;
      return concat(
        of(LoadingActions.toggleLoadingStatus(true)),
        from(Resource.RubberCleanSheetResource.putPrintingPrice(data)).pipe(
          mergeMap(response => {
            return concat(
              of(LoadingActions.toggleLoadingStatus(false)),
              of(getPrintingPrice()),
              of(
                NotificationSystemActions.pushNotification({
                  message: '更新成功',
                  level: 'success',
                }),
              ),
            );
          }),
          catchError(error => {
            return concat(
              of(LoadingActions.toggleLoadingStatus(false)),
              of(
                NotificationSystemActions.pushNotification({
                  message: '取得列表有誤，請稍後再試',
                  level: 'error',
                }),
              ),
            );
          }),
        ),
      );
    }),
  );
};

/* Reducers */
const RUBBER_CLEAN_SHEET___GET_PRINTING_PRICE_SUCCESS = (state, payload) => {
  return {
    ...state,
    printingPrice: {
      ...state.printingPrice,
      ...payload,
    },
  };
};


/* Machine Rate ============================================================================================================================================== */
/* Actions */
export const getRubberMachineRate = () => {
  return {
    type: actionTypes.RUBBER_CLEAN_SHEET___GET_RUBBER_MACHINE_RATE,
  };
};

export const getRubberMachineRateSuccess = response => {
  return {
    type: actionTypes.RUBBER_CLEAN_SHEET___GET_RUBBER_MACHINE_RATE_SUCCESS,
    ...response.data,
  };
};

export const putRubberMachineRate = data => {
  return {
    type: actionTypes.RUBBER_CLEAN_SHEET___PUT_RUBBER_MACHINE_RATE,
    data,
  };
};

export const addRubberMachineRate = data => {
  return {
    type: actionTypes.RUBBER_CLEAN_SHEET___ADD_RUBBER_MACHINE_RATE,
    data,
  };
};

export const archiveRubberMachineRate = data => {
  return {
    type: actionTypes.RUBBER_CLEAN_SHEET___ARCHIVE_RUBBER_MACHINE_RATE,
    data,
  };
};

export const unArchiveRubberMachineRate = data => {
  return {
    type: actionTypes.RUBBER_CLEAN_SHEET___UNARCHIVE_RUBBER_MACHINE_RATE,
    data,
  };
};

export const setRubberMachineRateModal = isAddModalOpen => {
  return {
    type: actionTypes.RUBBER_CLEAN_SHEET___SET_RUBBER_MACHINE_RATE_MODAL,
    isAddModalOpen,
  };
};

/* Epics */
export const getRubberMachineRateEpic = (action$, state$) => {
  return action$.pipe(
    ofType(actionTypes.RUBBER_CLEAN_SHEET___GET_RUBBER_MACHINE_RATE),
    mergeMap(action => {
      return concat(
        of(LoadingActions.toggleLoadingStatus(true)),
        from(Resource.RubberCleanSheetResource.getMachineRate()).pipe(
          mergeMap(response => {
            return concat(
              of(LoadingActions.toggleLoadingStatus(false)),
              of(getRubberMachineRateSuccess(response))
            );
          }),
          catchError(error => {
            return concat(
              of(LoadingActions.toggleLoadingStatus(false)),
              of(
                NotificationSystemActions.pushNotification({
                  message: '取得列表有誤，請稍後再試',
                  level: 'error',
                }),
              ),
            );
          }),
        ),
      );
    }),
  );
};

export const putRubberMachineRateEpic = (action$, state$) => {
  return action$.pipe(
    ofType(actionTypes.RUBBER_CLEAN_SHEET___PUT_RUBBER_MACHINE_RATE),
    mergeMap(action => {
      const { data } = action;
      return concat(
        of(LoadingActions.toggleLoadingStatus(true)),
        from(Resource.RubberCleanSheetResource.putMachineRate(data)).pipe(
          mergeMap(response => {
            return concat(
              of(LoadingActions.toggleLoadingStatus(false)),
              of(getRubberMachineRate()),
              of(
                NotificationSystemActions.pushNotification({
                  message: '新增成功',
                  level: 'success',
                }),
              ),
            );
          }),
          catchError(error => {
            const message = getErrorMessage(error, '系統錯誤，請稍後再試');
            return concat(
              of(LoadingActions.toggleLoadingStatus(false)),
              of(
                NotificationSystemActions.pushNotification({
                  message,
                  level: 'error',
                }),
              ),
            );
          }),
        ),
      );
    }),
  );
};

export const addRubberMachineRateEpic = (action$, state$) => {
  return action$.pipe(
    ofType(actionTypes.RUBBER_CLEAN_SHEET___ADD_RUBBER_MACHINE_RATE),
    mergeMap(action => {
      const { data } = action;
      return concat(
        of(LoadingActions.toggleLoadingStatus(true)),
        from(Resource.RubberCleanSheetResource.addMachineRate(data)).pipe(
          mergeMap(response => {
            return concat(
              of(LoadingActions.toggleLoadingStatus(false)),
              of(getRubberMachineRate()),
              of(setRubberMachineRateModal(false)),
              of(
                NotificationSystemActions.pushNotification({
                  message: '更新成功',
                  level: 'success',
                }),
              ),
            );
          }),
          catchError(error => {
            const message = getErrorMessage(error, '系統錯誤，請稍後再試');
            return concat(
              of(LoadingActions.toggleLoadingStatus(false)),
              of(
                NotificationSystemActions.pushNotification({
                  message,
                  level: 'error',
                }),
              ),
            );
          }),
        ),
      );
    }),
  );
};


export const archiveRubberMachineRateEpic = (action$, state$) => {
  return action$.pipe(
    ofType(actionTypes.RUBBER_CLEAN_SHEET___ARCHIVE_RUBBER_MACHINE_RATE),
    mergeMap(action => {
      const { data } = action;
      return concat(
        of(LoadingActions.toggleLoadingStatus(true)),
        from(Resource.RubberCleanSheetResource.archiveMachineRate(data)).pipe(
          mergeMap(response => {
            return concat(
              of(LoadingActions.toggleLoadingStatus(false)),
              of(getRubberMachineRate()),
              of(
                NotificationSystemActions.pushNotification({
                  message: '更新成功',
                  level: 'success',
                }),
              ),
            );
          }),
          catchError(error => {
            return concat(
              of(LoadingActions.toggleLoadingStatus(false)),
              of(
                NotificationSystemActions.pushNotification({
                  message: '取得列表有誤，請稍後再試',
                  level: 'error',
                }),
              ),
            );
          }),
        ),
      );
    }),
  );
};

export const unArchiveRubberMachineRateEpic = (action$, state$) => {
  return action$.pipe(
    ofType(actionTypes.RUBBER_CLEAN_SHEET___UNARCHIVE_RUBBER_MACHINE_RATE),
    mergeMap(action => {
      const { data } = action;
      return concat(
        of(LoadingActions.toggleLoadingStatus(true)),
        from(Resource.RubberCleanSheetResource.unArchiveMachineRate(data)).pipe(
          mergeMap(response => {
            return concat(
              of(LoadingActions.toggleLoadingStatus(false)),
              of(getRubberMachineRate()),
              of(
                NotificationSystemActions.pushNotification({
                  message: '更新成功',
                  level: 'success',
                }),
              ),
            );
          }),
          catchError(error => {
            return concat(
              of(LoadingActions.toggleLoadingStatus(false)),
              of(
                NotificationSystemActions.pushNotification({
                  message: '取得列表有誤，請稍後再試',
                  level: 'error',
                }),
              ),
            );
          }),
        ),
      );
    }),
  );
};
/* Reducers */
const RUBBER_CLEAN_SHEET___GET_RUBBER_MACHINE_RATE_SUCCESS = (state, payload) => {
  return {
    ...state,
    machineRate: {
      ...state.machineRate,
      ...payload,
    },
  };
};


const RUBBER_CLEAN_SHEET___SET_RUBBER_MACHINE_RATE_MODAL = (state, payload) => {
  return {
    ...state,
    machineRate: {
      ...state.machineRate,
      isAddModalOpen: payload.isAddModalOpen
    },
  };
};

// All Reducers Here -------------------------------------------------------------------------------------------------------------------------------
// Parameters 預設值
const initialRubberParameter = {
  date: {},
  rubberParameter: [],
};

// Machine Price 預設值
const initialMachinePrice = {
  date: {},
  machinePrice: [],
};

// stamping price 預設值
const initialStampingPrice = {
  date: {},
  stampingPrice: [],
};

// Adhesive Price 預設值
const initialAdhesivePrice = {
  date: {},
  adhesivePrice: [],
};

// Printing Price 預設值
const initialPrintingPrice = {
  date: {},
  printingPrice: [],
};

const initialMachineRate = {
  date: {},
  machineRate: [],
  isAddModalOpen: false,
};


const initialState = {
  rubberParameter: initialRubberParameter,
  machinePrice: initialMachinePrice,
  stampingPrice: initialStampingPrice,
  adhesivePrice: initialAdhesivePrice,
  printingPrice: initialPrintingPrice,
  machineRate: initialMachineRate
};

export const reducer = handleActions({
  // Parameters
  RUBBER_CLEAN_SHEET___GET_RUBBER_PARAMETER_SUCCESS,
  // Machine Price
  RUBBER_CLEAN_SHEET___GET_RUBBER_MACHINE_PRICE_SUCCESS,
  // stamping price
  RUBBER_CLEAN_SHEET___GET_STAMPING_PRICE_SUCCESS,
  // Adhesive Price
  RUBBER_CLEAN_SHEET___GET_ADHESIVE_PRICE_SUCCESS,
  //  Printing Price
  RUBBER_CLEAN_SHEET___GET_PRINTING_PRICE_SUCCESS,
  // Machine Rate
  RUBBER_CLEAN_SHEET___GET_RUBBER_MACHINE_RATE_SUCCESS,
  RUBBER_CLEAN_SHEET___SET_RUBBER_MACHINE_RATE_MODAL,
}, initialState);

// All Epics Here ----------------------------------------------------------------------------------------------------------------------------------
export const epics = [
  // Parameters
  getRubberParameterEpic, putRubberParameterEpic,
  // Machine Price
  getRubberMachinePriceEpic, putRubberMachinePriceEpic,
  // stamping price
  getStampingPriceEpic, putStampingPriceEpic,
  // Adhesive Price
  getAdhesivePriceEpic, putAdhesivePriceEpic,
  // Printing Price
  getPrintingPriceEpic, putPrintingPriceEpic,
  // Machine Rate
  getRubberMachineRateEpic,
  putRubberMachineRateEpic,
  addRubberMachineRateEpic,
  archiveRubberMachineRateEpic,
  unArchiveRubberMachineRateEpic
];
