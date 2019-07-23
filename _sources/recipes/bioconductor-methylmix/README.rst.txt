:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-methylmix'
.. highlight: bash

bioconductor-methylmix
======================

.. conda:recipe:: bioconductor-methylmix
   :replaces_section_title:

   MethylMix is an algorithm implemented to identify hyper and hypomethylated genes for a disease. MethylMix is based on a beta mixture model to identify methylation states and compares them with the normal DNA methylation state. MethylMix uses a novel statistic\, the Differential Methylation value or DM\-value defined as the difference of a methylation state with the normal methylation state. Finally\, matched gene expression data is used to identify\, besides differential\, functional methylation states by focusing on methylation changes that effect gene expression. References\: Gevaert 0. MethylMix\: an R package for identifying DNA methylation\-driven genes. Bioinformatics \(Oxford\, England\). 2015\;31\(11\)\:1839\-41. doi\:10.1093\/bioinformatics\/btv020. Gevaert O\, Tibshirani R\, Plevritis SK. Pancancer analysis of DNA methylation\-driven genes using MethylMix. Genome Biology. 2015\;16\(1\)\:17. doi\:10.1186\/s13059\-014\-0579\-8.

   :homepage: https://bioconductor.org/packages/3.9/bioc/html/MethylMix.html
   :license: GPL-2
   :recipe: /`bioconductor-methylmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylmix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylmix/meta.yaml>`_

   


.. conda:package:: bioconductor-methylmix

   |downloads_bioconductor-methylmix| |docker_bioconductor-methylmix|

   :versions: 2.14.0-1, 2.14.0-0, 2.12.0-0
   
   :depends bioconductor-impute: >=1.58.0,<1.59.0
   :depends bioconductor-limma: >=3.40.0,<3.41.0
   :depends r-base: >=3.6,<3.7.0a0
   :depends r-data.table: 
   :depends r-digest: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-r.matlab: 
   :depends r-rcolorbrewer: 
   :depends r-rcurl: 
   :depends r-rpmm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methylmix

   and update with::

      conda update bioconductor-methylmix

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-methylmix:<tag>

   (see `bioconductor-methylmix/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-methylmix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylmix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-methylmix
   :alt:   (downloads)
.. |docker_bioconductor-methylmix| image:: https://quay.io/repository/biocontainers/bioconductor-methylmix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylmix
.. _`bioconductor-methylmix/tags`: https://quay.io/repository/biocontainers/bioconductor-methylmix?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylmix/README.html