:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-minfi'
.. highlight: bash

bioconductor-minfi
==================

.. conda:recipe:: bioconductor-minfi
   :replaces_section_title:
   :noindex:

   Analyze Illumina Infinium DNA methylation arrays

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/minfi.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-minfi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minfi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-minfi/meta.yaml>`_
   :links: biotools: :biotools:`minfi`

   Tools to analyze \& visualize Illumina Infinium methylation arrays.


.. conda:package:: bioconductor-minfi

   |downloads_bioconductor-minfi| |docker_bioconductor-minfi|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-1</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.44.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.28.0-0``,  ``1.26.2-0``,  ``1.24.0-0``,  ``1.22.1-0``,  ``1.20.0-0``,  ``1.16.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.60.0,<2.61.0``
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-bumphunter: ``>=1.42.0,<1.43.0``
   :depends bioconductor-delayedarray: ``>=0.26.0,<0.27.0``
   :depends bioconductor-delayedmatrixstats: ``>=1.22.0,<1.23.0``
   :depends bioconductor-genefilter: ``>=1.82.0,<1.83.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-geoquery: ``>=2.68.0,<2.69.0``
   :depends bioconductor-hdf5array: ``>=1.28.0,<1.29.0``
   :depends bioconductor-illuminaio: ``>=0.42.0,<0.43.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-limma: ``>=3.56.0,<3.57.0``
   :depends bioconductor-preprocesscore: ``>=1.62.0,<1.63.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-siggenes: ``>=1.74.0,<1.75.0``
   :depends bioconductor-summarizedexperiment: ``>=1.30.0,<1.31.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-beanplot: 
   :depends r-data.table: 
   :depends r-lattice: 
   :depends r-mass: 
   :depends r-mclust: 
   :depends r-nlme: 
   :depends r-nor1mix: 
   :depends r-quadprog: 
   :depends r-rcolorbrewer: 
   :depends r-reshape: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-minfi

   and update with::

      mamba update bioconductor-minfi

  To create a new environment, run::

      mamba create --name myenvname bioconductor-minfi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-minfi:<tag>

   (see `bioconductor-minfi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-minfi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-minfi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-minfi
   :alt:   (downloads)
.. |docker_bioconductor-minfi| image:: https://quay.io/repository/biocontainers/bioconductor-minfi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-minfi
.. _`bioconductor-minfi/tags`: https://quay.io/repository/biocontainers/bioconductor-minfi?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-minfi";
        var versions = ["1.46.0","1.44.0","1.40.0","1.38.0","1.36.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-minfi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-minfi/README.html