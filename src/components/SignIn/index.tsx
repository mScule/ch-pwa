import { Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

type Props = {
  onClick?: () => void | Promise<void>;
};

export default function SignIn({ onClick }: Props) {
  return (
    <Box maxWidth={360}>
      <Paper>
        <Stack direction="column">
          <Stack direction="column" padding={3} gap={2}>
            <Typography variant="h5">Employee sign in</Typography>
            <Typography>Please sign in</Typography>
          </Stack>
          <Divider />
          <Button>
            <Stack direction="row" gap={2} padding={1} onClick={onClick}>
              {"Sign in with Google"}
              <GoogleIcon />
            </Stack>
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
