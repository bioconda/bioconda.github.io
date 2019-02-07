.. title:: Package Recipe 'bioconductor-netsmooth'
.. highlight: bash


bioconductor-netsmooth
======================

.. conda:recipe:: bioconductor-netsmooth
   :replaces_section_title:

   netSmooth is an R package for network smoothing of single cell RNA sequencing data. Using bio networks such as protein\-protein interactions as priors for gene co\-expression\, netsmooth improves cell type identification from noisy\, sparse scRNAseq data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/netSmooth.html
   :license: GPL-3
   :recipe: /`bioconductor-netsmooth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netsmooth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-netsmooth/meta.yaml>`_

   


.. conda:package:: bioconductor-netsmooth

   |downloads_bioconductor-netsmooth| |docker_bioconductor-netsmooth|

   :versions: 1.2.0

   :depends: :conda:package:`bioconductor-clusterexperiment` >=2.2.0,<2.3.0 :conda:package:`bioconductor-scater` >=1.10.0,<1.11.0 :conda:package:`bioconductor-singlecellexperiment` >=1.4.0,<1.5.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-cluster`  :conda:package:`r-data.table`  :conda:package:`r-entropy`  :conda:package:`r-matrix`  

   :required~by: |required_by_bioconductor-netsmooth|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-netsmooth

   and update with::

      conda update bioconductor-netsmooth

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-netsmooth


.. |required_by_bioconductor-netsmooth| conda:required_by:: bioconductor-netsmooth
.. |downloads_bioconductor-netsmooth| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-netsmooth.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-netsmooth| image:: https://quay.io/repository/biocontainers/bioconductor-netsmooth/status
   :target: https://quay.io/repository/biocontainers/bioconductor-netsmooth







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-netsmooth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-netsmooth/README.html

