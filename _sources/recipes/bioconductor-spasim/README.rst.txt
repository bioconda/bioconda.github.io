:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spasim'
.. highlight: bash

bioconductor-spasim
===================

.. conda:recipe:: bioconductor-spasim
   :replaces_section_title:
   :noindex:

   Spatial point data simulator for tissue images

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/spaSim.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-spasim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spasim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spasim/meta.yaml>`_

   A suite of functions for simulating spatial patterns of cells in tissue images. Output images are multitype point data in SingleCellExperiment format. Each point represents a cell\, with its 2D locations and cell type. Potential cell patterns include background cells\, tumour\/immune cell clusters\, immune rings\, and blood\/lymphatic vessels.


.. conda:package:: bioconductor-spasim

   |downloads_bioconductor-spasim| |docker_bioconductor-spasim|

   :versions:
      
      

      ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-spatialexperiment: ``>=1.12.0,<1.13.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-ggplot2: 
   :depends r-rann: 
   :depends r-spatstat.geom: 
   :depends r-spatstat.random: 
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

      mamba install bioconductor-spasim

   and update with::

      mamba update bioconductor-spasim

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spasim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spasim:<tag>

   (see `bioconductor-spasim/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spasim| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spasim.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spasim
   :alt:   (downloads)
.. |docker_bioconductor-spasim| image:: https://quay.io/repository/biocontainers/bioconductor-spasim/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spasim
.. _`bioconductor-spasim/tags`: https://quay.io/repository/biocontainers/bioconductor-spasim?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spasim";
        var versions = ["1.4.0","1.2.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spasim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spasim/README.html