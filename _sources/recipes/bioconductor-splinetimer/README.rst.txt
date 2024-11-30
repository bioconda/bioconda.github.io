:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-splinetimer'
.. highlight: bash

bioconductor-splinetimer
========================

.. conda:recipe:: bioconductor-splinetimer
   :replaces_section_title:
   :noindex:

   Time\-course differential gene expression data analysis using spline regression models followed by gene association network reconstruction

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/splineTimeR.html
   :license: GPL-3
   :recipe: /`bioconductor-splinetimer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splinetimer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splinetimer/meta.yaml>`_
   :links: biotools: :biotools:`splinetimer`, doi: :doi:`10.1371/journal.pone.0160791`

   This package provides functions for differential gene expression analysis of gene expression time\-course data. Natural cubic spline regression models are used. Identified genes may further be used for pathway enrichment analysis and\/or the reconstruction of time dependent gene regulatory association networks.


.. conda:package:: bioconductor-splinetimer

   |downloads_bioconductor-splinetimer| |docker_bioconductor-splinetimer|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-fis: ``>=1.30.0,<1.31.0``
   :depends bioconductor-gseabase: ``>=1.64.0,<1.65.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-genenet: ``>=1.2.13``
   :depends r-gtools: 
   :depends r-igraph: 
   :depends r-longitudinal: ``>=1.1.12``
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

      mamba install bioconductor-splinetimer

   and update with::

      mamba update bioconductor-splinetimer

  To create a new environment, run::

      mamba create --name myenvname bioconductor-splinetimer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-splinetimer:<tag>

   (see `bioconductor-splinetimer/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-splinetimer| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-splinetimer.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-splinetimer
   :alt:   (downloads)
.. |docker_bioconductor-splinetimer| image:: https://quay.io/repository/biocontainers/bioconductor-splinetimer/status
   :target: https://quay.io/repository/biocontainers/bioconductor-splinetimer
.. _`bioconductor-splinetimer/tags`: https://quay.io/repository/biocontainers/bioconductor-splinetimer?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-splinetimer";
        var versions = ["1.30.0","1.28.0","1.26.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-splinetimer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-splinetimer/README.html