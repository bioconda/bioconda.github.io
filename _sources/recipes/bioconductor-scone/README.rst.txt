.. title:: Package Recipe 'bioconductor-scone'
.. highlight: bash


bioconductor-scone
==================

.. conda:recipe:: bioconductor-scone
   :replaces_section_title:

   SCONE is an R package for comparing and ranking the performance of different normalization schemes for single\-cell RNA\-seq and other high\-throughput analyses.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/scone.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-scone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scone/meta.yaml>`_

   


.. conda:package:: bioconductor-scone

   |downloads_bioconductor-scone| |docker_bioconductor-scone|

   :versions: 1.6.0

   :depends: :conda:package:`bioconductor-aroma.light` >=3.12.0,<3.13.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-limma` >=3.38.0,<3.39.0 :conda:package:`bioconductor-rhdf5` >=2.26.0,<2.27.0 :conda:package:`bioconductor-ruvseq` >=1.16.0,<1.17.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-boot`  :conda:package:`r-class`  :conda:package:`r-cluster`  :conda:package:`r-compositions`  :conda:package:`r-diptest`  :conda:package:`r-fpc`  :conda:package:`r-gplots`  :conda:package:`r-hexbin`  :conda:package:`r-matrixstats`  :conda:package:`r-mixtools`  :conda:package:`r-rarpack`  :conda:package:`r-rcolorbrewer`  

   :required~by: |required_by_bioconductor-scone|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-scone

   and update with::

      conda update bioconductor-scone

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-scone


.. |required_by_bioconductor-scone| conda:required_by:: bioconductor-scone
.. |downloads_bioconductor-scone| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scone.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-scone| image:: https://quay.io/repository/biocontainers/bioconductor-scone/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scone







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scone/README.html

