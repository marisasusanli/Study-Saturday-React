import React from 'react';

const SingleStudent = (props) => {
  // console.log('props in single student', props);
  return (
    <div>
      <h1>{props.chosenStudent.fullName}</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {props.chosenStudent.tests.map((test) => {
              return (
                <tr key={test.id}>
                  <td>{test.subject}</td>
                  <td>{test.grade}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleStudent;
