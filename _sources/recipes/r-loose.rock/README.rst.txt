:orphan:  .. only available via index, not via toctree

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

   :versions: 1.0.13-1, 1.0.13-0, 1.0.12-0, 1.0.9-0
   
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-digest: 
   :depends r-dplyr: 
   :depends r-futile.options: 
   :depends r-ggplot2: 
   :depends r-mass: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-loose.rock

   and update with::

      conda update r-loose.rock

   or use the docker container::

      docker pull quay.io/biocontainers/r-loose.rock:<tag>

   (see `r-loose.rock/tags`_ for valid values for ``<tag>``)


.. |downloads_r-loose.rock| image:: https://img.shields.io/conda/dn/bioconda/r-loose.rock.svg?style=flat
   :target: https://anaconda.org/bioconda/r-loose.rock
   :alt:   (downloads)
.. |docker_r-loose.rock| image:: https://quay.io/repository/biocontainers/r-loose.rock/status
   :target: https://quay.io/repository/biocontainers/r-loose.rock
.. _`r-loose.rock/tags`: https://quay.io/repository/biocontainers/r-loose.rock?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-loose.rock/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-loose.rock/README.html