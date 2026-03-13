:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-spiat'
.. highlight: bash

bioconductor-spiat
==================

.. conda:recipe:: bioconductor-spiat
   :replaces_section_title:
   :noindex:

   Spatial Image Analysis of Tissues

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SPIAT.html
   :license: Artistic-2.0 + file LICENSE
   :recipe: /`bioconductor-spiat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spiat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-spiat/meta.yaml>`_

   SPIAT \(\*\*Sp\*\*atial \*\*I\*\*mage \*\*A\*\*nalysis of \*\*T\*\*issues\) is an R package with a suite of data processing\, quality control\, visualization and data analysis tools. SPIAT is compatible with data generated from single\-cell spatial proteomics platforms \(e.g. OPAL\, CODEX\, MIBI\, cellprofiler\). SPIAT reads spatial data in the form of X and Y coordinates of cells\, marker intensities and cell phenotypes. SPIAT includes six analysis modules that allow visualization\, calculation of cell colocalization\, categorization of the immune microenvironment relative to tumor areas\, analysis of cellular neighborhoods\, and the quantification of spatial heterogeneity\, providing a comprehensive toolkit for spatial data analysis.


.. conda:package:: bioconductor-spiat

   |downloads_bioconductor-spiat| |docker_bioconductor-spiat|

   :versions:
      
      

      ``1.12.1-0``,  ``1.8.0-0``,  ``1.4.1-0``,  ``1.2.2-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-dittoseq: ``>=1.22.0,<1.23.0``
   :depends on bioconductor-spatialexperiment: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-apcluster: ``>=1.4.7``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dbscan: ``>=1.1-5``
   :depends on r-dplyr: ``>=0.8.3``
   :depends on r-ggplot2: ``>=3.2.1``
   :depends on r-gridextra: ``>=2.3``
   :depends on r-gtools: ``>=3.8.1``
   :depends on r-mmand: ``>=1.5.4``
   :depends on r-pracma: ``>=2.2.5``
   :depends on r-rann: ``>=2.6.1``
   :depends on r-raster: 
   :depends on r-reshape2: ``>=1.4.3``
   :depends on r-rlang: 
   :depends on r-sp: 
   :depends on r-spatstat.explore: 
   :depends on r-spatstat.geom: 
   :depends on r-tibble: ``>=2.1.3``
   :depends on r-vroom: 

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

    pixi global install bioconductor-spiat

to add into an existing workspace instead, run::

    pixi add bioconductor-spiat

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-spiat

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-spiat

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-spiat:<tag>

(see `bioconductor-spiat/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-spiat| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-spiat.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-spiat
   :alt:   (downloads)
.. |docker_bioconductor-spiat| image:: https://quay.io/repository/biocontainers/bioconductor-spiat/status
   :target: https://quay.io/repository/biocontainers/bioconductor-spiat
.. _`bioconductor-spiat/tags`: https://quay.io/repository/biocontainers/bioconductor-spiat?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-spiat";
        var versions = ["1.12.1","1.8.0","1.4.1","1.2.2","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-spiat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-spiat/README.html