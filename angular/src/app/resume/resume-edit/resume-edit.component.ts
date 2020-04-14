import { Component, Inject } from "@angular/core";
import { UtilityService } from "../../core/services/utility.service";

import { Education } from "../../models/EducatioModel";
import { Skill } from "../../models/SkillModel";
import { Experience } from "../../models/ExperienceModel";

@Component({
    selector: 'resume-edit',
    templateUrl: './resume-edit.component.html',
    styleUrls: ['resume-edit.component.css']
})

export class ResumeEditComponent {

    fullName: string;
    email: string;
    currentDesignation: string;
    selfDescription: string;
    age: number;
    address: string;
    phoneNumber: string;
    nationality: string;
    personalWebsite: string;
    skillForm: string;

    numberOfSkills: number;
    // skillCategory: string;
    graphType: string;
    skillName: string;
    skillLevel: string;

    showProfessionalModal: boolean;
    showAdditionalModal: boolean;
    skill: string;
    proficiency: string;
    professionalSkills: Array<Skill>;
    additionalSkills: Array<Skill>;

    showEducationModal: boolean;
    startMonth: string;
    endMonth: string;
    instituteName: string;
    certificationName: string;
    educationalQualifications: Array<Education>;

    showExperienceModal: boolean;
    designation: string;
    organization: string;
    jobDescription: string;
    experiences: Array<Experience>;

    showSocialMediaModal: boolean;
    availableSocialMedias: Array<any>;
    socialMediaUrl: string;
    selectedSocialMedia: string;


    constructor(private utility: UtilityService) {
        this.fullName = "";
        this.email = "";
        this.designation = "";
        this.selfDescription = "";
        this.age = null;
        this.address = "";
        this.phoneNumber = "";
        this.nationality = "";
        this.personalWebsite = "";
        this.numberOfSkills = 0;
        this.skillForm = "";
        // this.skillCategory = "";
        this.graphType = "";

        this.skillName = "";
        this.skillLevel = "";
        this.showProfessionalModal = false;
        this.showAdditionalModal = false;
        this.professionalSkills = [];
        this.additionalSkills = [];
        this.educationalQualifications = [];

        this.startMonth = "";
        this.endMonth = "";

        this.showEducationModal = false;
        this.certificationName = "";
        this.instituteName = "";

        this.showExperienceModal = false;
        this.designation = "";
        this.organization = "";
        this.jobDescription = "";
        this.experiences = [];

        this.showSocialMediaModal = false;
        this.availableSocialMedias = [
            { socialMediaName: "Facebook", socialMediaCode: "fb", socialMediaUrl: "" },
            { socialMediaName: "LinkedIn", socialMediaCode: "li", socialMediaUrl: "" },
            { socialMediaName: "Twitter", socialMediaCode: "tw", socialMediaUrl: "" },
            { socialMediaName: "Google Plus", socialMediaCode: "gp", socialMediaUrl: "" },
            { socialMediaName: "Instagram", socialMediaCode: "ig", socialMediaUrl: "" },
            { socialMediaName: "Pinterest", socialMediaCode: "pi", socialMediaUrl: "" },
            { socialMediaName: "Github", socialMediaCode: "gh", socialMediaUrl: "" }
        ];
        this.socialMediaUrl = "";
        this.selectedSocialMedia = "";

    }

    // ModalTogglers
    toggleProfessionalModal() {
        this.showProfessionalModal = !this.showProfessionalModal;
    }
    toggleAdditionalModal() {
        this.showAdditionalModal = !this.showAdditionalModal;
    }
    toggleEducationModal() {
        this.showEducationModal = !this.showEducationModal;
    }
    toggleExperienceModal() {
        this.showExperienceModal = !this.showExperienceModal;
    }
    toggleSocialMediaModal() {
        this.showSocialMediaModal = !this.showSocialMediaModal;
    }

    // Functions to add
    addProfessionalSkill() {
        let isExisting = this.professionalSkills.find(element => {
            return element.skillName == this.skill;
        });
        if (!isExisting) {
            let newSkill: Skill = new Skill();
            newSkill.skillName = this.skill;
            newSkill.skillProficiency = parseInt(this.proficiency);
            this.professionalSkills.push(newSkill);
            this.toggleProfessionalModal();
        } else {
            this.utility.notify("Skill already exists!", "OK");
        }
        this.skill = "";
        this.proficiency = "";
    }
    addAdditionalSkill() {
        let isExisting = this.additionalSkills.find(element => {
            return element.skillName == this.skill;
        });
        if (!isExisting) {
            let newSkill: Skill = new Skill();
            newSkill.skillName = this.skill;
            newSkill.skillProficiency = parseInt(this.proficiency);
            this.additionalSkills.push(newSkill);
            this.toggleAdditionalModal();
        }
        else {
            this.utility.notify("Skill already exists!", "OK");
        }
        this.skill = "";
        this.proficiency = "";
    }
    addEducation() {
        let education: Education = new Education();
        education.startMonth = this.startMonth;
        education.endMonth = this.endMonth;
        education.institutionName = this.instituteName;
        education.certificationName = this.certificationName;
        this.educationalQualifications.push(education);
        this.toggleEducationModal();
        this.startMonth = "";
        this.endMonth = "";
        this.instituteName = "";
        this.certificationName = "";
    }
    addExperience() {
        let experience: Experience = new Experience();

        experience.startMonth = this.startMonth;
        experience.endMonth = this.endMonth;
        experience.organization = this.organization;
        experience.designation = this.designation;
        experience.jobDescription = this.jobDescription;

        this.experiences.push(experience);
        this.startMonth = "";
        this.endMonth = "";
        this.organization = "";
        this.designation = "";
        this.jobDescription = "";
        this.toggleExperienceModal();
    }
    addSocialMedia() {
        let url = this.selectedSocialMedia + this.socialMediaUrl;
        this.availableSocialMedias.forEach(social => {
            if (this.selectedSocialMedia === social.socialMediaCode) {
                this.availableSocialMedias[this.availableSocialMedias.indexOf(social)].socialMediaUrl = url;
            }
        });
        this.socialMediaUrl = "";
        this.toggleSocialMediaModal();
    }

    // Functions to remove
    removeAdditionalSkill(event) {
        let indexOfSkill: number = event.path[2].id;
        this.additionalSkills.splice(indexOfSkill, 1);
    }
    removeProfessionalSkill(event) {
        let indexOfSkill: number = event.path[2].id;
        this.professionalSkills.splice(indexOfSkill, 1);
    }
    removeEducation(event) {
        let indexOfEducation: number = event.path[2].id;
        this.educationalQualifications.splice(indexOfEducation, 1);
    }
    removeExperience(event) {
        let indexOfExperience: number = event.path[2].id;
        this.experiences.splice(indexOfExperience, 1);
    }
    removeSocialMedia(socialMedia) {
        this.availableSocialMedias.forEach(social => {
            if (social == socialMedia) {
                this.availableSocialMedias[this.availableSocialMedias.indexOf(social)].socialMediaUrl = "";
            }
        });
    }
}





