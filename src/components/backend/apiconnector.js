import { wait } from "@testing-library/react";
import { API, API2 } from "./index.js";

export const getAllCompanies = async (page, selectedFilter) => {
  try {
    const reqbody = { filter: selectedFilter,page:page };
    const response = await fetch(`${API2}/company/all`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(reqbody),
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const getCompany = async (id) => {
  try {
    const response = await fetch(`${API2}/company/get`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};

// questions

export const getQuestionsByRole = async (id) => {
  try{
    var promise = await fetch(`${API}/api/questions/${id}`)
    var data = await promise.json();
    return data;
  } catch(err){
    return err;
  }

}

export const getProfile = async (email) => {
  try {
    var tokens = JSON.parse(localStorage.getItem("student-nation.com-tokens"))
    const response = await fetch(`${API}/profile/getprofile`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Authorization": `Basic ${tokens.accessToken}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    return response.json();
  } catch (err) {
    return console.log(err);
  }
};

export const updateProfile = async (profile) => {
  try {
    const response = await fetch(`${API}/profile/updateprofile`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(profile),
    });
    return response.json();
  } catch (error) {
    return console.log(error);
  }
};

export const signUp = async (user) => {
  try {
    const response = await fetch(`${API}/profile/register`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        firstname: user.firstname,
        lastname: user.lastname,
        phone: user.phone,
        email: user.email,
        password: user.password,
        school: user.school,
        gradyear: user.gradyear,
        degree: user.degree,
        stream: user.stream
      }),
    });
    return response.json();
  } catch (error) {
    return JSON.stringify(error);
  }
};

export const verifyEmail = async (token) => {
  try {
    const response = await fetch(`${API}/auth/verifyaccount`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        token: token
      }),
    });
    return response.json();
  } catch (error) {
    return console.log(error);
  }
};

export const resendEmail = async (email) => {
  try {
    const response = await fetch(`${API}/auth/resendemail`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    return response.json();
  } catch (error) {
    return console.log(error);
  }
};

export const signin = async (user) => {
  console.log("called")
  try {
    let response = await fetch(`${API}/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
    console.log(response)
    return response.json()
  } catch (err) {
    console.log(err);
    return err;
  }
}

export const getOpenings = async (filter="India",page=1) => {
  try {
    var promise = await fetch(`${API2}/jobs/all`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        filter,
        page
      }),
    })
    const data = await promise.json()
    return data.companies;
  } catch (err){
    return err;
  }
}

export const getJobOpening = async (id) => {
  try {
    var promise = await fetch(`${API2}/jobs/getJob/${id}`)
    const data = await promise.json()
    return data.company;
  } catch(err){
    return err;
  }
}

export const getAssignmentRoles = async () => {
  try {
    var promise = await fetch(`${API}/api/roles`)
    var data = await promise.json();
    return data;
  } catch (err) {
    return err;
  }
}

export const updatePreferenceRoles = async (id, roles) => {
  try {
    var promise = await fetch(`${API}/profile/preferences/roles`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({userid: id, roles: roles})
    })
    return promise.json();
  } catch (err) {
    return err;
  }
}

export const updatePreferenceExp = async (id, exp) => {
  try {
    var promise = await fetch(`${API}/profile/preferences/experience`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({userid: id, experience: exp})
    })
    return promise.json();
  } catch (err) {
    return err;
  }
}

export const updatePreferenceSkills = async (id, skills) => {
  try {
    var promise = await fetch(`${API}/profile/preferences/skills`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({userid: id, skills: skills})
    })
    return promise.json();
  } catch (err) {
    return err;
  }
}

export const updatePreferenceLoc = async (id, location) => {
  try {
    var promise = await fetch(`${API}/profile/preferences/location`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({userid: id, location: location})
    })
    return promise.json();
  } catch (err) {
    return err;
  }
}

export const AddElsewhere = async (data) => {
  try {
    var promise = await fetch(`${API}/profile/links`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
    return promise.json();
  } catch (err) {
    return err;
  }
}

export const AddExperience = async (data) => {
  try {
    var promise = await fetch(`${API}/profile/experience`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
    return promise.json();
  } catch (err){
    return err;
  }
}

export const UpdateExperience = async (data) => {
  try {
    var promise = await fetch(`${API}/profile/updateexp`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
    return promise.json();
  } catch (err){
    return err;
  }
}

export const RemoveExperience = async (id) => {
  try {
    var promise = await fetch(`${API}/profile/experience/${id}`, {
      method: "DELETE"
    })
    return promise.json()
  } catch(err) {
    return err;
  }
}

export const GetExpByUserId = async (id) => {
  try {
    var promise = await fetch(`${API}/profile/profile/experience/${id}`)
    return promise.json();
  } catch (err){
     return err;
  }
}

export const CreateAssign = async (assign) => {
  try {
    var promise = await fetch(`${API}/api/assignment`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify(assign)
    })
    return promise.json();
  } catch (err) {
    return err;
  }
}

export const GetAssign = async (id) => {
  try {
    var promise = await fetch(`${API}/api/assignment/${id}`)
    return promise.json()
  } catch (err) {
    return err;
  }
}

export const UpdateAssign = async (q, id) => {
  try {
    var promise = await fetch(`${API}/api/assignment/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify(q)
    })
    return promise.json();
  } catch (err) {
    return err;
  }
}

export const getUpcomingEvents = async (filter="India",page=1) => {
  try {
    var promise = await fetch(`${API2}/upevents/all`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        filter,
        page
      }),
    })
    const data = await promise.json()
    return data.companies;
  } catch (err){
    return err;
  }
}

export const getEvents = async (filter="India",page=1) => {
  try {
    var promise = await fetch(`${API2}/events/all`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        filter,
        page
      }),
    })
    const data = await promise.json()
    return data.events;
  } catch (err){
    return err;
  }
}

export function parseJwt (token) {
  if(token){
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  }
};

// recemendations
export const recemendations = async () => {
  try {
    var promise = await fetch("https://young-beyond-99611.herokuapp.com/")
    const data = await promise.json()
    return data
  } catch (err) {
    return "Error";
  }
}
