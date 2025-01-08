:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellmigration'
.. highlight: bash

bioconductor-cellmigration
==========================

.. conda:recipe:: bioconductor-cellmigration
   :replaces_section_title:
   :noindex:

   Track Cells\, Analyze Cell Trajectories and Compute Migration Statistics

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/cellmigRation.html
   :license: GPL-2
   :recipe: /`bioconductor-cellmigration <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellmigration>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellmigration/meta.yaml>`_

   Import TIFF images of fluorescently labeled cells\, and track cell movements over time. Parallelization is supported for image processing and for fast computation of cell trajectories. In\-depth analysis of cell trajectories is enabled by 15 trajectory analysis functions.


.. conda:package:: bioconductor-cellmigration

   |downloads_bioconductor-cellmigration| |docker_bioconductor-cellmigration|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-doparallel: 
   :depends r-factominer: 
   :depends r-fme: 
   :depends r-foreach: 
   :depends r-hmisc: 
   :depends r-matrixstats: 
   :depends r-reshape2: 
   :depends r-sp: 
   :depends r-spatialtools: 
   :depends r-tiff: 
   :depends r-vioplot: 
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

      mamba install bioconductor-cellmigration

   and update with::

      mamba update bioconductor-cellmigration

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cellmigration

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cellmigration:<tag>

   (see `bioconductor-cellmigration/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cellmigration| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellmigration.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellmigration
   :alt:   (downloads)
.. |docker_bioconductor-cellmigration| image:: https://quay.io/repository/biocontainers/bioconductor-cellmigration/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellmigration
.. _`bioconductor-cellmigration/tags`: https://quay.io/repository/biocontainers/bioconductor-cellmigration?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellmigration";
        var versions = ["1.14.0","1.10.0","1.8.0","1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellmigration/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellmigration/README.html