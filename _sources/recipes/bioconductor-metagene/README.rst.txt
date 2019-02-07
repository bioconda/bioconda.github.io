.. title:: Package Recipe 'bioconductor-metagene'
.. highlight: bash


bioconductor-metagene
=====================

.. conda:recipe:: bioconductor-metagene
   :replaces_section_title:

   This package produces metagene plots to compare the behavior of DNA\-interacting proteins at selected groups of genes\/features. Bam files are used to increase the resolution. Multiple combination of group of bam files and\/or group of genomic regions can be compared in a single analysis. Bootstraping analysis is used to compare the groups and locate regions with statistically different enrichment profiles.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/metagene.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-metagene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metagene/meta.yaml>`_

   


.. conda:package:: bioconductor-metagene

   |downloads_bioconductor-metagene| |docker_bioconductor-metagene|

   :versions: 2.14.0

   :depends: :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-dbchip` >=1.26.0,<1.27.0 :conda:package:`bioconductor-ensdb.hsapiens.v86` >=2.99.0,<2.100.0 :conda:package:`bioconductor-ensembldb` >=2.6.0,<2.7.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicalignments` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicfeatures` >=1.34.0,<1.35.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-rsamtools` >=1.34.0,<1.35.0 :conda:package:`bioconductor-rtracklayer` >=1.42.0,<1.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-ggplot2`  :conda:package:`r-gplots`  :conda:package:`r-magrittr`  :conda:package:`r-matrixstats`  :conda:package:`r-mustat`  :conda:package:`r-purrr`  :conda:package:`r-r6` >=2.0 :conda:package:`r-stringr`  

   :required~by: |required_by_bioconductor-metagene|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-metagene

   and update with::

      conda update bioconductor-metagene

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-metagene


.. |required_by_bioconductor-metagene| conda:required_by:: bioconductor-metagene
.. |downloads_bioconductor-metagene| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metagene.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-metagene| image:: https://quay.io/repository/biocontainers/bioconductor-metagene/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metagene







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metagene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metagene/README.html

