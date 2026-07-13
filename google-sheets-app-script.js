// Google Apps Script for Torah Brura donation logging
// 1. Create a Google Sheet.
// 2. Open Extensions > Apps Script.
// 3. Paste this code.
// 4. Deploy > New deployment > Web app.
// 5. Execute as: Me. Who has access: Anyone.
// 6. Copy the Web app URL and send it to Codex.

const SHEET_NAME = "תרומות";
const HEADERS = [
  "תאריך ושעה",
  "ייעוד התרומה",
  "מפתח ייעוד",
  "סכום",
  "שם פרטי",
  "שם משפחה",
  "טלפון",
  "אימייל",
  "סוג הקדשה",
  "שם להקדשה",
  "הערות",
  "מקור",
];

function doPost(e) {
  const sheet = getDonationSheet_();
  const data = e && e.parameter ? e.parameter : {};
  sheet.appendRow([
    data.submittedAt || new Date(),
    data.category || "",
    data.categoryKey || "",
    data.amount || "",
    data.firstName || "",
    data.lastName || "",
    data.phone || "",
    data.email || "",
    data.dedicationType || "",
    data.dedicationName || "",
    data.notes || "",
    data.source || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function getDonationSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}
