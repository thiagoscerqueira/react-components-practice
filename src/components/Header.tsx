import { useEffect, useState } from 'react';
import { GenreResponseProps } from '../App';
import { api } from '../services/api';

interface HeaderProps {
  selectedGenre: GenreResponseProps;
}
export function Header({ selectedGenre }: HeaderProps) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {selectedGenre.title}</span>
      </span>
    </header>
  );
}
