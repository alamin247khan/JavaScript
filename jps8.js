function greeting(greetingHandler, name) {
    greetingHandler(name);
}
function greetingHandler(name) {
    console.log('Good Morning', name);
}
greeting(greetingHandler, 'Tom Hanks');