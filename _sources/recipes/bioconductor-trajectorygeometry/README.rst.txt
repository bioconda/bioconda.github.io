:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-trajectorygeometry'
.. highlight: bash

bioconductor-trajectorygeometry
===============================

.. conda:recipe:: bioconductor-trajectorygeometry
   :replaces_section_title:
   :noindex:

   This Package Discovers Directionality in Time and Pseudo\-times Series of Gene Expression Patterns

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/TrajectoryGeometry.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-trajectorygeometry <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trajectorygeometry>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-trajectorygeometry/meta.yaml>`_

   Given a time series or pseudo\-times series of gene expression data\, we might wish to know\: Do the changes in gene expression in these data exhibit directionality\?  Are there turning points in this directionality.  Do different subsets of the data move in different directions\?  This package uses spherical geometry to probe these sorts of questions.  In particular\, if we are looking at \(say\) the first n dimensions of the PCA of gene expression\, directionality can be detected as the clustering of points on the \(n\-1\)\-dimensional sphere.


.. conda:package:: bioconductor-trajectorygeometry

   |downloads_bioconductor-trajectorygeometry| |docker_bioconductor-trajectorygeometry|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-pracma: 
   :depends on r-rgl: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install bioconductor-trajectorygeometry

to add into an existing workspace instead, run::

    pixi add bioconductor-trajectorygeometry

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-trajectorygeometry

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-trajectorygeometry

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-trajectorygeometry:<tag>

(see `bioconductor-trajectorygeometry/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-trajectorygeometry| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-trajectorygeometry.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-trajectorygeometry
   :alt:   (downloads)
.. |docker_bioconductor-trajectorygeometry| image:: https://quay.io/repository/biocontainers/bioconductor-trajectorygeometry/status
   :target: https://quay.io/repository/biocontainers/bioconductor-trajectorygeometry
.. _`bioconductor-trajectorygeometry/tags`: https://quay.io/repository/biocontainers/bioconductor-trajectorygeometry?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-trajectorygeometry";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
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