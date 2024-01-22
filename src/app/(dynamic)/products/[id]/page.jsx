import Image from "next/image";
import styles from "./page.module.css";

async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function generateMetadata({ params }) {
  const product = await getData(params.id);
  return {
    title: product.title,
    description: product.description,
  };
}

export default async function Post({ params }) {
  const product = await getData(params.id);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}>{product.description}</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.postImage}
            src={product.thumbnail}
            alt="post image"
            fill={true}
          />
          <span className={styles.author}>{product.category}</span>
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.gallery}>
          {product.images.map((img) => (
            <Image
              key={product.id}
              src={img}
              alt={product.title}
              width={180}
              height={180}
              fill={false}
            />
          ))}
        </div>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem esse ut
          fugit maxime atque accusamus ipsa explicabo sint omnis at
          necessitatibus ullam ducimus, a similique laudantium quia. Est
          dignissimos tempora, laboriosam, nesciunt magnam molestias nihil
          cupiditate obcaecati error labore voluptas mollitia incidunt ullam
          provident. Suscipit obcaecati facere quaerat hic iste. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Illo eum quisquam
          expedita ad corrupti sequi veritatis iure animi mollitia, quos
          deserunt, vero ab obcaecati, placeat asperiores. Maiores dolor
          veritatis laboriosam nesciunt possimus tenetur voluptatum itaque,
          perspiciatis repellat nobis ducimus, architecto temporibus fugiat amet
          similique dolore est debitis impedit provident facilis rerum
          explicabo. Corrupti, a explicabo pariatur minima rerum dignissimos hic
          quae ratione doloribus aliquid porro illo assumenda sit qui maxime
          animi earum, excepturi id nostrum suscipit nam optio sint quibusdam.
          Placeat delectus accusamus nesciunt at, iusto incidunt perspiciatis
          corrupti impedit ipsum eaque doloremque consequatur minus assumenda
          quibusdam ad fugiat! Aliquid!
        </p>
      </div>
    </div>
  );
}
