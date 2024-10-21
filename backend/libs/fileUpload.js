export const uploadFileWithRetry = (file, retries = 3, timeout = 5000) => {
    return new Promise((resolve, reject) => {
      const relativePath = file.originalname; // webkitRelativePath is stored as originalname
      const sanitizedPath = relativePath.replace(/[\/\.]/g, "_"); // Replace slashes and dots with underscores
      const buffer = file.buffer; // file data in buffer form
  
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          public_id: sanitizedPath,
          folder: "my_folder_structure2",
          resource_type: "auto",
        },
        (error, result) => {
          if (error) {
            console.error("Error uploading to Cloudinary:", error);
            if (retries > 0) {
              console.log(`Retrying upload for ${file.originalname}. Attempts left: ${retries}`);
              return uploadFileWithRetry(file, retries - 1, timeout).then(resolve).catch(reject);
            } else {
              reject(error);
            }
          } else {
            console.log("File uploaded to Cloudinary:", result);
            resolve(result); // Resolve with the result
          }
        }
      );
  
      // Pipe the buffer into the Cloudinary upload stream
      uploadStream.end(buffer);
  
      // Set a timeout for the upload
      const timeoutId = setTimeout(() => {
        reject(new Error(`Upload timed out for ${file.originalname}`));
      }, timeout);
  
      // Clear the timeout if upload succeeds
      uploadStream.on('finish', () => {
        clearTimeout(timeoutId);
      });
    });
  };