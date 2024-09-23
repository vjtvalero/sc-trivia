import React from "react";

export default function TableHead() {
  return (
    <>
      <thead>
        <tr>
          <th>
            <div className="box box-yellow box-emphasized">
              <span>
                Looking Back
                <br />
                in Interest
              </span>
            </div>
          </th>
          <th>
            <div className="box box-blue box-emphasized">
              <span>
                Crunching the
                <br />
                Numbers
              </span>
            </div>
          </th>
          <th>
            <div className="box box-lightpink box-emphasized">
              <span>
                Tech-ing on the
                <br />
                Banking World
              </span>
            </div>
          </th>
          <th>
            <div className="box box-purple box-emphasized">
              <span>
                A Look Inside
                <br />
                the Vault
              </span>
            </div>
          </th>
          <th>
            <div className="box box-pink box-emphasized">
              <span>
                Mix of
                <br />
                Knowledge
              </span>
            </div>
          </th>
          <th>
            <div className="box box-green box-emphasized">
              <span>
                Money &
                <br />
                Melodies
              </span>
            </div>
          </th>
        </tr>
      </thead>
    </>
  );
}
