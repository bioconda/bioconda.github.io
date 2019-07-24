:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cnpbayes'
.. highlight: bash

bioconductor-cnpbayes
=====================

.. conda:recipe:: bioconductor-cnpbayes
   :replaces_section_title:

   Bayesian hierarchical mixture models for batch effects and copy number.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/CNPBayes.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cnpbayes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnpbayes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cnpbayes/meta.yaml>`_

   


.. conda:package:: bioconductor-cnpbayes

   |downloads_bioconductor-cnpbayes| |docker_bioconductor-cnpbayes|

   :versions: 1.13.5-1, 1.12.0-0
   
   :depends bioconductor-biocgenerics: >=0.30.0,<0.31.0
   :depends bioconductor-genomeinfodb: >=1.20.0,<1.21.0
   :depends bioconductor-genomicranges: >=1.36.0,<1.37.0
   :depends bioconductor-iranges: >=2.18.0,<2.19.0
   :depends bioconductor-s4vectors: >=0.22.0,<0.23.0
   :depends bioconductor-summarizedexperiment: >=1.14.0,<1.15.0
   :depends libcxx: >=4.0.1
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-coda: 
   :depends r-combinat: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-gtools: 
   :depends r-magrittr: 
   :depends r-matrixstats: 
   :depends r-mclust: 
   :depends r-purrr: 
   :depends r-rcolorbrewer: 
   :depends r-rcpp: >=0.12.1
   :depends r-rcpparmadillo: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cnpbayes

   and update with::

      conda update bioconductor-cnpbayes

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cnpbayes:<tag>

   (see `bioconductor-cnpbayes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cnpbayes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cnpbayes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cnpbayes
   :alt:   (downloads)
.. |docker_bioconductor-cnpbayes| image:: https://quay.io/repository/biocontainers/bioconductor-cnpbayes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cnpbayes
.. _`bioconductor-cnpbayes/tags`: https://quay.io/repository/biocontainers/bioconductor-cnpbayes?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cnpbayes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cnpbayes/README.html