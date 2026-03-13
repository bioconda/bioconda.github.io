:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ctsv'
.. highlight: bash

bioconductor-ctsv
=================

.. conda:recipe:: bioconductor-ctsv
   :replaces_section_title:
   :noindex:

   Identification of cell\-type\-specific spatially variable genes accounting for excess zeros

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/CTSV.html
   :license: GPL-3
   :recipe: /`bioconductor-ctsv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctsv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ctsv/meta.yaml>`_

   The R package CTSV implements the CTSV approach developed by Jinge Yu and Xiangyu Luo that detects cell\-type\-specific spatially variable genes accounting for excess zeros. CTSV directly models sparse raw count data through a zero\-inflated negative binomial regression model\, incorporates cell\-type proportions\, and performs hypothesis testing based on R package pscl. The package outputs p\-values and q\-values for genes in each cell type\, and CTSV is scalable to datasets with tens of thousands of genes measured on hundreds of spots. CTSV can be installed in Windows\, Linux\, and Mac OS.


.. conda:package:: bioconductor-ctsv

   |downloads_bioconductor-ctsv| |docker_bioconductor-ctsv|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-qvalue: ``>=2.42.0,<2.43.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-knitr: 
   :depends on r-pscl: 

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

    pixi global install bioconductor-ctsv

to add into an existing workspace instead, run::

    pixi add bioconductor-ctsv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ctsv

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ctsv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ctsv:<tag>

(see `bioconductor-ctsv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ctsv| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ctsv.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ctsv
   :alt:   (downloads)
.. |docker_bioconductor-ctsv| image:: https://quay.io/repository/biocontainers/bioconductor-ctsv/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ctsv
.. _`bioconductor-ctsv/tags`: https://quay.io/repository/biocontainers/bioconductor-ctsv?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ctsv";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ctsv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ctsv/README.html