:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-compcoder'
.. highlight: bash

bioconductor-compcoder
======================

.. conda:recipe:: bioconductor-compcoder
   :replaces_section_title:
   :noindex:

   RNAseq data simulation\, differential expression analysis and performance comparison of differential expression methods

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/compcodeR.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-compcoder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compcoder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-compcoder/meta.yaml>`_

   This package provides extensive functionality for comparing results obtained by different methods for differential expression analysis of RNAseq data. It also contains functions for simulating count data. Finally\, it provides convenient interfaces to several packages for performing the differential expression analysis. These can also be used as templates for setting up and running a user\-defined differential analysis workflow within the framework of the package.


.. conda:package:: bioconductor-compcoder

   |downloads_bioconductor-compcoder| |docker_bioconductor-compcoder|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.2-0</code>,  <code>1.34.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.1-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  </span></summary>
      

      ``1.36.2-0``,  ``1.34.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.1-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.1-0``,  ``1.18.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-edger: ``>=3.42.0,<3.43.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends r-ape: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-catools: 
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-gtools: 
   :depends r-kernsmooth: 
   :depends r-knitr: ``>=1.2``
   :depends r-lattice: ``>=0.16``
   :depends r-markdown: 
   :depends r-mass: 
   :depends r-matrixstats: 
   :depends r-modeest: 
   :depends r-phylolm: 
   :depends r-rocr: 
   :depends r-sm: 
   :depends r-stringr: 
   :depends r-vioplot: 
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

      mamba install bioconductor-compcoder

   and update with::

      mamba update bioconductor-compcoder

  To create a new environment, run::

      mamba create --name myenvname bioconductor-compcoder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-compcoder:<tag>

   (see `bioconductor-compcoder/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-compcoder| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-compcoder.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-compcoder
   :alt:   (downloads)
.. |docker_bioconductor-compcoder| image:: https://quay.io/repository/biocontainers/bioconductor-compcoder/status
   :target: https://quay.io/repository/biocontainers/bioconductor-compcoder
.. _`bioconductor-compcoder/tags`: https://quay.io/repository/biocontainers/bioconductor-compcoder?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-compcoder";
        var versions = ["1.36.2","1.34.0","1.30.0","1.28.0","1.26.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-compcoder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-compcoder/README.html