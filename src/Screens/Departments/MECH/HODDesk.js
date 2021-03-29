import React from "react";
import NavLinks from "./NavLinks";
import "../Reusables/CSS/HOD.css";
import Main from "../../../ReusableComponents/Main";
import DeptMenu from "../Reusables/DeptMenu";

const MechanicalHODDesk = () => {
  return (
    <Main className="container-lg hod">
      <div class="row">
        <DeptMenu dept="Mechanical" subMenu={NavLinks} />
        <div class="col-sm-8 col-lg-9 text-light">
          <div
            data-spy="scroll"
            class="scrollspy-example z-depth-1 mt-4"
            data-target="#navbar-example3"
            data-offset="0"
          >
            <div className="row">
              <div className="col text-center">
                <img
                  alt="cse hod"
                  className="img-fluid rounded"
                  src="http://www.sgipolytechnic.in/Images/HOD_Mech.jpg"
                />
              </div>
              <div className="col-12 text-center">
                <b>Mr. Kumbar Raju Basappa</b>
              </div>
              <div className="col-12 text-center">
                <b>Head of Department</b>
              </div>
            </div>
            <p className="m-1 words">
              The Mechanical Engineering Department is established in 2012. The
              Department has intake of 120 students. Mechanical Engineering is
              one of the major streams in the engineering profession and its
              principles are involved in the design, development, production and
              construction of nearly all of the physical devices and systems.
              The Department has well established Machine shop & Workshop, CNC
              Lab, Fluid Mechanics & Machinery Lab, Thermal Engineering Lab,
              Theory of Machine Lab, Manufacturing process Lab, Mechanical
              Engineering Materials Lab, Metrology & Quality Control Lab,
              Industrial Fluid Power Lab, Control Engineering Lab, Mechatronics
              Lab, Along with the Academic development, various activities are
              organized to develop soft skills of the students such as Paper
              Presentation, Industrial Visits and Expert Lectures etc.
              <br />
              Mechanical engineers use the basic principles of motion, energy,
              and force to design and manufacture a vast-range of products.
              Mechanical Engineering is a creative profession in which students
              are trained to conceive, construct, test, and operate all kinds of
              mechanical, thermal, mechatronic devices. Today's mechanical
              engineers may work on developing robotic systems for
              manufacturing; develop a prototype of an electric car; build and
              test turbojets; design and produce advanced materials for
              supersonic travel or for medical purposes, such as the mechanical
              heart valve; fabricate components for micro and Nano electro
              mechanical systems ranging from optical micro switches to active
              drug delivery chips.
              <br />
              The Mechanical Engineering at Sanjay Ghodawat Polytechnic aims to
              high-caliber mechanical engineers for a demanding profession. The
              polytechnic curriculum emphasizes the basic principles of the
              discipline and educates student in the use of these principles to
              solve simple to complex engineering problems. Throughout the
              curriculum, students learn how to design and conduct experiments.
              <br />
            </p>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default MechanicalHODDesk;
