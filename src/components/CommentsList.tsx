import clsx from 'clsx';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { CommentAvatar } from '@/components/CommentAvatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FaComment } from 'react-icons/fa';
import { FormEvent, useState } from 'react';

export type Comment = {
  author: string;
  authorAvatar: string;
  content: string;
  createdAt: string;
};

export type CommentsListProps = {
  currentUserName: string;
  currentUserAvatar: string;
  comments: Array<Comment>;
};

export function CommentsList({
  comments,
  currentUserAvatar,
  currentUserName,
}: CommentsListProps) {
  const [localComments, setLocalComments] = useState(comments);
  const [newComment, setNewComment] = useState('');

  const handleNewCommentChange = (e: FormEvent<HTMLInputElement>) => {
    setNewComment(e.currentTarget.value);
  };

  const handleAddComment = () => {
    setLocalComments([
      ...localComments,
      {
        content: newComment,
        author: currentUserName,
        authorAvatar: currentUserAvatar,
        createdAt: 'Just now',
      },
    ]);
  };

  return (
    <Card className="w-[350px] border-none">
      <CardContent className="p-4 py-4">
        <div className="flex flex-col gap-2 pt-4">
          {localComments.map((comment) => (
            <div
              key={comment.content}
              className={clsx('flex flex-col items-stretch')}
            >
              <div className="flex gap-2 items-center bg-muted rounded-md p-2">
                <div>
                  <CommentAvatar
                    className="bg-transparent pointer-events-none"
                    avatarImage={comment.authorAvatar}
                  />
                </div>
                <div className="flex flex-col gap-2 items-start py-2">
                  <div className={'flex gap-1 items-center'}>
                    <small className="text-sm font-medium">
                      {comment.author}
                    </small>
                    <small className="text-sm text-muted-foreground">
                      - {comment.createdAt}
                    </small>
                  </div>
                  <p className="text-md leading-none">{comment.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        <Input
          type="text"
          placeholder="Add your comment"
          onChange={handleNewCommentChange}
          value={newComment}
        />
        <Button size="sm" onClick={handleAddComment}>
          <FaComment />
        </Button>
      </CardFooter>
    </Card>
  );
}
