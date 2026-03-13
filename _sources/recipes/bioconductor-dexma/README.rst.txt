:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-dexma'
.. highlight: bash

bioconductor-dexma
==================

.. conda:recipe:: bioconductor-dexma
   :replaces_section_title:
   :noindex:

   Differential Expression Meta\-Analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/DExMA.html
   :license: GPL-2
   :recipe: /`bioconductor-dexma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dexma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-dexma/meta.yaml>`_

   performing all the steps of gene expression meta\-analysis considering the possible existence of missing genes. It provides the necessary functions to be able to perform the different methods of gene expression meta\-analysis. In addition\, it contains functions to apply quality controls\, download GEO datasets and show graphical representations of the results.


.. conda:package:: bioconductor-dexma

   |downloads_bioconductor-dexma| |docker_bioconductor-dexma|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.6-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-dexmadata: ``>=1.18.0,<1.19.0``
   :depends on bioconductor-geoquery: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-impute: ``>=1.84.0,<1.85.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-snpstats: ``>=1.60.0,<1.61.0``
   :depends on bioconductor-sva: ``>=3.58.0,<3.59.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bnstruct: 
   :depends on r-pheatmap: 
   :depends on r-plyr: 
   :depends on r-rcolorbrewer: 
   :depends on r-scales: 
   :depends on r-swamp: 

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

    pixi global install bioconductor-dexma

to add into an existing workspace instead, run::

    pixi add bioconductor-dexma

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-dexma

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-dexma

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-dexma:<tag>

(see `bioconductor-dexma/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-dexma| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-dexma.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-dexma
   :alt:   (downloads)
.. |docker_bioconductor-dexma| image:: https://quay.io/repository/biocontainers/bioconductor-dexma/status
   :target: https://quay.io/repository/biocontainers/bioconductor-dexma
.. _`bioconductor-dexma/tags`: https://quay.io/repository/biocontainers/bioconductor-dexma?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-dexma";
        var versions = ["1.18.0","1.14.0","1.10.6","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-dexma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-dexma/README.html