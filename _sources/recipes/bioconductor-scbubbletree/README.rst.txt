:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scbubbletree'
.. highlight: bash

bioconductor-scbubbletree
=========================

.. conda:recipe:: bioconductor-scbubbletree
   :replaces_section_title:
   :noindex:

   Quantitative visual exploration of scRNA\-seq data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scBubbletree.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-scbubbletree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scbubbletree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scbubbletree/meta.yaml>`_

   scBubbletree is a quantitative method for the visual exploration of scRNA\-seq data\, preserving key biological properties such as local and global cell distances and cell density distributions across samples. It effectively resolves overplotting and enables the visualization of diverse cell attributes from multiomic single\-cell experiments. Additionally\, scBubbletree is user\-friendly and integrates seamlessly with popular scRNA\-seq analysis tools\, facilitating comprehensive and intuitive data interpretation.


.. conda:package:: bioconductor-scbubbletree

   |downloads_bioconductor-scbubbletree| |docker_bioconductor-scbubbletree|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-ggtree: ``>=4.0.0,<4.1.0``
   :depends on r-ape: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-patchwork: 
   :depends on r-proxy: 
   :depends on r-reshape2: 
   :depends on r-scales: 
   :depends on r-seurat: 

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

    pixi global install bioconductor-scbubbletree

to add into an existing workspace instead, run::

    pixi add bioconductor-scbubbletree

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scbubbletree

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scbubbletree

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scbubbletree:<tag>

(see `bioconductor-scbubbletree/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scbubbletree| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scbubbletree.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scbubbletree
   :alt:   (downloads)
.. |docker_bioconductor-scbubbletree| image:: https://quay.io/repository/biocontainers/bioconductor-scbubbletree/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scbubbletree
.. _`bioconductor-scbubbletree/tags`: https://quay.io/repository/biocontainers/bioconductor-scbubbletree?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scbubbletree";
        var versions = ["1.12.0","1.8.0","1.4.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scbubbletree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scbubbletree/README.html