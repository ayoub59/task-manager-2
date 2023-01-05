// inictail data
const initialeState = {
    pays: [{
        code: 1,
        nom: "maroc",
        continent: "afrique",
        surfaceArea: "100000",
        image: "",
        indepYear: "1956",
        population: 4000000,
        cities:
            [{
                name: "rabat",
                district: "rabat",
                population: 55555,
                capital: true
            },
            {
                name: "tanger",
                district: "tanger",
                population: 11111,
                capital: false
            },
            {
                name: "fès",
                district: "fès",
                population: 334444,
                capital: false
            }
            ]
    }
        , {
        code: 2,
        nom: "canada",
        continent: "amérique",
        surfaceArea: "100000",
        image: "",
        indepYear: "1986",
        population: 4000000,
        cities:
        {
            name: "otawa",
            district: "otawa",
            population: 500000,
            capital: true
        }
    }
    ]
}
export default initialeState

// actions
const add = "ADDCONTRY"
function addContry(c) {
    return {
        type: add,
        payload: c

    }
}
// reducers
function reducer(state = initialeState, action) {
    switch (action.type) {
        case add:
            console.log("bobo")
        // break;

        default:
            return state
        // break;
    }
}