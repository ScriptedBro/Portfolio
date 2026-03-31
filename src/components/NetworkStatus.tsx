import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Activity, Zap, Shield } from "lucide-react";

export default function NetworkStatus() {
  const [gasPrice, setGasPrice] = useState<number | null>(null);
  const [blockHeight, setBlockHeight] = useState<number | null>(null);
  const [status, setStatus] = useState<"active" | "syncing" | "idle">("active");

  useEffect(() => {
    // Simulate live data for the portfolio
    const interval = setInterval(() => {
      setGasPrice(Math.floor(Math.random() * (40 - 15 + 1) + 15));
      setBlockHeight(Math.floor(Math.random() * (19000000 - 18000000 + 1) + 18000000));
    }, 5000);

    setGasPrice(24);
    setBlockHeight(18456789);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 1 }}
      className="fixed bottom-8 right-8 z-[90] hidden lg:block"
    >
      <div className="glass p-6 rounded-[2rem] border border-white/[0.03] flex flex-col gap-6 min-w-[200px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <div className="absolute inset-0 w-2 h-2 rounded-full bg-accent/40 animate-ping" />
            </div>
            <span className="text-[10px] font-mono text-ink uppercase tracking-widest">Mainnet Live</span>
          </div>
          <Activity className="w-3 h-3 text-muted/40" />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <div className="flex items-center gap-2 text-muted/60">
              <Zap className="w-3 h-3" />
              <span className="text-[9px] font-mono uppercase tracking-widest">Gas Price</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.span
                key={gasPrice}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-xs font-mono text-accent"
              >
                {gasPrice} Gwei
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="flex justify-between items-end">
            <div className="flex items-center gap-2 text-muted/60">
              <Shield className="w-3 h-3" />
              <span className="text-[9px] font-mono uppercase tracking-widest">Block Height</span>
            </div>
            <AnimatePresence mode="wait">
              <motion.span
                key={blockHeight}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="text-xs font-mono text-ink"
              >
                {blockHeight?.toLocaleString()}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        <div className="pt-4 border-t border-white/[0.03]">
          <div className="flex justify-between items-center">
            <span className="text-[8px] font-mono text-muted/40 uppercase tracking-widest">System Integrity</span>
            <span className="text-[8px] font-mono text-accent uppercase tracking-widest">99.9%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
