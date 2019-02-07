.. title:: Package Recipe 'bioconductor-copywriter'
.. highlight: bash


bioconductor-copywriter
=======================

.. conda:recipe:: bioconductor-copywriter
   :replaces_section_title:

   CopywriteR extracts DNA copy number information from targeted sequencing by utiizing off\-target reads. It allows for extracting uniformly distributed copy number information\, can be used without reference\, and can be applied to sequencing data obtained from various techniques including chromatin immunoprecipitation and target enrichment on small gene panels. Thereby\, CopywriteR constitutes a widely applicable alternative to available copy number detection tools.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CopywriteR.html
   :license: GPL-2
   :recipe: /`bioconductor-copywriter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-copywriter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-copywriter/meta.yaml>`_
   :links: biotools: :biotools:`copywriter`, doi: :doi:`10.1186/s13059-015-0617-1`

   


.. conda:package:: bioconductor-copywriter

   |downloads_bioconductor-copywriter| |docker_bioconductor-copywriter|

   :versions: 2.14.0, 2.12.0, 2.10.0

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-chipseq` >=1.32.0,<1.33.0 :conda:package:`bioconductor-copyhelper` >=1.14.0,<1.15.0 :conda:package:`bioconductor-dnacopy` >=1.56.0,<1.57.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-futile.logger`  :conda:package:`r-gtools`  :conda:package:`r-matrixstats`  

   :required~by: |required_by_bioconductor-copywriter|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-copywriter

   and update with::

      conda update bioconductor-copywriter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-copywriter


.. |required_by_bioconductor-copywriter| conda:required_by:: bioconductor-copywriter
.. |downloads_bioconductor-copywriter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-copywriter.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-copywriter| image:: https://quay.io/repository/biocontainers/bioconductor-copywriter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-copywriter







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-copywriter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-copywriter/README.html

