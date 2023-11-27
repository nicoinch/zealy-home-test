import React from 'react';
import { Button } from '@/components/ui/button';
import { FaCheck, FaSpinner } from 'react-icons/fa';
import { fetchJoke } from '@/services/jokes-api';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { clsx } from 'clsx';

export type WelcomeProps = {
  title: string;
  onClick: () => void;
};

export function Welcome({ title, onClick }: WelcomeProps) {
  const queryClient = useQueryClient();

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['jokes'],
    queryFn: () => fetchJoke(),
  });

  const handleOnClick = () => {
    queryClient.invalidateQueries({ queryKey: ['jokes'] });
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="flex flex-col gap-3 p-4 items-start">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {title}
      </h1>
      <p className="leading-7">Welcome!</p>
      <div className="relative flex flex-col gap-2 items-start">
        {isLoading || isFetching ? (
          <div
            className={clsx(
              'absolute inset-0 bg-background/50',
              'flex items-center justify-center'
            )}
          >
            <FaSpinner size={32} className="animate-spin" />
          </div>
        ) : (
          ''
        )}
        <blockquote className="border-l-2 pl-6 italic">
          {data?.value}&nbsp;
        </blockquote>
        <Button className="flex gap-2 mt-3" onClick={handleOnClick}>
          <FaCheck />
          Get another joke
        </Button>
      </div>
    </div>
  );
}

export default Welcome;
