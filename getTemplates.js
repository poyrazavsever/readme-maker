const fs = require('fs');
const path = require('path');
const { marked } = require('marked'); // 'marked' kütüphanesinin yeni sürüm kullanımı

const templatesDir = path.join(__dirname, 'Templates');
const outputFilePath = path.join(__dirname, 'templates.json');

const getMarkdownFiles = (dir) => {
  return fs.readdirSync(dir).filter(file => path.extname(file) === '.md');
};

const convertMarkdownToJSON = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf-8');
  const htmlContent = marked(content); // 'marked' fonksiyonunun doğru kullanımı
  return {
    fileName: path.basename(filePath),
    content: htmlContent
  };
};

const generateJSON = () => {
  const markdownFiles = getMarkdownFiles(templatesDir);
  const templates = markdownFiles.map(file => {
    const filePath = path.join(templatesDir, file);
    return convertMarkdownToJSON(filePath);
  });

  fs.writeFileSync(outputFilePath, JSON.stringify(templates, null, 2), 'utf-8');
  console.log('Templates JSON file has been generated successfully.');
};

generateJSON();
