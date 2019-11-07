:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-melissa'
.. highlight: bash

bioconductor-melissa
====================

.. conda:recipe:: bioconductor-melissa
   :replaces_section_title:

   Bayesian clustering and imputationa of single cell methylomes

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/Melissa.html
   :license: GPL-3 | file LICENSE
   :recipe: /`bioconductor-melissa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-melissa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-melissa/meta.yaml>`_

   Melissa is a Baysian probabilistic model for jointly clustering and imputing single cell methylomes. This is done by taking into account local correlations via a Generalised Linear Model approach and global similarities using a mixture modelling approach.


.. conda:package:: bioconductor-melissa

   |downloads_bioconductor-melissa| |docker_bioconductor-melissa|

   :versions: 1.2.0-0, 1.0.0-1
   
   :depends bioconductor-biocstyle: >=2.14.0,<2.15.0
   :depends bioconductor-bprmeth: >=1.12.0,<1.13.0
   :depends bioconductor-genomicranges: >=1.38.0,<1.39.0
   :depends r-assertthat: 
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-clues: 
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-magrittr: 
   :depends r-matrixcalc: 
   :depends r-mcmcpack: 
   :depends r-mvtnorm: 
   :depends r-rocr: 
   :depends r-truncnorm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-melissa

   and update with::

      conda update bioconductor-melissa

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-melissa:<tag>

   (see `bioconductor-melissa/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-melissa| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-melissa.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-melissa
   :alt:   (downloads)
.. |docker_bioconductor-melissa| image:: https://quay.io/repository/biocontainers/bioconductor-melissa/status
   :target: https://quay.io/repository/biocontainers/bioconductor-melissa
.. _`bioconductor-melissa/tags`: https://quay.io/repository/biocontainers/bioconductor-melissa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-melissa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-melissa/README.html