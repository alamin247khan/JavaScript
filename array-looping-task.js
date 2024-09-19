const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
//const reversed = colors.reverse();
//console.log(reversed);
const rev_colors = [];
for (const color of colors){
    rev_colors.unshift(color)
}
console.log(rev_colors)