import { Layout } from "../components/Layout/Layout";

export default function PageLayout({ children, params }) {
    return <Layout gender={params.gender}>{children}</Layout>;
}
