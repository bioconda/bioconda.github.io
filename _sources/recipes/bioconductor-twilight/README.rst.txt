:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-twilight'
.. highlight: bash

bioconductor-twilight
=====================

.. conda:recipe:: bioconductor-twilight
   :replaces_section_title:

   In a typical microarray setting with gene expression data observed under two conditions\, the local false discovery rate describes the probability that a gene is not differentially expressed between the two conditions given its corrresponding observed score or p\-value level. The resulting curve of p\-values versus local false discovery rate offers an insight into the twilight zone between clear differential and clear non\-differential gene expression. Package \'twilight\' contains two main functions\: Function twilight.pval performs a two\-condition test on differences in means for a given input matrix or expression set and computes permutation based p\-values. Function twilight performs a stochastic downhill search to estimate local false discovery rates and effect size distributions. The package further provides means to filter for permutations that describe the null distribution correctly. Using filtered permutations\, the influence of hidden confounders could be diminished.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/twilight.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-twilight <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-twilight>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-twilight/meta.yaml>`_
   :links: biotools: :biotools:`twilight`, doi: :doi:`10.1093/bioinformatics/bti436`

   


.. conda:package:: bioconductor-twilight

   |downloads_bioconductor-twilight| |docker_bioconductor-twilight|

   :versions: 1.58.0-1, 1.58.0-0, 1.56.0-0, 1.54.0-0, 1.52.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-twilight

   and update with::

      conda update bioconductor-twilight

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-twilight:<tag>

   (see `bioconductor-twilight/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-twilight| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-twilight.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-twilight| image:: https://quay.io/repository/biocontainers/bioconductor-twilight/status
   :target: https://quay.io/repository/biocontainers/bioconductor-twilight
.. _`bioconductor-twilight/tags`: https://quay.io/repository/biocontainers/bioconductor-twilight?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-twilight/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-twilight/README.html