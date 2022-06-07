const mongoose = require("mongoose");
const Job = mongoose.model(process.env.JOB_MODEL);

const getAll = (req, res) => {
    Job.find().exec((err, jobs) => {
        console.log("Found jobs, jobs");
        res.status(200).json(jobs);
    });
}

const getOne = (req, res) => {
    const jobId = req.params.jobId;
    Job.findById(jobId).exec((err, job) => {
        const response = {
            status: 200,
            message: job
        }
        if (err) {
            console.log("Error finding Job");
            response.status = 500;
            response.message = err;
        }
        res.status(response.status).json(response.message);
    });
}

const addOne = (req, res) => {
    console.log("Adding job");
    const newJob = {
        title: req.body.title,
        salary: req.body.salary,
        location: {},
        description: req.body.description,
        experience: req.body.experience,
        skills: [],
        postDate: Date.now()
    };
    Job.create(newJob, (err, job) => {
        const response = { status: 200, message: job};
        if (err) {
            console.log("Error saving job: " + err);
            response.status = 500;
            response.message = err;
        }
        res.status(response.status).json(response.message);
    });
}

const deleteOne = (req, res) => {
    console.log("Deleting one job");
    const jobId = req.params.jobId;
    if (jobId) {
        Job.findByIdAndDelete(jobId).exec((err, deleteJob) => {
            const response = { status: 200, message: deleteJob };
            if (err) {
                response.status = 500;
                response.message = err;
            }
            res.status(response.status).json(response.message);
        });
    }
}

const _updateOne = (req, res, updateJobCallback) => {
    console.log("Update One Job Controller");
    const jobId = req.params.jobId;
    Job.findById(jobId).exec((err, job) => {
        const response = { status:200, message:job };
        if (err) {
            console.log("Error finding job");
            response.status = 500;
            response.message = err;
        }
        updateJobCallback(req, res, job, response);
        // if (response.status !== 204) {
        //     res.status(response.status).json(response.message);
        // } else {
        //     updateJobCallback(req, res, job, response);
        // }
    });
}

const partialUpdateOne = (req, res) => {
    console.log("Partial Update One Job Controller");
    jobUpdate = (req, res, job, response) => {
        if (req.body.title) { job.title = req.body.title; }
        if (req.body.salary) { job.salary = req.body.salary; }
        if (req.body.location) { job.location = req.body.location; }
        if (req.body.description) {job.description = req.body.description;}
        if (req.body.experience) { job.experience = req.body.experience; }
        if (req.body.skills) { job.skills = req.body.skills; }
        if (req.body.postDate) { job.postDate = req.body.postDate; }
        job.save((err, updatedJob) => {
            if (err) {
                response.status = 500;
                response.message = err;
            }
            res.status(response.status).json(response.message);
        });
    }
    _updateOne(req, res, jobUpdate);
    
}

const fullUpdateOne = (req, res) => {
    console.log("Full Update One Job Controller");
    jobUpdate = (req, res, job, response) => {
        job.title = req.body.title;
        job.salary = parseInt(req.body.salary);
        job.location = req.body.location;
        job.description = req.body.description;
        job.experience = parseInt(req.body.experience);
        job.skills = [];
        job.postDate = Date.now();
        job.save((err, updatedJob) => {
            if (err) {
                response.status = 500;
                response.message = err;
            }
            res.status(response.status).json(response.message);
        });
    }
    _updateOne(req, res, jobUpdate);
}

module.exports = {
    getAll,
    getOne,
    addOne,
    deleteOne,
    partialUpdateOne,
    fullUpdateOne
}
