// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Attendance {
    // Event to be emitted when attendance is marked
    event AttendanceMarked(address indexed teacher, string[] studentNames);

    // Mapping to store attendance
    mapping(address => string[]) private attendance;

    // Function to mark attendance by submitting an array of student names
    function markAttendance(string[] memory studentNames) public {
        require(studentNames.length > 0, "No students provided");

        attendance[msg.sender] = studentNames;

        emit AttendanceMarked(msg.sender, studentNames);
    }

    // Function to get the list of students marked by the caller
    function getAttendance() public view returns (string[] memory) {
        return attendance[msg.sender];
    }
}
