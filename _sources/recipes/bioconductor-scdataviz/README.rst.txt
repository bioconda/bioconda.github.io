:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scdataviz'
.. highlight: bash

bioconductor-scdataviz
======================

.. conda:recipe:: bioconductor-scdataviz
   :replaces_section_title:
   :noindex:

   scDataviz\: single cell dataviz and downstream analyses

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scDataviz.html
   :license: GPL-3
   :recipe: /`bioconductor-scdataviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdataviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scdataviz/meta.yaml>`_

   In the single cell World\, which includes flow cytometry\, mass cytometry\, single\-cell RNA\-seq \(scRNA\-seq\)\, and others\, there is a need to improve data visualisation and to bring analysis capabilities to researchers even from non\-technical backgrounds. scDataviz attempts to fit into this space\, while also catering for advanced users. Additonally\, due to the way that scDataviz is designed\, which is based on SingleCellExperiment\, it has a \'plug and play\' feel\, and immediately lends itself as flexibile and compatibile with studies that go beyond scDataviz. Finally\, the graphics in scDataviz are generated via the ggplot engine\, which means that users can \'add on\' features to these with ease.


.. conda:package:: bioconductor-scdataviz

   |downloads_bioconductor-scdataviz| |docker_bioconductor-scdataviz|

   :versions:
      
      

      ``1.20.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-flowcore: ``>=2.22.0,<2.23.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-corrplot: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-mass: 
   :depends on r-matrixstats: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-scales: 
   :depends on r-seurat: 
   :depends on r-umap: 

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

    pixi global install bioconductor-scdataviz

to add into an existing workspace instead, run::

    pixi add bioconductor-scdataviz

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scdataviz

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scdataviz

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scdataviz:<tag>

(see `bioconductor-scdataviz/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scdataviz| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scdataviz.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scdataviz
   :alt:   (downloads)
.. |docker_bioconductor-scdataviz| image:: https://quay.io/repository/biocontainers/bioconductor-scdataviz/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scdataviz
.. _`bioconductor-scdataviz/tags`: https://quay.io/repository/biocontainers/bioconductor-scdataviz?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scdataviz";
        var versions = ["1.20.0","1.16.0","1.12.0","1.10.0","1.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scdataviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scdataviz/README.html