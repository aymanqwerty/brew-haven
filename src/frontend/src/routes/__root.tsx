import { Layout, RootProviders } from "@/components/Layout";
import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootProviders>
      <Layout>
        <Outlet />
      </Layout>
    </RootProviders>
  );
}
