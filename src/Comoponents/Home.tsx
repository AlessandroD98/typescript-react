import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleArticle from "./SingleArticle";
import { IArticle } from "../Interfaces.tsx/IArticle";

const Home = () => {
  const [allarticle, setAllarticle] = useState<IArticle[]>([]);

  const handlefetch = async () => {
    try {
      const data = await fetch("https://api.spaceflightnewsapi.net/v3/articles");
      if (data.ok) {
        const result = await data.json();
        setAllarticle(result);
      } else {
        alert("Loading Error!");
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  useEffect(() => {
    handlefetch();
  }, []);

  return (
    <Container>
      <Row className="g-3">
        {allarticle.map((article) => (
          <Col xs={12} md={3} key={article.id}>
            <SingleArticle article={article} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Home;
