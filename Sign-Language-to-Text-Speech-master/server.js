const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static('dist/sign-translate/browser'));

// Handle all routes
app.all('*', (req, res) => {
  res.sendFile(path.resolve('dist/sign-translate/browser/index.html'));
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 