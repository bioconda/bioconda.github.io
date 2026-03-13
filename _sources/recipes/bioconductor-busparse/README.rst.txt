:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-busparse'
.. highlight: bash

bioconductor-busparse
=====================

.. conda:recipe:: bioconductor-busparse
   :replaces_section_title:
   :noindex:

   kallisto \| bustools R utilities

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/BUSpaRse.html
   :license: BSD_2_clause + file LICENSE
   :recipe: /`bioconductor-busparse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-busparse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-busparse/meta.yaml>`_

   The kallisto \| bustools pipeline is a fast and modular set of tools to convert single cell RNA\-seq reads in fastq files into gene count or transcript compatibility counts \(TCC\) matrices for downstream analysis. Central to this pipeline is the barcode\, UMI\, and set \(BUS\) file format. This package serves the following purposes\: First\, this package allows users to manipulate BUS format files as data frames in R and then convert them into gene count or TCC matrices. Furthermore\, since R and Rcpp code is easier to handle than pure C\+\+ code\, users are encouraged to tweak the source code of this package to experiment with new uses of BUS format and different ways to convert the BUS file into gene count matrix. Second\, this package can conveniently generate files required to generate gene count matrices for spliced and unspliced transcripts for RNA velocity. Here biotypes can be filtered and scaffolds and haplotypes can be removed\, and the filtered transcriptome can be extracted and written to disk. Third\, this package implements utility functions to get transcripts and associated genes required to convert BUS files to gene count matrices\, to write the transcript to gene information in the format required by bustools\, and to read output of bustools into R as sparses matrices.


.. conda:package:: bioconductor-busparse

   |downloads_bioconductor-busparse| |docker_bioconductor-busparse|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.1-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.8.0-2</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.8.0-2``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.5.3-0``,  ``1.4.2-0``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0a0``
   :depends on bioconductor-annotationfilter: ``>=1.34.0,<1.35.0``
   :depends on bioconductor-annotationfilter: ``>=1.34.0,<1.35.0a0``
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0``
   :depends on bioconductor-annotationhub: ``>=4.0.0,<4.1.0a0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0a0``
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-biomart: ``>=2.66.0,<2.67.0a0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0a0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0a0``
   :depends on bioconductor-ensembldb: ``>=2.34.0,<2.35.0``
   :depends on bioconductor-ensembldb: ``>=2.34.0,<2.35.0a0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.2,<1.47.0a0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0a0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0a0``
   :depends on bioconductor-plyranges: ``>=1.30.0,<1.31.0``
   :depends on bioconductor-plyranges: ``>=1.30.1,<1.31.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-bh: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-lifecycle: 
   :depends on r-magrittr: 
   :depends on r-matrix: 
   :depends on r-rcpp: 
   :depends on r-rcpparmadillo: 
   :depends on r-rcppprogress: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 
   :depends on r-zeallot: 

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

    pixi global install bioconductor-busparse

to add into an existing workspace instead, run::

    pixi add bioconductor-busparse

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-busparse

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-busparse

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-busparse:<tag>

(see `bioconductor-busparse/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-busparse| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-busparse.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-busparse
   :alt:   (downloads)
.. |docker_bioconductor-busparse| image:: https://quay.io/repository/biocontainers/bioconductor-busparse/status
   :target: https://quay.io/repository/biocontainers/bioconductor-busparse
.. _`bioconductor-busparse/tags`: https://quay.io/repository/biocontainers/bioconductor-busparse?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-busparse";
        var versions = ["1.24.0","1.20.0","1.16.0","1.14.1","1.12.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-busparse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-busparse/README.html