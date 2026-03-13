:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-bionar'
.. highlight: bash

bioconductor-bionar
===================

.. conda:recipe:: bioconductor-bionar
   :replaces_section_title:
   :noindex:

   Biological Network Analysis in R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BioNAR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-bionar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bionar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-bionar/meta.yaml>`_

   the R package BioNAR\, developed to step by step analysis of PPI network. The aim is to quantify and rank each protein’s simultaneous impact into multiple complexes based on network topology and clustering. Package also enables estimating of co\-occurrence of diseases across the network and specific clusters pointing towards shared\/common mechanisms.


.. conda:package:: bioconductor-bionar

   |downloads_bioconductor-bionar| |docker_bioconductor-bionar|

   :versions:
      
      

      ``1.12.2-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.4-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-fgsea: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-go.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cowplot: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-igraph: ``>=2.0.1.1``
   :depends on r-latex2exp: 
   :depends on r-matrix: 
   :depends on r-minpack.lm: 
   :depends on r-powerlaw: 
   :depends on r-rdpack: 
   :depends on r-rspectra: 
   :depends on r-rspectral: 
   :depends on r-scales: 
   :depends on r-stringr: 
   :depends on r-viridis: 
   :depends on r-wgcna: 

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

    pixi global install bioconductor-bionar

to add into an existing workspace instead, run::

    pixi add bioconductor-bionar

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-bionar

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-bionar

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-bionar:<tag>

(see `bioconductor-bionar/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-bionar| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-bionar.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-bionar
   :alt:   (downloads)
.. |docker_bioconductor-bionar| image:: https://quay.io/repository/biocontainers/bioconductor-bionar/status
   :target: https://quay.io/repository/biocontainers/bioconductor-bionar
.. _`bioconductor-bionar/tags`: https://quay.io/repository/biocontainers/bioconductor-bionar?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-bionar";
        var versions = ["1.12.2","1.8.0","1.4.0","1.2.4","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-bionar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-bionar/README.html