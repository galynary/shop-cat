const list = [
    { label: "HTML" },
    { label: "CSS" },
    { label: "JAVASCRIPT" },
    { label: "Node.js" },
    { label: "React" },
    { label: "MongooDB" },
    { label: "Redux" },
    { label: "Next.js" },
    { label: "Vue.js" }
];

const refs = {
    list: document.querySelector('.list-js'),
    input: document.querySelector('#filter')
};

refs.input.addEventListener('input', _.debounce(onFilterChange, 300));

const listSkills = createListSkills(list);
populateList(listSkills);

function createListSkills(items) {
    return items.map(item => `<li>${item.label}</li>`).join('');  // Відрендили список навичок
}

function onFilterChange(evt) {
    const filter = evt.target.value.toLowerCase();

    const filterItems = list.filter(item => item.label.toLowerCase().includes(filter));
    console.log(filterItems);

    const listSkills = createListSkills(filterItems);
    populateList(listSkills);
}

function populateList(markup) {
    refs.list.innerHTML = markup;
}