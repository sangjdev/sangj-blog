export function dateFormatter(date) {
    if (!date) return;
    const yy = date.slice(0, 4);
    const mm = date.slice(4, 6);
    const dd = date.slice(6, 8);
    const result = yy + '-' + mm + '-' + dd;
    console.log(result);
    return result;
}

export function pluralize(params) {
    return params;
}