:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rcgh'
.. highlight: bash

bioconductor-rcgh
=================

.. conda:recipe:: bioconductor-rcgh
   :replaces_section_title:
   :noindex:

   Comprehensive Pipeline for Analyzing and Visualizing Array\-Based CGH Data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/rCGH.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rcgh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcgh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rcgh/meta.yaml>`_
   :links: biotools: :biotools:`rcgh`, doi: :doi:`10.1093/bioinformatics/btv718`

   A comprehensive pipeline for analyzing and interactively visualizing genomic profiles generated through commercial or custom aCGH arrays. As inputs\, rCGH supports Agilent dual\-color Feature Extraction files \(.txt\)\, from 44 to 400K\, Affymetrix SNP6.0 and cytoScanHD probeset.txt\, cychp.txt\, and cnchp.txt files exported from ChAS or Affymetrix Power Tools. rCGH also supports custom arrays\, provided data complies with the expected format. This package takes over all the steps required for individual genomic profiles analysis\, from reading files to profiles segmentation and gene annotations. This package also provides several visualization functions \(static or interactive\) which facilitate individual profiles interpretation. Input files can be in compressed format\, e.g. .bz2 or .gz.


.. conda:package:: bioconductor-rcgh

   |downloads_bioconductor-rcgh| |docker_bioconductor-rcgh|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-acgh: ``>=1.80.0,<1.81.0``
   :depends bioconductor-affy: ``>=1.80.0,<1.81.0``
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-dnacopy: ``>=1.76.0,<1.77.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-limma: ``>=3.58.0,<3.59.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg18.knowngene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg19.knowngene: ``>=3.2.0,<3.3.0``
   :depends bioconductor-txdb.hsapiens.ucsc.hg38.knowngene: ``>=3.18.0,<3.19.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-lattice: 
   :depends r-mclust: 
   :depends r-plyr: 
   :depends r-shiny: ``>=0.11.1``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-rcgh

   and update with::

      mamba update bioconductor-rcgh

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rcgh

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rcgh:<tag>

   (see `bioconductor-rcgh/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rcgh| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rcgh.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rcgh
   :alt:   (downloads)
.. |docker_bioconductor-rcgh| image:: https://quay.io/repository/biocontainers/bioconductor-rcgh/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rcgh
.. _`bioconductor-rcgh/tags`: https://quay.io/repository/biocontainers/bioconductor-rcgh?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rcgh";
        var versions = ["1.32.0","1.30.0","1.28.0","1.24.0","1.22.0"];
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