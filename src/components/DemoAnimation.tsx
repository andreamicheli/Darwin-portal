import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const WIDGETS = [
  { id: "stats", color: "bg-neutral-800", label: "Statistics" },
  { id: "chat", color: "bg-neutral-900", label: "Messages" },
  { id: "map", color: "bg-neutral-800", label: "Active Users" },
  { id: "weather", color: "bg-neutral-900", label: "Environment" },
  { id: "music", color: "bg-neutral-800", label: "Media" },
  { id: "calendar", color: "bg-neutral-900", label: "Schedule" },
];

export const DemoAnimation = () => {
  const [items, setItems] = useState(WIDGETS.map((w) => ({ ...w, span: 1 })));

  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) => {
        const newItems = [...prev];
        // Simple shuffle
        for (let i = newItems.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newItems[i], newItems[j]] = [newItems[j], newItems[i]];
        }

        // Randomly assign spans (1 or 2 columns)
        return newItems.map((item) => ({
          ...item,
          span: Math.random() > 0.7 ? 2 : 1,
        }));
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-dense">
        {items.map((item) => (
          <motion.div
            layout
            key={item.id}
            className={`
              ${item.span === 2 ? "col-span-2" : "col-span-1"} 
              h-40 rounded-2xl border border-neutral-800 bg-black/50 backdrop-blur-sm
              p-6 flex flex-col justify-between group hover:border-neutral-600 transition-colors
            `}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
            }}
          >
            <div className="flex justify-between items-start">
              <div
                className={`w-8 h-8 rounded-full ${item.color} group-hover:bg-white transition-colors duration-500`}
              />
              <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full bg-neutral-800" />
                <div className="w-1 h-1 rounded-full bg-neutral-800" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="h-2 w-12 bg-neutral-800 rounded-full group-hover:bg-neutral-600 transition-colors" />
              <div className="h-2 w-full bg-neutral-900 rounded-full" />
              {item.span === 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-2 w-2/3 bg-neutral-900 rounded-full"
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-8 text-[10px] uppercase tracking-[0.2em] text-neutral-600">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          AI Active
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
          <span className="px-2 rounded-2xl border-[0.5px] text-center border-neutral-600 border-solid">
            Dynamic UI
          </span>
          adapting to
          <span className="px-2 rounded-2xl border-[0.5px] text-center border-neutral-600 border-solid">
            usage patterns
          </span>
        </div>
      </div>
    </div>
  );
};
