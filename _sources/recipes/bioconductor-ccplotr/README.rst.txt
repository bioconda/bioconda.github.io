:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ccplotr'
.. highlight: bash

bioconductor-ccplotr
====================

.. conda:recipe:: bioconductor-ccplotr
   :replaces_section_title:
   :noindex:

   Plots For Visualising Cell\-Cell Interactions

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CCPlotR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-ccplotr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccplotr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccplotr/meta.yaml>`_

   CCPlotR is an R package for visualising results from tools that predict cell\-cell interactions from single\-cell RNA\-seq data. These plots are generic and can be used to visualise results from multiple tools such as Liana\, CellPhoneDB\, NATMI etc.


.. conda:package:: bioconductor-ccplotr

   |downloads_bioconductor-ccplotr| |docker_bioconductor-ccplotr|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-complexheatmap: ``>=2.18.0,<2.19.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-dplyr: 
   :depends r-forcats: 
   :depends r-ggbump: 
   :depends r-ggh4x: 
   :depends r-ggplot2: 
   :depends r-ggraph: 
   :depends r-ggtext: 
   :depends r-igraph: 
   :depends r-patchwork: 
   :depends r-plyr: 
   :depends r-rcolorbrewer: 
   :depends r-scales: 
   :depends r-scatterpie: 
   :depends r-stringr: 
   :depends r-tibble: 
   :depends r-tidyr: 
   :depends r-viridis: 
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

      mamba install bioconductor-ccplotr

   and update with::

      mamba update bioconductor-ccplotr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ccplotr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ccplotr:<tag>

   (see `bioconductor-ccplotr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ccplotr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ccplotr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ccplotr
   :alt:   (downloads)
.. |docker_bioconductor-ccplotr| image:: https://quay.io/repository/biocontainers/bioconductor-ccplotr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ccplotr
.. _`bioconductor-ccplotr/tags`: https://quay.io/repository/biocontainers/bioconductor-ccplotr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ccplotr";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ccplotr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ccplotr/README.html