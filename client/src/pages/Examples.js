import React from "react";
import { ButtonGroup } from "semantic-ui-react";
import ContactButtons from "../components/ContactButtons";
import FormExample from "../components/FormExample";
import InputExamples from "../components/InputExamples";

export default function Examples() {
  return (
    <div>
      <h1>Examples</h1>
      <FormExample/>
      <br /><br />
      <InputExamples />
      <br /><br />
      <ContactButtons />
    </div>
  );
}


