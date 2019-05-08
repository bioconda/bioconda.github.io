:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-compass'
.. highlight: bash

bioconductor-compass
====================

.. conda:recipe:: bioconductor-compass
   :replaces_section_title:

   COMPASS is a statistical framework that enables unbiased analysis of antigen\-specific T\-cell subsets. COMPASS uses a Bayesian hierarchical framework to model all observed cell\-subsets and select the most likely to be antigen\-specific while regularizing the small cell counts that often arise in multi\-parameter space. The model provides a posterior probability of specificity for each cell subset and each sample\, which can be used to profile a subject\'s immune response to external stimuli such as infection or vaccination.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/COMPASS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-compass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compass/meta.yaml>`_
   :links: biotools: :biotools:`compass`, doi: :doi:`10.1038/nbt.3187`

   


.. conda:package:: bioconductor-compass

   |downloads_bioconductor-compass| |docker_bioconductor-compass|

   :versions: 1.22.0-0, 1.20.1-0, 1.20.0-0, 1.18.1-0, 1.18.0-0, 1.16.0-0
   
   :depends bioconductor-biocstyle: >=2.12.0,<2.13.0
   :depends libcxx: >=4.0.1
   :depends r-abind: 
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-clue: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-knitr: 
   :depends r-magrittr: 
   :depends r-pdist: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: >=0.11.0
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-rmarkdown: 
   :depends r-scales: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-compass

   and update with::

      conda update bioconductor-compass

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-compass:<tag>

   (see `bioconductor-compass/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-compass| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-compass.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-compass| image:: https://quay.io/repository/biocontainers/bioconductor-compass/status
   :target: https://quay.io/repository/biocontainers/bioconductor-compass
.. _`bioconductor-compass/tags`: https://quay.io/repository/biocontainers/bioconductor-compass?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-compass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-compass/README.html