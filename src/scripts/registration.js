function createRegistrationLayout() {
  const container = UI.createElement("div", { class: "container-root" }, [
    UI.createElement("header", { class: "header" },[
        UI.createElement("a", { href: "index.html" }, "Log In"),
        UI.createElement("a", { href: "home.html" }, "Home"),
      ]),
    UI.createElement( "form", { class: "form-wrapper" },[
      UI.createElement("div", { class: "registration-container" }, 
         UI.createElement('form', {},  [
        UI.createElement("input", { placeholder: "First Name" }),
        UI.createElement("input", { placeholder: "Last Name" }),
        UI.createElement("select", { type: "select", class: "select-box" }, [
          UI.createElement("option", { value: "City" }, "City" ),
          UI.createElement("option", { value: "Yerevan" }, "Yerevan"),
          UI.createElement("option", { value: "Gyumri" }, "Gyumri"),
          UI.createElement("option", { value: "Dilijan" }, "Dilijan" ),
        ]),
        UI.createElement("div", { class: "gender"},[
            UI.createElement("input", { type: "radio", id: "radioMale"},),
            UI.createElement("label", { for: "radioMale" }, "Male"), 
            UI.createElement("input", { type: "radio", id: "radioFemale"},),
            UI.createElement("label", { for: "radioFemale"}, "Female"), 
         ]),
       
        UI.createElement("div", { class: "send" }, [
          // UI.createElement("div", null, [
            UI.createElement("input", {type: "checkbox",  id: "send-email"}, ""),
            UI.createElement("label", { for: "send-email" }, "Send me Email"),
            UI.createElement("button", { type: "submit" }, "Submit"),
          ]),
          // UI.createElement("button", { type: "submit" }, "Submit"),
        ]) ) ]) ])
  //       ]),
  //     ])
  //   ])

  // ]);

  UI.render(container, document.body);
return container;
}

createRegistrationLayout(UI);

// function createRegistrationLayout() {
//     const container = UI.createElement(
//       'div',
//       {
//         class: 'container-root',
//       },
//       [
//         UI.createElement("header", { class: "header" }, [UI.createElement("a", { href: "./home.html" }, "Home"),
//                                                          UI.createElement("a", { href: "./index.html" }, "Log In")]),
//         UI.createElement('form', { class: 'form-wrapper'},  UI.createElement('div', { class: 'registration-container' },
//                                         UI.createElement('form', {}, [UI.createElement('input', { type: 'text', placeholder: 'First Name'}, 'First Name'),
//                                         UI.createElement('input', { type: 'text',placeholder: 'Last Name' }, 'Last Name'),
//                                         UI.createElement('select', { id: 'city' },UI.createElement('option', {},'City')),
//                                         UI.createElement('div', { class: 'gender' }, [
//                                         UI.createElement('input', { type: 'radio', name:'gender',id:'male', value:'male'},'Male'), 
//                                         UI.createElement('label', {for:'radio-id'},'Male'),
//                                         UI.createElement('input', { type: 'radio', name:'gender',id:'female', value:'female'}, 'Female'),
//                                         UI.createElement('label', {for:'radio-id'},'Female')]),
//                                         UI.createElement('div', { class: 'submit'},[ 
//                                         UI.createElement('input', { type: 'checkbox'},""), UI.createElement('label', {for: 'checkbox-id'},"Send me Email"),
//                                         UI.createElement('button', { type:'submit',class:'btn', value:'Submit'}, 'Submit')
//                                         ])])))]);   
                                            
//         UI.render(container, document.body);
//         return container;
//   };
  
//   createRegistrationLayout(UI);
