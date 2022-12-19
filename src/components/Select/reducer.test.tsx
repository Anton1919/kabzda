import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('reducer should be true', () => {
	//data
	const state: StateType = {
		collapsed: false
	}


	//action
	const newState = reducer(state, {type: TOGGLE_COLLAPSED })

	//expect
	expect(newState.collapsed).toBe(true)

})

test('reducer should be false', () => {
	const state: StateType = {
		collapsed: true
	}

	const newState = reducer(state, {type: TOGGLE_COLLAPSED})

	expect(newState.collapsed).toBe(false)
})

