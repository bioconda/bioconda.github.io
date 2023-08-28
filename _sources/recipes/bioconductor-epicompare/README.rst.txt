:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epicompare'
.. highlight: bash

bioconductor-epicompare
=======================

.. conda:recipe:: bioconductor-epicompare
   :replaces_section_title:
   :noindex:

   Comparison\, Benchmarking \& QC of Epigenomic Datasets

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/EpiCompare.html
   :license: GPL-3
   :recipe: /`bioconductor-epicompare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epicompare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epicompare/meta.yaml>`_

   EpiCompare is used to compare and analyse epigenetic datasets for quality control and benchmarking purposes. The package outputs an HTML report consisting of three sections\: \(1. General metrics\) Metrics on peaks \(percentage of blacklisted and non\-standard peaks\, and peak widths\) and fragments \(duplication rate\) of samples\, \(2. Peak overlap\) Percentage and statistical significance of overlapping and non\-overlapping peaks. Also includes upset plot and \(3. Functional annotation\) functional annotation \(ChromHMM\, ChIPseeker and enrichment analysis\) of peaks. Also includes peak enrichment around TSS.


.. conda:package:: bioconductor-epicompare

   |downloads_bioconductor-epicompare| |docker_bioconductor-epicompare|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-brgenomics: ``>=1.12.0,<1.13.0``
   :depends bioconductor-chipseeker: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomation: ``>=1.32.0,<1.33.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-downloadthis: 
   :depends r-ggplot2: 
   :depends r-htmltools: 
   :depends r-plotly: 
   :depends r-reshape2: 
   :depends r-rmarkdown: 
   :depends r-stringr: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-epicompare

   and update with::

      mamba update bioconductor-epicompare

  To create a new environment, run::

      mamba create --name myenvname bioconductor-epicompare

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-epicompare:<tag>

   (see `bioconductor-epicompare/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-epicompare| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epicompare.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epicompare
   :alt:   (downloads)
.. |docker_bioconductor-epicompare| image:: https://quay.io/repository/biocontainers/bioconductor-epicompare/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epicompare
.. _`bioconductor-epicompare/tags`: https://quay.io/repository/biocontainers/bioconductor-epicompare?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epicompare";
        var versions = ["1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epicompare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epicompare/README.html