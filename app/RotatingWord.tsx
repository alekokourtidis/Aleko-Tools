'use client';

import { useEffect, useState } from 'react';

const WORDS = ['universities', 'nonprofits', 'health teams', 'students', 'fundraisers'];

export default function RotatingWord() {
  const [i, setI] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setShow(false);
      const t = setTimeout(() => {
        setI(prev => (prev + 1) % WORDS.length);
        setShow(true);
      }, 280);
      return () => clearTimeout(t);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={`rotating-word${show ? ' is-in' : ''}`}>{WORDS[i]}</span>
  );
}
