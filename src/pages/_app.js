import { AppWrapper } from "@/hooks/AppContext";
const app = ({ Component, pageProps }) => {
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
};

export default app;