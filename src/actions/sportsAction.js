export const getSport = (id) => ({
    type:"GET_SPORT",
    payload:id
})

export const updateSport = (sport) => ({
    type:"UPDATE_SPORT",
    payload:sport
})

export const addSport = (sport) => ({
    type:"ADD_SPORT",
    payload:sport
})

export const deleteSport = (id) => ({
    type:"DELETE_SPORT",
    payload:id
})

export const modalOpen = (id) => ({
    type:"OPEN_MODAL",
    payload: id
})

export const modalClose = (id) => ({
    type:"CLOSE_MODAL",
    payload:id
})