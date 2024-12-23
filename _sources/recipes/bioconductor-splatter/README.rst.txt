:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-splatter'
.. highlight: bash

bioconductor-splatter
=====================

.. conda:recipe:: bioconductor-splatter
   :replaces_section_title:
   :noindex:

   Simple Simulation of Single\-cell RNA Sequencing Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/splatter.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-splatter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splatter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-splatter/meta.yaml>`_

   Splatter is a package for the simulation of single\-cell RNA sequencing count data. It provides a simple interface for creating complex simulations that are reproducible and well\-documented. Parameters can be estimated from real data and functions are provided for comparing real and simulated datasets.


.. conda:package:: bioconductor-splatter

   |downloads_bioconductor-splatter| |docker_bioconductor-splatter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.18.1-0</code>,  <code>1.16.1-0</code>,  <code>1.14.1-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.18.1-0``,  ``1.16.1-0``,  ``1.14.1-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.6.1-0``,  ``1.4.3-0``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-edger: ``>=4.4.0,<4.5.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-scuttle: ``>=1.16.0,<1.17.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-checkmate: ``>=2.0.0``
   :depends r-crayon: 
   :depends r-fitdistrplus: 
   :depends r-locfit: 
   :depends r-matrixstats: 
   :depends r-rlang: 
   :depends r-withr: 
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

      mamba install bioconductor-splatter

   and update with::

      mamba update bioconductor-splatter

  To create a new environment, run::

      mamba create --name myenvname bioconductor-splatter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-splatter:<tag>

   (see `bioconductor-splatter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-splatter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-splatter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-splatter
   :alt:   (downloads)
.. |docker_bioconductor-splatter| image:: https://quay.io/repository/biocontainers/bioconductor-splatter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-splatter
.. _`bioconductor-splatter/tags`: https://quay.io/repository/biocontainers/bioconductor-splatter?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-splatter";
        var versions = ["1.30.0","1.26.0","1.24.0","1.22.0","1.18.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-splatter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-splatter/README.html