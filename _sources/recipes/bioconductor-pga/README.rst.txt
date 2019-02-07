.. title:: Package Recipe 'bioconductor-pga'
.. highlight: bash


bioconductor-pga
================

.. conda:recipe:: bioconductor-pga
   :replaces_section_title:

   This package provides functions for construction of customized protein databases based on RNA\-Seq data with\/without genome guided\, database searching\, post\-processing and report generation. This kind of customized protein database includes both the reference database \(such as Refseq or ENSEMBL\) and the novel peptide sequences form RNA\-Seq data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/PGA.html
   :license: GPL-2
   :recipe: /`bioconductor-pga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pga/meta.yaml>`_

   


.. conda:package:: bioconductor-pga

   |downloads_bioconductor-pga| |docker_bioconductor-pga|

   :versions: 1.12.1

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-biomart` >=2.38.0,<2.39.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-customprodb` >=1.22.0,<1.23.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtandem` >=1.22.0,<1.23.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-variantannotation` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-ggplot2`  :conda:package:`r-nozzle.r1`  :conda:package:`r-pheatmap`  :conda:package:`r-rcurl`  :conda:package:`r-rsqlite`  :conda:package:`r-stringr`  

   :required~by: |required_by_bioconductor-pga|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pga

   and update with::

      conda update bioconductor-pga

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-pga


.. |required_by_bioconductor-pga| conda:required_by:: bioconductor-pga
.. |downloads_bioconductor-pga| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pga.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pga| image:: https://quay.io/repository/biocontainers/bioconductor-pga/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pga







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pga/README.html

