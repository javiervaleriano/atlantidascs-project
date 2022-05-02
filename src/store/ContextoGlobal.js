import React, { Component } from "react";

const ContextoGlobal = React.createContext();

class ProviderGlobal extends Component {
  state = {
    modalContent: null,
    modalIsOpen: false,
    formType: "",
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

  render() {
    const { children } = this.props,
      { modalContent } = this.state,
      { setModalContent } = this,
      { modalIsOpen } = this.state,
      { setModalIsOpen } = this,
      { formType } = this.state,
      { setFormType } = this;

    return (
      <ContextoGlobal.Provider
        value={{
          modalContent,
          setModalContent,
          modalIsOpen,
          setModalIsOpen,
          formType,
          setFormType,
        }}>
        {children}
      </ContextoGlobal.Provider>
    );
  }
}

export default ContextoGlobal;

export { ProviderGlobal };
