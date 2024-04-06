import { Outlet } from "react-router-dom";
import { useDashboardDataContext } from "@/context/dashboardDataContext";
import styles from "@/assets/scss/Layouts.module.scss";
import Navbar from "@/components/Navbars/Navbar";

const Layouts = () => {
    const { navbarFixed } = useDashboardDataContext();

    console.log(navbarFixed);

    return (
        <div className={styles.layout}>
            <Navbar />
            <div
                className={`${styles.content} p-4 w-100`}
                style={{
                    marginTop: `${navbarFixed ? "150px" : "0"}`,
                }}
            >
                <Outlet />
            </div>
        </div>
    );
};

export default Layouts;

