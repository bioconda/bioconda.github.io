:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gars'
.. highlight: bash

bioconductor-gars
=================

.. conda:recipe:: bioconductor-gars
   :replaces_section_title:
   :noindex:

   GARS\: Genetic Algorithm for the identification of Robust Subsets of variables in high\-dimensional and challenging datasets

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GARS.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-gars <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gars>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gars/meta.yaml>`_

   Feature selection aims to identify and remove redundant\, irrelevant and noisy variables from high\-dimensional datasets. Selecting informative features affects the subsequent classification and regression analyses by improving their overall performances. Several methods have been proposed to perform feature selection\: most of them relies on univariate statistics\, correlation\, entropy measurements or the usage of backward\/forward regressions. Herein\, we propose an efficient\, robust and fast method that adopts stochastic optimization approaches for high\-dimensional. GARS is an innovative implementation of a genetic algorithm that selects robust features in high\-dimensional and challenging datasets.


.. conda:package:: bioconductor-gars

   |downloads_bioconductor-gars| |docker_bioconductor-gars|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-damirseq: ``>=2.18.0,<2.19.0``
   :depends bioconductor-mlseq: ``>=2.24.0,<2.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cluster: 
   :depends r-ggplot2: 
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

      mamba install bioconductor-gars

   and update with::

      mamba update bioconductor-gars

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gars

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gars:<tag>

   (see `bioconductor-gars/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gars| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gars.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gars
   :alt:   (downloads)
.. |docker_bioconductor-gars| image:: https://quay.io/repository/biocontainers/bioconductor-gars/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gars
.. _`bioconductor-gars/tags`: https://quay.io/repository/biocontainers/bioconductor-gars?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gars";
        var versions = ["1.26.0","1.22.0","1.20.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gars/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gars/README.html