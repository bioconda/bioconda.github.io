:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-guideseq'
.. highlight: bash

bioconductor-guideseq
=====================

.. conda:recipe:: bioconductor-guideseq
   :replaces_section_title:
   :noindex:

   GUIDE\-seq and PEtag\-seq analysis pipeline

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/GUIDEseq.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-guideseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-guideseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-guideseq/meta.yaml>`_
   :links: biotools: :biotools:`guideseq`, doi: :doi:`10.1186/s12864-017-3746-y`

   The package implements GUIDE\-seq and PEtag\-seq analysis workflow including functions for filtering UMI and reads with low coverage\, obtaining unique insertion sites \(proxy of cleavage sites\)\, estimating the locations of the insertion sites\, aka\, peaks\, merging estimated insertion sites from plus and minus strand\, and performing off target search of the extended regions around insertion sites with mismatches and indels.


.. conda:package:: bioconductor-guideseq

   |downloads_bioconductor-guideseq| |docker_bioconductor-guideseq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biostrings: ``>=2.78.0,<2.79.0``
   :depends on bioconductor-bsgenome: ``>=1.78.0,<1.79.0``
   :depends on bioconductor-chippeakanno: ``>=3.44.0,<3.45.0``
   :depends on bioconductor-crisprseek: ``>=1.50.0,<1.51.0``
   :depends on bioconductor-genomeinfodb: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicalignments: ``>=1.46.0,<1.47.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-multtest: ``>=2.66.0,<2.67.0``
   :depends on bioconductor-pwalign: ``>=1.6.0,<1.7.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-ggplot2: 
   :depends on r-hash: 
   :depends on r-matrixstats: 
   :depends on r-openxlsx: 
   :depends on r-patchwork: 
   :depends on r-purrr: 
   :depends on r-rio: 
   :depends on r-rlang: 
   :depends on r-stringr: 
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

    pixi global install bioconductor-guideseq

to add into an existing workspace instead, run::

    pixi add bioconductor-guideseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-guideseq

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-guideseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-guideseq:<tag>

(see `bioconductor-guideseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-guideseq| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-guideseq.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-guideseq
   :alt:   (downloads)
.. |docker_bioconductor-guideseq| image:: https://quay.io/repository/biocontainers/bioconductor-guideseq/status
   :target: https://quay.io/repository/biocontainers/bioconductor-guideseq
.. _`bioconductor-guideseq/tags`: https://quay.io/repository/biocontainers/bioconductor-guideseq?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-guideseq";
        var versions = ["1.40.0","1.36.0","1.32.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-guideseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-guideseq/README.html