:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-xcell2'
.. highlight: bash

bioconductor-xcell2
===================

.. conda:recipe:: bioconductor-xcell2
   :replaces_section_title:
   :noindex:

   A Tool for Generic Cell Type Enrichment Analysis

   :homepage: https://bioconductor.org/packages/3.22/bioc/html/xCell2.html
   :license: GPL (>= 3)
   :recipe: /`bioconductor-xcell2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xcell2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-xcell2/meta.yaml>`_

   xCell2 provides methods for cell type enrichment analysis using cell type signatures. It includes three main functions \- 1. xCell2Train for training custom references objects from bulk or single\-cell RNA\-seq datasets. 2. xCell2Analysis for conducting the cell type enrichment analysis using the custom reference. 3. xCell2GetLineage for identifying dependencies between different cell types using ontology.


.. conda:package:: bioconductor-xcell2

   |downloads_bioconductor-xcell2| |docker_bioconductor-xcell2|

   :versions:
      
      

      ``1.2.3-0``

      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-singscore: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-magrittr: 
   :depends on r-matrix: 
   :depends on r-minpack.lm: 
   :depends on r-ontologyindex: 
   :depends on r-pracma: 
   :depends on r-progress: 
   :depends on r-quadprog: 
   :depends on r-readr: 
   :depends on r-rfast: 
   :depends on r-tibble: 
   :depends on r-tidyselect: 

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

    pixi global install bioconductor-xcell2

to add into an existing workspace instead, run::

    pixi add bioconductor-xcell2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-xcell2

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-xcell2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-xcell2:<tag>

(see `bioconductor-xcell2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-xcell2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-xcell2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-xcell2
   :alt:   (downloads)
.. |docker_bioconductor-xcell2| image:: https://quay.io/repository/biocontainers/bioconductor-xcell2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-xcell2
.. _`bioconductor-xcell2/tags`: https://quay.io/repository/biocontainers/bioconductor-xcell2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-xcell2";
        var versions = ["1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-xcell2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-xcell2/README.html