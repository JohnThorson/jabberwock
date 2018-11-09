var app = new Vue({ 
    el: '#app',
    data: {
        todos: [
            { title: 'Dont', text: 'Learn JavaScript' },
            { title: 'Do', text: 'Learn Vue' },
            { title: 'Or', text: 'Build something awesome' }
        ]
    }
});

app.todos.push({ title: 'Fourth', text: 'New Item'})