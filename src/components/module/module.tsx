import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

type Props = {
  link: string;
  onClose: () => void;
};

export default function Module({ link, onClose }: Props) {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
