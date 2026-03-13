:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phosr'
.. highlight: bash

bioconductor-phosr
==================

.. conda:recipe:: bioconductor-phosr
   :replaces_section_title:
   :noindex:

   A set of methods and tools for comprehensive analysis of phosphoproteomics data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/PhosR.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-phosr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phosr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phosr/meta.yaml>`_

   PhosR is a package for the comprenhensive analysis of phosphoproteomic data. There are two major components to PhosR\: processing and downstream analysis. PhosR consists of various processing tools for phosphoproteomics data including filtering\, imputation\, normalisation\, and functional analysis for inferring active kinases and signalling pathways.


.. conda:package:: bioconductor-phosr

   |downloads_bioconductor-phosr| |docker_bioconductor-phosr|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-2``,  ``1.0.0-1``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-pcamethods: ``>=2.2.0,<2.3.0``
   :depends on bioconductor-preprocesscore: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-dendextend: 
   :depends on r-dplyr: 
   :depends on r-e1071: 
   :depends on r-ggally: 
   :depends on r-ggdendro: 
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-ggtext: 
   :depends on r-igraph: 
   :depends on r-network: 
   :depends on r-pheatmap: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-rlang: 
   :depends on r-ruv: 
   :depends on r-stringi: 
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

    pixi global install bioconductor-phosr

to add into an existing workspace instead, run::

    pixi add bioconductor-phosr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-phosr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-phosr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-phosr:<tag>

(see `bioconductor-phosr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-phosr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phosr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phosr
   :alt:   (downloads)
.. |docker_bioconductor-phosr| image:: https://quay.io/repository/biocontainers/bioconductor-phosr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phosr
.. _`bioconductor-phosr/tags`: https://quay.io/repository/biocontainers/bioconductor-phosr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-phosr";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phosr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phosr/README.html