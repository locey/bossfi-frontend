import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>首页</h1>
      <nav>
        <ul>
          <li>
            <Link href="/post">帖子发布页</Link>
          </li>
          <li>
            <Link href="/mine">我的</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
