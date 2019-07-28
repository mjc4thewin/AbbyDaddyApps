const say = require('say')

var alex_lines = [
    'Why is Cinderella so bad at hockey?',
    'Because her coach is a pumpkin...  Ha Ha!'
]

var samanthas_lines = [
    `I don't know... Why?`
]

say.speak(alex_lines[0])

setTimeout(() => {
    say.speak(samanthas_lines[0], 'Samantha')
}, 2500);
    
setTimeout(() => {
    say.speak(alex_lines[1])
}, 4200);













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