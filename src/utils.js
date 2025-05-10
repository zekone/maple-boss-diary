const makeSortFunction = (groupKey, sortKey, isReverse) => {
    return data => {
        const sorted = [...data].sort((a, b) => sortKey(a).localeCompare(sortKey(b)));
        
        const grouped =  sorted.reduce((acc, current) => {
            const key = groupKey(current);
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(current);
            return acc;
        }, {});
        
        const groups = Object.keys(grouped);
        const sortedGroup = groups.sort((a, b) => isReverse? b.localeCompare(a) : a.localeCompare(b));
        return sortedGroup.map(group => ({ header: group, contents: grouped[`${group}`]}));
    }
};

export const sortFunctions = [
    {
        name: "Boss (Ascending)",
        function: makeSortFunction(x=>x.boss, x=>x.date)
    },
    {
        name: "Boss (Descending)",
        function: makeSortFunction(x=>x.boss, x=>x.date, true)
    },
    {
        name: "Date (Ascending)",
        function: makeSortFunction(x=>x.date, x=>x.boss)
    },
    {
        name: "Date (Descending)",
        function: makeSortFunction(x=>x.date, x=>x.boss, true)
    }
]
