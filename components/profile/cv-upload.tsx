"use client";

import { useRef, useState, type DragEvent, type ChangeEvent } from "react";
import SectionCard from "@/components/common/section-card";
import IconButton from "@mui/material/IconButton";

const ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const ACCEPTED_EXTENSIONS = ".pdf,.doc,.docx";

type Props = {
  onFileSelect?: (file: File | null) => void;
  className?: string;
};

const CvUpload = ({ onFileSelect, className = "" }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = (f: File) => {
    if (!ACCEPTED_TYPES.includes(f.type)) return;
    setFile(f);
    onFileSelect?.(f);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) handleFile(f);
  };

  const handleRemove = () => {
    setFile(null);
    onFileSelect?.(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <SectionCard
      variant="bento"
      className={`col-span-12 lg:col-span-12 min-h-[200px] flex flex-col items-center justify-center text-center group cursor-pointer mt-6 ${className}`}
      hover
    >
      <input
        ref={inputRef}
        type="file"
        accept={ACCEPTED_EXTENSIONS}
        className="hidden"
        onChange={handleInputChange}
      />

      {!file ? (
        <div
          className="flex flex-col items-center justify-center w-full h-full py-8"
          onClick={() => inputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <div
            className={`h-16 w-16 rounded-full flex items-center justify-center mb-stack-md transition-all duration-300 ${
              dragging
                ? "bg-primary/20 scale-110"
                : "bg-surface-container-high group-hover:scale-110"
            }`}
          >
            <span className="material-symbols-outlined text-primary text-[32px]">
              cloud_upload
            </span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-2">
            Upload your CV
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-stack-lg">
            Drag and drop your latest PDF or DOCX file. Our AI will
            automatically parse your skills and match you to top-tier roles.
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full py-8">
          <div className="h-16 w-16 bg-surface-container-high rounded-full flex items-center justify-center mb-stack-md">
            <span className="material-symbols-outlined text-primary text-[32px]">
              description
            </span>
          </div>
          <h3 className="font-headline-md text-headline-md mb-2">
            {file.name}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg">
            {(file.size / 1024 / 1024).toFixed(2)} MB
          </p>
          <div className="flex items-center gap-3">
            <span className="font-label-md text-label-md">
              {file.name}
            </span>
            <IconButton
              size="small"
              sx={{ color: "var(--color-error, #ffb4ab)" }}
              onClick={handleRemove}
            >
              <span className="material-symbols-outlined text-[18px]">
                close
              </span>
            </IconButton>
          </div>
        </div>
      )}
    </SectionCard>
  );
};

export default CvUpload;
