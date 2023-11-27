import React from 'react';
import { Button } from '@/components/ui/button';
import { FaCheck } from 'react-icons/fa';

export type WelcomeProps = {
  title: string;
  onClick: () => void;
};

export function Welcome({ title, onClick }: WelcomeProps) {
  return (
    <div className="flex flex-col gap-3 p-4 items-start">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {title}
      </h1>
      <p className="leading-7">Welcome!</p>
      <Button className="flex gap-2" onClick={onClick}>
        <FaCheck />
        Click me
      </Button>
    </div>
  );
}

export default Welcome;
