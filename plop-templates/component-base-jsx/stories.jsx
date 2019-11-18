import React, { ReactElement } from "react";
import { storiesOf } from "@storybook/react";
import {{> MyName }} from ".";
import MockData from "./{{> my-name }}.mocks";

storiesOf("{{> MyName }}", module).add(
  "default",
  () => <{{> MyName }} {...MockData.default}></{{> MyName }}>
);
