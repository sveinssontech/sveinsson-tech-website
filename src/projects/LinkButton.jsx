import React from 'react';
import BouncyButton from "../buttons/BouncyButton.jsx"

export default function LinkButton({ link, buttonText }) {

    const handleOpenTab = () => {
        window.open(link, '_blank', 'noopener,noreferrer');
    };

  return (
    <div>
        <BouncyButton onClick={handleOpenTab}>
          {buttonText}
        </BouncyButton>
    </div>
  );
}
