import { Post } from './Post';
import { Header } from './components/Header';

import './global.css';

export function App() {


  return (
    <div>
      <Header />


      <Post
        author="Leonardo Ferreira"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolores nulla adipisci magnam maiores ab natus consequuntur. Aliquid explicabo magnam reprehenderit, voluptas consectetur, maxime, in odio veritatis nihil similique nemo."
      />

      <Post
        author="Leonardo"
        content="Mais um post referente a propriedades REACTjs"
      />
    </div>

  )
}


