import express from 'express';

import {
  getUserController,
  postUserController,
  updateUserController, 
  getUserNameController, 
  getUserReviewsController,
  getGivenReviewsController,
  getReceivedReviewsController,
  upgradeUserController,
  getUserDataController, 
  getUserReviewsByListing, 
  postReview, 
  updateHostRating, 
  updateGuestRating
} from './usersController';

const router = express.Router();

router.route('/getUser')
  .get(getUserController)

router.route('/postUser')
  .post(postUserController)

router.route('/editUser')
  .put(updateUserController)

router.route('/getUserName') 
  .get(getUserNameController); 

router.route('/getUserReviews') 
  .get(getUserReviewsController); 

// router.route('/getGivenReviews')
//   .get(getGivenReviewsController);

// router.route('/getReceivedReviews')
//   .get(getReceivedReviewsController);

router.route('/upgradeUser')
  .put(upgradeUserController)
  
router.route('/getUserData') 
  .get(getUserDataController); 

router.route('/getUserReviewsByListing')
  .get(getUserReviewsByListing)

router.route('/postReview')
  .post(postReview); 

router.route('/updateHostRating')
  .put(updateHostRating)

router.route('/updateGuestRating') 
  .put(updateGuestRating)

export default router;