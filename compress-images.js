// usage: node compress-images.js

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = 'imgs'; // 你的图片目录
const outputDir = 'imgs-compressed';
const maxFileSize = 1024 * 200; // 1MB

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// 处理图片
async function compressImage(file) {
    const inputPath = path.join(inputDir, file);
    let outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

    if (!/\.(jpg|jpeg|png)$/i.test(file)) return;

    let quality = 90; // 初始质量
    let buffer = await sharp(inputPath).resize(1200).webp({ quality }).toBuffer();

    // 循环降低质量，直到小于1MB
    while (buffer.length > maxFileSize && quality > 10) {
        quality -= 5;
        buffer = await sharp(inputPath).resize(1200).webp({ quality }).toBuffer();
    }

    await sharp(buffer).toFile(outputPath);
    console.log(`✅ ${file} 压缩完成（最终质量: ${quality}%，大小: ${(buffer.length / 1024).toFixed(2)} KB）`);
}

// 读取目录并压缩所有图片
(async () => {
    const files = fs.readdirSync(inputDir);
    for (const file of files) {
        await compressImage(file);
    }
    console.log('🎯 所有图片已优化完成！');
})();
