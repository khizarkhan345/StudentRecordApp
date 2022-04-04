import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ShowRecord from "../components/ShowRecordArea/ShowRecord";
import AddRecord from "../components/CreateArea/AddRecord";
import EditRecord from "../components/EditArea/EditRecord";
import DeleteRecord from "../components/DeleteArea/DeleteRecord";
import Header from "../components/HeaderArea/Header";
import NotFoundPage from "../components/NotFoundPage";
const AppRoutes = () => {

    return (
          <BrowserRouter>
          <div>
          <Header />
          <Routes>
          <Route path="/" element={<ShowRecord />} exact={true}/>
          <Route path="/addRecord" element={<AddRecord />} exact={true} />
          <Route path="/editRecord/:id" element={<EditRecord />} exact={true} />
          <Route path="/delete/:id" element={<DeleteRecord />} exact={true} />
          <Route  element={<NotFoundPage />} />
        </Routes>
          </div>
          </BrowserRouter>

    )
}

export default AppRoutes;