:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cellhashr'
.. highlight: bash

bioconductor-cellhashr
======================

.. conda:recipe:: bioconductor-cellhashr
   :replaces_section_title:
   :noindex:

   An R package designed to demultiplex cell hashing data.
       More information in https\:\/\/bimberlab.github.io\/cellhashR\/Lab B \(2024\). 
      cellhashR\: A Package for Demultiplexing Cell Hashing Data.


   :homepage: https://github.com/BimberLab/cellhashR
   :license: MIT / MIT
   :recipe: /`bioconductor-cellhashr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellhashr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cellhashr/meta.yaml>`_

   


.. conda:package:: bioconductor-cellhashr

   |downloads_bioconductor-cellhashr| |docker_bioconductor-cellhashr|

   :versions:
      
      

      ``1.04-0``

      

   
   :depends on bioconductor-demuxmix: 
   :depends on bioconductor-dropletutils: 
   :depends on bioconductor-nempi: 
   :depends on bioconductor-preprocesscore: 
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-devtools: 
   :depends on r-egg: 
   :depends on r-essentials: 
   :depends on r-ggextra: 
   :depends on r-ggforce: 
   :depends on r-ggthemes: 
   :depends on r-patchwork: 
   :depends on r-rcpp: 
   :depends on r-rcpparmadillo: 
   :depends on r-rcppeigen: 
   :depends on r-rcppparallel: 
   :depends on r-rcppprogress: 
   :depends on r-reticulate: 
   :depends on r-rmdformats: 
   :depends on r-seurat: 
   :depends on r-seuratobject: 

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

    pixi global install bioconductor-cellhashr

to add into an existing workspace instead, run::

    pixi add bioconductor-cellhashr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-cellhashr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-cellhashr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-cellhashr:<tag>

(see `bioconductor-cellhashr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-cellhashr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cellhashr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cellhashr
   :alt:   (downloads)
.. |docker_bioconductor-cellhashr| image:: https://quay.io/repository/biocontainers/bioconductor-cellhashr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cellhashr
.. _`bioconductor-cellhashr/tags`: https://quay.io/repository/biocontainers/bioconductor-cellhashr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cellhashr";
        var versions = ["1.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cellhashr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cellhashr/README.html