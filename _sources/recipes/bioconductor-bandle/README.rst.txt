:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bandle'
.. highlight: bash

bioconductor-bandle
===================

.. conda:recipe:: bioconductor-bandle
   :replaces_section_title:
   :noindex:

   An R package for the Bayesian analysis of differential subcellular localisation experiments

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/bandle.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bandle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bandle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bandle/meta.yaml>`_

   The Bandle package enables the analysis and visualisation of differential localisation experiments using mass\-spectrometry data. Experimental methods supported include dynamic LOPIT\-DC\, hyperLOPIT\, Dynamic Organellar Maps\, Dynamic PCP. It provides Bioconductor infrastructure to analyse these data.


.. conda:package:: bioconductor-bandle

   |downloads_bioconductor-bandle| |docker_bioconductor-bandle|

   :versions:
      
      

      ``1.14.0-0``,  ``1.6.0-0``,  ``1.4.1-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0a0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0a0``
   :depends on bioconductor-biocstyle: ``>=2.38.0,<2.39.0``
   :depends on bioconductor-biocstyle: ``>=2.38.0,<2.39.0a0``
   :depends on bioconductor-msnbase: ``>=2.36.0,<2.37.0``
   :depends on bioconductor-msnbase: ``>=2.36.0,<2.37.0a0``
   :depends on bioconductor-proloc: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-proloc: ``>=1.50.0,<1.51.0a0``
   :depends on bioconductor-prolocdata: ``>=1.48.0,<1.49.0``
   :depends on bioconductor-prolocdata: ``>=1.48.0,<1.49.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bh: 
   :depends on r-circlize: 
   :depends on r-coda: ``>=0.19-4``
   :depends on r-dplyr: 
   :depends on r-ggalluvial: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-gridextra: 
   :depends on r-gtools: 
   :depends on r-knitr: 
   :depends on r-lbfgs: 
   :depends on r-plyr: 
   :depends on r-rcolorbrewer: 
   :depends on r-rcpp: ``>=1.0.4.6``
   :depends on r-rcpparmadillo: 
   :depends on r-rlang: 
   :depends on r-robustbase: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-bandle

to add into an existing workspace instead, run::

    pixi add bioconductor-bandle

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bandle

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bandle

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bandle:<tag>

(see `bioconductor-bandle/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bandle| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bandle.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bandle
   :alt:   (downloads)
.. |docker_bioconductor-bandle| image:: https://quay.io/repository/biocontainers/bioconductor-bandle/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bandle
.. _`bioconductor-bandle/tags`: https://quay.io/repository/biocontainers/bioconductor-bandle?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bandle";
        var versions = ["1.14.0","1.6.0","1.4.1","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bandle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bandle/README.html