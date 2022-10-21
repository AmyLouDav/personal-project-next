import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/info/info/sayhello">
        <a>Contact Us</a>
      </Link>
      <Link href="/list">
        <a>Blog Posts</a>
      </Link>
    </>
  );
}
