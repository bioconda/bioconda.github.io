:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spacemarkers'
.. highlight: bash

bioconductor-spacemarkers
=========================

.. conda:recipe:: bioconductor-spacemarkers
   :replaces_section_title:
   :noindex:

   Spatial Interaction Markers

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SpaceMarkers.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-spacemarkers <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spacemarkers>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spacemarkers/meta.yaml>`_

   Spatial transcriptomic technologies have helped to resolve the connection between gene expression and the 2D orientation of tissues relative to each other. However\, the limited single\-cell resolution makes it difficult to highlight the most important molecular interactions in these tissues. SpaceMarkers\, R\/Bioconductor software\, can help to find molecular interactions\, by identifying genes associated with latent space interactions in spatial transcriptomics.


.. conda:package:: bioconductor-spacemarkers

   |downloads_bioconductor-spacemarkers| |docker_bioconductor-spacemarkers|

   :versions:
      
      

      ``1.2.1-0``

      

   
   :depends bioconductor-qvalue: ``>=2.38.0,<2.39.0``
   :depends r-ape: 
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-hdf5r: 
   :depends r-jsonlite: 
   :depends r-matrix: 
   :depends r-matrixstats: 
   :depends r-matrixtests: 
   :depends r-rstatix: 
   :depends r-spatstat.explore: 
   :depends r-spatstat.geom: 
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

      mamba install bioconductor-spacemarkers

   and update with::

      mamba update bioconductor-spacemarkers

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spacemarkers

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spacemarkers:<tag>

   (see `bioconductor-spacemarkers/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spacemarkers| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spacemarkers.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spacemarkers
   :alt:   (downloads)
.. |docker_bioconductor-spacemarkers| image:: https://quay.io/repository/biocontainers/bioconductor-spacemarkers/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spacemarkers
.. _`bioconductor-spacemarkers/tags`: https://quay.io/repository/biocontainers/bioconductor-spacemarkers?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spacemarkers";
        var versions = ["1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spacemarkers/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spacemarkers/README.html