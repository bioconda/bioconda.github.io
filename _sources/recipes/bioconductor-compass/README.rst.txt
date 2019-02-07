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

   :versions: 1.20.0, 1.18.1, 1.18.0, 1.16.0

   :depends: :conda:package:`bioconductor-biocstyle` >=2.10.0,<2.11.0 :conda:package:`libgcc-ng` >=7.3.0 :conda:package:`libstdcxx-ng` >=7.3.0 :conda:package:`r-abind`  :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-clue`  :conda:package:`r-data.table`  :conda:package:`r-dplyr`  :conda:package:`r-knitr`  :conda:package:`r-magrittr`  :conda:package:`r-pdist`  :conda:package:`r-plyr`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-rcpp` >=0.11.0 :conda:package:`r-reshape2`  :conda:package:`r-rlang`  :conda:package:`r-rmarkdown`  :conda:package:`r-scales`  :conda:package:`r-tidyr`  

   :required~by: |required_by_bioconductor-compass|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-compass

   and update with::

      conda update bioconductor-compass

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-compass


.. |required_by_bioconductor-compass| conda:required_by:: bioconductor-compass
.. |downloads_bioconductor-compass| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-compass.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-compass| image:: https://quay.io/repository/biocontainers/bioconductor-compass/status
   :target: https://quay.io/repository/biocontainers/bioconductor-compass







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-compass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-compass/README.html

