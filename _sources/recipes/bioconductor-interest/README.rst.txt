.. title:: Package Recipe 'bioconductor-interest'
.. highlight: bash


bioconductor-interest
=====================

.. conda:recipe:: bioconductor-interest
   :replaces_section_title:

   This package performs Intron\-Exon Retention analysis on RNA\-seq data \(.bam files\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/IntEREst.html
   :license: GPL-2
   :recipe: /`bioconductor-interest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-interest/meta.yaml>`_
   :links: doi: :doi:`10.18129/B9.bioc.IntEREst`

   


.. conda:package:: bioconductor-interest

   |downloads_bioconductor-interest| |docker_bioconductor-interest|

   :versions: 1.6.1, 1.4.1, 1.2.2

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-biostrings` >=2.50.0,<2.51.0 :conda:package:`bioconductor-deseq2` >=1.22.0,<1.23.0 :conda:package:`bioconductor-dexseq` >=1.28.0,<1.29.0 :conda:package:`bioconductor-edger` >=3.24.0,<3.25.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`bioconductor-seqlogo` >=1.48.0,<1.49.0 :conda:package:`bioconductor-summarizedexperiment` >=1.12.0,<1.13.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dbi`  :conda:package:`r-rmysql`  :conda:package:`r-seqinr`  

   :required~by: |required_by_bioconductor-interest|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-interest

   and update with::

      conda update bioconductor-interest

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-interest


.. |required_by_bioconductor-interest| conda:required_by:: bioconductor-interest
.. |downloads_bioconductor-interest| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-interest.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-interest| image:: https://quay.io/repository/biocontainers/bioconductor-interest/status
   :target: https://quay.io/repository/biocontainers/bioconductor-interest







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-interest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-interest/README.html

