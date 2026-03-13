const axios = require('axios');
const env = require("@config/env");
const { parseStringPromise } = require("xml2js");

module.exports.axiosGetNCFolders = async () => {

  const username = env.NC.USERNAME;
  const password = env.NC.PASSWORD;
  const uploadFolder = env.NC.FOLDER_PATH;
  const url = `${env.NC.URL}/remote.php/dav/files/${username}/${uploadFolder}`;

  try {
    // Make PROPFIND request
    const response = await axios({
      method: "PROPFIND",
      url: url,
      auth: {
        username,
        password
      },
      headers: {
        Depth: "1"
      }
    });

    // Parse XML response
    const xmlData = response.data;
    const result = await parseStringPromise(xmlData, { explicitArray: false });

    // Extract files and folders
    const items = result['d:multistatus']['d:response'];
    const files = [];
    const folders = [];

    for (let item of Array.isArray(items) ? items : [items]) {
      const href = decodeURIComponent(item['d:href']);
      const resType = item['d:propstat']['d:prop']['d:resourcetype'];

      // Skip the folder itself
      if (href.endsWith(`/${uploadFolder}/`)) continue;

      const parts = href.split('/').filter(Boolean); // remove empty strings
      const name = parts.pop();

      if (resType && resType['d:collection'] !== undefined) {
        folders.push(name);
      } else {
        files.push(name);
      }
    }

    return { folders, files };

  } catch (error) {
    console.error("Error listing folder:", error.message);
    return { folders: [], files: [] };
  }
}