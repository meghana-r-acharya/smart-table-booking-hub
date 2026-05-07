const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve booking page
app.get('/booking', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'booking.html'));
});

// Handle booking form submission
app.post('/submit-booking', (req, res) => {
  const { name, date, time, guests, mobile } = req.body;

  const today = new Date().toISOString().split('T')[0];

  if (!name || name.trim() === '') {
    return res.json({ success: false, message: 'Name is required' });
  }
  if (!date || date < today) {
    return res.json({ success: false, message: 'Select a future date' });
  }
  if (!mobile || !/^\d{10}$/.test(mobile)) {
    return res.json({ success: false, message: 'Enter 10-digit mobile number' });
  }
  if (parseInt(guests) > 10) {
    return res.json({ success: false, message: 'Max guests alert shown' });
  }

  return res.json({ success: true, message: 'Booking Confirmed!' });
});

app.listen(PORT, () => {
  console.log(`✅ Smart Table Booking Hub running at http://localhost:${PORT}`);
  console.log(`📋 Booking page: http://localhost:${PORT}/booking`);
});
