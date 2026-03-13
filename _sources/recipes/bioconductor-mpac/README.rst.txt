:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mpac'
.. highlight: bash

bioconductor-mpac
=================

.. conda:recipe:: bioconductor-mpac
   :replaces_section_title:
   :noindex:

   Multi\-omic Pathway Analysis of Cancer

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/MPAC.html
   :license: GPL-3
   :recipe: /`bioconductor-mpac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mpac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mpac/meta.yaml>`_

   Multi\-omic Pathway Analysis of Cancer \(MPAC\)\, integrates multi\-omic data for understanding cancer mechanisms. It predicts novel patient groups with distinct pathway profiles as well as identifying key pathway proteins with potential clinical associations. From CNA and RNA\-seq data\, it determines genes’ DNA and RNA states \(i.e.\, repressed\, normal\, or activated\)\, which serve as the input for PARADIGM to calculate Inferred Pathway Levels \(IPLs\). It also permutes DNA and RNA states to create a background distribution to filter IPLs as a way to remove events observed by chance. It provides multiple methods for downstream analysis and visualization.


.. conda:package:: bioconductor-mpac

   |downloads_bioconductor-mpac| |docker_bioconductor-mpac|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biocsingular: ``>=1.26.0,<1.27.0``
   :depends on bioconductor-bluster: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-fgsea: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-scran: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: ``>=0.4.16``
   :depends on r-data.table: ``>=1.14.2``
   :depends on r-fitdistrplus: ``>=1.1``
   :depends on r-ggplot2: ``>=3.5.1``
   :depends on r-ggraph: ``>=2.2.1``
   :depends on r-igraph: ``>=1.4.3``
   :depends on r-scales: ``>=1.3.0``
   :depends on r-stringr: ``>=1.5.1``
   :depends on r-survival: ``>=3.7``
   :depends on r-survminer: ``>=0.4.9``
   :depends on r-viridis: ``>=0.6.5``

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

    pixi global install bioconductor-mpac

to add into an existing workspace instead, run::

    pixi add bioconductor-mpac

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mpac

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mpac

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mpac:<tag>

(see `bioconductor-mpac/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mpac| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mpac.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mpac
   :alt:   (downloads)
.. |docker_bioconductor-mpac| image:: https://quay.io/repository/biocontainers/bioconductor-mpac/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mpac
.. _`bioconductor-mpac/tags`: https://quay.io/repository/biocontainers/bioconductor-mpac?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mpac";
        var versions = ["1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mpac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mpac/README.html