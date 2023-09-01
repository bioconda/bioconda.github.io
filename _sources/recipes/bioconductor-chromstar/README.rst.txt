:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chromstar'
.. highlight: bash

bioconductor-chromstar
======================

.. conda:recipe:: bioconductor-chromstar
   :replaces_section_title:
   :noindex:

   Combinatorial and Differential Chromatin State Analysis for ChIP\-Seq Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/chromstaR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-chromstar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromstar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chromstar/meta.yaml>`_
   :links: biotools: :biotools:`chromstar`, doi: :doi:`10.1101/038612`

   This package implements functions for combinatorial and differential analysis of ChIP\-seq data. It includes uni\- and multivariate peak\-calling\, export to genome browser viewable files\, and functions for enrichment analyses.


.. conda:package:: bioconductor-chromstar

   |downloads_bioconductor-chromstar| |docker_bioconductor-chromstar|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.20.2-1</code>,  <code>1.20.2-0</code>,  <code>1.19.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-2</code>,  <code>1.16.0-1</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.20.2-1``,  ``1.20.2-0``,  ``1.19.0-0``,  ``1.18.0-0``,  ``1.16.0-2``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.12.0-1``,  ``1.10.0-1``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.6.2-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bamsignals: ``>=1.32.0,<1.33.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-chromstardata: ``>=1.26.0,<1.27.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicalignments: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-rsamtools: ``>=2.16.0,<2.17.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-mvtnorm: 
   :depends r-reshape2: 
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

      mamba install bioconductor-chromstar

   and update with::

      mamba update bioconductor-chromstar

  To create a new environment, run::

      mamba create --name myenvname bioconductor-chromstar

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chromstar:<tag>

   (see `bioconductor-chromstar/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chromstar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chromstar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chromstar
   :alt:   (downloads)
.. |docker_bioconductor-chromstar| image:: https://quay.io/repository/biocontainers/bioconductor-chromstar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chromstar
.. _`bioconductor-chromstar/tags`: https://quay.io/repository/biocontainers/bioconductor-chromstar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chromstar";
        var versions = ["1.26.0","1.24.0","1.24.0","1.20.2","1.20.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chromstar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chromstar/README.html