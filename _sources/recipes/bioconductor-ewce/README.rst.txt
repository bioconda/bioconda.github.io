:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ewce'
.. highlight: bash

bioconductor-ewce
=================

.. conda:recipe:: bioconductor-ewce
   :replaces_section_title:
   :noindex:

   Expression Weighted Celltype Enrichment

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/EWCE.html
   :license: GPL-3
   :recipe: /`bioconductor-ewce <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ewce>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ewce/meta.yaml>`_

   Used to determine which cell types are enriched within gene lists. The package provides tools for testing enrichments within simple gene lists \(such as human disease associated genes\) and those resulting from differential expression studies. The package does not depend upon any particular Single Cell Transcriptome dataset and user defined datasets can be loaded in and used in the analyses.


.. conda:package:: bioconductor-ewce

   |downloads_bioconductor-ewce| |docker_bioconductor-ewce|

   :versions:
      
      

      ``1.18.0-0``,  ``1.14.0-0``,  ``1.10.2-0``,  ``1.8.2-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-delayedarray: ``>=0.36.0,<0.37.0``
   :depends on bioconductor-ewcedata: ``>=1.18.0,<1.19.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-orthogene: ``>=1.16.0,<1.17.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-hgnchelper: 
   :depends on r-matrix: 
   :depends on r-reshape2: 
   :depends on r-rnomni: ``>=1.0``
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

    pixi global install bioconductor-ewce

to add into an existing workspace instead, run::

    pixi add bioconductor-ewce

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ewce

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ewce

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ewce:<tag>

(see `bioconductor-ewce/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ewce| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ewce.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ewce
   :alt:   (downloads)
.. |docker_bioconductor-ewce| image:: https://quay.io/repository/biocontainers/bioconductor-ewce/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ewce
.. _`bioconductor-ewce/tags`: https://quay.io/repository/biocontainers/bioconductor-ewce?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ewce";
        var versions = ["1.18.0","1.14.0","1.10.2","1.8.2","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ewce/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ewce/README.html