// src/components/ui/dialog.tsx
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

type PropsWithChildren<T = {}> = T & { children?: React.ReactNode };

/**
 * Simple Dialog UI wrappers for Radix Dialog primitives
 * Exports:
 *  Dialog, DialogTrigger, DialogPortal, DialogOverlay, DialogContent,
 *  DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose
 */

// Root
export const Dialog = DialogPrimitive.Root;

// Trigger - use asChild so callers can provide their own button element
export function DialogTrigger(props: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger asChild {...props} />;
}

// Portal
export function DialogPortal({ children, ...props }: PropsWithChildren<React.ComponentProps<typeof DialogPrimitive.Portal>>) {
  return (
    <DialogPrimitive.Portal {...props}>
      <div>{children}</div>
    </DialogPrimitive.Portal>
  );
}

// Overlay
export const DialogOverlay = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(function DialogOverlay(
  props,
  ref
) {
  return (
    <DialogPrimitive.Overlay
      ref={ref}
      {...props}
      className={
        props.className ??
        "fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
      }
    />
  );
});

// Content
export const DialogContent = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof DialogPrimitive.Content>>(function DialogContent(
  { className, children, ...props },
  ref
) {
  return (
    <DialogPrimitive.Portal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        {...props}
        className={
          className ??
          "fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 shadow-lg focus:outline-none"
        }
      >
        {children}
        <DialogPrimitive.Close className="absolute right-3 top-3" aria-label="Close" />
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
});

// Header (for title + optional subtitle)
export const DialogHeader = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={className ?? "mb-4"}>
      {children}
    </div>
  );
};

// Title
export const DialogTitle = React.forwardRef<HTMLHeadingElement, React.ComponentProps<"h3">>(function DialogTitle(
  { className, ...props },
  ref
) {
  return <DialogPrimitive.Title ref={ref} {...props} className={className ?? "text-lg font-semibold"} />;
});

// Description
export const DialogDescription = React.forwardRef<HTMLParagraphElement, React.ComponentProps<"p">>(function DialogDescription(
  { className, ...props },
  ref
) {
  return <DialogPrimitive.Description ref={ref} {...props} className={className ?? "text-sm text-muted-foreground"} />;
});

// Footer (actions)
export const DialogFooter = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={className ?? "mt-4 flex justify-end gap-2"}>
      {children}
    </div>
  );
};

// Close helper (if you want to use it)
export const DialogClose = DialogPrimitive.Close;

// re-export Portal & Overlay & Content primitives in case you need them directly
export { DialogPrimitive as _DialogPrimitives, DialogPortal as Portal };
