:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-trajectorygeometry'
.. highlight: bash

bioconductor-trajectorygeometry
===============================

.. conda:recipe:: bioconductor-trajectorygeometry
   :replaces_section_title:
   :noindex:

   This Package Discovers Directionality in Time and Pseudo\-times Series of Gene Expression Patterns

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/TrajectoryGeometry.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-trajectorygeometry <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trajectorygeometry>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trajectorygeometry/meta.yaml>`_

   Given a time series or pseudo\-times series of gene expression data\, we might wish to know\: Do the changes in gene expression in these data exhibit directionality\?  Are there turning points in this directionality.  Do different subsets of the data move in different directions\?  This package uses spherical geometry to probe these sorts of questions.  In particular\, if we are looking at \(say\) the first n dimensions of the PCA of gene expression\, directionality can be detected as the clustering of points on the \(n\-1\)\-dimensional sphere.


.. conda:package:: bioconductor-trajectorygeometry

   |downloads_bioconductor-trajectorygeometry| |docker_bioconductor-trajectorygeometry|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-ggplot2: 
   :depends r-pracma: 
   :depends r-rgl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-trajectorygeometry

   and update with::

      conda update bioconductor-trajectorygeometry

   or use the docker container::

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
        var versions = ["1.2.0","1.0.0"];
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