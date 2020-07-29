const buttonArray = document.querySelectorAll('button[role = "tab"]');

function tabClickHandler(event) {
        console.log(event);
        const buttonId = event.currentTarget.id;
        const buttonToShow = event.currentTarget;
        const buttonToDisable = document.querySelector(`button[role="tab"][aria-selected=true]`);
        if (buttonToShow !== buttonToDisable) {
                buttonToShow.setAttribute('aria-selected', true);
                buttonToDisable.setAttribute('aria-selected', false);
        }
        const buttonTabToHide = document.querySelector(`div[role="tabpanel"]:not([hidden])`);
        const buttonTabToShow = document.querySelector(`div[role="tabpanel"][aria-labelledby=${buttonId}]`);
        if (buttonTabToHide !== buttonTabToShow) {
                buttonTabToHide.hidden = true;
                buttonTabToShow.hidden = false;
        }
}

buttonArray.forEach(button => button.addEventListener('click', tabClickHandler));
