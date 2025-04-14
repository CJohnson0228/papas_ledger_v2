import { Button } from '@/components/ui/button';
import { fadeAnim, fadeDropAnim } from '@/utils/animVariants';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="z-50 fixed inset-0 flex justify-center items-center bg-black/70"
          initial='hidden'
          animate='visible'
          exit='hidden'
          variants={fadeAnim}
        >
          <motion.div
            className="relative bg-background shadow-lg p-4 rounded-md w-full max-w-md"
            initial='hidden'
            animate='visible'
            exit='hidden'
            variants={fadeDropAnim}
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-lg">{title ? title : 'Demo'}</h2>
              <Button variant='ghost' size='icon' onClick={onClose}>
                <X />
              </Button>
            </div>
            {children ? children : 'Demo Content'}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;