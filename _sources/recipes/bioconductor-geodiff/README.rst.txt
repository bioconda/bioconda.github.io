:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geodiff'
.. highlight: bash

bioconductor-geodiff
====================

.. conda:recipe:: bioconductor-geodiff
   :replaces_section_title:
   :noindex:

   Count model based differential expression and normalization on GeoMx RNA data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GeoDiff.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-geodiff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geodiff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geodiff/meta.yaml>`_

   A series of statistical models using count generating distributions for background modelling\, feature and sample QC\, normalization and differential expression analysis on GeoMx RNA data. The application of these methods are demonstrated by example data analysis vignette.


.. conda:package:: bioconductor-geodiff

   |downloads_bioconductor-geodiff| |docker_bioconductor-geodiff|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on bioconductor-geomxtools: ``>=3.14.0,<3.15.0``
   :depends on bioconductor-geomxtools: ``>=3.14.0,<3.15.0a0``
   :depends on bioconductor-nanostringnctools: ``>=1.18.0,<1.19.0``
   :depends on bioconductor-nanostringnctools: ``>=1.18.0,<1.19.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-lme4: 
   :depends on r-matrix: 
   :depends on r-plyr: 
   :depends on r-rcpp: ``>=1.0.4.6``
   :depends on r-rcpparmadillo: 
   :depends on r-robust: 
   :depends on r-roptim: 
   :depends on r-testthat: 
   :depends on r-withr: 

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

    pixi global install bioconductor-geodiff

to add into an existing workspace instead, run::

    pixi add bioconductor-geodiff

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-geodiff

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-geodiff

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-geodiff:<tag>

(see `bioconductor-geodiff/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-geodiff| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geodiff.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geodiff
   :alt:   (downloads)
.. |docker_bioconductor-geodiff| image:: https://quay.io/repository/biocontainers/bioconductor-geodiff/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geodiff
.. _`bioconductor-geodiff/tags`: https://quay.io/repository/biocontainers/bioconductor-geodiff?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geodiff";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geodiff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geodiff/README.html