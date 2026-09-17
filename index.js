const sheetId = "1o8EgNFtH951jhD8T5cYhzUokNo2WRcLm1307cyasemw";
const sheetName = "Cdata";

const statusElement = document.querySelector("#status");
const table = document.querySelector("#data-table");
const tableHead = table.querySelector("thead");
const tableBody = table.querySelector("tbody");

const sheetUrl =
  `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq` +
  `?sheet=${encodeURIComponent(sheetName)}` +
  `&headers=1&tqx=responseHandler:handleSheetResponse`;

function renderTable(sheetData) {
  const headers = sheetData.table.cols.map(column => column.label || "");

  tableHead.innerHTML = `
    <tr>${headers.map(header => `<th>${escapeHtml(header)}</th>`).join("")}</tr>
  `;

  tableBody.innerHTML = sheetData.table.rows.map(row => `
    <tr>
      ${headers.map((header, index) => renderCell(row.c[index]?.v ?? "", header)).join("")}
    </tr>
  `).join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isImageSource(value) {
  return !/^[a-z]:[\\/]/i.test(value) &&
    /^(https?:\/\/|\.\/|\.\.\/|\/|[^\\/]+\.(avif|gif|jpe?g|png|svg|webp))(.*)$/i.test(value) &&
    /\.(avif|gif|jpe?g|png|svg|webp)(\?.*)?$/i.test(value);
}

function renderCell(value, header) {
  const safeValue = escapeHtml(value);
  const imageColumn = /img|image|photo|picture/i.test(header);

  if (imageColumn && value) {
    return `<td><img class="cell-image" src="${safeValue}" alt="Sheet image" loading="lazy"></td>`;
  }

  if (isImageSource(value)) {
    return `<td><img class="cell-image" src="${safeValue}" alt="Sheet image" loading="lazy"></td>`;
  }

  if (/^https?:\/\//i.test(value)) {
    return `<td><a href="${safeValue}" target="_blank" rel="noopener">${safeValue}</a></td>`;
  }

  return `<td>${safeValue}</td>`;
}

function handleSheetResponse(sheetData) {
  if (sheetData.status !== "ok") {
    throw new Error(sheetData.errors?.[0]?.detailed_message || "Google Sheet request failed.");
  }

  renderTable(sheetData);
  statusElement.textContent = `${sheetData.table.rows.length} rows loaded.`;
}

window.handleSheetResponse = handleSheetResponse;

if (sheetId === "YOUR_SHEET_ID") {
  statusElement.textContent = "Add your Google Sheet ID in index.js first.";
} else {
  const script = document.createElement("script");
  script.src = sheetUrl;
  script.onerror = () => {
    statusElement.textContent = "Could not load the Google Sheet. Check its sharing settings.";
  };
  document.head.appendChild(script);
}