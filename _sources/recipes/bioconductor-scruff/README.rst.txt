:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-scruff'
.. highlight: bash

bioconductor-scruff
===================

.. conda:recipe:: bioconductor-scruff
   :replaces_section_title:
   :noindex:

   Single Cell RNA\-Seq UMI Filtering Facilitator \(scruff\)

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/scruff.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-scruff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scruff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-scruff/meta.yaml>`_

   A pipeline which processes single cell RNA\-seq \(scRNA\-seq\) reads from CEL\-seq and CEL\-seq2 protocols. Demultiplex scRNA\-seq FASTQ files\, align reads to reference genome using Rsubread\, and generate UMI filtered count matrix. Also provide visualizations of read alignments and pre\- and post\-alignment QC metrics.


.. conda:package:: bioconductor-scruff

   |downloads_bioconductor-scruff| |docker_bioconductor-scruff|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.3-0</code>,  <code>1.8.1-0</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.3-0``,  ``1.8.1-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.4-0``,  ``1.0.1-1``,  ``1.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-ggbio: ``>=1.58.0,<1.59.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-rsubread: ``>=2.24.0,<2.25.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-shortread: ``>=1.68.0,<1.69.0``
   :depends on bioconductor-singlecellexperiment: ``>=1.32.0,<1.33.0``
   :depends on bioconductor-summarizedexperiment: ``>=1.40.0,<1.41.0``
   :depends on bioconductor-txdbmaker: ``>=1.6.0,<1.7.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-ggplot2: 
   :depends on r-ggthemes: 
   :depends on r-parallelly: 
   :depends on r-patchwork: 
   :depends on r-plyr: 
   :depends on r-scales: 
   :depends on r-stringdist: 

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

    pixi global install bioconductor-scruff

to add into an existing workspace instead, run::

    pixi add bioconductor-scruff

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-scruff

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-scruff

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-scruff:<tag>

(see `bioconductor-scruff/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-scruff| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-scruff.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-scruff
   :alt:   (downloads)
.. |docker_bioconductor-scruff| image:: https://quay.io/repository/biocontainers/bioconductor-scruff/status
   :target: https://quay.io/repository/biocontainers/bioconductor-scruff
.. _`bioconductor-scruff/tags`: https://quay.io/repository/biocontainers/bioconductor-scruff?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-scruff";
        var versions = ["1.28.0","1.24.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-scruff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-scruff/README.html