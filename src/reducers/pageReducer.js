const pageState = {
	page: "/"
};

const pageReducer = function(state = pageState, action) {
	switch (action.type) {
		case "changePage": 
			return Object.assign({}, state, {
				page: action.payload
			})

	}

};

export default pageReducer;