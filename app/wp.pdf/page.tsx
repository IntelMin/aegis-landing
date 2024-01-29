"use client";

import React, { useState } from "react";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf";
import { Hourglass } from "react-loader-spinner";
import useResizeObserver from "use-resize-observer";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

type Props = {};

const WhitePaper = (props: Props) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { ref, width = 1, height = 1 } = useResizeObserver<HTMLDivElement>();
  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  return (
    <div ref={ref}>
      <Document
        renderMode="canvas"
        loading={
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
        }
        file="/whitepaper.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from({ length: 32 }, (_, index) => index + 1)?.map((page, i) => (
          <div key={i} className={`h-[220px] md:h-screen overflow-hidden bg-black`}>
            <Page
              loading={
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
              }
              width={width || undefined}
              pageNumber={page}
              renderAnnotationLayer={false}
            />
          </div>
        ))}
      </Document>
    </div>
  );
};

export default WhitePaper;
