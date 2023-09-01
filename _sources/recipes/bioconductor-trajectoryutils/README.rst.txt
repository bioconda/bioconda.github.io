:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-trajectoryutils'
.. highlight: bash

bioconductor-trajectoryutils
============================

.. conda:recipe:: bioconductor-trajectoryutils
   :replaces_section_title:
   :noindex:

   Single\-Cell Trajectory Analysis Utilities

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/TrajectoryUtils.html
   :license: GPL-3
   :recipe: /`bioconductor-trajectoryutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trajectoryutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trajectoryutils/meta.yaml>`_

   Implements low\-level utilities for single\-cell trajectory analysis\, primarily intended for re\-use inside higher\-level packages. Include a function to create a cluster\-level minimum spanning tree and data structures to hold pseudotime inference results.


.. conda:package:: bioconductor-trajectoryutils

   |downloads_bioconductor-trajectoryutils| |docker_bioconductor-trajectoryutils|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-igraph: 
   :depends r-matrix: 
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

      mamba install bioconductor-trajectoryutils

   and update with::

      mamba update bioconductor-trajectoryutils

  To create a new environment, run::

      mamba create --name myenvname bioconductor-trajectoryutils

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-trajectoryutils:<tag>

   (see `bioconductor-trajectoryutils/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-trajectoryutils| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-trajectoryutils.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-trajectoryutils
   :alt:   (downloads)
.. |docker_bioconductor-trajectoryutils| image:: https://quay.io/repository/biocontainers/bioconductor-trajectoryutils/status
   :target: https://quay.io/repository/biocontainers/bioconductor-trajectoryutils
.. _`bioconductor-trajectoryutils/tags`: https://quay.io/repository/biocontainers/bioconductor-trajectoryutils?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-trajectoryutils";
        var versions = ["1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-trajectoryutils/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-trajectoryutils/README.html