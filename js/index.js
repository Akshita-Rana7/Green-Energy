let resources = {
    p1: {
        title: 'Government Incentives and Subsidies',
        bodyText: 'Governments can play a crucial role by providing incentives, tax credits, and subsidies for individuals and families investing in green energy solutions. Programs that reduce the initial cost of solar panels, wind turbines, and energy-efficient appliances can make these technologies more accessible to those with average budgets. ',
        url: 'images/pexels-alex-ohan-204757441-14778851.jpg'
    },
    p2: {
        title: 'Community-Based Renewable Energy Projects',
        bodyText: 'Establishing community solar gardens or cooperatives allows individuals to buy into a portion of a larger renewable energy project. This collective approach can lower the cost per household and provide access to green energy without the need for individual installations, making it more affordable.',
        url: 'images/pexels-kindelmedia-9875420.jpg'
    },
    p3: {
        title: 'Financing Options and Low-Interest Loans',
        bodyText: 'Offering flexible financing options such as low-interest loans, green mortgages, or lease-to-own programs can help spread the cost of green energy installations over time. This approach reduces the upfront financial burden, making it easier for people with average budgets to transition to renewable energy sources.',
        url: 'images/pexels-rdne-8292879.jpg'
    }
}

let buttons = document.querySelectorAll('#controls button');
let dc = document.getElementById('dynamic-content');

function selectpage(ev) {
    let currentButton = ev.target;


    dc.innerHTML = `<h2>${resources[currentButton.id].title}</h2>
                    <img src="${resources[currentButton.id].url}">
                    <p>${resources[currentButton.id].bodyText}<p>`;
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));

            button.classList.add('active');
        });
    });

}

for (let button of buttons) {
    button.addEventListener('click', selectpage);
}