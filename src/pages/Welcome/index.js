import React from "react";

import { Stack, Img } from "components";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  function handleNavigate2() {
    navigate("/login");
  }

  return (
    <>
      <Stack className="bg-amber_400 lg:h-[559px] xl:h-[699px] 2xl:h-[786px] 3xl:h-[944px] mx-[auto] lg:px-[226px] xl:px-[283px] 2xl:px-[318px] 3xl:px-[382px] w-[100%]">
        <Img
          src="images/img_imggrabbitlogo.png"
          className="common-pointer absolute lg:h-[106px] xl:h-[132px] 2xl:h-[149px] 3xl:h-[179px] inset-[0] justify-center m-[auto] w-[26%]"
          onClick={handleNavigate2}
          alt="imggrabbitlogo"
        />
      </Stack>
    </>
  );
};

export default WelcomePage;
