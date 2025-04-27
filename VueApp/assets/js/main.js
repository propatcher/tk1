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
            attr: "img.jpg"
        };
    },
    methods: {
        addTask() {
            this.tasks.push(`Задача ${this.tasks.length + 1}`);
        }
    }
}).mount('#app');