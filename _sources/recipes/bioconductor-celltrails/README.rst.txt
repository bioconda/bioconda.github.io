:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-celltrails'
.. highlight: bash

bioconductor-celltrails
=======================

.. conda:recipe:: bioconductor-celltrails
   :replaces_section_title:
   :noindex:

   Reconstruction\, visualization and analysis of branching trajectories

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/CellTrails.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-celltrails <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celltrails>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-celltrails/meta.yaml>`_

   CellTrails is an unsupervised algorithm for the de novo chronological ordering\, visualization and analysis of single\-cell expression data. CellTrails makes use of a geometrically motivated concept of lower\-dimensional manifold learning\, which exhibits a multitude of virtues that counteract intrinsic noise of single cell data caused by drop\-outs\, technical variance\, and redundancy of predictive variables. CellTrails enables the reconstruction of branching trajectories and provides an intuitive graphical representation of expression patterns along all branches simultaneously. It allows the user to define and infer the expression dynamics of individual and multiple pathways towards distinct phenotypes.


.. conda:package:: bioconductor-celltrails

   |downloads_bioconductor-celltrails| |docker_bioconductor-celltrails|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.5.0-0</code>,  <code>1.4.0-0</code>,  <code>1.2.0-1</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cba: 
   :depends r-dendextend: 
   :depends r-dtw: 
   :depends r-envstats: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-igraph: 
   :depends r-maptree: 
   :depends r-mgcv: 
   :depends r-reshape2: 
   :depends r-rtsne: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-celltrails

   and update with::

      mamba update bioconductor-celltrails

  To create a new environment, run::

      mamba create --name myenvname bioconductor-celltrails

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-celltrails:<tag>

   (see `bioconductor-celltrails/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-celltrails| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-celltrails.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-celltrails
   :alt:   (downloads)
.. |docker_bioconductor-celltrails| image:: https://quay.io/repository/biocontainers/bioconductor-celltrails/status
   :target: https://quay.io/repository/biocontainers/bioconductor-celltrails
.. _`bioconductor-celltrails/tags`: https://quay.io/repository/biocontainers/bioconductor-celltrails?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-celltrails";
        var versions = ["1.18.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-celltrails/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-celltrails/README.html