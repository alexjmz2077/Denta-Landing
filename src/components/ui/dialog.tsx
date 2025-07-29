import React, { ReactNode, MouseEvent } from "react";

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
}

interface DialogContentProps {
  children: ReactNode;
  className?: string;
  onClose?: () => void; 
}

interface DialogHeaderProps {
  children: ReactNode;
}

interface DialogTitleProps {
  children: ReactNode;
  className?: string;
}

interface DialogDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  if (!open) return null;

  const handleOverlayClick = () => onOpenChange(false);
  const handleDialogClick = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 relative"
        onClick={handleDialogClick}
      >
        {children}
      </div>
    </div>
  );
}

export function DialogContent({ children, className = "", onClose }: DialogContentProps) {
  return (
    <div className={className} style={{ position: "relative" }}>
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none"
          aria-label="Cerrar"
          type="button"
        >
          ×
        </button>
      )}
      {children}
    </div>
  );
}

export function DialogHeader({ children }: DialogHeaderProps) {
  return <div className="mb-4">{children}</div>;
}

export function DialogTitle({ children, className = "" }: DialogTitleProps) {
  return <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;
}

export function DialogDescription({ children, className = "" }: DialogDescriptionProps) {
  return <p className={`text-gray-600 mb-2 ${className}`}>{children}</p>;
}