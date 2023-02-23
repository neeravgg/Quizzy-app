// import { degrees, PDFDocument, rgb, StandardFonts } from "pdf-lib";
// import { useState, useEffect } from "react";
// import { readFile } from 'fs/promises'

// export default function GenerateCertificate() {
//   const [pdfInfo, setPdfInfo] = useState([]);

//   useEffect(() => {
//     modifyPdf();
//   }, []);

//   async function modifyPdf() {
//     const url = "/files/certificate.pdf";
//     const uint8Array = readFile(url, "utf8");
//     const pdfDoc = await PDFDocument.load(uint8Array);
//     const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

//     const pages = pdfDoc.getPages();
//     const firstPage = pages[0];
//     const { width, height } = firstPage.getSize();
//     firstPage.drawText("This text was added with JavaScript!", {
//       x: 5,
//       y: height / 2 + 300,
//       size: 50,
//       font: helveticaFont,
//       color: rgb(0.95, 0.1, 0.1),
//       rotate: degrees(-45),
//     });
//     const pdfBytes = await pdfDoc.save();
//     const docUrl = URL.createObjectURL(
//       new Blob(pdfBytes, { type: "application/pdf" })
//     );
//     setPdfInfo(docUrl);
//   }
//   return (
//     <>
//       <iframe title='test-frame' src={pdfInfo} width='100%' height='800px' />
//     </>
//   );
// }
import {useEffect, useRef} from 'react';

export default function HomePage() {

    const viewer = useRef(null);

    useEffect(() => {
      import('@pdftron/webviewer').then(() => {
        WebViewer(
          {
            path: '/webviewer/lib',
            initialDoc: '/files/pdftron_about.pdf',
          },
          viewer.current,
        ).then((instance) => {
            const { docViewer } = instance;
            // you can now call WebViewer APIs here...
          });
      })
    }, []);


    return (
      <div className="MyComponent">
        <div className="header">React sample</div>
        <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
      </div>
    );
  
}