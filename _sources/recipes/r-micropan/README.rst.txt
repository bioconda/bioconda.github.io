:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-micropan'
.. highlight: bash

r-micropan
==========

.. conda:recipe:: r-micropan
   :replaces_section_title:

   A collection of functions for computations and visualizations of microbial pan\-genomes.

   :homepage: https://CRAN.R-project.org/package=micropan
   :license: GPL2 / GPL-2
   :recipe: /`r-micropan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-micropan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-micropan/meta.yaml>`_
   :links: biotools: :biotools:`micropan`, doi: :doi:`10.1186/s12859-015-0517-0`

   


.. conda:package:: r-micropan

   |downloads_r-micropan| |docker_r-micropan|

   :versions: 1.2-1, 1.2-0, 1.1.2-0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libstdcxx-ng: >=7.3.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-bh: 
   
   :depends r-igraph: 
   
   :depends r-microseq: 
   
   :depends r-rcpp: >=0.12.0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-micropan

   and update with::

      conda update r-micropan

   or use the docker container::

      docker pull quay.io/repository/biocontainers/r-micropan:<tag>

   (see `r-micropan/tags`_ for valid values for ``<tag>``)


.. |downloads_r-micropan| image:: https://img.shields.io/conda/dn/bioconda/r-micropan.svg?style=flat
   :alt:   (downloads)
.. |docker_r-micropan| image:: https://quay.io/repository/biocontainers/r-micropan/status
   :target: https://quay.io/repository/biocontainers/r-micropan
.. _`r-micropan/tags`: https://quay.io/repository/biocontainers/r-micropan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-micropan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-micropan/README.html