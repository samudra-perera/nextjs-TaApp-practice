import React from "react";
import articleStyles from "../styles/Articles.module.css";
import Link from "next/link";

const ArticleItem = ({ article }) => {
  return (
    <Link
      href="/article/[id]"
      as={`/article/${article.id}`}
      className={articleStyles.card}
    >
      <h3>{article.title}</h3>
      <p>{article.body}</p>
    </Link>
  );
};

export default ArticleItem;
