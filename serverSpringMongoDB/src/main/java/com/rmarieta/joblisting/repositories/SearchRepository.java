package com.rmarieta.joblisting.repositories;

import com.rmarieta.joblisting.controllers.models.Post;

import java.util.List;

public interface SearchRepository {

    List<Post> findByText(String text);
}
