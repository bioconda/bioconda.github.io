.. title:: Package Recipe 'bioconductor-methylmix'
.. highlight: bash


bioconductor-methylmix
======================

.. conda:recipe:: bioconductor-methylmix
   :replaces_section_title:

   MethylMix is an algorithm implemented to identify hyper and hypomethylated genes for a disease. MethylMix is based on a beta mixture model to identify methylation states and compares them with the normal DNA methylation state. MethylMix uses a novel statistic\, the Differential Methylation value or DM\-value defined as the difference of a methylation state with the normal methylation state. Finally\, matched gene expression data is used to identify\, besides differential\, functional methylation states by focusing on methylation changes that effect gene expression. References\: Gevaert 0. MethylMix\: an R package for identifying DNA methylation\-driven genes. Bioinformatics \(Oxford\, England\). 2015\;31\(11\)\:1839\-41. doi\:10.1093\/bioinformatics\/btv020. Gevaert O\, Tibshirani R\, Plevritis SK. Pancancer analysis of DNA methylation\-driven genes using MethylMix. Genome Biology. 2015\;16\(1\)\:17. doi\:10.1186\/s13059\-014\-0579\-8.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/MethylMix.html
   :license: GPL-2
   :recipe: /`bioconductor-methylmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylmix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylmix/meta.yaml>`_

   


.. conda:package:: bioconductor-methylmix

   |downloads_bioconductor-methylmix| |docker_bioconductor-methylmix|

   :versions: 2.12.0

   :depends: :conda:package:`bioconductor-impute` >=1.56.0,<1.57.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-digest`  :conda:package:`r-foreach`  :conda:package:`r-ggplot2`  :conda:package:`r-r.matlab`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-rcurl`  :conda:package:`r-rpmm`  

   :required~by: |required_by_bioconductor-methylmix|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methylmix

   and update with::

      conda update bioconductor-methylmix

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-methylmix


.. |required_by_bioconductor-methylmix| conda:required_by:: bioconductor-methylmix
.. |downloads_bioconductor-methylmix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylmix.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-methylmix| image:: https://quay.io/repository/biocontainers/bioconductor-methylmix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylmix







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylmix/README.html

