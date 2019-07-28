const say = require('say')

var alex_lines = [
    'Knock Knock.',
    'Interrupting cow.',
    'moooooooooooooooooo!'
]

var samanthas_lines = [
    'Who is there?',
    'Interrupting cow who?'
]

say.speak(alex_lines[0])

setTimeout(() => {
    say.speak(samanthas_lines[0], 'Samantha')
}, 1000);
    
setTimeout(() => {
    say.speak(alex_lines[1])
}, 2000);

setTimeout(() => {
    say.speak(samanthas_lines[1], 'Samantha')
}, 3200);

setTimeout(() => {
    say.speak(alex_lines[2], 'Alex', .1)
}, 3800);












//say.speak()

// // Stop the text currently being spoken
//say.stop()

// // More complex example (with an OS X voice) and slow speed
//say.speak("What's up, dog?", 'Alex', 1)

// // Fire a callback once the text has completed being spoken
// say.speak("What's up, dog?", 'Good News', 1.0, (err) => {
//   if (err) {
//     return console.error(err)
//   }

//   console.log('Text has been spoken.')
// });

// // Export spoken audio to a WAV file
// say.export("I'm sorry, Dave.", 'Cellos', 0.75, 'hal.wav', (err) => {
//   if (err) {
//     return console.error(err)
//   }

//   console.log('Text has been saved to hal.wav.')
// })