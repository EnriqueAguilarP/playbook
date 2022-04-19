const MissionCommander = require('./../app/missionCommander')

describe("Unit test for Mission Commander Class", () => {
    test('1) Create a mission commander object', () => {
      const myMissionCommander = new MissionCommander("Carlo Gilmar") 
      expect(MyMissionCommander.name).toBe("Carlo Gilmar")
    })
  })
