// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Attendance {
    event AttendanceMarked(address indexed teacher, string[] studentNames);

    mapping(address => string[]) private attendance;

    function markAttendance(string[] memory studentNames) public {
        require(studentNames.length > 0, "No students provided");

        attendance[msg.sender] = studentNames;

        emit AttendanceMarked(msg.sender, studentNames);
    }

    function getAttendance() public view returns (string[] memory) {
        return attendance[msg.sender];
    }
}
