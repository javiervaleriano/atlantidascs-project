import React, { Component } from "react";

const ContextoGlobal = React.createContext();

class ProviderGlobal extends Component {
  state = {
    modalContent: null,
    modalIsOpen: false,
    formType: "",
    joinMailSent: false,
  };

  setModalContent = (content) => {
    this.setState(() => ({ modalContent: content }));
  }

  setModalIsOpen = (value) => {
    this.setState(() => ({ modalIsOpen: value }));
  };

  setFormType = (id) => {
    this.setState(() => ({ formType: id }));
  };

  setJoinMailSent = (value) => {
    this.setState(() => ({ joinMailSent: value }));
  };

  render() {
    const { children } = this.props,
      { modalContent } = this.state,
      { setModalContent } = this,
      { modalIsOpen } = this.state,
      { setModalIsOpen } = this,
      { formType } = this.state,
      { setFormType } = this,
      { joinMailSent } = this.state,
      { setJoinMailSent } = this;

    return (
      <ContextoGlobal.Provider
        value={{
          modalContent,
          setModalContent,
          modalIsOpen,
          setModalIsOpen,
          formType,
          setFormType,
          joinMailSent,
          setJoinMailSent,
        }}>
        {children}
      </ContextoGlobal.Provider>
    );
  }
}

export default ContextoGlobal;

export { ProviderGlobal };
