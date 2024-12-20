:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cogeqc'
.. highlight: bash

bioconductor-cogeqc
===================

.. conda:recipe:: bioconductor-cogeqc
   :replaces_section_title:
   :noindex:

   Systematic quality checks on comparative genomics analyses

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/cogeqc.html
   :license: GPL-3
   :recipe: /`bioconductor-cogeqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogeqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cogeqc/meta.yaml>`_

   cogeqc aims to facilitate systematic quality checks on standard comparative genomics analyses to help researchers detect issues and select the most suitable parameters for each data set. cogeqc can be used to asses\: i. genome assembly and annotation quality with BUSCOs and comparisons of statistics with publicly available genomes on the NCBI\; ii. orthogroup inference using a protein domain\-based approach and\; iii. synteny detection using synteny network properties. There are also data visualization functions to explore QC summary statistics.


.. conda:package:: bioconductor-cogeqc

   |downloads_bioconductor-cogeqc| |docker_bioconductor-cogeqc|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-ggtree: ``>=3.14.0,<3.15.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggbeeswarm: 
   :depends r-ggplot2: 
   :depends r-igraph: 
   :depends r-jsonlite: 
   :depends r-patchwork: 
   :depends r-reshape2: 
   :depends r-rlang: 
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

      mamba install bioconductor-cogeqc

   and update with::

      mamba update bioconductor-cogeqc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cogeqc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cogeqc:<tag>

   (see `bioconductor-cogeqc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cogeqc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cogeqc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cogeqc
   :alt:   (downloads)
.. |docker_bioconductor-cogeqc| image:: https://quay.io/repository/biocontainers/bioconductor-cogeqc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cogeqc
.. _`bioconductor-cogeqc/tags`: https://quay.io/repository/biocontainers/bioconductor-cogeqc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cogeqc";
        var versions = ["1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cogeqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cogeqc/README.html