import { useGadget } from "@gadgetinc/react-shopify-app-bridge";
import { Outlet, Link } from "@remix-run/react";
import { NavMenu } from "@shopify/app-bridge-react";
import { Spinner, Page, Card, Text, Box } from "@shopify/polaris";
import { FullPageSpinner } from "./FullPageSpinner";

export function AuthenticatedApp() {
  const { isAuthenticated, loading } = useGadget();

  if (loading) {
    return <FullPageSpinner />;
  }

  return isAuthenticated ? <EmbeddedApp /> : <Unauthenticated />;
}

function Unauthenticated() {
  return (
    <Page>
      <div style={{ height: "80px" }}>
        <Card padding="500">
          <Text variant="headingLg" as="h1">
            App must be viewed in the Shopify Admin
          </Text>
          <Box paddingBlockStart="200">
            <Text variant="bodyLg" as="p">
              Edit this page:{" "}
              <a
                href={`/edit/${window.gadgetConfig.environment}/files/web/components/App.jsx`}
              >
                web/components/App.jsx
              </a>
            </Text>
          </Box>
        </Card>
      </div>
    </Page>
  );
}

function EmbeddedApp() {
  return (
    <>
      <NavMenu>
        <Link to="/" rel="home">
          Shop Information
        </Link>
        <Link to="/about">About</Link>
      </NavMenu>
      <Outlet />
    </>
  );
}
