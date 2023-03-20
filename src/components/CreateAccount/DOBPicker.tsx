import React from "react";

const DOBPicker = () => {
  return (
    <div className="">
      <label htmlFor="date" className="text-[13px]">
        Date of birth?
      </label>
      <br />
      <div className="space-x-2">
        <select
          name="cars"
          id="cars"
          className="border border-gray-300 py-1 pl-2 pr-[60px] rounded-sm"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">25</option>
          <option value="30">30</option>
        </select>
        <select
          name="months"
          id="months"
          className="border border-gray-300 py-1 pl-2 pr-[60px] rounded-sm"
        >
          <option value="1">Jan</option>
          <option value="2">Feb</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="4">May</option>
          <option value="5">June</option>
          <option value="6">July</option>
          <option value="7">Aug</option>
          <option value="8">Sep</option>
          <option value="9">Oct</option>
          <option value="10">Nov</option>
          <option value="11">Dec</option>
        </select>
        <select
          name="cars"
          id="cars"
          className="border border-gray-300 py-1 pl-2 pr-[50px] rounded-sm"
        >
          <option value="1">2023</option>
          <option value="2">2022</option>
          <option value="3">2021</option>
          <option value="4">2020</option>
          <option value="5">2019</option>
          <option value="6">2018</option>
          <option value="7">2017</option>
          <option value="8">2016</option>
          <option value="9">2015</option>
          <option value="10">2014</option>
          <option value="11">2013</option>
          <option value="12">2012</option>
          <option value="13">2011</option>
          <option value="14">2010</option>
          <option value="15">2009</option>
          <option value="16">2008</option>
          <option value="17">2007</option>
          <option value="17">2006</option>
          <option value="17">2005</option>
          <option value="17">2004</option>
          <option value="17">2003</option>
          <option value="17">2002</option>
          <option value="17">2001</option>
        </select>
      </div>
      <div className="mt-1">
        <label htmlFor="date" className="text-[13px]">
          Gender?
        </label>
        <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-sm sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white space-x-2">
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="horizontal-list-radio-license"
                type="radio"
                defaultValue="true"
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="horizontal-list-radio-license"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Male
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="horizontal-list-radio-id"
                type="radio"
                defaultValue="true"
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="horizontal-list-radio-id"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Female
              </label>
            </div>
          </li>
          <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
            <div className="flex items-center pl-3">
              <input
                id="horizontal-list-radio-millitary"
                type="radio"
                defaultValue="true"
                name="list-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
              />
              <label
                htmlFor="horizontal-list-radio-millitary"
                className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Custom
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DOBPicker;
