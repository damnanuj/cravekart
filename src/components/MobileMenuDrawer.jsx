import React from "react";
import Sidebar from "./Sidebar";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.5 },
};

const drawerVariants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
};

const MobileMenuDrawer = ({ showMobileDrawer, setShowMobileDrawer }) => {
  return (
    <AnimatePresence>
      {showMobileDrawer && (
        <>
          <motion.div
            className="fixed inset-0 bg-black z-40"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setShowMobileDrawer(false)}
          />

          {/*===== Drawer =====*/}
          <motion.div
            className="fixed top-0 right-0 h-full w-fit bg-[var(--primary)] z-50 shadow-lg overflow-auto"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "tween" }}
          >
            <Sidebar />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuDrawer;
