import styles from "./styles/home.module.css";
import Image from "next/image";
import img from "public/home_img.avif"

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <h1 className="pt-4 text-center">Welcome to my blog site</h1>
        {/* <h2 className='pt-5'>Popular Blogs</h2> */}
        <div className={`${styles.imageWrap} text-center`}>
          <Image src={img} placeholder="blur" alt="Home Picture" width={350} height={200} className={styles.image}/>
        </div>
      </main>
    </>
  );
}
