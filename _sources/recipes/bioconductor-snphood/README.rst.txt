:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-snphood'
.. highlight: bash

bioconductor-snphood
====================

.. conda:recipe:: bioconductor-snphood
   :replaces_section_title:
   :noindex:

   SNPhood\: Investigate\, quantify and visualise the epigenomic neighbourhood of SNPs using NGS data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/SNPhood.html
   :license: LGPL (>= 3)
   :recipe: /`bioconductor-snphood <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snphood>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snphood/meta.yaml>`_
   :links: biotools: :biotools:`snphood`, doi: :doi:`10.1093/bioinformatics/btw127`

   To date\, thousands of single nucleotide polymorphisms \(SNPs\) have been found to be associated with complex traits and diseases. However\, the vast majority of these disease\-associated SNPs lie in the non\-coding part of the genome\, and are likely to affect regulatory elements\, such as enhancers and promoters\, rather than function of a protein. Thus\, to understand the molecular mechanisms underlying genetic traits and diseases\, it becomes increasingly important to study the effect of a SNP on nearby molecular traits such as chromatin environment or transcription factor \(TF\) binding. Towards this aim\, we developed SNPhood\, a user\-friendly \*Bioconductor\* R package to investigate and visualize the local neighborhood of a set of SNPs of interest for NGS data such as chromatin marks or transcription factor binding sites from ChIP\-Seq or RNA\- Seq experiments. SNPhood comprises a set of easy\-to\-use functions to extract\, normalize and summarize reads for a genomic region\, perform various data quality checks\, normalize read counts using additional input files\, and to cluster and visualize the regions according to the binding pattern. The regions around each SNP can be binned in a user\-defined fashion to allow for analysis of very broad patterns as well as a detailed investigation of specific binding shapes. Furthermore\, SNPhood supports the integration with genotype information to investigate and visualize genotype\-specific binding patterns. Finally\, SNPhood can be employed for determining\, investigating\, and visualizing allele\-specific binding patterns around the SNPs of interest.


.. conda:package:: bioconductor-snphood

   |downloads_bioconductor-snphood| |docker_bioconductor-snphood|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-deseq2: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-variantannotation: ``>=1.56.0,<1.57.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-checkmate: 
   :depends on r-cluster: 
   :depends on r-data.table: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-lattice: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on r-scales: 

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

    pixi global install bioconductor-snphood

to add into an existing workspace instead, run::

    pixi add bioconductor-snphood

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-snphood

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-snphood

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-snphood:<tag>

(see `bioconductor-snphood/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-snphood| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snphood.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-snphood
   :alt:   (downloads)
.. |docker_bioconductor-snphood| image:: https://quay.io/repository/biocontainers/bioconductor-snphood/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snphood
.. _`bioconductor-snphood/tags`: https://quay.io/repository/biocontainers/bioconductor-snphood?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-snphood";
        var versions = ["1.40.0","1.36.0","1.32.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snphood/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snphood/README.html