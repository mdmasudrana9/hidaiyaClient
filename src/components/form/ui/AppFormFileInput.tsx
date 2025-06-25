import React from "react";

interface FileUploadProps {
  expectedFileName: string;
}

const AppFormFileInput: React.FC<FileUploadProps> = ({ expectedFileName }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      if (file.name === expectedFileName) {
        console.log("Matched file:", file);
      } else {
        console.warn(`Please upload the file named: ${expectedFileName}`);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default AppFormFileInput;
