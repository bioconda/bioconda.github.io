:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-poppr'
.. highlight: bash

r-poppr
=======

.. conda:recipe:: r-poppr
   :replaces_section_title:

   An R package for genetic analysis of populations with mixed \(clonal\/sexual\) reproduction

   :homepage: https://github.com/grunwaldlab/poppr
   :license: GPL (>= 2)
   :recipe: /`r-poppr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-poppr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-poppr/meta.yaml>`_

   


.. conda:package:: r-poppr

   |downloads_r-poppr| |docker_r-poppr|

   :versions: 2.8.4-0, 2.8.3-0, 2.8.2-0, 2.8.1-1, 2.8.1-0
   
   :depends libgcc-ng: >=7.3.0
   :depends r-ade4: 
   :depends r-adegenet: 
   :depends r-ape: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-boot: 
   :depends r-cowplot: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-knitr: 
   :depends r-magrittr: 
   :depends r-pegas: 
   :depends r-phangorn: 
   :depends r-polysat: 
   :depends r-rlang: 
   :depends r-rmarkdown: 
   :depends r-shiny: 
   :depends r-testthat: 
   :depends r-vegan: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-poppr

   and update with::

      conda update r-poppr

   or use the docker container::

      docker pull quay.io/biocontainers/r-poppr:<tag>

   (see `r-poppr/tags`_ for valid values for ``<tag>``)


.. |downloads_r-poppr| image:: https://img.shields.io/conda/dn/bioconda/r-poppr.svg?style=flat
   :target: https://anaconda.org/bioconda/r-poppr
   :alt:   (downloads)
.. |docker_r-poppr| image:: https://quay.io/repository/biocontainers/r-poppr/status
   :target: https://quay.io/repository/biocontainers/r-poppr
.. _`r-poppr/tags`: https://quay.io/repository/biocontainers/r-poppr?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-poppr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-poppr/README.html