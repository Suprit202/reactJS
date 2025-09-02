import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export function AdminDashboard() {

  const [videos, setVideos] = useState([{ id: 0, title: null, description: null, url: null, likes: 0, views: 0, dislikes: 0, comments: null, category_id: 0 }])
  const [editRow, setEditRow] = useState(null);
  const [cookies, setCookies, removeCookies] = useCookies(['admin_id','user_id']);
  const [showAddRow, setShowAddRow] = useState(false);
  const [newVideo, setNewVideo] = useState({ title: "", url: "", description: "", likes: 0, views: 0, dislikes: 0, comments: "", category_id: 0 })
  let navigate = useNavigate();


  function handelSignout() {
    if (cookies['admin_id']) {
      removeCookies('admin_id');
      navigate('/admin-login');
    }
    else if (cookies['user_id']) {
      removeCookies('user_id');
      navigate('/user-login');
    }

  }

  function LoadVideos() {
    axios.get(`http://localhost:3000/videos`)
      .then(res => setVideos(res.data));
  }

  function handelEdit(key) {
    setEditRow(key);
  }

  function handelSave(key) {
    const video = videos[key];
    axios.put(`http://localhost:3000/videos/${video.id}`, video)
      .then(() => {
        alert(`Video Added successfully`);
        setEditRow(null);
        LoadVideos();
      })
  }

  function handelDelete(key) {
    const video = videos[key];
    axios.delete(`http://localhost:3000/videos/${video.id}`)
      .then(() => {
        alert(`Video Deleted successfully`);
        LoadVideos();
      })
  }

  function handelAdd() {
    axios.post(`http://localhost:3000/videos`, newVideo)
      .then(() => {
        alert("Video Added Successfully");
        setNewVideo({ title: "", url: "", description: "", likes: 0, views: 0, dislikes: 0, comments: "", category_id: 0 });
        setShowAddRow(false);
        LoadVideos();
      })
  }

  useEffect(() => {
    if (cookies['admin_id'] === undefined || cookies['user_id'] === undefined) {
      LoadVideos();
    } else {
      navigate('/')
    }
  }, [])

  if (cookies['admin_id']) {
    return (
      <div>
        <h2 className="text-light my-3">Admin Dashboard</h2>
        <div className="bg-light p-2 rounded-2">
          <h3 className="d-flex justify-content-between">
            <span>{cookies['admin_id']} - Dashboard</span>
            <div>
              {
                (!showAddRow) ? (
                  <button onClick={() => { setShowAddRow(true) }} className="btn btn-primary"><span className="bi bi-plus-square me-1"></span> Add Video</button>
                ) : (
                  <button onClick={() => { setShowAddRow(false) }} className="btn btn-secondary"><span className="bi bi-x-lg me-1" /> Cancel</button>
                )
              }

              <button onClick={handelSignout} className="btn btn-danger ms-2"><span className="bi bi-box-arrow-left me-1" /> Sign out</button>
            </div>
          </h3>
          <div className="mt-2">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Preview</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  videos.map((video, rowIndex) => (
                    <tr key={rowIndex}>
                      <td>
                        {
                          (rowIndex === editRow) ?
                            (
                              <input type="text" value={video.title} onChange={(e) => {
                                let updateVideo = [...videos];
                                updateVideo[rowIndex].title = e.target.value;
                                setVideos(updateVideo);
                              }} />
                            ) : (
                              video.title
                            )
                        }
                      </td>
                      <td>
                        {
                          (rowIndex === editRow) ? (
                            <input type="text" value={video.url} onChange={(e) => {
                              let updateVideo = [...videos];
                              updateVideo[rowIndex].url = e.target.value;
                              setVideos(updateVideo);
                            }} />
                          ) : (
                            <iframe src={video.url} width="200" height="100"></iframe>
                          )
                        }
                      </td>
                      <td>
                        {
                          (editRow === rowIndex) ? (
                            <button onClick={() => handelSave(rowIndex)} className="btn btn-success bi bi-floppy-fill" ></button>
                          ) : (
                            <button onClick={() => handelEdit(rowIndex)} className="btn btn-warning bi bi-pen-fill"></button>
                          )
                        }
                        <button onClick={() => handelDelete(rowIndex)} className="btn btn-danger bi bi-trash ms-2"></button>
                      </td>
                    </tr>
                  ))
                }
                {
                  showAddRow &&
                  (
                    <tr>
                      <td>
                        <input type="text" placeholder="Enter Title" value={newVideo.title} onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })} />
                      </td>
                      <td>
                        <input type="text" placeholder="Enter url" value={newVideo.url} onChange={(e) => setNewVideo({ ...newVideo, url: e.target.value })} />
                      </td>
                      <td>
                        <button onClick={handelAdd} className="btn btn-success"><span className="bi bi-plus-circle me-2" />Save Changes</button>
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
  else if (cookies['user_id']) {
    return (
      <div>
        <h2 className="text-light my-3">User Dashboard</h2>
        <div className="bg-light p-2 rounded-2">
          <h3 className="d-flex justify-content-between">
            <span>{cookies['user_id']} - Dashboard</span>
            <button onClick={handelSignout} className="btn btn-danger ms-2"><span className="bi bi-box-arrow-left me-1" /> Sign out</button>
          </h3>
          <div className="mt-2 table-responsive">
            <table className="table table-hover" style={{width:'100%'}}>
              <thead>
                <tr>
                  <th className="text-center align-middle">Title</th>
                  <th className="text-center align-middle">Preview</th>
                </tr>
              </thead>
              <tbody>
                {
                  videos.map((video, rowIndex) => (
                    <tr key={rowIndex}>
                      <td className="text-center align-middle" style={{width:'40%'}}>
                        {
                          (rowIndex === editRow) ?
                            (
                              <input type="text" value={video.title} onChange={(e) => {
                                let updateVideo = [...videos];
                                updateVideo[rowIndex].title = e.target.value;
                                setVideos(updateVideo);
                              }} />
                            ) : (
                              video.title
                            )
                        }
                      </td>
                      <td className="text-center align-middle" style={{width:'40%'}}>
                        {
                          (rowIndex === editRow) ? (
                            <input type="text" value={video.url} onChange={(e) => {
                              let updateVideo = [...videos];
                              updateVideo[rowIndex].url = e.target.value;
                              setVideos(updateVideo);
                            }} />
                          ) : (
                            <iframe src={video.url} width="200" height="100"></iframe>
                          )
                        }
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}