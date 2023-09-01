:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-singlecellnet'
.. highlight: bash

r-singlecellnet
===============

.. conda:recipe:: r-singlecellnet
   :replaces_section_title:
   :noindex:

   SingleCellNet enables the classifcation of single cell RNA\-Seq data across
   species and platforms.


   :homepage: https://github.com/pcahan1/singlecellnet
   :license: MIT / MIT
   :recipe: /`r-singlecellnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-singlecellnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-singlecellnet/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.cels.2019.06.004`

   


.. conda:package:: r-singlecellnet

   |downloads_r-singlecellnet| |docker_r-singlecellnet|

   :versions:
      
      

      ``0.4.1-5``,  ``0.4.1-4``,  ``0.4.1-3``,  ``0.4.1-2``,  ``0.4.1-1``,  ``0.4.1-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cowplot: 
   :depends r-data.tree: 
   :depends r-desctools: 
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-hdf5r: 
   :depends r-patchwork: 
   :depends r-pheatmap: 
   :depends r-randomforest: 
   :depends r-rcolorbrewer: 
   :depends r-reshape2: 
   :depends r-tidyr: 
   :depends r-umap: 
   :depends r-viridis: 
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

      mamba install r-singlecellnet

   and update with::

      mamba update r-singlecellnet

  To create a new environment, run::

      mamba create --name myenvname r-singlecellnet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-singlecellnet:<tag>

   (see `r-singlecellnet/tags`_ for valid values for ``<tag>``)


.. |downloads_r-singlecellnet| image:: https://img.shields.io/conda/dn/bioconda/r-singlecellnet.svg?style=flat
   :target: https://anaconda.org/bioconda/r-singlecellnet
   :alt:   (downloads)
.. |docker_r-singlecellnet| image:: https://quay.io/repository/biocontainers/r-singlecellnet/status
   :target: https://quay.io/repository/biocontainers/r-singlecellnet
.. _`r-singlecellnet/tags`: https://quay.io/repository/biocontainers/r-singlecellnet?tab=tags


.. raw:: html

    <script>
        var package = "r-singlecellnet";
        var versions = ["0.4.1","0.4.1","0.4.1","0.4.1","0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-singlecellnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-singlecellnet/README.html