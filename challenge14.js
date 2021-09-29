// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.

const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']

for (value of dinosaurs.reverse()) {
    console.log(value);
}
console.log('original');
for (value of dinosaurs) {
    console.log(value);
}