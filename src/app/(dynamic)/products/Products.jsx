import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { getData } from "./page";

export default async function Products() {
  const data = await getData();
  const products = data.products;

  return (
    <div className={styles.mainContainer}>
      {products.map((product) => {
        <Link href="/products/id" className={styles.post} key={product.id}>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              src={
                "https://images.pexels.com/photos/7582648/pexels-photo-7582648.jpeg"
              }
              // width={350}
              // height={250}
              fill={true}
              alt="post image"
            />
          </div>

          <div className={styles.content}>
            <h1 className={styles.title}>{product.title}</h1>
            <h1 className={styles.text}>{product.description}</h1>
          </div>
        </Link>;
      })}
    </div>
  );
}
