const student = {
    first_name: "John",
    talk() {
        console.log(this.first_name, "is talking");
    }
};  

const teacher = {
    first_name: "Jane",
};

const boundTalk = student.talk.bind(teacher);

boundTalk();