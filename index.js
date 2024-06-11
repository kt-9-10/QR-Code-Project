import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

// 1. Use the inquirer npm package to get user input.
inquirer
  .prompt([
    {
      type: 'input',
      name: 'url',
      message: 'QRコードにしたいURLを入力してください：'
    }
  ])
  .then((answers) => {

    // // 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
    var qr_svg = qr.image(answers.url, { type: 'png' });
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    // 3. Create a txt file to save the user input using the native fs node module.
    fs.writeFile('URL.txt', answers.url, (err) => {
      if (err) {
        console.error('ファイルの書き込み中にエラーが発生しました:', err);
      } else {
        console.log('ファイルが正常に保存されました');
      }
    });

  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error(error);
    } else {
      console.error(error);
    }
  });

 


