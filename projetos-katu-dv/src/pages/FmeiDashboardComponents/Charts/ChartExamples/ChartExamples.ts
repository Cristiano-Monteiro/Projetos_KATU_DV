/*=== Getting random data ====*/

function get_random_number(){
    let number = Math.ceil(Math.random() * 500);
    return number;
};

let random_data_1 = [];
let random_data_2 = [];

for(let i = 0; i <= 3; i++){
    let random_number = get_random_number();
    random_data_1.push(random_number);
    random_number = get_random_number();
    random_data_2.push(random_number);
};

let pie_data = [
    get_random_number(),
    get_random_number()
];

/*=== Chart configs ===*/

function generate_options_for_chart(type_chart: string, series_data: object[]){
    let option = {
        chart: {
            type: type_chart
        },
        title: {
            text: 'Chart Title'
        },
        series: series_data,
        key: get_random_number()
    };
    return option;
};

const chart_data = [{
    name: 'Value 1',
    color: '#000278',
    data: random_data_1
}, {
    name: 'Value 2',
    color: '#0206fa',
    data: random_data_2
}];

const pie_chart_data = [{
    name: 'Value 1',
    colors: ['#000278','#0206fa'],
    data: pie_data
}];

const options1 = generate_options_for_chart('bar', chart_data);
const options2 = generate_options_for_chart('line', chart_data);
const options3 = generate_options_for_chart('column', chart_data);
const options4 = generate_options_for_chart('pie', pie_chart_data);

/*======================*/

const chartList = [
    options1, options2, options3, options4
];

export default chartList;