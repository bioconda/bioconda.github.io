:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tomoda'
.. highlight: bash

bioconductor-tomoda
===================

.. conda:recipe:: bioconductor-tomoda
   :replaces_section_title:
   :noindex:

   Tomo\-seq data analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/tomoda.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-tomoda <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tomoda>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tomoda/meta.yaml>`_

   This package provides many easy\-to\-use methods to analyze and visualize tomo\-seq data. The tomo\-seq technique is based on cryosectioning of tissue and performing RNA\-seq on consecutive sections. \(Reference\: Kruse F\, Junker JP\, van Oudenaarden A\, Bakkers J. Tomo\-seq\: A method to obtain genome\-wide expression data with spatial resolution. Methods Cell Biol. 2016\;135\:299\-307. doi\:10.1016\/bs.mcb.2016.01.006\) The main purpose of the package is to find zones with similar transcriptional profiles and spatially expressed genes in a tomo\-seq sample. Several visulization functions are available to create easy\-to\-modify plots.


.. conda:package:: bioconductor-tomoda

   |downloads_bioconductor-tomoda| |docker_bioconductor-tomoda|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rtsne: 
   :depends r-umap: 
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

      mamba install bioconductor-tomoda

   and update with::

      mamba update bioconductor-tomoda

  To create a new environment, run::

      mamba create --name myenvname bioconductor-tomoda

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tomoda:<tag>

   (see `bioconductor-tomoda/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tomoda| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tomoda.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tomoda
   :alt:   (downloads)
.. |docker_bioconductor-tomoda| image:: https://quay.io/repository/biocontainers/bioconductor-tomoda/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tomoda
.. _`bioconductor-tomoda/tags`: https://quay.io/repository/biocontainers/bioconductor-tomoda?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tomoda";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tomoda/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tomoda/README.html