import express from "express";
import {
  addReview,
  editCourse,
  getAllCourses,
  getCourseByUser,
  getMostPopularCourses,
  getSingleCourse,
  uploadCourse,
} from "../controllers/course.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import upload from "../middleware/upload";
const courseRouter = express.Router();

courseRouter.post(
  "/create-course",
  isAuthenticated,
  authorizeRoles("user"),
  uploadCourse
);

courseRouter.get("/courses", getAllCourses);
courseRouter.get("/popular-courses", getMostPopularCourses);

// courseRouter.put("/add-questions", isAuthenticated, addQuestion);

courseRouter.get("/get-course-content/:id", isAuthenticated, getCourseByUser);

courseRouter.get("/courses/:id", getSingleCourse);

courseRouter.patch(
  "/edit-course/:id",
  isAuthenticated,
  authorizeRoles("user"),
  upload.single("thumbnail"),
  editCourse
);

courseRouter.put("/add-review/:id", isAuthenticated,addReview)

export default courseRouter;
