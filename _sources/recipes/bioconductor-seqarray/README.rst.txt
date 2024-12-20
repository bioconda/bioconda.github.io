:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqarray'
.. highlight: bash

bioconductor-seqarray
=====================

.. conda:recipe:: bioconductor-seqarray
   :replaces_section_title:
   :noindex:

   Data Management of Large\-Scale Whole\-Genome Sequence Variant Calls

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/SeqArray.html
   :license: GPL-3.0-only
   :recipe: /`bioconductor-seqarray <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqarray>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqarray/meta.yaml>`_
   :links: biotools: :biotools:`seqarray`

   Data management of large\-scale whole\-genome sequencing variant calls with thousands of individuals\: genotypic data \(e.g.\, SNVs\, indels and structural variation calls\) and annotations in SeqArray GDS files are stored in an array\-oriented and compressed manner\, with efficient data access using the R programming language.


.. conda:package:: bioconductor-seqarray

   |downloads_bioconductor-seqarray| |docker_bioconductor-seqarray|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.46.0-0</code>,  <code>1.42.4-1</code>,  <code>1.42.0-0</code>,  <code>1.40.1-0</code>,  <code>1.38.0-1</code>,  <code>1.38.0-0</code>,  <code>1.34.0-2</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  </span></summary>
      

      ``1.46.0-0``,  ``1.42.4-1``,  ``1.42.0-0``,  ``1.40.1-0``,  ``1.38.0-1``,  ``1.38.0-0``,  ``1.34.0-2``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-1``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.2-0``,  ``1.22.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends bioconductor-gdsfmt: ``>=1.42.0,<1.43.0``
   :depends bioconductor-gdsfmt: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-seqarray

   and update with::

      mamba update bioconductor-seqarray

  To create a new environment, run::

      mamba create --name myenvname bioconductor-seqarray

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqarray:<tag>

   (see `bioconductor-seqarray/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqarray| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqarray.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqarray
   :alt:   (downloads)
.. |docker_bioconductor-seqarray| image:: https://quay.io/repository/biocontainers/bioconductor-seqarray/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqarray
.. _`bioconductor-seqarray/tags`: https://quay.io/repository/biocontainers/bioconductor-seqarray?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seqarray";
        var versions = ["1.46.0","1.42.4","1.42.0","1.40.1","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqarray/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqarray/README.html