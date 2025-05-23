const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the dist/sign-translate/browser directory
app.use(express.static(path.join(__dirname, 'dist/sign-translate/browser')));

// For any other route, serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/sign-translate/browser/index.html'));
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 