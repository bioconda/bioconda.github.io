:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicplot'
.. highlight: bash

bioconductor-genomicplot
========================

.. conda:recipe:: bioconductor-genomicplot
   :replaces_section_title:
   :noindex:

   Plot profiles of next generation sequencing data in genomic features

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GenomicPlot.html
   :license: GPL-2
   :recipe: /`bioconductor-genomicplot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicplot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicplot/meta.yaml>`_

   Visualization of next generation sequencing \(NGS\) data is essential for interpreting high\-throughput genomics experiment results. \'GenomicPlot\' facilitates plotting of NGS data in various formats \(bam\, bed\, wig and bigwig\)\; both coverage and enrichment over input can be computed and displayed with respect to genomic features \(such as UTR\, CDS\, enhancer\)\, and user defined genomic loci or regions. Statistical tests on signal intensity within user defined regions of interest can be performed and represented as boxplots or bar graphs. Parallel processing is used to speed up computation on multicore platforms. In addition to genomic plots which is suitable for displaying of coverage of genomic DNA \(such as ChIPseq data\)\, metagenomic \(without introns\) plots can also be made for RNAseq or CLIPseq data as well.


.. conda:package:: bioconductor-genomicplot

   |downloads_bioconductor-genomicplot| |docker_bioconductor-genomicplot|

   :versions:
      
      

      ``1.8.1-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-complexheatmap: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-edger: ``>=4.8.0,<4.9.0``
   :depends on bioconductor-genomation: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-plyranges: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-rcas: ``>=1.36.0,<1.37.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-txdbmaker: ``>=1.6.0,<1.7.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-circlize: 
   :depends on r-cowplot: ``>=1.1.1``
   :depends on r-dplyr: 
   :depends on r-ggplot2: ``>=3.3.5``
   :depends on r-ggplotify: 
   :depends on r-ggpubr: 
   :depends on r-ggsci: ``>=2.9``
   :depends on r-ggsignif: ``>=0.6.3``
   :depends on r-scales: ``>=1.2.0``
   :depends on r-tidyr: 
   :depends on r-venndiagram: 
   :depends on r-viridis: 

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

    pixi global install bioconductor-genomicplot

to add into an existing workspace instead, run::

    pixi add bioconductor-genomicplot

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-genomicplot

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-genomicplot

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-genomicplot:<tag>

(see `bioconductor-genomicplot/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-genomicplot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicplot.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicplot
   :alt:   (downloads)
.. |docker_bioconductor-genomicplot| image:: https://quay.io/repository/biocontainers/bioconductor-genomicplot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicplot
.. _`bioconductor-genomicplot/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicplot?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomicplot";
        var versions = ["1.8.1","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicplot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicplot/README.html