:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scgps'
.. highlight: bash

bioconductor-scgps
==================

.. conda:recipe:: bioconductor-scgps
   :replaces_section_title:
   :noindex:

   A complete analysis of single cell subpopulations\, from identifying subpopulations to analysing their relationship \(scGPS \= single cell Global Predictions of Subpopulation\)

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/scGPS.html
   :license: GPL-3
   :recipe: /`bioconductor-scgps <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scgps>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scgps/meta.yaml>`_

   The package implements two main algorithms to answer two key questions\: a SCORE \(Stable Clustering at Optimal REsolution\) to find subpopulations\, followed by scGPS to investigate the relationships between subpopulations.


.. conda:package:: bioconductor-scgps

   |downloads_bioconductor-scgps| |docker_bioconductor-scgps|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.16.0-0</code>,  <code>1.14.1-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.8.0-2</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.2.0-0</code>,  </span></summary>
      

      ``1.16.0-0``,  ``1.14.1-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.8.0-2``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0``
   :depends bioconductor-deseq2: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-caret: ``>=6.0``
   :depends r-dplyr: 
   :depends r-dynamictreecut: 
   :depends r-fastcluster: 
   :depends r-ggplot2: ``>=2.2.1``
   :depends r-glmnet: ``>2.0``
   :depends r-locfit: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :depends r-rcppparallel: 
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

      mamba install bioconductor-scgps

   and update with::

      mamba update bioconductor-scgps

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scgps

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scgps:<tag>

   (see `bioconductor-scgps/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scgps| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scgps.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scgps
   :alt:   (downloads)
.. |docker_bioconductor-scgps| image:: https://quay.io/repository/biocontainers/bioconductor-scgps/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scgps
.. _`bioconductor-scgps/tags`: https://quay.io/repository/biocontainers/bioconductor-scgps?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scgps";
        var versions = ["1.16.0","1.14.1","1.12.0","1.12.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scgps/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scgps/README.html