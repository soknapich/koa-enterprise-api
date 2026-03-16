const axios = require("axios");
const Busboy = require("busboy");
const env = require("@config/env");

exports.uploadFile = async (ctx) => {
  const req = ctx.req;

  const result = await new Promise((resolve, reject) => {

    const bb = Busboy({ headers: req.headers });

    bb.on("file", async (name, file, info) => {
      const { filename, mimeType } = info;
      const username = env.NC.USERNAME;
      const password = env.NC.PASSWORD;
      const uploadFolder = env.NC.FOLDER_PATH;

      const url = `${env.NC.URL}/remote.php/dav/files/${username}/${uploadFolder}/${filename}`;

      try {

        await axios.put(url, file, {
          headers: {
            "Content-Type": mimeType
          },
          auth: {
            username,
            password
          },
          maxBodyLength: Infinity
        });

        resolve({
          status: 200,
          message: "Upload success",
          filename
        });

      } catch (err) {
        reject(err);
      }

    });

    req.pipe(bb);

  });

  ctx.body = result;
};