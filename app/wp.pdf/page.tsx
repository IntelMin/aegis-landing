"use client";

import React, { useState } from "react";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import { Hourglass } from "react-loader-spinner";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

type Props = {};

const WhitePaper = (props: Props) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setLoading(false);
  }
  return (
    <div className={`${loading ? "h-screen overflow-hidden" : ""}`}>
      {loading && (
        <div className="flex items-center justify-center w-full h-screen">
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#ffffff", "#0b0b0b"]}
          />
        </div>
      )}

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
