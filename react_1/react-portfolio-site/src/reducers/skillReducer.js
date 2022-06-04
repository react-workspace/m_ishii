import { requestStates } from '../constants';

export const actionTypes = {
	initial: 'INITIAL',
	fetch: 'FETCHING',
	success: 'FETCH_SUCCESS',
	error: 'FETCH_ERROR'
};

export const initialState = {
	languageList: [],
	requestState: requestStates.idle,
}

export const skillReducer = (
	state, action
) => {
	switch (action.type) {
		case actionTypes.initial: {
			//初期状態
			return {
				languageList: [],
				requestState: requestStates.initial
			}
		}
		case actionTypes.fetch: {
			//データ取得中
			return {
				...state,
				requestState: requestStates.loading
			}
		}
		case actionTypes.success: {
			//データ取得成功時
			return {
				languageList: action.payload.languageList,
				requestState: requestStates.success
			}
		}
		case actionTypes.error: {
			//エラー時
			return {
				languageList: [],
				requestState: requestStates.error
			}
		}
		default: {
			throw new Error();
		}
	}
};
