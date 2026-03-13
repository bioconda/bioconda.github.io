:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epicompare'
.. highlight: bash

bioconductor-epicompare
=======================

.. conda:recipe:: bioconductor-epicompare
   :replaces_section_title:
   :noindex:

   Comparison\, Benchmarking \& QC of Epigenomic Datasets

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/EpiCompare.html
   :license: GPL-3
   :recipe: /`bioconductor-epicompare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epicompare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epicompare/meta.yaml>`_

   EpiCompare is used to compare and analyse epigenetic datasets for quality control and benchmarking purposes. The package outputs an HTML report consisting of three sections\: \(1. General metrics\) Metrics on peaks \(percentage of blacklisted and non\-standard peaks\, and peak widths\) and fragments \(duplication rate\) of samples\, \(2. Peak overlap\) Percentage and statistical significance of overlapping and non\-overlapping peaks. Also includes upset plot and \(3. Functional annotation\) functional annotation \(ChromHMM\, ChIPseeker and enrichment analysis\) of peaks. Also includes peak enrichment around TSS.


.. conda:package:: bioconductor-epicompare

   |downloads_bioconductor-epicompare| |docker_bioconductor-epicompare|

   :versions:
      
      

      ``1.14.0-0``,  ``1.10.0-0``,  ``1.4.0-0``,  ``1.2.0-0``

      

   
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-chipseeker: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomation: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-downloadthis: 
   :depends on r-ggplot2: ``>=3.5.0``
   :depends on r-htmltools: 
   :depends on r-plotly: 
   :depends on r-reshape2: 
   :depends on r-rmarkdown: 
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

    pixi global install bioconductor-epicompare

to add into an existing workspace instead, run::

    pixi add bioconductor-epicompare

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-epicompare

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-epicompare

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-epicompare:<tag>

(see `bioconductor-epicompare/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-epicompare| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epicompare.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epicompare
   :alt:   (downloads)
.. |docker_bioconductor-epicompare| image:: https://quay.io/repository/biocontainers/bioconductor-epicompare/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epicompare
.. _`bioconductor-epicompare/tags`: https://quay.io/repository/biocontainers/bioconductor-epicompare?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epicompare";
        var versions = ["1.14.0","1.10.0","1.4.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epicompare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epicompare/README.html