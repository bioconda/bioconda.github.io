:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phosr'
.. highlight: bash

bioconductor-phosr
==================

.. conda:recipe:: bioconductor-phosr
   :replaces_section_title:
   :noindex:

   A set of methods and tools for comprehensive analysis of phosphoproteomics data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/PhosR.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-phosr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phosr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phosr/meta.yaml>`_

   PhosR is a package for the comprenhensive analysis of phosphoproteomic data. There are two major components to PhosR\: processing and downstream analysis. PhosR consists of various processing tools for phosphoproteomics data including filtering\, imputation\, normalisation\, and functional analysis for inferring active kinases and signalling pathways.


.. conda:package:: bioconductor-phosr

   |downloads_bioconductor-phosr| |docker_bioconductor-phosr|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-pcamethods: ``>=1.92.0,<1.93.0``
   :depends bioconductor-preprocesscore: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-dendextend: 
   :depends r-dplyr: 
   :depends r-e1071: 
   :depends r-ggally: 
   :depends r-ggdendro: 
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-ggtext: 
   :depends r-igraph: 
   :depends r-network: 
   :depends r-pheatmap: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-rlang: 
   :depends r-ruv: 
   :depends r-stringi: 
   :depends r-tidyr: 
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

      mamba install bioconductor-phosr

   and update with::

      mamba update bioconductor-phosr

  To create a new environment, run::

      mamba create --name myenvname bioconductor-phosr

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-phosr:<tag>

   (see `bioconductor-phosr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-phosr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phosr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phosr
   :alt:   (downloads)
.. |docker_bioconductor-phosr| image:: https://quay.io/repository/biocontainers/bioconductor-phosr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phosr
.. _`bioconductor-phosr/tags`: https://quay.io/repository/biocontainers/bioconductor-phosr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-phosr";
        var versions = ["1.10.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phosr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phosr/README.html