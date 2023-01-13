import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/yurisoaresm.png',
      name: 'Yuri Soares',
      role: 'Fullstack Developer',
    },
    content: [
      { type : 'paragraph', content: 'Fala galeraa 👋', },
      { type : 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'yuri.dev/doctorcare' },
    ],
    publishedAt: new Date('2023-01-09 10:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://images.unsplash.com/photo-1462888210965-cdf193fb74de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVuZ3VpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=40',
      name: 'Linus Torvalds',
      role: 'Software Engineer',
    },
    content: [
      { type : 'paragraph', content: 'Fala galeraa 👋', },
      { type : 'paragraph', content: 'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'yuri.dev/doctorcare' },
    ],
    publishedAt: new Date('2023-01-06 07:00:00'),
  },
];

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  )
}

