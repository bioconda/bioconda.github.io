:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hicaggr'
.. highlight: bash

bioconductor-hicaggr
====================

.. conda:recipe:: bioconductor-hicaggr
   :replaces_section_title:
   :noindex:

   Set of 3D genomic interaction analysis tools

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/HicAggR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-hicaggr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicaggr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicaggr/meta.yaml>`_

   This package provides a set of functions useful in the analysis of 3D genomic interactions. It includes the import of standard HiC data formats into R and HiC normalisation procedures. The main objective of this package is to improve the visualization and quantification of the analysis of HiC contacts through aggregation. The package allows to import 1D genomics data\, such as peaks from ATACSeq\, ChIPSeq\, to create potential couples between features of interest under user\-defined parameters such as distance between pairs of features of interest. It allows then the extraction of contact values from the HiC data for these couples and to perform Aggregated Peak Analysis \(APA\) for visualization\, but also to compare normalized contact values between conditions. Overall the package allows to integrate 1D genomics data with 3D genomics data\, providing an easy access to HiC contact values.


.. conda:package:: bioconductor-hicaggr

   |downloads_bioconductor-hicaggr| |docker_bioconductor-hicaggr|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-interactionset: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rhdf5: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-checkmate: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-matrix: 
   :depends on r-purrr: 
   :depends on r-reshape: 
   :depends on r-rlang: 
   :depends on r-strawr: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-withr: 

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

    pixi global install bioconductor-hicaggr

to add into an existing workspace instead, run::

    pixi add bioconductor-hicaggr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hicaggr

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hicaggr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hicaggr:<tag>

(see `bioconductor-hicaggr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hicaggr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hicaggr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hicaggr
   :alt:   (downloads)
.. |docker_bioconductor-hicaggr| image:: https://quay.io/repository/biocontainers/bioconductor-hicaggr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hicaggr
.. _`bioconductor-hicaggr/tags`: https://quay.io/repository/biocontainers/bioconductor-hicaggr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hicaggr";
        var versions = ["1.6.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hicaggr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hicaggr/README.html