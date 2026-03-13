:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ucell'
.. highlight: bash

bioconductor-ucell
==================

.. conda:recipe:: bioconductor-ucell
   :replaces_section_title:
   :noindex:

   Rank\-based signature enrichment analysis for single\-cell data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/UCell.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-ucell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ucell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ucell/meta.yaml>`_

   UCell is a package for evaluating gene signatures in single\-cell datasets. UCell signature scores\, based on the Mann\-Whitney U statistic\, are robust to dataset size and heterogeneity\, and their calculation demands less computing time and memory than other available methods\, enabling the processing of large datasets in a few minutes even on machines with limited computing power. UCell can be applied to any single\-cell data matrix\, and includes functions to directly interact with SingleCellExperiment and Seurat objects.


.. conda:package:: bioconductor-ucell

   |downloads_bioconductor-ucell| |docker_bioconductor-ucell|

   :versions:
      
      

      ``2.14.0-0``,  ``2.10.1-0``,  ``2.6.2-0``,  ``2.4.0-0``,  ``2.2.0-0``

      

   
   :depends on bioconductor-biocneighbors: ``>=2.4.0,<2.5.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: ``>=1.13.6``
   :depends on r-matrix: 

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

    pixi global install bioconductor-ucell

to add into an existing workspace instead, run::

    pixi add bioconductor-ucell

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-ucell

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-ucell

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-ucell:<tag>

(see `bioconductor-ucell/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-ucell| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ucell.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ucell
   :alt:   (downloads)
.. |docker_bioconductor-ucell| image:: https://quay.io/repository/biocontainers/bioconductor-ucell/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ucell
.. _`bioconductor-ucell/tags`: https://quay.io/repository/biocontainers/bioconductor-ucell?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ucell";
        var versions = ["2.14.0","2.10.1","2.6.2","2.4.0","2.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ucell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ucell/README.html