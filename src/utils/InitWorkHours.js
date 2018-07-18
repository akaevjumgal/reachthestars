const WorkTypes = {
    "FULL_TIME": "Полный рабочий день",
    "PART_TIME": "Гибкий график",
    "REMOTE_JOB": "Удаленная работа"
}

export function InitWorkHours(value) {
    return WorkTypes[value]
}

