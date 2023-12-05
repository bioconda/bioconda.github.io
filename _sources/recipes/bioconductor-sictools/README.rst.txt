:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sictools'
.. highlight: bash

bioconductor-sictools
=====================

.. conda:recipe:: bioconductor-sictools
   :replaces_section_title:
   :noindex:

   Find SNV\/Indel differences between two bam files with near relationship

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SICtools.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-sictools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sictools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sictools/meta.yaml>`_

   This package is to find SNV\/Indel differences between two bam files with near relationship in a way of pairwise comparison thourgh each base position across the genome region of interest. The difference is inferred by fisher test and euclidean distance\, the input of which is the base count \(A\,T\,G\,C\) in a given position and read counts for indels that span no less than 2bp on both sides of indel region.


.. conda:package:: bioconductor-sictools

   |downloads_bioconductor-sictools| |docker_bioconductor-sictools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.24.0-2</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-2</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.24.0-2``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-2``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.70.0,<2.71.0``
   :depends bioconductor-biostrings: ``>=2.70.1,<2.71.0a0``
   :depends bioconductor-genomicranges: ``>=1.54.0,<1.55.0``
   :depends bioconductor-genomicranges: ``>=1.54.1,<1.55.0a0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0``
   :depends bioconductor-iranges: ``>=2.36.0,<2.37.0a0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-doparallel: ``>=1.0.8``
   :depends r-matrixstats: ``>=0.10.0``
   :depends r-plyr: ``>=1.8.3``
   :depends r-stringr: ``>=0.6.2``
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

      mamba install bioconductor-sictools

   and update with::

      mamba update bioconductor-sictools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sictools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sictools:<tag>

   (see `bioconductor-sictools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sictools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sictools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sictools
   :alt:   (downloads)
.. |docker_bioconductor-sictools| image:: https://quay.io/repository/biocontainers/bioconductor-sictools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sictools
.. _`bioconductor-sictools/tags`: https://quay.io/repository/biocontainers/bioconductor-sictools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sictools";
        var versions = ["1.32.0","1.30.0","1.28.0","1.28.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sictools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sictools/README.html