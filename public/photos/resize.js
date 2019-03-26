const fs = require('fs');
const sharp = require('sharp');

const base = 'public/photos'
const sizes = [[200, 200], [500, 500], [1000, null]]

sizes.forEach((dim) => {
    const height = dim[0]
    const width = dim[1]
    const path = `${height}x${width}`
    fs.readdir(`./${base}/original/`, (err, files) => {
        files.forEach(file => {
          const resized = `${base}/${path}/${file}`
          const original = `${base}/original/${file}`
          console.log(original)
          console.log(resized)
          
          sharp(original)
            .resize(height, width)
            .toFile(resized, function(err) { 
                if(err !== null) { console.log(err) }
                else { console.log(`Created ${resized}`) } 
            })
        });
      });    
})




