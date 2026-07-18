const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// Replace hex colors
content = content.replace(/#6C63FF/gi, '#1B64B7'); // Violet to Blue
content = content.replace(/#00D4FF/gi, '#42E2B8'); // Cyan to Mint Green
content = content.replace(/#050510/gi, '#030812'); // Dark void to Dark Blue Void

// Replace RGB values (with and without spaces)
content = content.replace(/108,\s*99,\s*255/g, '27,100,183'); // Violet RGB
content = content.replace(/0,\s*212,\s*255/g, '66,226,184'); // Cyan RGB

// Other associated colors
content = content.replace(/#A49EFF/gi, '#6CA2E8'); // Light Violet to Light Blue
content = content.replace(/#4A44B2/gi, '#13447D'); // Dark Violet to Dark Blue
content = content.replace(/#3B368A/gi, '#0D2E55'); // Darker Violet to Darker Blue
content = content.replace(/#8B84FF/gi, '#4D90DF'); // Lighter Violet to Lighter Blue

fs.writeFileSync('index.html', content);
console.log('Theme updated successfully.');
