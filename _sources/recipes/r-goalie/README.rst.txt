:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-goalie'
.. highlight: bash

r-goalie
========

.. conda:recipe:: r-goalie
   :replaces_section_title:

   Assertive check functions for defensive R programming. goalie is an attempt to incorporate elements of multiple assertive check packages into a single package with as few dependencies as possible. All assertive checks are written in the most basic R code possible\, without reliance on compilation \(e.g. C\+\+\/Rcpp\). It is still a work in progress\, and feature requests are welcome.

   :homepage: https://github.com/steinbaugh/goalie
   :license: MIT / MIT
   :recipe: /`r-goalie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-goalie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-goalie/meta.yaml>`_

   


.. conda:package:: r-goalie

   |downloads_r-goalie| |docker_r-goalie|

   :versions: 0.2.8-0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-curl: >=3.2.*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-goalie

   and update with::

      conda update r-goalie

   or use the docker container::

      docker pull quay.io/biocontainers/r-goalie:<tag>

   (see `r-goalie/tags`_ for valid values for ``<tag>``)


.. |downloads_r-goalie| image:: https://img.shields.io/conda/dn/bioconda/r-goalie.svg?style=flat
   :alt:   (downloads)
.. |docker_r-goalie| image:: https://quay.io/repository/biocontainers/r-goalie/status
   :target: https://quay.io/repository/biocontainers/r-goalie
.. _`r-goalie/tags`: https://quay.io/repository/biocontainers/r-goalie?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-goalie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-goalie/README.html