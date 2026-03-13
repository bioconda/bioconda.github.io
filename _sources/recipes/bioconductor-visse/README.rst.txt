:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-visse'
.. highlight: bash

bioconductor-visse
==================

.. conda:recipe:: bioconductor-visse
   :replaces_section_title:
   :noindex:

   Visualising Set Enrichment Analysis Results

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/vissE.html
   :license: GPL-3
   :recipe: /`bioconductor-visse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-visse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-visse/meta.yaml>`_

   This package enables the interpretation and analysis of results from a gene set enrichment analysis using network\-based and text\-mining approaches. Most enrichment analyses result in large lists of significant gene sets that are difficult to interpret. Tools in this package help build a similarity\-based network of significant gene sets from a gene set enrichment analysis that can then be investigated for their biological function using text\-mining approaches.


.. conda:package:: bioconductor-visse

   |downloads_bioconductor-visse| |docker_bioconductor-visse|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.2.2-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-gseabase: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-msigdb: ``>=1.18.0,<1.19.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggforce: 
   :depends on r-ggplot2: 
   :depends on r-ggraph: 
   :depends on r-ggrepel: 
   :depends on r-ggwordcloud: 
   :depends on r-igraph: 
   :depends on r-plyr: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-scales: 
   :depends on r-scico: 
   :depends on r-textstem: 
   :depends on r-tidygraph: 
   :depends on r-tm: 

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

    pixi global install bioconductor-visse

to add into an existing workspace instead, run::

    pixi add bioconductor-visse

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-visse

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-visse

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-visse:<tag>

(see `bioconductor-visse/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-visse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-visse.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-visse
   :alt:   (downloads)
.. |docker_bioconductor-visse| image:: https://quay.io/repository/biocontainers/bioconductor-visse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-visse
.. _`bioconductor-visse/tags`: https://quay.io/repository/biocontainers/bioconductor-visse?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-visse";
        var versions = ["1.18.0","1.14.0","1.10.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-visse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-visse/README.html