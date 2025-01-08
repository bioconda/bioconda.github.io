:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scdataviz'
.. highlight: bash

bioconductor-scdataviz
======================

.. conda:recipe:: bioconductor-scdataviz
   :replaces_section_title:
   :noindex:

   scDataviz\: single cell dataviz and downstream analyses

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scDataviz.html
   :license: GPL-3
   :recipe: /`bioconductor-scdataviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdataviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdataviz/meta.yaml>`_

   In the single cell World\, which includes flow cytometry\, mass cytometry\, single\-cell RNA\-seq \(scRNA\-seq\)\, and others\, there is a need to improve data visualisation and to bring analysis capabilities to researchers even from non\-technical backgrounds. scDataviz attempts to fit into this space\, while also catering for advanced users. Additonally\, due to the way that scDataviz is designed\, which is based on SingleCellExperiment\, it has a \'plug and play\' feel\, and immediately lends itself as flexibile and compatibile with studies that go beyond scDataviz. Finally\, the graphics in scDataviz are generated via the ggplot engine\, which means that users can \'add on\' features to these with ease.


.. conda:package:: bioconductor-scdataviz

   |downloads_bioconductor-scdataviz| |docker_bioconductor-scdataviz|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-flowcore: ``>=2.18.0,<2.19.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-singlecellexperiment: ``>=1.28.0,<1.29.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-corrplot: 
   :depends r-ggplot2: 
   :depends r-ggrepel: 
   :depends r-mass: 
   :depends r-matrixstats: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-scales: 
   :depends r-seurat: 
   :depends r-umap: 
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

      mamba install bioconductor-scdataviz

   and update with::

      mamba update bioconductor-scdataviz

  To create a new environment, run::

      mamba create --name myenvname bioconductor-scdataviz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-scdataviz:<tag>

   (see `bioconductor-scdataviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-scdataviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scdataviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scdataviz
   :alt:   (downloads)
.. |docker_bioconductor-scdataviz| image:: https://quay.io/repository/biocontainers/bioconductor-scdataviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scdataviz
.. _`bioconductor-scdataviz/tags`: https://quay.io/repository/biocontainers/bioconductor-scdataviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scdataviz";
        var versions = ["1.16.0","1.12.0","1.10.0","1.8.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scdataviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scdataviz/README.html