import React from "react";
import Link from "next/link";

interface LinkItem {
  id: number;
  name: string;
  to: string;
}

interface MobileNavModalProps {
  isOpen: boolean;
  onClose: () => void;
  links: LinkItem[];
}

const MobileNavModal: React.FC<MobileNavModalProps> = ({ isOpen, onClose, links }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg">
        <ul>
          {links.map((link) => (
            <li key={link.id} className="py-2">
              <Link href={link.to}>
                <a className="text-black text-center block" onClick={onClose}>
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNavModal;
