import { IArticle } from "../Interfaces.tsx/IArticle";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface SingleArticleProps {
  article: IArticle;
}

const SingleArticle = ({ article }: SingleArticleProps) => {
  const navigate = useNavigate();

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={article.imageUrl} />
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.featured}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            navigate("/singlearticlepage/" + article.id);
          }}
        >
          Go To Article
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleArticle;
