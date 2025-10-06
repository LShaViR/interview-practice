const createJob = async () => {
  for (let i = 0; i < 50; i++) {
    try {
      const reqs = [];

      for (let j = 0; j < 1000; j++) {
        const req = fetch(
          "https://wwats25.el.r.appspot.com/api/job/createJob",
          {
            headers: {
              accept: "application/json, text/plain, */*",
              "accept-language": "en-US,en;q=0.9",
              authorization:
                "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjUwMDZlMjc5MTVhMTcwYWIyNmIxZWUzYjgxZDExNjU0MmYxMjRmMjAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTG91aXNlIFRvbWxpbnNvbiIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS92bXNwcm9qZWN0LWY2NTVmIiwiYXVkIjoidm1zcHJvamVjdC1mNjU1ZiIsImF1dGhfdGltZSI6MTc1ODY0ODUyMSwidXNlcl9pZCI6ImR5d2dJYVZkbUVVV2ZUQlJWbkRoZHNkVUtFOTMiLCJzdWIiOiJkeXdnSWFWZG1FVVdmVEJSVm5EaGRzZFVLRTkzIiwiaWF0IjoxNzU4NjQ4NTIxLCJleHAiOjE3NTg2NTIxMjEsImVtYWlsIjoia2FwaWwuYmhhcmR3YWorNzBAcHJvc28uYWkiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsia2FwaWwuYmhhcmR3YWorNzBAcHJvc28uYWkiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.LlEDRvRNNVKMAFZbAE-vVLT4Db2Gp9o0zZT_69GSo_FABiWZQjAlC03Mr9d4pjQI-E62oKLpFJ_13omy3euU-fYKruqYk9bC3xUhBd762oJpHlVa3dwcFKloi7Sc1QZQxQAHjmMT7CeKa-_WFti3b__1iJJDyfBaW0It4iNjPz5nBHFbKeAj2vO5qlvkFn47JN-ERC4L0JCeXz3ulzvuTbrqAcRbfsocd8DyR-BNqXkSyCLXk8WmBN3VOaAb6EYDXjIxr3Xb6ZIkcWzgkA-PLi6BrX2ly26zRxJ5050zTWA-XyddCygPVGOjds5uzrg7bS2bF-c5tfdvnE9JvNtY7A",
              "cache-control": "no-cache",
              "content-type": "application/json",
              pragma: "no-cache",
              priority: "u=1, i",
              "sec-ch-ua":
                '"Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"',
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": '"Windows"',
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "cross-site",
              Referer: "https://ww-fe-ats-git-dev-workwall.vercel.app/",
            },
            body: `{"title":"job ${i}${j} ","description":"jd","priority":"${["HIGH", "MEDIUM", "LOW"][Math.floor(Math.random() * 2.99)]}","industry":"finance","client_id":"eba9d219-aad7-4bbe-9156-51dc0da420f1","country":"IN","state":"Delhi","city":"Delhi","employment_type":"PERMANENT","job_type":"FULL_TIME","position_count":20,"budget_currency":"USD","budget_type":"ANNUALLY","budget_min":20000,"budget_max":30000,"status":"CLOSED","pipeline_id":"ade1f355-6e28-4756-a794-847e47725294","recruiter_id":"OWBpZHRcvFNh3JoRs8k0B8woeSR2","internal_notes":"na","work_mode":"ON_SITE","experience_min":12,"experience_max":24,"deadline":"2025-09-24"}`,
            method: "POST",
          },
        );
        reqs.push(req);
      }
      console.log(i);
    } catch (err) {
      continue;
    }
  }
};
const getAllJob = async () => {
  const res: any = await fetch(
    "https://wwats25.el.r.appspot.com/api/job/getAllJob",
    {
      headers: {
        accept: "application/json, text/plain, */*",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        authorization:
          "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjUwMDZlMjc5MTVhMTcwYWIyNmIxZWUzYjgxZDExNjU0MmYxMjRmMjAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTG91aXNlIFRvbWxpbnNvbiIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS92bXNwcm9qZWN0LWY2NTVmIiwiYXVkIjoidm1zcHJvamVjdC1mNjU1ZiIsImF1dGhfdGltZSI6MTc1ODY0OTQ5NSwidXNlcl9pZCI6ImR5d2dJYVZkbUVVV2ZUQlJWbkRoZHNkVUtFOTMiLCJzdWIiOiJkeXdnSWFWZG1FVVdmVEJSVm5EaGRzZFVLRTkzIiwiaWF0IjoxNzU4NjQ5NDk1LCJleHAiOjE3NTg2NTMwOTUsImVtYWlsIjoia2FwaWwuYmhhcmR3YWorNzBAcHJvc28uYWkiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsia2FwaWwuYmhhcmR3YWorNzBAcHJvc28uYWkiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.X-aWd0vQ8C0WiQwDa6nOerHPY43gnVDMLPIrUIXEcEfc23w3ZYBMgb53FnOEPfDRKcpaBXhlVFhkVTFD_nPd1dsnAGnNjhPqC-3-eNJuRLa5ZWaVrWcqXU9NCm5oOxpzc9ast5U1szDiSbc9UGNuri2YYDfXLQjOqrEYuMklcWItZ6iXaFZvJhHyMGGP9Gq96NCwfQ_uWBqTE_Y-ZKycnluz9pI6ekVlt3FtfQgUxYqH_4bkym0PCAJFiuT836V_2ZK3Y4dNJbEsJRUTNheAIgENmdpe8Nj1BvtOJ7Nz6WssOfwn_oe17hk0ZqHd8aDMgyVMMHPHccuJaswUdO56gg",
        "if-none-match": 'W/"c506-py9LhYNgEixaFdMExpm/yAnUaCw"',
        priority: "u=1, i",
        "sec-ch-ua":
          '"Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
      },
      referrer: "https://ww-fe-ats-git-dev-workwall.vercel.app/",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "include",
    },
  );
  const resJson = await res.json();
  return resJson.data.map((dat: any) => dat.job_id);
};
const deleteJob = async () => {
  const ids = await getAllJob();
  for (let i = 0; i < ids.length; i++) {
    try {
      const dels = [];
      for (let j = 0; j < 100; i++, j++) {
        const del = fetch(
          "https://wwats25.el.r.appspot.com/api/job/" + ids[i],
          {
            headers: {
              accept: "application/json, text/plain, */*",
              "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
              authorization:
                "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjUwMDZlMjc5MTVhMTcwYWIyNmIxZWUzYjgxZDExNjU0MmYxMjRmMjAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTG91aXNlIFRvbWxpbnNvbiIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS92bXNwcm9qZWN0LWY2NTVmIiwiYXVkIjoidm1zcHJvamVjdC1mNjU1ZiIsImF1dGhfdGltZSI6MTc1ODY0OTQ5NSwidXNlcl9pZCI6ImR5d2dJYVZkbUVVV2ZUQlJWbkRoZHNkVUtFOTMiLCJzdWIiOiJkeXdnSWFWZG1FVVdmVEJSVm5EaGRzZFVLRTkzIiwiaWF0IjoxNzU4NjQ5NDk1LCJleHAiOjE3NTg2NTMwOTUsImVtYWlsIjoia2FwaWwuYmhhcmR3YWorNzBAcHJvc28uYWkiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsia2FwaWwuYmhhcmR3YWorNzBAcHJvc28uYWkiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.X-aWd0vQ8C0WiQwDa6nOerHPY43gnVDMLPIrUIXEcEfc23w3ZYBMgb53FnOEPfDRKcpaBXhlVFhkVTFD_nPd1dsnAGnNjhPqC-3-eNJuRLa5ZWaVrWcqXU9NCm5oOxpzc9ast5U1szDiSbc9UGNuri2YYDfXLQjOqrEYuMklcWItZ6iXaFZvJhHyMGGP9Gq96NCwfQ_uWBqTE_Y-ZKycnluz9pI6ekVlt3FtfQgUxYqH_4bkym0PCAJFiuT836V_2ZK3Y4dNJbEsJRUTNheAIgENmdpe8Nj1BvtOJ7Nz6WssOfwn_oe17hk0ZqHd8aDMgyVMMHPHccuJaswUdO56gg",
              priority: "u=1, i",
              "sec-ch-ua":
                '"Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"',
              "sec-ch-ua-mobile": "?0",
              "sec-ch-ua-platform": '"Windows"',
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "cross-site",
              Referer: "https://ww-fe-ats-git-dev-workwall.vercel.app/",
            },
            body: null,
            method: "DELETE",
          },
        );
        dels.push(del);
      }
      console.log(i);
      await Promise.all(dels);
    } catch (err) {
      continue;
    }
  }
};
deleteJob();
