import React from "react"

export function Dialog({ open, onOpenChange, children }: any) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={() => onOpenChange(false)}>
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 relative" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export function DialogContent({ children, className = "" }: any) {
  return <div className={className}>{children}</div>
}

export function DialogHeader({ children }: any) {
  return <div className="mb-4">{children}</div>
}

export function DialogTitle({ children, className = "" }: any) {
  return <h2 className={`text-xl font-bold ${className}`}>{children}</h2>
}

export function DialogDescription({ children, className = "" }: any) {
  return <p className={`text-gray-600 mb-2 ${className}`}>{children}</p>
}