:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-metavolcanor'
.. highlight: bash

bioconductor-metavolcanor
=========================

.. conda:recipe:: bioconductor-metavolcanor
   :replaces_section_title:
   :noindex:

   Gene Expression Meta\-analysis Visualization Tool

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MetaVolcanoR.html
   :license: GPL-3
   :recipe: /`bioconductor-metavolcanor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metavolcanor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-metavolcanor/meta.yaml>`_

   MetaVolcanoR combines differential gene expression results. It implements three strategies to summarize differential gene expression from different studies. i\) Random Effects Model \(REM\) approach\, ii\) a p\-value combining\-approach\, and iii\) a vote\-counting approach. In all cases\, MetaVolcano exploits the Volcano plot reasoning to visualize the gene expression meta\-analysis results.


.. conda:package:: bioconductor-metavolcanor

   |downloads_bioconductor-metavolcanor| |docker_bioconductor-metavolcanor|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``0.99.14-0``

      

   
   :depends on bioconductor-topconfects: ``>=1.16.0,<1.17.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-cowplot: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-htmlwidgets: 
   :depends on r-metafor: 
   :depends on r-metap: 
   :depends on r-plotly: 
   :depends on r-rlang: 
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

    pixi global install bioconductor-metavolcanor

to add into an existing workspace instead, run::

    pixi add bioconductor-metavolcanor

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-metavolcanor

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-metavolcanor

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-metavolcanor:<tag>

(see `bioconductor-metavolcanor/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-metavolcanor| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-metavolcanor.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-metavolcanor
   :alt:   (downloads)
.. |docker_bioconductor-metavolcanor| image:: https://quay.io/repository/biocontainers/bioconductor-metavolcanor/status
   :target: https://quay.io/repository/biocontainers/bioconductor-metavolcanor
.. _`bioconductor-metavolcanor/tags`: https://quay.io/repository/biocontainers/bioconductor-metavolcanor?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-metavolcanor";
        var versions = ["1.14.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-metavolcanor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-metavolcanor/README.html