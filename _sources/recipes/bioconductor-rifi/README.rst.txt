:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rifi'
.. highlight: bash

bioconductor-rifi
=================

.. conda:recipe:: bioconductor-rifi
   :replaces_section_title:
   :noindex:

   \'rifi\' analyses data from rifampicin time series created by microarray or RNAseq

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/rifi.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-rifi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rifi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rifi/meta.yaml>`_

   \'rifi\' analyses data from rifampicin time series created by microarray or RNAseq. \'rifi\' is a transcriptome data analysis tool for the holistic identification of transcription and decay associated processes. The decay constants and the delay of the onset of decay is fitted for each probe\/bin. Subsequently\, probes\/bins of equal properties are combined into segments by dynamic programming\, independent of a existing genome annotation. This allows to detect transcript segments of different stability or transcriptional events within one annotated gene. In addition to the classic decay constant\/half\-life analysis\, \'rifi\' detects processing sites\, transcription pausing sites\, internal transcription start sites in operons\, sites of partial transcription termination in operons\, identifies areas of likely transcriptional interference by the collision mechanism and gives an estimate of the transcription velocity. All data are integrated to give an estimate of continous transcriptional units\, i.e. operons. Comprehensive output tables and visualizations of the full genome result and the individual fits for all probes\/bins are produced.


.. conda:package:: bioconductor-rifi

   |downloads_bioconductor-rifi| |docker_bioconductor-rifi|

   :versions:
      
      

      ``1.4.1-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-rtracklayer: ``>=1.60.0,<1.61.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-car: 
   :depends r-cowplot: 
   :depends r-domc: 
   :depends r-dplyr: 
   :depends r-egg: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-nls2: 
   :depends r-nnet: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-stringr: 
   :depends r-tibble: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-rifi

   and update with::

      mamba update bioconductor-rifi

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rifi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rifi:<tag>

   (see `bioconductor-rifi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rifi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rifi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rifi
   :alt:   (downloads)
.. |docker_bioconductor-rifi| image:: https://quay.io/repository/biocontainers/bioconductor-rifi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rifi
.. _`bioconductor-rifi/tags`: https://quay.io/repository/biocontainers/bioconductor-rifi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rifi";
        var versions = ["1.4.1","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rifi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rifi/README.html