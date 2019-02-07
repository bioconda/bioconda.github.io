.. title:: Package Recipe 'bioconductor-minfi'
.. highlight: bash


bioconductor-minfi
==================

.. conda:recipe:: bioconductor-minfi
   :replaces_section_title:

   Tools to analyze \& visualize Illumina Infinium methylation arrays.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/minfi.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-minfi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minfi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minfi/meta.yaml>`_
   :links: biotools: :biotools:`minfi`

   


.. conda:package:: bioconductor-minfi

   |downloads_bioconductor-minfi| |docker_bioconductor-minfi|

   :versions: 1.28.0, 1.26.2, 1.24.0, 1.22.1, 1.20.0, 1.16.1

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-bumphunter` >=1.24.0,<1.25.0 :conda:package:`bioconductor-delayedarray` >=0.8.0,<0.9.0 :conda:package:`bioconductor-delayedmatrixstats` >=1.4.0,<1.5.0 :conda:package:`bioconductor-genefilter` >=1.64.0,<1.65.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-geoquery` >=2.50.0,<2.51.0 :conda:package:`bioconductor-hdf5array` >=1.10.0,<1.11.0 :conda:package:`bioconductor-illuminaio` >=0.24.0,<0.25.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-preprocesscore` >=1.44.0,<1.45.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-siggenes` >=1.56.0,<1.57.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-beanplot`  :conda:package:`r-data.table`  :conda:package:`r-lattice`  :conda:package:`r-mass`  :conda:package:`r-mclust`  :conda:package:`r-nlme`  :conda:package:`r-nor1mix`  :conda:package:`r-quadprog`  :conda:package:`r-rcolorbrewer`  :conda:package:`r-reshape`  

   :required~by: |required_by_bioconductor-minfi|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-minfi

   and update with::

      conda update bioconductor-minfi

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-minfi


.. |required_by_bioconductor-minfi| conda:required_by:: bioconductor-minfi
.. |downloads_bioconductor-minfi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-minfi.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-minfi| image:: https://quay.io/repository/biocontainers/bioconductor-minfi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-minfi







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-minfi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-minfi/README.html

