import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import clsx from 'clsx';

export type CommentAvatarProps = {
  avatarImage: string;
  avatarFallback?: string;
  onClick?: () => void;
  className?: string;
};

export function CommentAvatar({
  avatarImage,
  avatarFallback,
  onClick,
  className,
}: CommentAvatarProps) {
  return (
    <div
      className={clsx(
        'flex gap-2 items-center p-1 rounded-full rounded-bl-none bg-primary',
        className
      )}
      onClick={onClick}
    >
      <Avatar className="cursor-pointer">
        <AvatarImage src={avatarImage} />
        <AvatarFallback>{avatarFallback}</AvatarFallback>
      </Avatar>
    </div>
  );
}
