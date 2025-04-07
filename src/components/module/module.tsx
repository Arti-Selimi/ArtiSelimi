import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Module } from "@/components/types/types";

export default function Module({ link, open, onClose }: Module) {
  return (
    <Dialog open={open} onOpenChange={(isOpen) => {
      if (!isOpen) onClose();
    }}>
      <DialogContent className="absolute !min-w-[90vw] !min-h-[90vh] p-0 text-white text-3xl">
        <DialogTitle className="absolute top-5 left-5">
          Preview Window
        </DialogTitle>
        <iframe
          src={link}
          className="w-full h-full rounded-lg border border-gray-700"
        />
      </DialogContent>
    </Dialog>
  );
}
