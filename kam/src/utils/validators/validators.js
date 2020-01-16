export const required= Value =>{
    if (Value)  return undefined;
    return 'Field is required';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}

