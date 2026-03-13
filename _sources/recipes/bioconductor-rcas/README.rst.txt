:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcas'
.. highlight: bash

bioconductor-rcas
=================

.. conda:recipe:: bioconductor-rcas
   :replaces_section_title:
   :noindex:

   RNA Centric Annotation System

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RCAS.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rcas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcas/meta.yaml>`_
   :links: biotools: :biotools:`rcas`

   RCAS is an R\/Bioconductor package designed as a generic reporting tool for the functional analysis of transcriptome\-wide regions of interest detected by high\-throughput experiments. Such transcriptomic regions could be\, for instance\, signal peaks detected by CLIP\-Seq analysis for protein\-RNA interaction sites\, RNA modification sites \(alias the epitranscriptome\)\, CAGE\-tag locations\, or any other collection of query regions at the level of the transcriptome. RCAS produces in\-depth annotation summaries and coverage profiles based on the distribution of the query regions with respect to transcript features \(exons\, introns\, 5\'\/3\' UTR regions\, exon\-intron boundaries\, promoter regions\). Moreover\, RCAS can carry out functional enrichment analyses and discriminative motif discovery.


.. conda:package:: bioconductor-rcas

   |downloads_bioconductor-rcas| |docker_bioconductor-rcas|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.28.2-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.32.0-0``,  ``1.28.2-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.1-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.5.4-2``,  ``1.5.4-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.1.1-0``,  ``1.0.0-0``,  ``1.0.0.dev75225b9-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-bsgenome.hsapiens.ucsc.hg19: ``>=1.4.0,<1.5.0``
   :depends on bioconductor-genomation: ``>=1.42.0,<1.43.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqlogo: ``>=1.76.0,<1.77.0``
   :depends on bioconductor-txdbmaker: ``>=1.6.0,<1.7.0``
   :depends on pandoc: ``>=1.12.3``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cowplot: 
   :depends on r-data.table: 
   :depends on r-dt: ``>=0.2``
   :depends on r-ggplot2: 
   :depends on r-gprofiler2: 
   :depends on r-knitr: ``>=1.12.3``
   :depends on r-pbapply: 
   :depends on r-pheatmap: 
   :depends on r-plotly: ``>=4.5.2``
   :depends on r-plotrix: 
   :depends on r-proxy: 
   :depends on r-ranger: 
   :depends on r-rmarkdown: ``>=0.9.5``
   :depends on r-rsqlite: 

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

    pixi global install bioconductor-rcas

to add into an existing workspace instead, run::

    pixi add bioconductor-rcas

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rcas

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rcas

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rcas:<tag>

(see `bioconductor-rcas/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rcas| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcas.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcas
   :alt:   (downloads)
.. |docker_bioconductor-rcas| image:: https://quay.io/repository/biocontainers/bioconductor-rcas/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcas
.. _`bioconductor-rcas/tags`: https://quay.io/repository/biocontainers/bioconductor-rcas?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rcas";
        var versions = ["1.36.0","1.32.0","1.28.2","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcas/README.html