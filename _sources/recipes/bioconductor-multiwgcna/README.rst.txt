:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multiwgcna'
.. highlight: bash

bioconductor-multiwgcna
=======================

.. conda:recipe:: bioconductor-multiwgcna
   :replaces_section_title:
   :noindex:

   multiWGCNA

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/multiWGCNA.html
   :license: GPL-3
   :recipe: /`bioconductor-multiwgcna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multiwgcna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multiwgcna/meta.yaml>`_

   An R package for deeping mining gene co\-expression networks in multi\-trait expression data. Provides functions for analyzing\, comparing\, and visualizing WGCNA networks across conditions. multiWGCNA was designed to handle the common case where there are multiple biologically meaningful sample traits\, such as disease vs wildtype across development or anatomical region.


.. conda:package:: bioconductor-multiwgcna

   |downloads_bioconductor-multiwgcna| |docker_bioconductor-multiwgcna|

   :versions:
      
      

      ``1.7.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-dcanr: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cowplot: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-flashclust: 
   :depends on r-ggalluvial: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-igraph: 
   :depends on r-patchwork: 
   :depends on r-readr: 
   :depends on r-reshape2: 
   :depends on r-scales: 
   :depends on r-stringr: 
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

    pixi global install bioconductor-multiwgcna

to add into an existing workspace instead, run::

    pixi add bioconductor-multiwgcna

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-multiwgcna

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-multiwgcna

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-multiwgcna:<tag>

(see `bioconductor-multiwgcna/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-multiwgcna| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multiwgcna.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multiwgcna
   :alt:   (downloads)
.. |docker_bioconductor-multiwgcna| image:: https://quay.io/repository/biocontainers/bioconductor-multiwgcna/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multiwgcna
.. _`bioconductor-multiwgcna/tags`: https://quay.io/repository/biocontainers/bioconductor-multiwgcna?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-multiwgcna";
        var versions = ["1.7.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multiwgcna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multiwgcna/README.html