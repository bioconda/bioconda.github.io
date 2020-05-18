:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-titancna'
.. highlight: bash

bioconductor-titancna
=====================

.. conda:recipe:: bioconductor-titancna
   :replaces_section_title:

   Subclonal copy number and LOH prediction from whole genome sequencing of tumours

   :homepage: https://bioconductor.org/packages/3.11/bioc/html/TitanCNA.html
   :license: GPL-3
   :recipe: /`bioconductor-titancna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-titancna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-titancna/meta.yaml>`_
   :links: biotools: :biotools:`titancna`

   Hidden Markov model to segment and predict regions of subclonal copy number alterations \(CNA\) and loss of heterozygosity \(LOH\)\, and estimate cellular prevalence of clonal clusters in tumour whole genome sequencing data.


.. conda:package:: bioconductor-titancna

   |downloads_bioconductor-titancna| |docker_bioconductor-titancna|

   :versions: 1.26.0-0, 1.24.0-0, 1.22.0-1, 1.20.1-0, 1.20.0-0, 1.19.1-4, 1.19.1-3, 1.19.1-2, 1.19.1-1, 1.19.1-0, 1.18.0-0, 1.17.2-0, 1.16.0-1, 1.16.0-0, 1.15.0-0, 1.14.0-0
   
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-genomeinfodb: >=1.24.0,<1.25.0
   :depends bioconductor-genomicranges: >=1.40.0,<1.41.0
   :depends bioconductor-iranges: >=2.22.0,<2.23.0
   :depends bioconductor-variantannotation: >=1.34.0,<1.35.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libgcc-ng: >=7.3.0
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-data.table: >=1.10.4
   :depends r-dplyr: >=0.5.0
   :depends r-foreach: >=1.4.3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-titancna

   and update with::

      conda update bioconductor-titancna

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-titancna:<tag>

   (see `bioconductor-titancna/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-titancna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-titancna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-titancna
   :alt:   (downloads)
.. |docker_bioconductor-titancna| image:: https://quay.io/repository/biocontainers/bioconductor-titancna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-titancna
.. _`bioconductor-titancna/tags`: https://quay.io/repository/biocontainers/bioconductor-titancna?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-titancna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-titancna/README.html