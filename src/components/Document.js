import React from "react";

const Document = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>simp;e-ssr</title>
      </head>
      <body>
        <div id="root" dangerouslySetInnerHTML={{ __html: children }}></div>
      </body>
      <script src="./main.js"></script>
    </html>
  );
};

export default Document;
