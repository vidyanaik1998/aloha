import React from "react";

function Activity(props: any) {

  return (
    <section>
      <h4 className='text-[24px] font-semibold text-[#001A1A]'>{props.props?.activity_type}</h4>
      <p className='text-[16px] font-semibold pt-6 text-[#001A1A]'>{props.props.activity.detail[0].msg}</p>
    </section>
  );
}

export default Activity;
