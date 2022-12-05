document.addEventListener("DOMContentLoaded", () => {
  const btnAddNewPerson = document.querySelector(".clients__btn");
  const svgVk = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g opacity="0.7">
  <path d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z" fill="#9873FF"/>
  </g>
  </svg>
  `;
  const svgEmail = `
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z" fill="#9873FF"/>
</svg>

  `;
  const svgFacebook = `
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.7">
<path d="M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z" fill="#9873FF"/>
</g>
</svg>

  `;
  const svgPerson = `
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z" fill="#9873FF"/>
</svg>

  `;
  const svgPhone = `
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.7">
<circle cx="8" cy="8" r="8" fill="#9873FF"/>
<path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/>
</g>
</svg>

  `;

  btnAddNewPerson.addEventListener("click", async () => {
    const block = modalAddNewPerson();
    block.overlayBlock.classList.add("modal-overlay--active");
  });

  const GET = async () => {
    const response = await fetch("http://localhost:3000/api/clients");
    const data = await response.json();
    return data;
  };

  const SET = async (obj) => {
    const response = await fetch("http://localhost:3000/api/clients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });

    if (response.status >= 400) {
      const error = serverError();
      document.body.append(error.modal);
      setTimeout(() => error.modal.classList.add("modal__add--active"), 300);
      setTimeout(
        () => error.modal.classList.remove("modal__add--active"),
        4000
      );
      setTimeout(() => error.modal.remove(), 4300);
    } else if (response.status < 400) {
      const Ok = serverOk();
      Ok.modalDescr.textContent = "Клиент был успешно добавлен";
      document.body.append(Ok.modal);
      setTimeout(() => Ok.modal.classList.add("modal__add--active"), 300);
      setTimeout(() => Ok.modal.classList.remove("modal__add--active"), 2000);
      setTimeout(() => Ok.modal.remove(), 4300);
    }

    await updateTablePersons();
  };

  const PATCH = async (obj) => {
    const response = await fetch(
      `http://localhost:3000/api/clients/${obj.id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      }
    );

    if (response.status >= 400) {
      const error = serverError();
      document.body.append(error.modal);
      setTimeout(() => error.modal.classList.add("modal__add--active"), 300);
      setTimeout(
        () => error.modal.classList.remove("modal__add--active"),
        4000
      );
      setTimeout(() => error.modal.remove(), 4300);
    } else if (response.status < 400) {
      const Ok = serverOk();
      Ok.modalDescr.textContent = "Клиент был успешно изменен";
      document.body.append(Ok.modal);
      setTimeout(() => Ok.modal.classList.add("modal__add--active"), 300);
      setTimeout(() => Ok.modal.classList.remove("modal__add--active"), 4000);
      setTimeout(() => Ok.modal.remove(), 4300);
    }

    await updateTablePersons();
    setTimeout(()=> {
      window.location.reload();
    },3000)
  };

  const SEARCH = async (str) => {
    const response = await fetch(
      `http://localhost:3000/api/clients?search=${str}`
    );
    const data = await response.json();
    return data;
  };

  function createClient(client) {
    let tr = document.createElement("tr");
    let tdID = document.createElement("td");
    let tdFullname = document.createElement("td");
    let tdCreatedAt = document.createElement("td");
    let tdCreatedAtDate = document.createElement("span");
    let tdCreatedAtTime = document.createElement("span");
    let tdUpdatedAt = document.createElement("td");
    let tdUpdatedAtDate = document.createElement("span");
    let tdUpdatedAtTime = document.createElement("span");
    let tdContacts = document.createElement("td");
    let wrapperIconsContacts = document.createElement("div");
    let tdActions = document.createElement("td");
    let svgDelPerson = document.createElement("div");
    let svgEditPerson = document.createElement("div");

    svgDelPerson.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.7" clip-path="url(#clip0_121_1962)">
    <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" fill="#F06A4D"/>
    </g>
    <defs>
    <clipPath id="clip0_121_1962">
    <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    Удалить
    `;
    svgEditPerson.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g opacity="0.7" clip-path="url(#clip0_121_1932)">
    <path d="M2 11.5V14H4.5L11.8733 6.62662L9.37333 4.12662L2 11.5ZM13.8067 4.69329C14.0667 4.43329 14.0667 4.01329 13.8067 3.75329L12.2467 2.19329C11.9867 1.93329 11.5667 1.93329 11.3067 2.19329L10.0867 3.41329L12.5867 5.91329L13.8067 4.69329Z" fill="#9873FF"/>
    </g>
    <defs>
    <clipPath id="clip0_121_1932">
    <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    Изменить
    `;

    tr.classList.add("person");
    tdID.classList.add("person__item");
    tdID.classList.add("person__id");
    tdFullname.classList.add("person__item");
    tdCreatedAt.classList.add("person__item");
    tdUpdatedAt.classList.add("person__item");
    tdContacts.classList.add("person__item");
    wrapperIconsContacts.style.display = "flex";
    wrapperIconsContacts.style.flexWrap = "wrap";
    wrapperIconsContacts.style.maxWidth = 110 + "px";
    tdActions.classList.add("person__item");
    tdID.classList.add("grey");
    tdCreatedAtDate.style.marginRight = 7 + "px";
    tdCreatedAtTime.classList.add("grey");
    tdUpdatedAtDate.style.marginRight = 7 + "px";
    tdUpdatedAtTime.classList.add("grey");

    tdID.textContent = client.id.substr(0, 6);
    tdFullname.textContent =
      client.surname + " " + client.name + " " + client.lastName;
    tdCreatedAtDate.textContent = correctDate(client.createdAt);
    tdCreatedAtTime.textContent = correctTime(client.createdAt);
    tdUpdatedAtDate.textContent = correctDate(client.updatedAt);
    tdUpdatedAtTime.textContent = correctTime(client.updatedAt);

    client.contacts.forEach((social) => {
      personalIcons(social.type, social.value, wrapperIconsContacts);
    });

    svgDelPerson.classList.add("person__actions-icon");
    svgEditPerson.classList.add("person__actions-icon");
    tdActions.classList.add("person__actions");
    tdActions.append(svgEditPerson, svgDelPerson);
    tdCreatedAt.append(tdCreatedAtDate, tdCreatedAtTime);
    tdUpdatedAt.append(tdUpdatedAtDate, tdUpdatedAtTime);
    tdContacts.append(wrapperIconsContacts);

    svgDelPerson.addEventListener("click", (e) => {
      e.preventDefault();
      modalDelPerson(client.id);
    });

    svgEditPerson.addEventListener("click", (e) => {
      e.preventDefault();
      modalEditPerson(client);
    });

    tr.append(
      tdID,
      tdFullname,
      tdCreatedAt,
      tdUpdatedAt,
      tdContacts,
      tdActions
    );

    return tr;
  }

  const setSearchPanel = async () => {
    const header = document.querySelector(".header__wrapper");
    const searchPanel = document.querySelector(".search__panel");
    const tBody = document.getElementById("data");
    const list = document.createElement("ul");
    list.classList.add("search__list");
    let time = 0
    searchPanel.addEventListener("input", async (e) => {
      e.preventDefault();
      clearTimeout(time);
      time = setTimeout(async () => {
        const clients = await SEARCH(searchPanel.value);
        console.log(clients);
        console.log(searchPanel.value);
        list.innerHTML = "";
        clients.forEach((item) => {
          const findItem = document.createElement("li");
          findItem.textContent =
            item.surname + " " + item.name + " " + item.lastName;
          list.append(findItem);
          tBody.innerHTML = "";
          for (const client of clients) {
            tBody.append(createClient(client));
          }
        });
        list.classList.add("search__list--active");
        if (searchPanel.value == "") {
          list.classList.remove("search__list--active");
        }
        header.append(list);
      }, 300);
    });
  };

  const socialIcons = (type, value, link, svg, container) => {
    const setTooltip = tooltip(type, value);
    link = document.createElement("a");
    link.classList.add("icons-contact");
    link.innerHTML = svg;
    if (type === "Email") {
      link.href = `mailto:${value.trim()}`;
    } else if (type === "Телефон") {
      link.href = `tel:${value.trim()}`;
    } else if (type === "VK") {
      link.setAttribute("target", "_blank");
      link.href = `https://vk.com/${value.trim()}`;
    } else if (type === "Facebook") {
      link.setAttribute("target", "_blank");
      link.href = `https://facebook.com/${value.trim()}`;
    }
    container.append(link);
    link.append(setTooltip.tooltipContainer);
  };

  const personalIcons = (type, value, item) => {
    switch (type) {
      case "Телефон":
        let tel;
        socialIcons(type, value, tel, svgPhone, item);
        break;
      case "Email":
        let mail;
        socialIcons(type, value, mail, svgEmail, item);
        break;
      case "VK":
        let VK;
        socialIcons(type, value, VK, svgVk, item);
        break;
      case "Facebook":
        let FB;
        socialIcons(type, value, FB, svgFacebook, item);
        break;
      case "Другое":
        let other;
        socialIcons(type, value, other, svgPerson, item);
        break;
      default:
        break;
    }
  };

  const updateTablePersons = async () => {
    const clients = await GET();
    const tBody = document.getElementById("data");
    tBody.innerHTML = "";
    for (const client of clients) {
      tBody.append(createClient(client));
    }

    sortById();
    sortByCreatedData();
    sortBylastChange();
    sortByFullname();
    setSearchPanel();
  };

  const deleteById = async (id) => {
    const response = await fetch(`http://localhost:3000/api/clients/${id}`, {
      method: "DELETE",
    });

    await updateTablePersons();
  };

  const correctDate = (date) => {
    const newDate = new Date(date);
    const correctDate = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    };
    const resultDate = newDate.toLocaleString("ru", correctDate);
    return resultDate;
  };

  const correctTime = (date) => {
    const newTime = new Date(date);
    const correctTime = {
      hour: "numeric",
      minute: "numeric",
    };
    const resultTime = newTime.toLocaleString("ru", correctTime);
    return resultTime;
  };

  function modalAddNewPerson() {
    const overlayBlock = document.createElement("div");
    const form = document.createElement("form");
    const title = document.createElement("h1");
    const inputWrapper1 = document.createElement("div");
    const inputWrapper2 = document.createElement("div");
    const inputWrapper3 = document.createElement("div");
    const inputDescr1 = document.createElement("p");
    const inputDescr2 = document.createElement("p");
    const inputDescr3 = document.createElement("p");
    const inputSurname = document.createElement("input");
    const inputName = document.createElement("input");
    const inputPatronymic = document.createElement("input");
    const addContact = document.createElement("btn");
    const cancelBtn = document.createElement("btn");
    const addPerson = document.createElement("btn");
    const svgAddContact = document.createElement("div");
    const wrapper = document.createElement("div");
    const wrapperBtn = document.createElement("div");
    const wrapperSocial = document.createElement("div");
    const svgExitForm = document.createElement("div");
    const valMessage = document.createElement("div");

    svgExitForm.innerHTML = `<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2333 7.73333L21.2666 6.76666L14.4999 13.5334L7.73324 6.7667L6.76658 7.73336L13.5332 14.5L6.7666 21.2667L7.73327 22.2333L14.4999 15.4667L21.2666 22.2334L22.2332 21.2667L15.4666 14.5L22.2333 7.73333Z" fill="#B0B0B0"/>
    </svg>`;

    svgAddContact.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_121_884)">
    <path d="M8.00001 4.66659C7.63334 4.66659 7.33334 4.96659 7.33334 5.33325V7.33325H5.33334C4.96668 7.33325 4.66668 7.63325 4.66668 7.99992C4.66668 8.36659 4.96668 8.66659 5.33334 8.66659H7.33334V10.6666C7.33334 11.0333 7.63334 11.3333 8.00001 11.3333C8.36668 11.3333 8.66668 11.0333 8.66668 10.6666V8.66659H10.6667C11.0333 8.66659 11.3333 8.36659 11.3333 7.99992C11.3333 7.63325 11.0333 7.33325 10.6667 7.33325H8.66668V5.33325C8.66668 4.96659 8.36668 4.66659 8.00001 4.66659ZM8.00001 1.33325C4.32001 1.33325 1.33334 4.31992 1.33334 7.99992C1.33334 11.6799 4.32001 14.6666 8.00001 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 8.00001 1.33325ZM8.00001 13.3333C5.06001 13.3333 2.66668 10.9399 2.66668 7.99992C2.66668 5.05992 5.06001 2.66659 8.00001 2.66659C10.94 2.66659 13.3333 5.05992 13.3333 7.99992C13.3333 10.9399 10.94 13.3333 8.00001 13.3333Z" fill="#9873FF"/>
    </g>
    <defs>
    <clipPath id="clip0_121_884">
    <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs></svg>`;

    valMessage.classList.add("valMessage");
    form.classList.add("modal-block");
    title.classList.add("modal-title");
    title.textContent = "Новый клиент";
    inputDescr1.textContent = "Фамилия*";
    inputDescr1.classList.add("modal-descr");
    inputSurname.classList.add("modal-input");
    inputWrapper1.classList.add("modal-wrapper");
    inputWrapper1.appendChild(inputDescr1);
    inputWrapper1.appendChild(inputSurname);
    inputDescr2.textContent = "Имя*";
    inputDescr2.classList.add("modal-descr");
    inputName.classList.add("modal-input");
    inputWrapper2.classList.add("modal-wrapper");
    inputWrapper2.appendChild(inputDescr2);
    inputWrapper2.appendChild(inputName);
    inputDescr3.textContent = "Отчество";
    inputDescr3.classList.add("modal-descr");
    inputPatronymic.classList.add("modal-input");
    inputWrapper3.classList.add("modal-wrapper");
    inputWrapper3.appendChild(inputDescr3);
    inputWrapper3.appendChild(inputPatronymic);
    wrapper.classList.add("modal-wrapperAdd");
    wrapperBtn.classList.add("modal-wrapper-btn");
    svgAddContact.classList.add("modal-wrapper-btn__svg");
    addContact.textContent = "Добавить контакт";
    addContact.classList.add("modal-wrapper-btn__btn");
    addContact.classList.add("btn-reset");
    wrapperSocial.classList.add("modal-wrapperSocial");
    wrapperBtn.appendChild(svgAddContact);
    wrapperBtn.appendChild(addContact);
    wrapper.appendChild(wrapperSocial);
    wrapper.appendChild(wrapperBtn);

    addPerson.textContent = "Сохранить";
    addPerson.classList.add("modal-addBtn");
    addPerson.classList.add("btn-reset");
    cancelBtn.textContent = "Отмена";
    cancelBtn.classList.add("modal-cancelBtn");
    cancelBtn.classList.add("btn-reset");
    svgExitForm.classList.add("modal-exit");
    overlayBlock.classList.add("modal-overlay");
    overlayBlock.classList.add("modal-overlay--active");

    cancelBtn.addEventListener("click", (e) => {
      e.preventDefault();
      overlayBlock.classList.remove("modal-overlay--active");
      setTimeout(() => overlayBlock.remove(), 300);
    });

    svgExitForm.addEventListener("click", (e) => {
      e.preventDefault();
      overlayBlock.classList.remove("modal-overlay--active");
      setTimeout(() => overlayBlock.remove(), 300);
    });

    inputSurname.addEventListener("input", () => {
      inputSurname.classList.remove("modal-input--validate");
      valMessage.classList.remove("valMessage--active");
    });

    inputName.addEventListener("input", () => {
      inputName.classList.remove("modal-input--validate");
      valMessage.classList.remove("valMessage--active");
    });

    inputPatronymic.addEventListener("input", () => {
      inputPatronymic.classList.remove("modal-input--validate");
      valMessage.classList.remove("valMessage--active");
    });

    addPerson.addEventListener("click", (e) => {
      e.preventDefault();
      const socialValue = document.querySelectorAll(".social__input");
      const socialType = document.querySelectorAll(".social__descr");
      const socialModule = document.querySelectorAll(".wrapper-social");

      socialValue.forEach((item) => {
        item.addEventListener("input", () => {
          item.placeholder = "";
          item.classList.remove("social__input--active");
        });
      });

      const validateList = validateFullname([
        inputSurname.value,
        inputName.value,
        inputPatronymic.value,
      ]);
      let countVal = 0;
      let countValContact = 0;

      !validateList[0]
        ? ((inputSurname.value = ""),
          (valMessage.textContent = "Некорректные данные"),
          valMessage.classList.add("valMessage--active"),
          inputSurname.classList.add("modal-input--validate"))
        : ++countVal;
      !validateList[1]
        ? ((inputName.value = ""),
          (valMessage.textContent = "Некорректные данные"),
          valMessage.classList.add("valMessage--active"),
          inputName.classList.add("modal-input--validate"))
        : ++countVal;
      !validateList[2]
        ? ((inputPatronymic.value = ""),
          (valMessage.textContent = "Некорректные данные"),
          valMessage.classList.add("valMessage--active"),
          inputPatronymic.classList.add("modal-input--validate"))
        : ++countVal;

      for (let i = 0; i < socialModule.length; i++) {
        const answer = validateContact(
          socialType[i].textContent,
          socialValue[i].value
        );
        if (!answer) {
          socialValue[i].value = "";
          socialValue[i].placeholder = "Некорректный данные";
          socialValue[i].classList.add("social__input--active");
        } else {
          countValContact++;
        }
      }

      if (countVal == 3) {
        let listContacts = [];
        let lock = false;
        const obj = {
          name: inputName.value,
          surname: inputSurname.value,
          lastName: inputPatronymic.value,
          contacts: listContacts,
        };
        if (countValContact == socialModule.length) {
          for (let i = 0; i < socialModule.length; i++) {
            listContacts.push({
              type: `${socialType[i].textContent}`,
              value: `${socialValue[i].value}`,
            });
          }
          lock = true;
        }
        if (lock) {
          overlayBlock.classList.remove("modal-overlay--active");
          SET(obj);
        }
      }
    });

    wrapperBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const creatSocial = newSocial();
      const socialModule = document.querySelectorAll(".wrapper-social");
      wrapperSocial.append(creatSocial.wrapper);
      wrapperSocial.append(creatSocial.wrapper);

      creatSocial.svgSocialCancel.addEventListener("click", () => {
        if (socialModule.length < 10) {
          wrapperBtn.classList.remove("hidden");
        }
      });

      if (socialModule.length == 9) {
        wrapperBtn.classList.add("hidden");
      }
    });

    form.appendChild(title);
    form.appendChild(inputWrapper1);
    form.appendChild(inputWrapper2);
    form.appendChild(inputWrapper3);
    form.appendChild(wrapper);
    form.appendChild(valMessage);
    form.appendChild(addPerson);
    form.appendChild(cancelBtn);
    form.appendChild(svgExitForm);
    overlayBlock.appendChild(form);
    document.body.appendChild(overlayBlock);

    return {
      overlayBlock,
      wrapperBtn,
    };
  }

  function modalEditPerson(client) {
    const overlayBlock = document.createElement("div");
    const form = document.createElement("form");
    const titleWrapper = document.createElement("div");
    const title = document.createElement("h1");
    const titleId = document.createElement("span");
    const inputWrapper1 = document.createElement("div");
    const inputWrapper2 = document.createElement("div");
    const inputWrapper3 = document.createElement("div");
    const inputDescr1 = document.createElement("p");
    const inputDescr2 = document.createElement("p");
    const inputDescr3 = document.createElement("p");
    const inputSurname = document.createElement("input");
    const inputName = document.createElement("input");
    const inputPatronymic = document.createElement("input");
    const addContact = document.createElement("btn");
    const cancelBtn = document.createElement("btn");
    const addPerson = document.createElement("btn");
    const svgAddContact = document.createElement("div");
    const wrapper = document.createElement("div");
    const wrapperBtn = document.createElement("div");
    const wrapperSocial = document.createElement("div");
    const svgExitForm = document.createElement("div");
    const valMessage = document.createElement("div");

    svgExitForm.innerHTML = `<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2333 7.73333L21.2666 6.76666L14.4999 13.5334L7.73324 6.7667L6.76658 7.73336L13.5332 14.5L6.7666 21.2667L7.73327 22.2333L14.4999 15.4667L21.2666 22.2334L22.2332 21.2667L15.4666 14.5L22.2333 7.73333Z" fill="#B0B0B0"/>
    </svg>`;

    svgAddContact.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_121_884)">
    <path d="M8.00001 4.66659C7.63334 4.66659 7.33334 4.96659 7.33334 5.33325V7.33325H5.33334C4.96668 7.33325 4.66668 7.63325 4.66668 7.99992C4.66668 8.36659 4.96668 8.66659 5.33334 8.66659H7.33334V10.6666C7.33334 11.0333 7.63334 11.3333 8.00001 11.3333C8.36668 11.3333 8.66668 11.0333 8.66668 10.6666V8.66659H10.6667C11.0333 8.66659 11.3333 8.36659 11.3333 7.99992C11.3333 7.63325 11.0333 7.33325 10.6667 7.33325H8.66668V5.33325C8.66668 4.96659 8.36668 4.66659 8.00001 4.66659ZM8.00001 1.33325C4.32001 1.33325 1.33334 4.31992 1.33334 7.99992C1.33334 11.6799 4.32001 14.6666 8.00001 14.6666C11.68 14.6666 14.6667 11.6799 14.6667 7.99992C14.6667 4.31992 11.68 1.33325 8.00001 1.33325ZM8.00001 13.3333C5.06001 13.3333 2.66668 10.9399 2.66668 7.99992C2.66668 5.05992 5.06001 2.66659 8.00001 2.66659C10.94 2.66659 13.3333 5.05992 13.3333 7.99992C13.3333 10.9399 10.94 13.3333 8.00001 13.3333Z" fill="#9873FF"/>
    </g>
    <defs>
    <clipPath id="clip0_121_884">
    <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs></svg>`;
    valMessage.classList.add("valMessage");
    form.classList.add("modal-block");
    title.classList.add("modal-title");
    title.textContent = "Изменить данные";
    titleId.classList.add("modal-titleId");
    titleId.textContent = `ID: ${client.id.substr(0, 6)}`;
    titleWrapper.classList.add("modal-titleWrapper");
    titleWrapper.appendChild(title);
    titleWrapper.appendChild(titleId);
    inputDescr1.textContent = "Фамилия*";
    inputDescr1.classList.add("modal-descr");
    inputSurname.classList.add("modal-input");
    inputWrapper1.classList.add("modal-wrapper");
    inputWrapper1.appendChild(inputDescr1);
    inputWrapper1.appendChild(inputSurname);
    inputDescr2.textContent = "Имя*";
    inputDescr2.classList.add("modal-descr");
    inputName.classList.add("modal-input");
    inputWrapper2.classList.add("modal-wrapper");
    inputWrapper2.appendChild(inputDescr2);
    inputWrapper2.appendChild(inputName);
    inputDescr3.textContent = "Отчество";
    inputDescr3.classList.add("modal-descr");
    inputPatronymic.classList.add("modal-input");
    inputWrapper3.classList.add("modal-wrapper");
    inputWrapper3.appendChild(inputDescr3);
    inputWrapper3.appendChild(inputPatronymic);
    wrapperBtn.classList.add("modal-wrapper-btn");
    wrapper.classList.add("modal-wrapperAdd");
    svgAddContact.classList.add("modal-wrapper-btn__svg");
    addContact.textContent = "Добавить контакт";
    addContact.classList.add("modal-wrapper-btn__btn");
    addContact.classList.add("btn-reset");
    wrapperSocial.classList.add("modal-wrapperSocial");
    wrapperBtn.appendChild(svgAddContact);
    wrapperBtn.appendChild(addContact);
    wrapper.appendChild(wrapperSocial);
    wrapper.appendChild(wrapperBtn);
    addPerson.textContent = "Сохранить";
    addPerson.classList.add("modal-addBtn");
    addPerson.classList.add("btn-reset");
    cancelBtn.textContent = "Удалить клиента";
    cancelBtn.classList.add("modal-cancelBtn");
    cancelBtn.classList.add("btn-reset");
    svgExitForm.classList.add("modal-exit");
    overlayBlock.classList.add("modal-overlay");
    overlayBlock.classList.add("modal-overlay--active");

    inputName.value = client.name;
    inputSurname.value = client.surname;
    inputPatronymic.value = client.lastName;

    client.contacts.forEach((contact) => {
      const creatSocial = newSocial();
      creatSocial.selectMaindescr.textContent = contact.type;
      creatSocial.socialInput.value = contact.value;
      wrapperSocial.append(creatSocial.wrapper);
    });

    cancelBtn.addEventListener("click", (e) => {
      e.preventDefault();
      modalDelPerson(client.id);
      overlayBlock.classList.remove("modal-overlay--active");
      setTimeout(() => overlayBlock.remove(), 300);
    });

    svgExitForm.addEventListener("click", (e) => {
      e.preventDefault();
      overlayBlock.classList.remove("modal-overlay--active");
      setTimeout(() => overlayBlock.remove(), 300);
    });

    wrapperBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const creatSocial = newSocial();
      const socialModule = document.querySelectorAll(".wrapper-social");
      wrapperSocial.append(creatSocial.wrapper);

      creatSocial.svgSocialCancel.addEventListener("click", (e) => {
        e.preventDefault();
        if (socialModule.length < 10) {
          wrapperBtn.classList.remove("hidden");
        }
      });

      if (socialModule.length == 9) {
        wrapperBtn.classList.add("hidden");
      }
    });

    addPerson.addEventListener("click", (e) => {
      e.preventDefault();
      const socialValue = document.querySelectorAll(".social__input");
      const socialType = document.querySelectorAll(".social__descr");
      const socialModule = document.querySelectorAll(".wrapper-social");

      socialValue.forEach((item) => {
        item.addEventListener("input", () => {
          item.placeholder = "";
          item.classList.remove("social__input--active");
        });
      });

      const validateList = validateFullname([
        inputSurname.value,
        inputName.value,
        inputPatronymic.value,
      ]);
      let countVal = 0;
      let countValContact = 0;

      !validateList[0]
        ? ((inputSurname.value = ""),
          (valMessage.textContent = "Некорректные данные"),
          valMessage.classList.add("valMessage--active"),
          inputSurname.classList.add("modal-input--validate"))
        : ++countVal;
      !validateList[1]
        ? ((inputName.value = ""),
          (valMessage.textContent = "Некорректные данные"),
          valMessage.classList.add("valMessage--active"),
          inputName.classList.add("modal-input--validate"))
        : ++countVal;
      !validateList[2]
        ? ((inputPatronymic.value = ""),
          (valMessage.textContent = "Некорректные данные"),
          valMessage.classList.add("valMessage--active"),
          inputPatronymic.classList.add("modal-input--validate"))
        : ++countVal;

      for (let i = 0; i < socialModule.length; i++) {
        const answer = validateContact(
          socialType[i].textContent,
          socialValue[i].value
        );
        if (!answer) {
          socialValue[i].value = "";
          socialValue[i].placeholder = "Некорректный данные";
          socialValue[i].classList.add("social__input--active");
        } else {
          countValContact++;
        }
      }

      if (countVal == 3) {
        client.name = inputName.value;
        client.surname = inputSurname.value;
        client.lastName = inputPatronymic.value;
        let listContacts = [];
        let lock = false;
        if (countValContact == socialModule.length) {
          listContacts.length = 0
          for (let i = 0; i < socialModule.length; i++) {
            listContacts.push({
              type: `${socialType[i].textContent}`,
              value: `${socialValue[i].value}`,
            });
          }
          lock = true;
        }
        console.log(client.contacts);
        client.contacts = listContacts;
        console.log(client.contacts);
        if (lock) {
          overlayBlock.classList.remove("modal-overlay--active");
          PATCH(client);
        }
      }
    });

    form.appendChild(svgExitForm);
    form.appendChild(titleWrapper);
    form.appendChild(inputWrapper1);
    form.appendChild(inputWrapper2);
    form.appendChild(inputWrapper3);
    form.appendChild(wrapper);
    form.appendChild(valMessage);
    form.appendChild(addPerson);
    form.appendChild(cancelBtn);
    overlayBlock.appendChild(form);
    document.body.appendChild(overlayBlock);
  }

  function modalDelPerson(id) {
    const overlayBlock = document.createElement("div");
    const form = document.createElement("div");
    const title = document.createElement("h1");
    const descr = document.createElement("p");
    const cancelBtn = document.createElement("btn");
    const delPerson = document.createElement("btn");
    const wrapperBtn = document.createElement("div");
    const svgExitForm = document.createElement("div");

    svgExitForm.innerHTML = `<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2333 7.73333L21.2666 6.76666L14.4999 13.5334L7.73324 6.7667L6.76658 7.73336L13.5332 14.5L6.7666 21.2667L7.73327 22.2333L14.4999 15.4667L21.2666 22.2334L22.2332 21.2667L15.4666 14.5L22.2333 7.73333Z" fill="#B0B0B0"/>
    </svg>
    `;

    form.classList.add("modal-del");
    title.classList.add("modal-title");
    title.textContent = "Удалить клиента";

    descr.classList.add("modal-del__descr");
    descr.textContent = "Вы действительно хотите удалить данного клиента?";

    delPerson.textContent = "Удалить";
    delPerson.classList.add("modal-delBtn");
    delPerson.classList.add("btn-reset");

    cancelBtn.textContent = "Отмена";
    cancelBtn.classList.add("modal-cancelBtn");
    cancelBtn.classList.add("btn-reset");

    svgExitForm.classList.add("modal-del__exit");

    overlayBlock.classList.add("modal-overlay");
    overlayBlock.classList.add("modal-overlay--active");

    cancelBtn.addEventListener("click", (e) => {
      e.preventDefault();
      overlayBlock.classList.remove("modal-overlay--active");
      setTimeout(() => overlayBlock.remove(), 300);
    });

    svgExitForm.addEventListener("click", (e) => {
      e.preventDefault();
      overlayBlock.classList.remove("modal-overlay--active");
      setTimeout(() => overlayBlock.remove(), 300);
    });

    delPerson.addEventListener("click", (e) => {
      e.preventDefault();
      deleteById(id);
      setTimeout(() => overlayBlock.remove(), 300);
    });

    form.appendChild(title);
    form.appendChild(descr);
    form.appendChild(wrapperBtn);
    form.appendChild(delPerson);
    form.appendChild(cancelBtn);
    form.appendChild(svgExitForm);
    overlayBlock.appendChild(form);
    document.body.appendChild(overlayBlock);
  }

  function newSocial() {
    const wrapper = document.createElement("div");
    const selectList = document.createElement("div");
    const selectMainItem = document.createElement("div");
    const selectMaindescr = document.createElement("p");
    const selectItems = document.createElement("div");
    const selectItem1 = document.createElement("div");
    const selectItem2 = document.createElement("div");
    const selectItem3 = document.createElement("div");
    const selectItem4 = document.createElement("div");
    const socialInput = document.createElement("input");
    const svgSocialArrow = document.createElement("div");
    const svgSocialCancel = document.createElement("div");
    const listItems = [selectItem1, selectItem2, selectItem3, selectItem4];
    svgSocialCancel.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_121_1291)">
    <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" fill="#B0B0B0"/>
    </g>
    <defs>
    <clipPath id="clip0_121_1291">
    <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `;
    svgSocialArrow.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_121_1079)">
    <path d="M1.495 3.69003C1.25 3.93503 1.25 4.33003 1.495 4.57503L5.65 8.73003C5.845 8.92503 6.16 8.92503 6.355 8.73003L10.51 4.57503C10.755 4.33003 10.755 3.93503 10.51 3.69003C10.265 3.44503 9.87 3.44503 9.625 3.69003L6 7.31003L2.375 3.68503C2.135 3.44503 1.735 3.44503 1.495 3.69003Z" fill="#9873FF"/>
    </g>
    <defs>
    <clipPath id="clip0_121_1079">
    <rect width="12" height="12" fill="white" transform="translate(0 12) rotate(-90)"/>
    </clipPath>
    </defs>
    </svg>
    `;

    selectMaindescr.textContent = "Телефон";
    selectItem1.textContent = "Email";
    selectItem2.textContent = "Телефон";
    selectItem3.textContent = "VK";
    selectItem4.textContent = "Facebook";

    selectItems.classList.add("social__items");
    selectMainItem.classList.add("social__mainItem");
    wrapper.classList.add("wrapper-social");
    selectList.classList.add("social__select");
    socialInput.classList.add("social__input");
    svgSocialCancel.classList.add("social__cancel");
    selectItem1.classList.add("selectItem");
    selectItem2.classList.add("selectItem");
    selectItem3.classList.add("selectItem");
    selectItem4.classList.add("selectItem");
    selectMaindescr.classList.add("social__descr");
    selectMaindescr.style.margin = 0;
    svgSocialArrow.classList.add("social__arrow");
    selectItems.append(selectItem1, selectItem2, selectItem3, selectItem4);
    selectMainItem.append(selectMaindescr, svgSocialArrow);
    selectList.append(selectMainItem, selectItems);
    wrapper.append(selectList, socialInput, svgSocialCancel);

    selectMainItem.addEventListener("click", () => {
      selectItems.classList.toggle("social__items--active");
      svgSocialArrow.classList.toggle("social__arrow--active");
    });

    svgSocialCancel.addEventListener("click", () => {
      wrapper.remove();
    });

    listItems.forEach((item) => {
      item.addEventListener("click", () => {
        selectMaindescr.textContent = item.textContent;
        selectItems.classList.remove("social__items--active");
        svgSocialArrow.classList.toggle("social__arrow--active");
      });
    });

    return {
      wrapper,
      selectMaindescr,
      socialInput,
      svgSocialCancel,
    };
  }

  async function sortById() {
    const clients = await GET();
    const idTitle = document.getElementById("id");
    const arrowID = document.querySelector(".arrow-id");
    const tBody = document.getElementById("data");
    idTitle.addEventListener("click", () => {
      arrowID.classList.toggle("arrow--active");
      if (arrowID.classList.contains("arrow--active")) {
        clients.sort((a, b) => (a.id < b.id ? 1 : -1));
      } else {
        clients.sort((a, b) => (a.id > b.id ? 1 : -1));
      }
      tBody.innerHTML = "";
      for (const client of clients) {
        tBody.append(createClient(client));
      }
    });
  }

  async function sortByCreatedData() {
    const clients = await GET();
    const idTitle = document.getElementById("createData");
    const arrowID = document.querySelector(".arrow-createData");
    const tBody = document.getElementById("data");
    idTitle.addEventListener("click", () => {
      arrowID.classList.toggle("arrow--active");
      if (arrowID.classList.contains("arrow--active")) {
        clients.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
      } else {
        clients.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1));
      }
      tBody.innerHTML = "";
      for (const client of clients) {
        tBody.append(createClient(client));
      }
    });
  }

  async function sortBylastChange() {
    const clients = await GET();
    const idTitle = document.getElementById("lastChange");
    const arrowID = document.querySelector(".arrow-lastChange");
    const tBody = document.getElementById("data");
    idTitle.addEventListener("click", () => {
      arrowID.classList.toggle("arrow--active");
      if (arrowID.classList.contains("arrow--active")) {
        clients.sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
      } else {
        clients.sort((a, b) => (a.updatedAt > b.updatedAt ? 1 : -1));
      }
      tBody.innerHTML = "";
      console.log(clients);
      for (const client of clients) {
        tBody.append(createClient(client));
      }
    });
  }

  async function sortByFullname() {
    const clients = await GET();
    const idTitle = document.getElementById("fullname");
    const arrowID = document.querySelector(".arrow-fullname");
    const tBody = document.getElementById("data");
    const letters = document.querySelector(".letters");
    idTitle.addEventListener("click", () => {
      arrowID.classList.toggle("arrow--active");
      if (arrowID.classList.contains("arrow--active")) {
        clients.sort((a, b) =>
          a.surname + " " + a.name + " " + a.lastName <
          b.surname + " " + b.name + " " + b.lastName
            ? 1
            : -1
        );
        letters.textContent = "Я-А";
      } else {
        letters.textContent = "А-Я";
        clients.sort((a, b) =>
          a.surname + " " + a.name + " " + a.lastName >
          b.surname + " " + b.name + " " + b.lastName
            ? 1
            : -1
        );
      }
      tBody.innerHTML = "";
      console.log(clients);
      for (const client of clients) {
        tBody.append(createClient(client));
      }
    });
  }

  function tooltip(type, value) {
    const tooltipContainer = document.createElement("div");
    const tooltip = document.createElement("div");
    tooltipContainer.classList.add("tooltip__container");
    tooltip.classList.add("social__content");
    tooltip.textContent = type + ":" + " " + value;
    tooltipContainer.append(tooltip);
    return {
      tooltipContainer,
      tooltip,
    };
  }

  const serverOk = () => {
    const modal = document.createElement("div");
    const modalOverlay = document.createElement("div");
    const modalTitle = document.createElement("h2");
    const modalError = document.createElement("div");
    const modalDescr = document.createElement("p");
    modal.classList.add("modal__add");
    modalOverlay.classList.add("modal__overlay-error");
    modalError.classList.add("modal__error");
    modalTitle.classList.add("modal__error-title");
    modalDescr.classList.add("modal__error-descr");
    modalTitle.textContent = "Поздравляем!";
    modalDescr.textContent = "Клиент был успешно добавлен";
    modalError.innerHTML = `
    <?xml version="1.0" ?><svg width="125px" height="125px" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><defs><style>
      .cls-1 {
        fill: #699f4c;
        fill-rule: evenodd;
      }
    </style></defs><path class="cls-1" d="M800,510a30,30,0,1,1,30-30A30,30,0,0,1,800,510Zm-16.986-23.235a3.484,3.484,0,0,1,0-4.9l1.766-1.756a3.185,3.185,0,0,1,4.574.051l3.12,3.237a1.592,1.592,0,0,0,2.311,0l15.9-16.39a3.187,3.187,0,0,1,4.6-.027L817,468.714a3.482,3.482,0,0,1,0,4.846l-21.109,21.451a3.185,3.185,0,0,1-4.552.03Z" id="check" transform="translate(-770 -450)"/></svg>
`;
    modal.append(modalOverlay);
    modalOverlay.append(modalTitle, modalError, modalDescr);
    return {
      modal,
      modalDescr,
    };
  };

  const serverError = () => {
    const modal = document.createElement("div");
    const modalOverlay = document.createElement("div");
    const modalTitle = document.createElement("h2");
    const modalError = document.createElement("div");
    const modalDescr = document.createElement("p");
    modal.classList.add("modal__add");
    modalOverlay.classList.add("modal__overlay-error");
    modalError.classList.add("modal__error");
    modalTitle.classList.add("modal__error-title");
    modalDescr.classList.add("modal__error-descr");
    modalTitle.textContent = "Упс, произошла ошибка(";
    modalDescr.textContent =
      "Сервер решил отдохнуть, попробуйте добавить клиента позже...";
    modalError.innerHTML = `
    <?xml version="1.0" encoding="iso-8859-1"?>
<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
<circle style="fill:#D75A4A;" cx="25" cy="25" r="25"/>
<polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" points="16,34 25,25 34,16
	"/>
<polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" points="16,16 25,25 34,34
	"/>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
`;
    modal.append(modalOverlay);
    modalOverlay.append(modalTitle, modalError, modalDescr);
    return {
      modal,
      modalDescr,
    };
  };

  function validateFullname(Fullname) {
    const answer = [];
    Fullname.forEach((item) => {
      answer.push(/^[a-zA-Zа-яА-Я]{2,15}$/.test(item));
    });
    return answer;
  }

  function validateContact(type, value) {
    let answer;
    if (type == "Телефон") {
      answer = /\+7|375|8\(\d{2,3}\)\d{3}-\d{2}-\d{2}/.test(value.trim());
    } else if (type == "Email") {
      answer =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(
          value.trim()
        );
    } else {
      answer = /^[a-z]{2,20}$/.test(value.trim());
    }
    return answer;
  }

  updateTablePersons();
});
