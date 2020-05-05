export const LOADED = () => {
    return {type: 'LOADED_DONE'};
};

export const DATA_LOADED = (data) => {
    return {type:'DATA_LOADED', payload: data};
};