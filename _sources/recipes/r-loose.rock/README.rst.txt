.. title:: Package Recipe 'r-loose.rock'
.. highlight: bash


r-loose.rock
============

.. conda:recipe:: r-loose.rock
   :replaces_section_title:

   Collection of functions to improve work\-flow in survival analysis and data science. The package features include\: the generation of balanced datasets\, live retrieval of  protein coding genes from two public databases\, generation of random  matrix based on covariance matrix\, cache function to store function results. This work was supported by two grants from the Portuguese Foundation for Science and technology\, and the EU Commission under SOUND project.

   :homepage: https://www.github.com/averissimo/loose.rock
   :license: GPL3 / GPL (>= 3)
   :recipe: /`r-loose.rock <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-loose.rock>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-loose.rock/meta.yaml>`_

   


.. conda:package:: r-loose.rock

   |downloads_r-loose.rock| |docker_r-loose.rock|

   :versions: 1.0.9

   :depends: :conda:package:`bioconductor-biomart`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-digest`  :conda:package:`r-dplyr`  :conda:package:`r-futile.options`  :conda:package:`r-ggfortify`  :conda:package:`r-ggplot2`  :conda:package:`r-mass`  :conda:package:`r-reshape2`  :conda:package:`r-rlang`  

   :required~by: |required_by_r-loose.rock|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-loose.rock

   and update with::

      conda update r-loose.rock

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-loose.rock


.. |required_by_r-loose.rock| conda:required_by:: r-loose.rock
.. |downloads_r-loose.rock| image:: https://img.shields.io/conda/dn/bioconda/r-loose.rock.svg?style=flat
   :alt:   (downloads)
.. |docker_r-loose.rock| image:: https://quay.io/repository/biocontainers/r-loose.rock/status
   :target: https://quay.io/repository/biocontainers/r-loose.rock







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-loose.rock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-loose.rock/README.html

