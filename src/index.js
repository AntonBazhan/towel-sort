module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix) || matrix <= 0) {
        return [];
    }
    const concat = matrix.reduce(function (result, current, index) {
        if (index % 2 !== 0) {
            current.reverse();
        }
        return result.concat(current);
    }, []);
    return concat;
};
