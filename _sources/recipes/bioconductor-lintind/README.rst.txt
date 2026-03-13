:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-lintind'
.. highlight: bash

bioconductor-lintind
====================

.. conda:recipe:: bioconductor-lintind
   :replaces_section_title:
   :noindex:

   Lineage tracing by indels

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/LinTInd.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-lintind <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lintind>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-lintind/meta.yaml>`_

   When we combine gene\-editing technology and sequencing technology\, we need to reconstruct a lineage tree from alleles generated and calculate the similarity between each pair of groups. FindIndel\(\) and IndelForm\(\) function will help you align each read to reference sequence and generate scar form strings respectively. IndelIdents\(\) function will help you to define a scar form for each cell or read. IndelPlot\(\) function will help you to visualize the distribution of deletion and insertion. TagProcess\(\) function will help you to extract indels for each cell or read. TagDist\(\) function will help you to calculate the similarity between each pair of groups across the indwells they contain. BuildTree\(\) function will help you to reconstruct a tree. PlotTree\(\) function will help you to visualize the tree.


.. conda:package:: bioconductor-lintind

   |downloads_bioconductor-lintind| |docker_bioconductor-lintind|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends on bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends on bioconductor-ggtree: ``>=3.14.0,<3.15.0``
   :depends on bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends on bioconductor-pwalign: ``>=1.2.0,<1.3.0``
   :depends on bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends on r-ape: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-cowplot: 
   :depends on r-data.tree: 
   :depends on r-dplyr: 
   :depends on r-ggnewscale: 
   :depends on r-ggplot2: 
   :depends on r-networkd3: 
   :depends on r-pheatmap: 
   :depends on r-purrr: 
   :depends on r-reshape2: 
   :depends on r-rlist: 
   :depends on r-stringdist: 
   :depends on r-stringr: 

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

    pixi global install bioconductor-lintind

to add into an existing workspace instead, run::

    pixi add bioconductor-lintind

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-lintind

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-lintind

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-lintind:<tag>

(see `bioconductor-lintind/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-lintind| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-lintind.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-lintind
   :alt:   (downloads)
.. |docker_bioconductor-lintind| image:: https://quay.io/repository/biocontainers/bioconductor-lintind/status
   :target: https://quay.io/repository/biocontainers/bioconductor-lintind
.. _`bioconductor-lintind/tags`: https://quay.io/repository/biocontainers/bioconductor-lintind?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-lintind";
        var versions = ["1.10.0","1.6.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-lintind/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-lintind/README.html