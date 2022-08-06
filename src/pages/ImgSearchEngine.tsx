import { ChangeEvent, useState } from "react";
import { Card, Form, Stack } from "react-bootstrap";

export const ImgSearchEngine = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <Stack gap={3} className="p-3">
      <Card>
        <Form.Control
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Enter search text... "
        ></Form.Control>
      </Card>

    </Stack>
  );
};

export default ImgSearchEngine;
