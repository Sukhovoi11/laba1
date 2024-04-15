const studentInfo = {
    getStudentFullName: function (id) {
        switch (id) {
            case 0:
                return "Nikita Sukhovoi";
            case 1:
                return "Kacper Nowak";
            case 2:
                return "Maja Kowalska";
            default:
                return "Michał Wiśniewski";
        }
    },
    getStudentId: function (id) {
        switch (id) {
            case 0:
                return "44090";
            case 1:
                return "44657";
            case 2:
                return "44676";
            default:
                return "44967";
        }
    },
};

module.exports = studentInfo;