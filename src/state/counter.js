import { database } from '../firebaseConf'

const SET = 'counter/SET'

export const startCounterSyncAsyncAction = () => (dispatch, getState) => {
    database.ref('/counter').on(
        'value',
        (snapshot) => {
            dispatch(
                setActionCreator(
                    snapshot.val()
                )
            )
        }
    )
}


const setActionCreator = number => ({
    type: SET,
    number
})

const initialState = {
    number: 0,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET:
            return {
                ...state,
                number: action.number
            }
        default:
            return state
    }
}

