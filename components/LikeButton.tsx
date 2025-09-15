'use client';

import { useState } from 'react';

interface LikeButtonProps {
  initialCount?: number;
}

export default function LikeButton({ initialCount = 0 }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialCount);
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded-md text-white font-semibold transition ${
        liked ? 'bg-red-500' : 'bg-blue-500'
      } hover:opacity-80`}
    >
      {liked ? 'Curtido' : 'Curtir'} ({likes})
    </button>
  );
}
