"use client";

import React, { useState } from "react";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

type Props = {};

const WhitePaper = (props: Props) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  return (
    <div>
      <Document file="/whitepaper.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from({ length: 32 }, (_, index) => index + 1)?.map((page, i) => (
          <div key={i} className="h-screen overflow-hidden">
            <Page pageNumber={page} />
          </div>
        ))}
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
};

export default WhitePaper;
