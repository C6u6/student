export function checkValuesInProps(props, item) {
    const keysValues = Object.entries(props);
    const tests = keysValues.map(el => {
        return item[el[0]] === el[1];
    });

    return tests.every(el => el);
}