:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-radiogx'
.. highlight: bash

bioconductor-radiogx
====================

.. conda:recipe:: bioconductor-radiogx
   :replaces_section_title:
   :noindex:

   Analysis of Large\-Scale Radio\-Genomic Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/RadioGx.html
   :license: GPL-3
   :recipe: /`bioconductor-radiogx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-radiogx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-radiogx/meta.yaml>`_

   Computational tool box for radio\-genomic analysis which integrates radio\-response data\, radio\-biological modelling and comprehensive cell line annotations for hundreds of cancer cell lines. The \'RadioSet\' class enables creation and manipulation of standardized datasets including information about cancer cells lines\, radio\-response assays and dose\-response indicators. Included methods allow fitting and plotting dose\-response data using established radio\-biological models along with quality control to validate results. Additional functions related to fitting and plotting dose response curves\, quantifying statistical correlation and calculating area under the curve \(AUC\) or survival fraction \(SF\) are included. For more details please see the included documentation\, references\, as well as\: Manem\, V. et al \(2018\) \<doi\:10.1101\/449793\>.


.. conda:package:: bioconductor-radiogx

   |downloads_bioconductor-radiogx| |docker_bioconductor-radiogx|

   :versions:
      
      

      ``2.10.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-coregx: ``>=2.10.0,<2.11.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-catools: 
   :depends r-data.table: 
   :depends r-downloader: 
   :depends r-magicaxis: 
   :depends r-matrixstats: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-scales: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-radiogx

   and update with::

      mamba update bioconductor-radiogx

  To create a new environment, run::

      mamba create --name myenvname bioconductor-radiogx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-radiogx:<tag>

   (see `bioconductor-radiogx/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-radiogx| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-radiogx.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-radiogx
   :alt:   (downloads)
.. |docker_bioconductor-radiogx| image:: https://quay.io/repository/biocontainers/bioconductor-radiogx/status
   :target: https://quay.io/repository/biocontainers/bioconductor-radiogx
.. _`bioconductor-radiogx/tags`: https://quay.io/repository/biocontainers/bioconductor-radiogx?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-radiogx";
        var versions = ["2.10.0","2.6.0","2.4.0","2.2.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-radiogx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-radiogx/README.html