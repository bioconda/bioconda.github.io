:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spatialexperiment'
.. highlight: bash

bioconductor-spatialexperiment
==============================

.. conda:recipe:: bioconductor-spatialexperiment
   :replaces_section_title:
   :noindex:

   S4 Class for Spatially Resolved \-omics Data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SpatialExperiment.html
   :license: GPL-3
   :recipe: /`bioconductor-spatialexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spatialexperiment/meta.yaml>`_

   Defines an S4 class for storing data from spatial \-omics experiments. The class extends SingleCellExperiment to support storage and retrieval of additional information from spot\-based and molecule\-based platforms\, including spatial coordinates\, images\, and image metadata. A specialized constructor function is included for data from the 10x Genomics Visium platform.


.. conda:package:: bioconductor-spatialexperiment

   |downloads_bioconductor-spatialexperiment| |docker_bioconductor-spatialexperiment|

   :versions:
      
      

      ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-magick: 
   :depends r-rjson: 
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

      mamba install bioconductor-spatialexperiment

   and update with::

      mamba update bioconductor-spatialexperiment

  To create a new environment, run::

      mamba create --name myenvname bioconductor-spatialexperiment

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-spatialexperiment:<tag>

   (see `bioconductor-spatialexperiment/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-spatialexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spatialexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spatialexperiment
   :alt:   (downloads)
.. |docker_bioconductor-spatialexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-spatialexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spatialexperiment
.. _`bioconductor-spatialexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-spatialexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spatialexperiment";
        var versions = ["1.12.0","1.10.0","1.8.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spatialexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spatialexperiment/README.html