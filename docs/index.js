export function sortList(type) {
    const ul = document.getElementById('course_list');
    const items = Array.from(ul.getElementsByTagName('li'));

    items.sort((a, b) => {
        let valueA, valueB;

        if (type === 'relevance') {
            valueA = parseFloat(a.getAttribute('relevance'));
            valueB = parseFloat(b.getAttribute('relevance'));
            return valueA - valueB;
        } else if (type === 'course_number') {
            valueA = parseFloat(a.getAttribute('course_number'));
            valueB = parseFloat(b.getAttribute('course_number'));
            return valueB - valueA;
        } else if (type === 'time') {
            valueA = parseFloat(a.getAttribute('time'));
            valueB = parseFloat(b.getAttribute('time'));
            return valueB - valueA;
        }

    });

    ul.innerHTML = '';

    items.forEach(item => ul.appendChild(item));
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('sortByTime').addEventListener('click', () => sortList('time'));
    document.getElementById('sortByRelevance').addEventListener('click', () => sortList('relevance'));
    document.getElementById('sortByCourseNumber').addEventListener('click', () => sortList('course_number'));
});