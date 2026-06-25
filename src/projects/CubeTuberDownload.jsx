import React from 'react';
import BouncyButton from "../buttons/BouncyButton.jsx"

const DOWNLOADVERSION = "0.1.0";

export default function CubeTuberDownload() {

    const handleOpenTab = () => {
        window.open(`https://github.com/sveinssontech/cube-tuber-download/releases/tag/${DOWNLOADVERSION}`, '_blank', 'noopener,noreferrer');
    };

  return (
    <div>
        <BouncyButton onClick={handleOpenTab}>
          Download
        </BouncyButton>
    </div>
  );
}
