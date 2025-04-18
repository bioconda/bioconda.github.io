:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rsamtools'
.. highlight: bash

bioconductor-rsamtools
======================

.. conda:recipe:: bioconductor-rsamtools
   :replaces_section_title:
   :noindex:

   Binary alignment \(BAM\)\, FASTA\, variant call \(BCF\)\, and tabix file import

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/Rsamtools.html
   :license: Artistic-2.0 | file LICENSE
   :recipe: /`bioconductor-rsamtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsamtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rsamtools/meta.yaml>`_
   :links: biotools: :biotools:`rsamtools`, doi: :doi:`10.1038/nmeth.3252`

   This package provides an interface to the \'samtools\'\, \'bcftools\'\, and \'tabix\' utilities for manipulating SAM \(Sequence Alignment \/ Map\)\, FASTA\, binary variant call \(BCF\) and compressed indexed tab\-delimited \(tabix\) files.


.. conda:package:: bioconductor-rsamtools

   |downloads_bioconductor-rsamtools| |docker_bioconductor-rsamtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.22.0-1</code>,  <code>2.22.0-0</code>,  <code>2.18.0-2</code>,  <code>2.18.0-1</code>,  <code>2.18.0-0</code>,  <code>2.16.0-0</code>,  <code>2.14.0-1</code>,  <code>2.14.0-0</code>,  <code>2.10.0-2</code>,  </span></summary>
      

      ``2.22.0-1``,  ``2.22.0-0``,  ``2.18.0-2``,  ``2.18.0-1``,  ``2.18.0-0``,  ``2.16.0-0``,  ``2.14.0-1``,  ``2.14.0-0``,  ``2.10.0-2``,  ``2.10.0-1``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``1.34.0-0``,  ``1.32.3-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.1-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0a0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0``
   :depends bioconductor-biocparallel: ``>=1.40.0,<1.41.0a0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0``
   :depends bioconductor-biostrings: ``>=2.74.0,<2.75.0a0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0``
   :depends bioconductor-genomeinfodb: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0``
   :depends bioconductor-genomicranges: ``>=1.58.0,<1.59.0a0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0``
   :depends bioconductor-iranges: ``>=2.40.0,<2.41.0a0``
   :depends bioconductor-rhtslib: ``>=3.2.0,<3.3.0``
   :depends bioconductor-rhtslib: ``>=3.2.0,<3.3.0a0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-xvector: ``>=0.46.0,<0.47.0``
   :depends bioconductor-xvector: ``>=0.46.0,<0.47.0a0``
   :depends bioconductor-zlibbioc: ``>=1.52.0,<1.53.0``
   :depends bioconductor-zlibbioc: ``>=1.52.0,<1.53.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends liblzma: ``>=5.8.1,<6.0a0``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-bitops: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-rsamtools

   and update with::

      mamba update bioconductor-rsamtools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rsamtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rsamtools:<tag>

   (see `bioconductor-rsamtools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rsamtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rsamtools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rsamtools
   :alt:   (downloads)
.. |docker_bioconductor-rsamtools| image:: https://quay.io/repository/biocontainers/bioconductor-rsamtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rsamtools
.. _`bioconductor-rsamtools/tags`: https://quay.io/repository/biocontainers/bioconductor-rsamtools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rsamtools";
        var versions = ["2.22.0","2.22.0","2.18.0","2.18.0","2.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rsamtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rsamtools/README.html