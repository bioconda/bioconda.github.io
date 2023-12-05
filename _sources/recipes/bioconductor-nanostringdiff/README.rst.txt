:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nanostringdiff'
.. highlight: bash

bioconductor-nanostringdiff
===========================

.. conda:recipe:: bioconductor-nanostringdiff
   :replaces_section_title:
   :noindex:

   Differential Expression Analysis of NanoString nCounter Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/NanoStringDiff.html
   :license: GPL
   :recipe: /`bioconductor-nanostringdiff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanostringdiff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nanostringdiff/meta.yaml>`_

   This Package utilizes a generalized linear model\(GLM\) of the negative binomial family to characterize count data and allows for multi\-factor design. NanoStrongDiff incorporate size factors\, calculated from positive controls and housekeeping controls\, and background level\, obtained from negative controls\, in the model framework so that all the normalization information provided by NanoString nCounter Analyzer is fully utilized.


.. conda:package:: bioconductor-nanostringdiff

   |downloads_bioconductor-nanostringdiff| |docker_bioconductor-nanostringdiff|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.24.0-2</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.24.0-2``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-matrixstats: 
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

      mamba install bioconductor-nanostringdiff

   and update with::

      mamba update bioconductor-nanostringdiff

  To create a new environment, run::

      mamba create --name myenvname bioconductor-nanostringdiff

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nanostringdiff:<tag>

   (see `bioconductor-nanostringdiff/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nanostringdiff| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nanostringdiff.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nanostringdiff
   :alt:   (downloads)
.. |docker_bioconductor-nanostringdiff| image:: https://quay.io/repository/biocontainers/bioconductor-nanostringdiff/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nanostringdiff
.. _`bioconductor-nanostringdiff/tags`: https://quay.io/repository/biocontainers/bioconductor-nanostringdiff?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nanostringdiff";
        var versions = ["1.32.0","1.30.0","1.28.0","1.28.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nanostringdiff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nanostringdiff/README.html