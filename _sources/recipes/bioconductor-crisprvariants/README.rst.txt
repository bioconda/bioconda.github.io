:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crisprvariants'
.. highlight: bash

bioconductor-crisprvariants
===========================

.. conda:recipe:: bioconductor-crisprvariants
   :replaces_section_title:
   :noindex:

   Tools for counting and visualising mutations in a target location

   :homepage: https://bioconductor.org/packages/3.12/bioc/html/CrispRVariants.html
   :license: GPL-2
   :recipe: /`bioconductor-crisprvariants <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprvariants>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crisprvariants/meta.yaml>`_
   :links: biotools: :biotools:`crisprvariants`

   CrispRVariants provides tools for analysing the results of a CRISPR\-Cas9 mutagenesis sequencing experiment\, or other sequencing experiments where variants within a given region are of interest. These tools allow users to localize variant allele combinations with respect to any genomic location \(e.g. the Cas9 cut site\)\, plot allele combinations and calculate mutation rates with flexible filtering of unrelated variants.


.. conda:package:: bioconductor-crisprvariants

   |downloads_bioconductor-crisprvariants| |docker_bioconductor-crisprvariants|

   :versions:
      
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends bioconductor-biocparallel: ``>=1.24.0,<1.25.0``
   :depends bioconductor-biostrings: ``>=2.58.0,<2.59.0``
   :depends bioconductor-genomeinfodb: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicalignments: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomicranges: ``>=1.42.0,<1.43.0``
   :depends bioconductor-iranges: ``>=2.24.0,<2.25.0``
   :depends bioconductor-rsamtools: ``>=2.6.0,<2.7.0``
   :depends bioconductor-s4vectors: ``>=0.28.0,<0.29.0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-ggplot2: ``>=2.2.0``
   :depends r-gridextra: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-crisprvariants

   and update with::

      conda update bioconductor-crisprvariants

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-crisprvariants:<tag>

   (see `bioconductor-crisprvariants/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-crisprvariants| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crisprvariants.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crisprvariants
   :alt:   (downloads)
.. |docker_bioconductor-crisprvariants| image:: https://quay.io/repository/biocontainers/bioconductor-crisprvariants/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crisprvariants
.. _`bioconductor-crisprvariants/tags`: https://quay.io/repository/biocontainers/bioconductor-crisprvariants?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crisprvariants/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crisprvariants/README.html