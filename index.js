const express = require('express');
const app = express();

// PORT ko env se bhi le sakte hain (DevOps point)
const PORT = process.env.PORT || 3000;

// Simple middleware for logging (DevOps me logs important hote hain)
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Home route
app.get('/', (req, res) => {
  res.send('DevOps CI/CD Demo App is running 🚀');
});

// Health-check route (monitoring / load balancer ke liye)
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    service: 'devops-ci-cd-demo',
    timestamp: new Date().toISOString()
  });
});

// Server start
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
