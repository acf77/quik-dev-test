import { Button, Stack } from "@mui/material";

interface PostInputProps {
  onChange: () => void;
}

export const PostInput = ({ onChange }: PostInputProps) => {
  return (
    <Stack paddingY={3}>
      <input onChange={onChange} style={{ height: 100, width: 750 }} />
    </Stack>
  );
};
