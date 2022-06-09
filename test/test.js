const { expect } = require("chai");
const { ethers } = require("hardhat");
const {expectRevert} = require("@openzeppelin/test-helpers");

describe("User storage", async () => {

    let userStorage;

    beforeEach(async() => {
        let UserStorage = await ethers.getContractFactory("userStorage");
        userStorage = await UserStorage.deploy();
        await userStorage.deployed();
        await userStorage.create("john", "programmer", 43)
    })

    it("should return values of a user", async () => {

        let name = await userStorage.readName(1);
        let job = await userStorage.readJob(1);
        let age = await userStorage.readAge(1);

        expect(name).to.equal("john");
        expect(job).to.equal("programmer");
        expect(age).to.equal(43);
    })

    it("should be able to update a user", async() => {
        await userStorage.updateName(1, "jim");
        await userStorage.updateJob(1, "farming");
        await userStorage.updateAge(1, 45);

        let name = await userStorage.readName(1);
        let job = await userStorage.readJob(1);
        let age = await userStorage.readAge(1);

        expect(name).to.equal("jim");
        expect(job).to.equal("farming");
        expect(age).to.equal(45);

        await userStorage.updateAllInfo(1, "john", "programmer", 43);

        name = await userStorage.readName(1);
        job = await userStorage.readJob(1);
        age = await userStorage.readAge(1);

        expect(name).to.equal("john");
        expect(job).to.equal("programmer");
        expect(age).to.equal(43);
    })

    it("should remove a user", async() => {
        await userStorage.remove(1);
        let name;
        await console.log(name);
        expect(name).to.equal(undefined);
    })

    it("SHOULDNT be able to access a user that doesnt exist", async () => {
        let name;
        await expectRevert(
            name = userStorage.readName(2),
            "call revert exception"
        )
    })
})