const sheetId = "1o8EgNFtH951jhD8T5cYhzUokNo2WRcLm1307cyasemw";
const sheetName = "Cdata";

const statusElement = document.querySelector("#status");
const gallery = document.querySelector("#poster-gallery");
const table = document.querySelector("#data-table");
const tableHead = table.querySelector("thead");
const tableBody = table.querySelector("tbody");

const sheetUrl =
  `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq` +
  `?sheet=${encodeURIComponent(sheetName)}` +
  `&headers=1&tqx=responseHandler:handleSheetResponse`;

function renderTable(sheetData) {
  const headers = sheetData.table.cols.map(column => column.label || "");
  const nameIndex = headers.findIndex(header => /^(name|title)$/i.test(header.trim()));
  const posterIndex = headers.findIndex(header => /img|image|photo|picture|poster/i.test(header));

  if (nameIndex !== -1 && posterIndex !== -1) {
    renderPosterGallery(sheetData.table.rows, nameIndex, posterIndex);
    gallery.hidden = false;
    table.closest(".table-wrapper").hidden = true;
    return;
  }

  gallery.hidden = true;
  table.closest(".table-wrapper").hidden = false;
  tableHead.innerHTML = `
    <tr>${headers.map(header => `<th>${escapeHtml(header)}</th>`).join("")}</tr>
  `;

  tableBody.innerHTML = sheetData.table.rows.map(row => `
    <tr>
      ${headers.map((header, index) => renderCell(row.c[index]?.v ?? "", header)).join("")}
    </tr>
  `).join("");
}

function renderPosterGallery(rows, nameIndex, posterIndex) {
  gallery.innerHTML = rows.map(row => {
    const name = row.c[nameIndex]?.v ?? "Untitled";
    const poster = row.c[posterIndex]?.v ?? "";

    return `
      <article class="poster-card">
        <div class="poster-frame">
          ${renderImage(poster, name)}
        </div>
        <h2>${escapeHtml(name)}</h2>
      </article>
    `;
  }).join("");
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
  const imageColumn = /img|image|photo|picture|poster/i.test(header);

  if (imageColumn && value) {
    return `<td>${renderImage(value, value)}</td>`;
  }

  const safeValue = escapeHtml(value);

  if (isImageSource(value)) {
    return `<td><img class="cell-image" src="${safeValue}" alt="Sheet image" loading="lazy"></td>`;
  }

  if (/^https?:\/\//i.test(value)) {
    return `<td><a href="${safeValue}" target="_blank" rel="noopener">${safeValue}</a></td>`;
  }

  return `<td>${safeValue}</td>`;
}

function getImageSource(value) {
  const source = /^(https?:\/\/|\/|\.\.?\/|posters\/)/i.test(value)
    ? value
    : `posters/${value}`;

  return isRemoteSource(source) || hasImageExtension(source)
    ? source
    : `${source}.jpg`;
}

function renderImage(value, alt) {
  const imageSource = getImageSource(value);
  const fallbackBase = getFallbackBase(value);
  const fallbackAttributes = fallbackBase
    ? ` data-poster-base="${escapeHtml(fallbackBase)}" onerror="tryNextPoster(this)"`
    : "";

  return `<img class="cell-image" src="${escapeHtml(imageSource)}" alt="${escapeHtml(alt)}" loading="lazy"${fallbackAttributes}>`;
}

function getFallbackBase(value) {
  const source = /^(https?:\/\/|\/|\.\.?\/|posters\/)/i.test(value)
    ? value
    : `posters/${value}`;

  return !isRemoteSource(source) && !hasImageExtension(source) ? source : "";
}

function isRemoteSource(value) {
  return /^https?:\/\//i.test(value);
}

function hasImageExtension(value) {
  return /\.(avif|gif|jpe?g|png|svg|webp)(\?.*)?$/i.test(value);
}

function tryNextPoster(image) {
  const extensions = [".jpg", ".JPG", ".jpeg", ".JPEG", ".png", ".PNG", ".webp", ".WEBP", ".gif", ".GIF"];
  const currentIndex = Number(image.dataset.extensionIndex || 0) + 1;

  if (currentIndex >= extensions.length) {
    image.style.visibility = "hidden";
    return;
  }

  image.dataset.extensionIndex = currentIndex;
  image.src = image.dataset.posterBase + extensions[currentIndex];
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
