class Main {
  // Declare
  public message;

  constructor(message) {
    // Init
    this.message = message;
    console.log("inside main");
  }

  public printMessage() {
    console.log(this.message);
  }
}

var mclass = new Main(
  "Helloworld is a compulsive message that needs to be written in every first program so that every programmer get satisfied and starts dancing"
);
mclass.printMessage();
