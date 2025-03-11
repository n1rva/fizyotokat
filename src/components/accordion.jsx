"use client";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { motion } from "framer-motion";

export function Accordion({ children }) {
  return (
    <AccordionPrimitive.Root type="single" collapsible className="space-y-4">
      {children}
    </AccordionPrimitive.Root>
  );
}

export function AccordionItem({ title, children }) {
  return (
    <AccordionPrimitive.Item value={title} className="border rounded-lg">
      <AccordionPrimitive.Header>
        <AccordionPrimitive.Trigger className="w-full text-left p-4 font-semibold bg-[#EFF3F8] rounded-lg text-gray-800">
          {title}
        </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content asChild>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="p-4 bg-white text-gray-800"
        >
          {children}
        </motion.div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
}
