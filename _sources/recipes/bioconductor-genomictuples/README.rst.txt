:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomictuples'
.. highlight: bash

bioconductor-genomictuples
==========================

.. conda:recipe:: bioconductor-genomictuples
   :replaces_section_title:
   :noindex:

   Representation and Manipulation of Genomic Tuples

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/GenomicTuples.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-genomictuples <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomictuples>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomictuples/meta.yaml>`_
   :links: biotools: :biotools:`genomictuples`, doi: :doi:`10.21105/joss.00020`

   GenomicTuples defines general purpose containers for storing genomic tuples. It aims to provide functionality for tuples of genomic co\-ordinates that are analogous to those available for genomic ranges in the GenomicRanges Bioconductor package.


.. conda:package:: bioconductor-genomictuples

   |downloads_bioconductor-genomictuples| |docker_bioconductor-genomictuples|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.28.0-2</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.28.0-2``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.1-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.48.0,<0.49.0``
   :depends bioconductor-biocgenerics: ``>=0.48.1,<0.49.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.38.0,<1.39.0``
   :depends bioconductor-genomeinfodb: ``>=1.38.1,<1.39.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-s4vectors: ``>=0.40.2,<0.41.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-data.table: 
   :depends r-rcpp: ``>=0.11.2``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-genomictuples

   and update with::

      mamba update bioconductor-genomictuples

  To create a new environment, run::

      mamba create --name myenvname bioconductor-genomictuples

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomictuples:<tag>

   (see `bioconductor-genomictuples/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomictuples| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomictuples.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomictuples
   :alt:   (downloads)
.. |docker_bioconductor-genomictuples| image:: https://quay.io/repository/biocontainers/bioconductor-genomictuples/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomictuples
.. _`bioconductor-genomictuples/tags`: https://quay.io/repository/biocontainers/bioconductor-genomictuples?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomictuples";
        var versions = ["1.36.0","1.34.0","1.32.0","1.32.0","1.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomictuples/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomictuples/README.html