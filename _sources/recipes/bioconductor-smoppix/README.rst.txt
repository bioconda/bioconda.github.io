:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-smoppix'
.. highlight: bash

bioconductor-smoppix
====================

.. conda:recipe:: bioconductor-smoppix
   :replaces_section_title:
   :noindex:

   Analyze Single Molecule Spatial Omics Data Using the Probabilistic Index

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/smoppix.html
   :license: GPL-2
   :recipe: /`bioconductor-smoppix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-smoppix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-smoppix/meta.yaml>`_

   Test for univariate and bivariate spatial patterns in spatial omics data with single\-molecule resolution. The tests implemented allow for analysis of nested designs and are automatically calibrated to different biological specimens. Tests for aggregation\, colocalization\, gradients and vicinity to cell edge or centroid are provided.


.. conda:package:: bioconductor-smoppix

   |downloads_bioconductor-smoppix| |docker_bioconductor-smoppix|

   :versions:
      
      

      ``1.2.1-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0a0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-extradistr: 
   :depends on r-ggplot2: 
   :depends on r-lme4: 
   :depends on r-lmertest: 
   :depends on r-openxlsx: 
   :depends on r-rcpp: ``>=1.0.11``
   :depends on r-rdpack: 
   :depends on r-rfast: 
   :depends on r-scam: 
   :depends on r-spatstat.geom: ``>=3.2.0``
   :depends on r-spatstat.model: 
   :depends on r-spatstat.random: 

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

    pixi global install bioconductor-smoppix

to add into an existing workspace instead, run::

    pixi add bioconductor-smoppix

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-smoppix

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-smoppix

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-smoppix:<tag>

(see `bioconductor-smoppix/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-smoppix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-smoppix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-smoppix
   :alt:   (downloads)
.. |docker_bioconductor-smoppix| image:: https://quay.io/repository/biocontainers/bioconductor-smoppix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-smoppix
.. _`bioconductor-smoppix/tags`: https://quay.io/repository/biocontainers/bioconductor-smoppix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-smoppix";
        var versions = ["1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-smoppix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-smoppix/README.html