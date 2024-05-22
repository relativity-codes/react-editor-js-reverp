const path = require('path');
const fs = require('fs');

module.exports = {
  mode: 'production', // or 'development'
  entry: {
    main: './src/index.tsx',
    // Add more entry points if needed
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    library: 'react-editor-js-reverp',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.([tj])sx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'), // Include only files in src directory
      },
      {
        test: /\.ts$/,
        use: 'ts-loader', // or 'awesome-typescript-loader' if you prefer
        exclude: /node_modules/
      }
    ],
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
  optimization: {
    concatenateModules: false, // Ensure exports are not concatenated
  },
};

// Dynamically add entry points for TypeScript files with exports
const srcPath = path.resolve(__dirname, 'src');
const files = fs.readdirSync(srcPath);

files.forEach((file) => {
  const filePath = path.join(srcPath, file);
  if (fs.statSync(filePath).isFile() && file.endsWith('.ts')) {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    if (fileContent.includes('export ')) {
      const fileName = path.basename(file, '.ts');
      module.exports.entry[fileName] = filePath;
    }
  }
});
