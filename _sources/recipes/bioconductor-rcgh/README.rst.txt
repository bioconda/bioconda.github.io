:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcgh'
.. highlight: bash

bioconductor-rcgh
=================

.. conda:recipe:: bioconductor-rcgh
   :replaces_section_title:
   :noindex:

   Comprehensive Pipeline for Analyzing and Visualizing Array\-Based CGH Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/rCGH.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rcgh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcgh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcgh/meta.yaml>`_
   :links: biotools: :biotools:`rcgh`, doi: :doi:`10.1093/bioinformatics/btv718`

   A comprehensive pipeline for analyzing and interactively visualizing genomic profiles generated through commercial or custom aCGH arrays. As inputs\, rCGH supports Agilent dual\-color Feature Extraction files \(.txt\)\, from 44 to 400K\, Affymetrix SNP6.0 and cytoScanHD probeset.txt\, cychp.txt\, and cnchp.txt files exported from ChAS or Affymetrix Power Tools. rCGH also supports custom arrays\, provided data complies with the expected format. This package takes over all the steps required for individual genomic profiles analysis\, from reading files to profiles segmentation and gene annotations. This package also provides several visualization functions \(static or interactive\) which facilitate individual profiles interpretation. Input files can be in compressed format\, e.g. .bz2 or .gz.


.. conda:package:: bioconductor-rcgh

   |downloads_bioconductor-rcgh| |docker_bioconductor-rcgh|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-acgh: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-affy: ``>=1.88.0,<1.89.0``
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-dnacopy: ``>=1.84.0,<1.85.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-limma: ``>=3.66.0,<3.67.0``
   :depends on bioconductor-org.hs.eg.db: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on bioconductor-txdb.hsapiens.ucsc.hg18.knowngene: ``>=3.2.0,<3.3.0``
   :depends on bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.22.0,<3.23.0``
   :depends on bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.22.0,<3.23.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-lattice: 
   :depends on r-mclust: 
   :depends on r-plyr: 
   :depends on r-shiny: ``>=0.11.1``

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

    pixi global install bioconductor-rcgh

to add into an existing workspace instead, run::

    pixi add bioconductor-rcgh

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-rcgh

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-rcgh

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-rcgh:<tag>

(see `bioconductor-rcgh/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-rcgh| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcgh.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcgh
   :alt:   (downloads)
.. |docker_bioconductor-rcgh| image:: https://quay.io/repository/biocontainers/bioconductor-rcgh/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcgh
.. _`bioconductor-rcgh/tags`: https://quay.io/repository/biocontainers/bioconductor-rcgh?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rcgh";
        var versions = ["1.40.0","1.36.0","1.32.0","1.30.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rcgh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rcgh/README.html