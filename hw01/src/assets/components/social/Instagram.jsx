import React from 'react';
import SocialIcon from './SocialIcons';

export default function InstagramIcon() {
  return (
    <SocialIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="#98A2B3"
        viewBox="0 0 24 24"
        className="icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M7.5 3h9A4.5 4.5 0 0121 7.5v9A4.5 4.5 0 0116.5 21h-9A4.5 4.5 0 013 16.5v-9A4.5 4.5 0 017.5 3zm7.125 5.25h.008M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
        />
      </svg>
    </SocialIcon>
  );
}
