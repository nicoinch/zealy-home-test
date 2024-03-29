import { Comment } from '@/components/CommentsList';
import { CommentDropdown } from '@/components/CommentDropdown';
import { useEffect, useRef, useState } from 'react';

export type CommentAnywhereProps = {
  userAvatar: string;
  userName: string;
  comments: Array<Comment>;
};

export function CommentAnywhere({
  userAvatar,
  userName,
  comments,
}: CommentAnywhereProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const clickListener = (event: MouseEvent) => {
    const x = event.clientX;
    const y = event.clientY - 48;
    handleMove({ x, y });
  };

  useEffect(() => {
    if (!dropdownOpen) {
      document.body.addEventListener('click', clickListener);
      return () => document.body.removeEventListener('click', clickListener);
    }
  }, [dropdownOpen]);

  const handleMove = ({ x, y }: { x: number; y: number }) => {
    if (!dropdownOpen) {
      setPosition({ x, y });
      setDropdownOpen(true);
    }
  };

  return (
    <CommentDropdown
      open={dropdownOpen}
      onOpenChange={setDropdownOpen}
      className="fixed"
      userAvatar={userAvatar}
      userName={userName}
      comments={comments}
      style={{
        top: position.y,
        left: position.x,
        display: position.x === 0 && position.y === 0 ? 'none' : 'block',
      }}
    />
  );
}
