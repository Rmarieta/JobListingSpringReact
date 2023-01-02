package com.rmarieta.joblisting.repositories;

import com.rmarieta.joblisting.controllers.models.Post;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PostRepository extends MongoRepository<Post, String> {

}
