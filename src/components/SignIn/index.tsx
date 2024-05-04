import { Box, Button, Divider, Paper, Stack, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FormattedMessage from "../FormattedMessage";

type Props = {
  onClick?: () => void | Promise<void>;
};

export default function SignIn({ onClick }: Props) {
  return (
    <Box maxWidth={360}>
      <Paper>
        <Stack direction="column">
          <Stack direction="column" padding={3} gap={2}>
            <Typography variant="h5">
              <FormattedMessage id="SignIn.Title" />
            </Typography>
            <Typography>
              <FormattedMessage id="SignIn.Guide" />
            </Typography>
          </Stack>
          <Divider />
          <Button>
            <Stack direction="row" gap={2} padding={1} onClick={onClick}>
              <FormattedMessage id="SignIn.Method.Google" />
              <GoogleIcon />
            </Stack>
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
