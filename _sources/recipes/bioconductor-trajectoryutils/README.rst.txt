:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-trajectoryutils'
.. highlight: bash

bioconductor-trajectoryutils
============================

.. conda:recipe:: bioconductor-trajectoryutils
   :replaces_section_title:
   :noindex:

   Single\-Cell Trajectory Analysis Utilities

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/TrajectoryUtils.html
   :license: GPL-3
   :recipe: /`bioconductor-trajectoryutils <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trajectoryutils>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trajectoryutils/meta.yaml>`_

   Implements low\-level utilities for single\-cell trajectory analysis\, primarily intended for re\-use inside higher\-level packages. Include a function to create a cluster\-level minimum spanning tree and data structures to hold pseudotime inference results.


.. conda:package:: bioconductor-trajectoryutils

   |downloads_bioconductor-trajectoryutils| |docker_bioconductor-trajectoryutils|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-singlecellexperiment: ``>=1.16.0,<1.17.0``
   :depends bioconductor-summarizedexperiment: ``>=1.24.0,<1.25.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-igraph: 
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-trajectoryutils

   and update with::

      conda update bioconductor-trajectoryutils

   or use the docker container::

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
        var versions = ["1.2.0","1.0.0"];
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