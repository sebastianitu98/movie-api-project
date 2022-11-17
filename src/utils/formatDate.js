export const formatDate = (date) => {
    
    const newDate= date.split('-');

    return `${newDate[2]}.${newDate[1]}.${newDate[0]}`
}