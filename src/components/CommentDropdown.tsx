import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CommentAvatar } from '@/components/CommentAvatar';
import { Comment, CommentsList } from '@/components/CommentsList';
import { useEffect, useState } from 'react';

export type CommentDropdownProps = {
  open: boolean;
  userAvatar: string;
  userName: string;
  comments: Array<Comment>;
  className?: string;
  style?: React.CSSProperties;
  onOpenChange?: (open: boolean) => void;
};

export function CommentDropdown({
  userAvatar,
  userName,
  comments,
  className,
  style,
  open,
  onOpenChange,
}: CommentDropdownProps) {
  const [localOpen, setLocalOpen] = useState(open);

  const handleOpenChange = (open: boolean) => {
    setLocalOpen(open);
  };

  useEffect(() => {
    setLocalOpen(open);
  }, [open]);

  useEffect(() => {
    onOpenChange?.(localOpen);
  }, [localOpen]);

  return (
    <DropdownMenu open={localOpen} onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger className={className} style={style}>
        <CommentAvatar avatarImage={userAvatar} avatarFallback={userName} />
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right" sideOffset={16} className="p-0">
        <CommentsList
          currentUserName={userName}
          currentUserAvatar={userAvatar}
          comments={comments}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
