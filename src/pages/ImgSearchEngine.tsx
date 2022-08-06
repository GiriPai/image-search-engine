import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Card, Form, Stack } from "react-bootstrap";
import ImgList from "../components/ui/ImgList";
import useImageSearch from "../hooks/useImageSearch";

export const ImgSearchEngine = () => {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const { loading, error, images, hasMore } = useImageSearch(query, pageNumber);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }

  }, [])

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setPageNumber(1);
  };

  return (
    <Stack gap={3} className="p-3">
      <Card>
        <Form.Control
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Enter search text... "
        ></Form.Control>
      </Card>
      {!query ?
        <Card>
          <Card.Body className="text-center">
            Happy Searching...
          </Card.Body>
        </Card> :
        <Card>
          <Card.Header>
            <Card.Title className="text-center">
              Search Results
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <ImgList
              error={error}
              loading={loading}
              images={images}
              hasMore={hasMore}
              setPageNumber={setPageNumber}
            />
          </Card.Body>
        </Card>}

    </Stack>
  );
};

export default ImgSearchEngine;
