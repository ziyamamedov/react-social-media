import Head from "next/head";
import MainLayout from "../components/layouts/MainLayout";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <MainLayout title="Social-Media | Main">
      <h1>Main Page</h1>
    </MainLayout>
  );
}
