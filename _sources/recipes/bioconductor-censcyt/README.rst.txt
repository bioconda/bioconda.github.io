:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-censcyt'
.. highlight: bash

bioconductor-censcyt
====================

.. conda:recipe:: bioconductor-censcyt
   :replaces_section_title:
   :noindex:

   Differential abundance analysis with a right censored covariate in high\-dimensional cytometry

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/censcyt.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-censcyt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-censcyt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-censcyt/meta.yaml>`_

   Methods for differential abundance analysis in high\-dimensional cytometry data when a covariate is subject to right censoring \(e.g. survival time\) based on multiple imputation and generalized linear mixed models.


.. conda:package:: bioconductor-censcyt

   |downloads_bioconductor-censcyt| |docker_bioconductor-censcyt|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-diffcyt: ``>=1.12.0,<1.13.0``
   :depends bioconductor-edger: ``>=3.34.0,<3.35.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-broom.mixed: 
   :depends r-dirmult: 
   :depends r-dplyr: 
   :depends r-fitdistrplus: 
   :depends r-lme4: 
   :depends r-magrittr: 
   :depends r-mass: 
   :depends r-mice: 
   :depends r-multcomp: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-stringr: 
   :depends r-survival: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-censcyt

   and update with::

      conda update bioconductor-censcyt

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-censcyt:<tag>

   (see `bioconductor-censcyt/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-censcyt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-censcyt.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-censcyt
   :alt:   (downloads)
.. |docker_bioconductor-censcyt| image:: https://quay.io/repository/biocontainers/bioconductor-censcyt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-censcyt
.. _`bioconductor-censcyt/tags`: https://quay.io/repository/biocontainers/bioconductor-censcyt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-censcyt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-censcyt/README.html