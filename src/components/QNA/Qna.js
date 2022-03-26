import React from "react";
import { Table } from "react-bootstrap";
import "./Qna.css";

const Qna = () => {
  return (
    <div className="qnaContainer">
      <div>
        <h4 className="mb-3">Differences between STATE & PROPS?</h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>STATE</th>
              <th>PROPS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                The state is a local data storage that is local to the component
                only and cannot be passed to other components.
              </td>
              <td>
                Props are used to pass data from one component to another.
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>State can changes asynchronously.</td>
              <td>Props are read-only </td>
            </tr>
            <tr>
              <td>3</td>
              <td>State can be modified using this.setState</td>
              <td>Received props can not be modified</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <h4>How useState() Works?</h4>
        <p>
          The useState() function allows us to keep variables that could change.
          Whenever we call the set function to change the value of what we have
          kept in the useState(). The function declares an announcement that
          something in it is changed. Then the react program checks if the value
          is the same as before, if not then the useState() function finds in
          which places we have used the useStates() variable. Then re renders
          them to set the new value.
        </p>
      </div>
    </div>
  );
};

export default Qna;
