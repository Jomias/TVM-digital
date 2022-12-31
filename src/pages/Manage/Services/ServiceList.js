import React from 'react'
import usePath from '../../../hooks/usePath';

const ServiceList = () => {

  usePath(window.location.pathname);

  return (
    <div className="container border-5 shadow-lg py-3">
      {/* TITLE : START */}
      <div className="page-header">
        <h1>
          Project 03 - ToDo List <small>React-Hooks</small>
        </h1>
      </div>
      {/* TITLE : END */}

      <div className="row">
        {/* SEARCH : START */}
        <div className="col-md-6 my-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name..."
            />
            <span className="input-group-btn">
              <button className="btn btn-primary ml-3" type="button">
                Go!
              </button>
            </span>
          </div>
        </div>
        {/* SEARCH : END */}

        {/* ADD : START */}
        <div className="offset-md-2 col-md-3 my-3">
          <button type="button" className="btn btn-info btn-block">
            Add Task
          </button>
        </div>
        {/* ADD : END */}
      </div>

      {/* LIST : START */}
      <div className="card border-0 my-3">
        <div className="card-header bg-warning text-white">List Task</div>
        <table className="table table-hover table-bordered" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th className="text-center">
                #
              </th>
              <th>Task</th>
              <th className="text-center">
                Level
              </th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">1</td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
                ea c
              </td>
              <td className="text-center">
                <span className="label label-danger">High</span>
              </td>
              <td className="text-center">
                <button type="button" className="btn btn-success mr-2">
                  Edit
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-center">2</td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
                ea c
              </td>
              <td className="text-center">
                <span className="label label-default">Small</span>
              </td>
              <td className="text-center">
                <button type="button" className="btn btn-success mr-2">
                  Edit
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="text-center">3</td>
              <td>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
                ea c
              </td>
              <td className="text-center">
                <span className="label label-info">Medium</span>
              </td>
              <td className="text-center">
                <button type="button" className="btn btn-success mr-2">
                  Edit
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default ServiceList;