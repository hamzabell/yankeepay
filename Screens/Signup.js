import React, { useState } from "react";
import { ScreenWrapper, ContentWrapper } from "../components";
import { Dots } from "../styled";
import { View } from "react-native";
import {
  WelcomeForm,
  PersonalForm,
  ResidenceForm,
  ReferralForm,
} from "../components/Signup/Forms";
const Titles = [
  { main: "Welcome", sub: "Enter your personal details to get started" },
  { main: "Next Steps", sub: "" },
  { main: "Almost Done", sub: "" },
  {
    main: "Referrals",
    sub: "Enter the username of the person who referred you to YankeePay",
  },
  { main: "last step", sub: "" },
];

function Signup(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const controlPagination = () => {
    const totalNumberOfTitles = Titles.length - 1;
    currentIndex === totalNumberOfTitles
      ? setCurrentIndex(4)
      : setCurrentIndex((prev) => prev + 1);
  };

  const handleWelcomeForm = (val) => {
    controlPagination();
  };

  return (
    <ScreenWrapper>
      <ContentWrapper
        otherStyles={{
          paddingTop: 25,
        }}
        leftTitle={{
          main: Titles[currentIndex].main,
          sub: Titles[currentIndex].sub,
        }}
        contentCentered
      >
        <WelcomeForm onSubmit={handleWelcomeForm} visible={currentIndex == 0} />
        <PersonalForm
          onSubmit={handleWelcomeForm}
          visible={currentIndex == 1}
        />
        <ResidenceForm
          onSubmit={handleWelcomeForm}
          visible={currentIndex == 2}
        />
        <ReferralForm
          onSubmit={handleWelcomeForm}
          onSkip={controlPagination}
          visible={currentIndex == 3}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 40,
            marginLeft: 5,
          }}
        >
          <Dots activeColor="#7C74EA" active={currentIndex >= 0} />
          <Dots activeColor="#7C74EA" active={currentIndex >= 1} />
          <Dots activeColor="#7C74EA" active={currentIndex >= 2} />
        </View>
      </ContentWrapper>
    </ScreenWrapper>
  );
}

export default Signup;
