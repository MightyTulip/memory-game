import Head from 'next/head'
import Card from '@/components/card'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import { getAllCards } from '@/lib/cards'
import { shuffle } from '@/utils/shuffle'

export async function getStaticProps() {
  const allCards = shuffle(await getAllCards());
  return {
    props: {
      allCards,
    },
  };
}

export default function Home({ allCards }) {
  const [highScore, setHighScore] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)
  const [selectedCards, setSelectedCards] = useState([])

  const click = (id) => {
    const exists = selectedCards.includes(id)
    setCurrentScore(exists ? 0 : (currentScore + 1))
    setSelectedCards(exists ? [] : [...selectedCards, id])
    shuffle(allCards)
  }

  useEffect(() => {
    if (currentScore >= highScore) {
      setHighScore(currentScore)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentScore])

  return (
    <>
      <Head>
        <title>Memory Game</title>
        <meta name="description" content="Memory game by Tulip" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.title}>
          <div>
            <h1>
              Digimon Memory Game
            </h1>
            <div>
              Get points by clicking on the image but avoid clicking on the same one twice!
            </div>
          </div>
          <div>
            <div className={styles.currentScore}>Current Score: {currentScore}</div>
            <div>High Score: {highScore}</div>
          </div>
        </div>
        <div className={styles.main}>
          {allCards.map((card) => (
            <Card key={card.id} id={card.id} name={card.name} image={card.image} clickHandle={click}/>
          ))}
        </div>
      </main>
    </>
  )
}
