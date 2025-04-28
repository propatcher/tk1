    const { createApp } = Vue;  
        
createApp({
    data() {
        return {
            courseName: 'VueJS!',
            userName: 'Богданов Иван',
            tasks: [
                'Задача 1',
                'Задача 2',
                'Задача 3'
            ],
            forms: {
                input1: null,
                input2: null,
                checkboxes:[],
                select:null
            },
            attr: "img.jpg",
            demoInput: {
                disabled: false,
                placeholder: 'Новый placeholder',
                classes: []
            }
        };
    },
    methods: {
        addTask() {
            this.tasks.push(`Задача ${this.tasks.length + 1}`);
        },
        removeTask() {  
            this.tasks.pop();
        },
        addZero(){
            this.tasks.unshift('Задача 0');
        },
        removeSecond(){
            this.tasks.splice(1,1,'Пункт 2');
        },
        clickByButton() {
            alert('Вы нажали на кнопку!')
        },
        formSubmited() {
            alert('Вы отправили форму')
        }
    }
}).mount('#app');