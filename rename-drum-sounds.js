const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'sounds');

// Hangi dosya hangi tuşa atanacak (sıralı)
const keyCodes = [65, 83, 68, 70, 71]; // A, S, D, F, G

// Klasörleri gez
fs.readdirSync(baseDir).forEach(folder => {
  const folderPath = path.join(baseDir, folder);
  if (fs.lstatSync(folderPath).isDirectory()) {
    console.log(`\n📁 İşleniyor: ${folder} klasörü`);

    const files = fs.readdirSync(folderPath).filter(file => file.endsWith('.wav'));

    if (files.length < keyCodes.length) {
      console.warn(`❌ Yetersiz dosya: ${folder} klasöründe sadece ${files.length} dosya var.`);
      return;
    }

    // Her dosyayı sırayla yeniden adlandır
    files.slice(0, keyCodes.length).forEach((file, index) => {
      const oldPath = path.join(folderPath, file);
      const newPath = path.join(folderPath, `${keyCodes[index]}.wav`);
      fs.renameSync(oldPath, newPath);
      console.log(`✅ ${file} → ${keyCodes[index]}.wav`);
    });
  }
});
