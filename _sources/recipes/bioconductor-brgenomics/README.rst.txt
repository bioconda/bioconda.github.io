:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-brgenomics'
.. highlight: bash

bioconductor-brgenomics
=======================

.. conda:recipe:: bioconductor-brgenomics
   :replaces_section_title:
   :noindex:

   Tools for the Efficient Analysis of High\-Resolution Genomics Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/BRGenomics.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-brgenomics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brgenomics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-brgenomics/meta.yaml>`_

   This package provides useful and efficient utilites for the analysis of high\-resolution genomic data using standard Bioconductor methods and classes. BRGenomics is feature\-rich and simplifies a number of post\-alignment processing steps and data handling. Emphasis is on efficient analysis of multiple datasets\, with support for normalization and blacklisting. Included are functions for\: spike\-in normalizing data\; generating basepair\-resolution readcounts and coverage data \(e.g. for heatmaps\)\; importing and processing bam files \(e.g. for conversion to bigWig files\)\; generating metaplots\/metaprofiles \(bootstrapped mean profiles\) with confidence intervals\; conveniently calling DESeq2 without using sample\-blind estimates of genewise dispersion\; among other features.


.. conda:package:: bioconductor-brgenomics

   |downloads_bioconductor-brgenomics| |docker_bioconductor-brgenomics|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-deseq2: ``>=1.40.0,<1.41.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-brgenomics

   and update with::

      conda update bioconductor-brgenomics

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-brgenomics:<tag>

   (see `bioconductor-brgenomics/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-brgenomics| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-brgenomics.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-brgenomics
   :alt:   (downloads)
.. |docker_bioconductor-brgenomics| image:: https://quay.io/repository/biocontainers/bioconductor-brgenomics/status
   :target: https://quay.io/repository/biocontainers/bioconductor-brgenomics
.. _`bioconductor-brgenomics/tags`: https://quay.io/repository/biocontainers/bioconductor-brgenomics?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-brgenomics";
        var versions = ["1.12.0","1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-brgenomics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-brgenomics/README.html