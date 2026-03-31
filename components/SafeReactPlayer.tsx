'use client';

import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

export default function SafeReactPlayer(props: any) {
  const [hasWindow, setHasWindow] = useState(false);
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHasWindow(true);
  }, []);

  if (!hasWindow) return <div className="w-full h-full bg-black" />;

  return <ReactPlayer {...props} />;
}
