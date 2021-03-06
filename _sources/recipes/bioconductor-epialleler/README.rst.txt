:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epialleler'
.. highlight: bash

bioconductor-epialleler
=======================

.. conda:recipe:: bioconductor-epialleler
   :replaces_section_title:
   :noindex:

   Fast\, Epiallele\-Aware Methylation Reporter

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/epialleleR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-epialleler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epialleler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epialleler/meta.yaml>`_

   Epialleles are specific DNA methylation patterns that are mitotically and\/or meiotically inherited. This package calls hypermethylated epiallele frequencies at the level of genomic regions or individual cytosines in next\-generation sequencing data using binary alignment map \(BAM\) files as an input. Other functionality includes computing the empirical cumulative distribution function for per\-read beta values\, and testing the significance of the association between epiallele methylation status and base frequencies at particular genomic positions \(SNPs\).


.. conda:package:: bioconductor-epialleler

   |downloads_bioconductor-epialleler| |docker_bioconductor-epialleler|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.28.0,<1.29.0``
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-rsamtools: ``>=2.8.0,<2.9.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-variantannotation: ``>=1.38.0,<1.39.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-bh: 
   :depends r-data.table: 
   :depends r-rcpp: 
   :depends r-stringi: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-epialleler

   and update with::

      conda update bioconductor-epialleler

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epialleler:<tag>

   (see `bioconductor-epialleler/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epialleler| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epialleler.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epialleler
   :alt:   (downloads)
.. |docker_bioconductor-epialleler| image:: https://quay.io/repository/biocontainers/bioconductor-epialleler/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epialleler
.. _`bioconductor-epialleler/tags`: https://quay.io/repository/biocontainers/bioconductor-epialleler?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epialleler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epialleler/README.html