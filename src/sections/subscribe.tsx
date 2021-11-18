/** @jsxImportSource theme-ui */

import React, { ChangeEvent, FormEvent } from "react";
import {
  Button,
  Input,
  Box,
  Container,
  Heading,
  Text,
  ThemeUICSSObject,
} from "theme-ui";

import * as AppActions from "contexts/app/app.actions";
import { useAppContext } from "contexts/app/app.provider";
import { REGEXS } from "validators/regex";

interface Props {
  header: string;
  text: string;
}
const Subscribe = ({ header, text }: Props) => {
  const [email, setEmail] = React.useState<string>("");
  const { dispatch, state } = useAppContext();
  const handleSubmit = React.useCallback(
    (e: FormEvent<HTMLDivElement>) => {
      e.preventDefault();

      AppActions.setEmail(email, dispatch);
    },
    [email]
  );

  const handleChange = React.useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      setEmail(e.currentTarget.value);
    },
    [email]
  );

  return (
    <Box as="section" sx={styles.subscribe} id="subscribe">
      <Container>
        <Heading as="h3">{header}</Heading>
        <Text as="p">{text}</Text>
        <Box as="form" sx={styles.form} onSubmit={handleSubmit}>
          <Box as="label" variant="styles.srOnly">
            Email
          </Box>
          <Input
            placeholder="Entrez votre email"
            value={email}
            onChange={handleChange}
            type="email"
            id="subscribeEmail"
            sx={styles.input}
          />
          <Button
            type="submit"
            sx={styles.button}
            disabled={
              !REGEXS.email.test(email) || state.emailStatus === "pending"
            }
          >
            Envoyer
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Subscribe;

const styles: Record<string, ThemeUICSSObject> = {
  subscribe: {
    py: ["80px", null, null, null, "80px", "100px", "140px"],
    backgroundColor: "primary",
    h3: {
      textAlign: "center" as const,
      fontSize: ["23px", null, null, null, null, "30px", "36px"],
      lineHeight: [1.5, null, null, "1"],
      color: "#fff",
      letterSpacing: ["-0.5px"],
      mb: ["0px", null, null, "15px"],
      width: ["70%", null, null, "auto"],
      mx: ["auto", null, null, "0"],
    },
    p: {
      fontSize: ["16px"],
      color: "#fff",
      opacity: ".6",
      letterSpacing: ["-0.5px"],
      textAlign: "center" as const,
      width: ["70%", null, null, "auto"],
      mx: ["auto", null, null, "0"],
      mt: ["10px", null, null, "0"],
    },
  },
  form: {
    width: ["100%"],
    maxWidth: ["555px"],
    mx: ["auto"],
    display: ["flex"],
    flexWrap: "wrap" as const,
    mt: ["30px", null, null, null, "60px"],
  },
  input: {
    width: ["100%"],
    maxWidth: ["100%", null, "370px", "380px"],
    borderRadius: "5px",
    border: "none",
    backgroundColor: "rgba(255,255,255, .08)",
    outline: "none",
    color: "rgba(255,255,255, .8)",
    fontSize: "16px",
    pl: ["0px", null, null, "30px"],
    height: ["50px", null, null, "60px"],
    mr: ["0px", null, null, "15px"],
    textAlign: ["center", null, null, "left"],

    "&::placeholder": {
      opacity: 0.7,
      color: "gray",
    },
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: "5px",
    fontWeight: "500",
    fontSize: ["18px"],
    color: "#020718",
    letterSpacing: "-0.5px",
    outline: "none",
    padding: ["0px 30.75px"],
    minHeight: ["50px", null, null, "60px"],
    width: ["100%", null, null, "auto"],
    mt: ["10px", null, null, "0"],
    mx: ["auto", null, null, "0"],
    "&:disabled": {
      color: "#fff",
      opacity: 0.5,
      background: "rgba(255,255,255, .50)",
      cursor: "not-allowed",
    },
    "&:hover:not(:disabled)": {
      color: "text",
      backgroundColor: "#fff",
      opacity: "0.8",
    },
  },
};
