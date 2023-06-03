import Banner from "@/components/Banner";
import Activity from "@/components/activity";
import Footer from "@/components/footer";
import type { NextPage } from "next";

const ActivityContainer: NextPage = (props: any) => {
  return (
    <>
    <Banner />
    <Activity props={props}  />
    <Footer />
    </>
  );
};

export default ActivityContainer;


export async function getServerSideProps(context: any) {
    const { query } = context;
    const { activity_type } = query;
    const ACTIVITY_URL:string= `https://web-dev.dev.kimo.ai/v1/activities/${activity_type}`
    const activity_res = await fetch(ACTIVITY_URL)
    const activity: object = await activity_res.json()
  
    return {
      props: {
        activity,
        activity_type
      },
    }
}
