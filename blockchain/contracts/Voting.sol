// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    mapping(string => uint256) public votesReceived;
    mapping(address => bool) public hasVoted; // Track if an account has voted
    string[] public candidateList;

    constructor(string[] memory candidateNames) {
        candidateList = candidateNames;
    }

    function voteForCandidate(string memory candidate) public {
        require(!hasVoted[msg.sender], "You have already voted."); // Check if the sender has voted
        votesReceived[candidate] += 1;
        hasVoted[msg.sender] = true; // Mark the sender as having voted
    }
}