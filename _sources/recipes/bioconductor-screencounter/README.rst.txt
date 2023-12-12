:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-screencounter'
.. highlight: bash

bioconductor-screencounter
==========================

.. conda:recipe:: bioconductor-screencounter
   :replaces_section_title:
   :noindex:

   Counting Reads in High\-Throughput Sequencing Screens

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/screenCounter.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-screencounter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-screencounter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-screencounter/meta.yaml>`_

   Provides functions for counting reads from high\-throughput sequencing screen data \(e.g.\, CRISPR\, shRNA\) to quantify barcode abundance. Currently supports single barcodes in single\- or paired\-end data\, and combinatorial barcodes in paired\-end data.


.. conda:package:: bioconductor-screencounter

   |downloads_bioconductor-screencounter| |docker_bioconductor-screencounter|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0``
   :depends bioconductor-zlibbioc: ``>=1.48.0,<1.49.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcpp: 
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

      mamba install bioconductor-screencounter

   and update with::

      mamba update bioconductor-screencounter

  To create a new environment, run::

      mamba create --name myenvname bioconductor-screencounter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-screencounter:<tag>

   (see `bioconductor-screencounter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-screencounter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-screencounter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-screencounter
   :alt:   (downloads)
.. |docker_bioconductor-screencounter| image:: https://quay.io/repository/biocontainers/bioconductor-screencounter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-screencounter
.. _`bioconductor-screencounter/tags`: https://quay.io/repository/biocontainers/bioconductor-screencounter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-screencounter";
        var versions = ["1.2.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-screencounter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-screencounter/README.html