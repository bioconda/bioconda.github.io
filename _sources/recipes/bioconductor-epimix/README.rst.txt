:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-epimix'
.. highlight: bash

bioconductor-epimix
===================

.. conda:recipe:: bioconductor-epimix
   :replaces_section_title:
   :noindex:

   EpiMix\: an integrative tool for the population\-level analysis of DNA methylation

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/EpiMix.html
   :license: GPL-3
   :recipe: /`bioconductor-epimix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epimix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-epimix/meta.yaml>`_

   EpiMix is a comprehensive tool for the integrative analysis of high\-throughput DNA methylation data and gene expression data. EpiMix enables automated data downloading \(from TCGA or GEO\)\, preprocessing\, methylation modeling\, interactive visualization and functional annotation.To identify hypo\- or hypermethylated CpG sites across physiological or pathological conditions\, EpiMix uses a beta mixture modeling to identify the methylation states of each CpG probe and compares the methylation of the experimental group to the control group.The output from EpiMix is the functional DNA methylation that is predictive of gene expression. EpiMix incorporates specialized algorithms to identify functional DNA methylation at various genetic elements\, including proximal cis\-regulatory elements of protein\-coding genes\, distal enhancers\, and genes encoding microRNAs and lncRNAs.


.. conda:package:: bioconductor-epimix

   |downloads_bioconductor-epimix| |docker_bioconductor-epimix|

   :versions:
      
      

      ``1.12.0-0``,  ``1.8.0-0``,  ``1.4.0-0``,  ``1.1.2-0``,  ``0.99.16-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-biobase: ``>=2.70.0,<2.71.0``
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-elmer.data: ``>=2.34.0,<2.35.0``
   :depends on bioconductor-epimix.data: ``>=1.12.0,<1.13.0``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-impute: ``>=1.84.0,<1.85.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-doparallel: 
   :depends on r-dosnow: 
   :depends on r-downloader: 
   :depends on r-dplyr: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-plyr: 
   :depends on r-progress: 
   :depends on r-r.matlab: 
   :depends on r-rcolorbrewer: 
   :depends on r-rcurl: 
   :depends on r-rlang: 
   :depends on r-rpmm: 
   :depends on r-tibble: 
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

    pixi global install bioconductor-epimix

to add into an existing workspace instead, run::

    pixi add bioconductor-epimix

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-epimix

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-epimix

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-epimix:<tag>

(see `bioconductor-epimix/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-epimix| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-epimix.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-epimix
   :alt:   (downloads)
.. |docker_bioconductor-epimix| image:: https://quay.io/repository/biocontainers/bioconductor-epimix/status
   :target: https://quay.io/repository/biocontainers/bioconductor-epimix
.. _`bioconductor-epimix/tags`: https://quay.io/repository/biocontainers/bioconductor-epimix?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-epimix";
        var versions = ["1.12.0","1.8.0","1.4.0","1.1.2","0.99.16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-epimix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-epimix/README.html