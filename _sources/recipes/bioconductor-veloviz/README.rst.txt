:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-veloviz'
.. highlight: bash

bioconductor-veloviz
====================

.. conda:recipe:: bioconductor-veloviz
   :replaces_section_title:
   :noindex:

   VeloViz\: RNA\-velocity informed 2D embeddings for visualizing cell state trajectories

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/veloviz.html
   :license: GPL-3
   :recipe: /`bioconductor-veloviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-veloviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-veloviz/meta.yaml>`_

   VeloViz uses each cell’s current observed and predicted future transcriptional states inferred from RNA velocity analysis to build a nearest neighbor graph between cells in the population. Edges are then pruned based on a cosine correlation threshold and\/or a distance threshold and the resulting graph is visualized using a force\-directed graph layout algorithm. VeloViz can help ensure that relationships between cell states are reflected in the 2D embedding\, allowing for more reliable representation of underlying cellular trajectories.


.. conda:package:: bioconductor-veloviz

   |downloads_bioconductor-veloviz| |docker_bioconductor-veloviz|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-2``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-igraph: 
   :depends r-matrix: 
   :depends r-mgcv: 
   :depends r-rcpp: 
   :depends r-rspectra: 
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

      mamba install bioconductor-veloviz

   and update with::

      mamba update bioconductor-veloviz

  To create a new environment, run::

      mamba create --name myenvname bioconductor-veloviz

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-veloviz:<tag>

   (see `bioconductor-veloviz/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-veloviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-veloviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-veloviz
   :alt:   (downloads)
.. |docker_bioconductor-veloviz| image:: https://quay.io/repository/biocontainers/bioconductor-veloviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-veloviz
.. _`bioconductor-veloviz/tags`: https://quay.io/repository/biocontainers/bioconductor-veloviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-veloviz";
        var versions = ["1.12.0","1.8.0","1.6.0","1.4.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-veloviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-veloviz/README.html