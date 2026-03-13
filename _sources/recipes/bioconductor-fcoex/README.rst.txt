:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-fcoex'
.. highlight: bash

bioconductor-fcoex
==================

.. conda:recipe:: bioconductor-fcoex
   :replaces_section_title:
   :noindex:

   FCBF\-based Co\-Expression Networks for Single Cells

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/fcoex.html
   :license: GPL-3
   :recipe: /`bioconductor-fcoex <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fcoex>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fcoex/meta.yaml>`_

   The fcoex package implements an easy\-to use interface to co\-expression analysis based on the FCBF \(Fast Correlation\-Based Filter\) algorithm. it was implemented especifically to deal with single\-cell data. The modules found can be used to redefine cell populations\, unrevel novel gene associations and predict gene function by guilt\-by\-association. The package structure is adapted from the CEMiTool package\, relying on visualizations and code designed and written by CEMiTool\'s authors.


.. conda:package:: bioconductor-fcoex

   |downloads_bioconductor-fcoex| |docker_bioconductor-fcoex|

   :versions:
      
      

      ``1.13.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-clusterprofiler: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-fcbf: ``>=2.8.0,<2.9.0``
   :depends on bioconductor-pathwaypca: ``>=1.16.0,<1.17.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.22.0,<1.23.0``
   :depends on r-base: ``>=4.3,<4.4.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-igraph: 
   :depends on r-intergraph: 
   :depends on r-matrix: 
   :depends on r-network: 
   :depends on r-progress: 
   :depends on r-scales: 
   :depends on r-sna: 
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

    pixi global install bioconductor-fcoex

to add into an existing workspace instead, run::

    pixi add bioconductor-fcoex

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-fcoex

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-fcoex

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-fcoex:<tag>

(see `bioconductor-fcoex/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-fcoex| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fcoex.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-fcoex
   :alt:   (downloads)
.. |docker_bioconductor-fcoex| image:: https://quay.io/repository/biocontainers/bioconductor-fcoex/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fcoex
.. _`bioconductor-fcoex/tags`: https://quay.io/repository/biocontainers/bioconductor-fcoex?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-fcoex";
        var versions = ["1.13.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fcoex/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fcoex/README.html