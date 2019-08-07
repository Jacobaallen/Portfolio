<div className="form">
  <form action="#" >
    <label>First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="First Name?"
      value={this.state.fname}
      onChange={e => this.setState({ fname: e.target.value })}
      />
    <label>Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Last Name?"
      value={this.state.lname}
      onChange={e => this.setState({ lname: e.target.value })}
      />


    <label>Email</label>
    <input type="email" id="email" name="email" placeholder="Email?"
      value={this.state.email}
      onChange={e => this.setState({ email: e.target.value })}
      />


    <label>Message</label>
    <text area id="message" name="message" placeholder="How may I help you?"
      onChange={e => this.setState({ message: e.target.value })}
      value={this.state.message}
      ></text>
    <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Submit" />
  </form >


 </div>
