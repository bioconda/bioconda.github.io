:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mfa'
.. highlight: bash

bioconductor-mfa
================

.. conda:recipe:: bioconductor-mfa
   :replaces_section_title:

   MFA models genomic bifurcations using a Bayesian hierarchical mixture of factor analysers.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/mfa.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-mfa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mfa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mfa/meta.yaml>`_

   


.. conda:package:: bioconductor-mfa

   |downloads_bioconductor-mfa| |docker_bioconductor-mfa|

   :versions: 1.4.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends libcxx: >=4.0.1
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-coda: 
   
   :depends r-dplyr: 
   
   :depends r-ggmcmc: 
   
   :depends r-ggplot2: 
   
   :depends r-magrittr: 
   
   :depends r-mcmcglmm: 
   
   :depends r-mcmcpack: 
   
   :depends r-rcpp: 
   
   :depends r-tibble: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mfa

   and update with::

      conda update bioconductor-mfa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mfa:<tag>

   (see `bioconductor-mfa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mfa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mfa.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mfa| image:: https://quay.io/repository/biocontainers/bioconductor-mfa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mfa
.. _`bioconductor-mfa/tags`: https://quay.io/repository/biocontainers/bioconductor-mfa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mfa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mfa/README.html