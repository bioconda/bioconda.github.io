:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sosta'
.. highlight: bash

bioconductor-sosta
==================

.. conda:recipe:: bioconductor-sosta
   :replaces_section_title:
   :noindex:

   A package for the analysis of anatomical tissue structures in spatial omics data

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/sosta.html
   :license: GPL (>= 3) + file LICENSE
   :recipe: /`bioconductor-sosta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sosta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sosta/meta.yaml>`_

   sosta \(Spatial Omics STructure Analysis\) is a package for analyzing spatial omics data to explore tissue organization at the anatomical structure level. It reconstructs anatomically relevant structures based on molecular features or cell types. It further calculates a range of metrics at the structure level to quantitatively describe tissue architecture. The package is designed to integrate with other packages for the analysis of spatial omics data.


.. conda:package:: bioconductor-sosta

   |downloads_bioconductor-sosta| |docker_bioconductor-sosta|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends on bioconductor-ebimage: ``>=4.52.0,<4.53.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-patchwork: 
   :depends on r-rlang: 
   :depends on r-sf: 
   :depends on r-smoothr: 
   :depends on r-spatstat.explore: 
   :depends on r-spatstat.geom: 
   :depends on r-spatstat.random: 
   :depends on r-terra: 

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

    pixi global install bioconductor-sosta

to add into an existing workspace instead, run::

    pixi add bioconductor-sosta

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-sosta

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-sosta

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-sosta:<tag>

(see `bioconductor-sosta/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-sosta| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sosta.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sosta
   :alt:   (downloads)
.. |docker_bioconductor-sosta| image:: https://quay.io/repository/biocontainers/bioconductor-sosta/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sosta
.. _`bioconductor-sosta/tags`: https://quay.io/repository/biocontainers/bioconductor-sosta?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sosta";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sosta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sosta/README.html