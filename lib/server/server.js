const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/uppercase', (req, res) => {
  const text = req.body.text || ''; // 클라이언트로부터 받은 텍스트
  const uppercasedText = text.toUpperCase(); // 받은 텍스트를 대문자로 변환
  res.send(uppercasedText); // 변환된 텍스트를 클라이언트에 응답
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
