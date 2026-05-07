# 🍽️ Smart Table Booking Hub
### Automation Testing with Cypress | CA2 Assignment

**Student:** Meghana R Acharya (20242MCA0199)  
**Submitted to:** Dr. D. Sivabalaselvamani  
**Institution:** Presidency University – School of Information Science

---

## 📁 Project Structure

```
SmartTableBookingHub/
│
├── cypress/
│   ├── e2e/
│   │   └── booking.cy.js        ← All 5 test cases
│   ├── support/
│   │   ├── e2e.js               ← Required support file
│   │   └── commands.js          ← Custom Cypress commands
│   └── fixtures/                ← (empty, for test data if needed)
│
├── public/
│   └── booking.html             ← The Booking Form UI
│
├── server.js                    ← Express server (serves the app)
├── cypress.config.js            ← Cypress configuration
├── package.json
└── README.md
```

---

## ⚙️ Setup & Run Instructions

### Step 1 – Install dependencies
```bash
npm install
```

### Step 2 – Start the web server
```bash
node server.js
```
> App runs at: http://localhost:3000/booking

### Step 3 – Run Cypress tests

**GUI Mode (recommended for demo):**
```bash
npx cypress open
```
→ Select E2E Testing → Choose Chrome → Click `booking.cy.js`

**Headless CLI Mode:**
```bash
npx cypress run --spec cypress/e2e/booking.cy.js
```

---

## 🧪 Test Cases

| TC ID | Test Name               | Expected Result                   | Status  |
|-------|-------------------------|-----------------------------------|---------|
| TC-01 | Successful Booking      | "Booking Confirmed!" shown        | ✅ PASS |
| TC-02 | Empty Name Validation   | "Name is required"                | ✅ PASS |
| TC-03 | Past Date Restriction   | "Select a future date"            | ✅ PASS |
| TC-04 | Invalid Mobile Number   | "Enter 10-digit mobile number"    | ✅ PASS |
| TC-05 | Guest Count Limit       | "Max guests alert shown"          | ✅ PASS |
