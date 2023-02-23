import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { IArticle } from "../Interfaces.tsx/IArticle";
import { useParams } from "react-router-dom";

const SingleArticlePage = () => {
  const params = useParams<{ ArticleId: string }>();
  const [article, setArticle] = useState<IArticle | null>(null);
  const url = `https://api.spaceflightnewsapi.net/v3/articles/${params.ArticleId}`;

  const HandleFetch = async () => {
    try {
      const data = await fetch(url);
      if (data.ok) {
        const result = await data.json();
        setArticle(result);
      } else {
        alert("Loading Error!");
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  useEffect(() => {
    HandleFetch();
  }, []);

  return (
    <Row className="justify-content-center mt-5">
      <Col xs={12} md={8}>
        <div className="SingleArticleContainer">
          <div>
            <img src={article?.imageUrl} alt="Pic" />
          </div>
          <div className="ms-2">
            <h2>{article?.title}</h2>
            <p>{article?.newsSite}</p>
            <p>Date</p>
            <p>{article?.summary}</p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default SingleArticlePage;
