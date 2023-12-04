:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-trajectorygeometry'
.. highlight: bash

bioconductor-trajectorygeometry
===============================

.. conda:recipe:: bioconductor-trajectorygeometry
   :replaces_section_title:
   :noindex:

   This Package Discovers Directionality in Time and Pseudo\-times Series of Gene Expression Patterns

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/TrajectoryGeometry.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-trajectorygeometry <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trajectorygeometry>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trajectorygeometry/meta.yaml>`_

   Given a time series or pseudo\-times series of gene expression data\, we might wish to know\: Do the changes in gene expression in these data exhibit directionality\?  Are there turning points in this directionality.  Do different subsets of the data move in different directions\?  This package uses spherical geometry to probe these sorts of questions.  In particular\, if we are looking at \(say\) the first n dimensions of the PCA of gene expression\, directionality can be detected as the clustering of points on the \(n\-1\)\-dimensional sphere.


.. conda:package:: bioconductor-trajectorygeometry

   |downloads_bioconductor-trajectorygeometry| |docker_bioconductor-trajectorygeometry|

   :versions:
      
      

      ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-pracma: 
   :depends r-rgl: 
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

      mamba install bioconductor-trajectorygeometry

   and update with::

      mamba update bioconductor-trajectorygeometry

  To create a new environment, run::

      mamba create --name myenvname bioconductor-trajectorygeometry

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-trajectorygeometry:<tag>

   (see `bioconductor-trajectorygeometry/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-trajectorygeometry| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-trajectorygeometry.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-trajectorygeometry
   :alt:   (downloads)
.. |docker_bioconductor-trajectorygeometry| image:: https://quay.io/repository/biocontainers/bioconductor-trajectorygeometry/status
   :target: https://quay.io/repository/biocontainers/bioconductor-trajectorygeometry
.. _`bioconductor-trajectorygeometry/tags`: https://quay.io/repository/biocontainers/bioconductor-trajectorygeometry?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-trajectorygeometry";
        var versions = ["1.10.0","1.8.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-trajectorygeometry/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-trajectorygeometry/README.html