package com.rmarieta.joblisting.controllers;

import com.rmarieta.joblisting.controllers.models.Post;
import com.rmarieta.joblisting.repositories.PostRepository;
import com.rmarieta.joblisting.repositories.SearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class PostController {

    @Autowired
    PostRepository repo;
    @Autowired
    SearchRepository searchRepo;

    @GetMapping("/allPosts")
    public List<Post> getAllPost() {
        return repo.findAll();
    }

    @GetMapping("/allPosts/{text}")
    public List<Post> search(@PathVariable String text) {
        return searchRepo.findByText(text);
    }

    @PostMapping("/post")
    public Post addPost(@RequestBody Post post) {
        return repo.save(post);
    }
}
