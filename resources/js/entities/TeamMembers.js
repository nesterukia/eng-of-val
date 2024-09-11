let membersContainer = document.querySelector(".members-test");
const teamMembers = [
    {
        name: "Даша Власевская",
        role: "Руководитель",
        pictureUrl: "resources/images/team/dasha.jpg"
    },
    {
        name: "Дарена",
        role: "Солнце",
        pictureUrl: "https://www.shutterstock.com/image-photo/cat-yellow-face-sitting-on-600nw-2470054451.jpg"
    }, 
    {
        name: "Дашулик",
        role: "Пупсик",
        pictureUrl: "resources/images/team/dasha.jpg"
    }, 
    {
        name: "Сергей Михайлович",
        role: "Кто ты?",
        pictureUrl: "resources/images/team/dasha.jpg"
    }, 
    {
        name: "Михаил",
        role: "Лох",
        pictureUrl: "resources/images/team/dasha.jpg"
    }
];

teamMembers.forEach(member =>{
    const memberBlock = document.createElement("li");
    memberBlock.classList.add("members__item");
    memberBlock.classList.add("member");

    const memberRole = document.createElement("div");
    memberRole.classList.add("member__role");
    memberRole.innerText = member.role;

    const memberName = document.createElement("div");
    memberName.classList.add("member__name");
    memberName.innerText = member.name;

    const memberPic = document.createElement("img");
    memberPic.classList.add("member__pic");
    memberPic.src = member.pictureUrl;
    memberPic.alt = "member";

    memberBlock.appendChild(memberRole);
    memberBlock.appendChild(memberName);
    memberBlock.appendChild(memberPic);

    membersContainer.appendChild(memberBlock);
});