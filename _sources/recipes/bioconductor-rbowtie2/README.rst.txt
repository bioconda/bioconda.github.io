:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rbowtie2'
.. highlight: bash

bioconductor-rbowtie2
=====================

.. conda:recipe:: bioconductor-rbowtie2
   :replaces_section_title:
   :noindex:

   An R Wrapper for Bowtie2 and AdapterRemoval

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/Rbowtie2.html
   :license: GPL-3.0-or-later
   :recipe: /`bioconductor-rbowtie2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbowtie2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rbowtie2/meta.yaml>`_
   :links: biotools: :biotools:`rbowtie2`

   This package provides an R wrapper of the popular bowtie2 sequencing reads aligner and AdapterRemoval\, a convenient tool for rapid adapter trimming\, identification\, and read merging. The package contains wrapper functions that allow for genome indexing and alignment to those indexes. The package also allows for the creation of .bam files via Rsamtools.


.. conda:package:: bioconductor-rbowtie2

   |downloads_bioconductor-rbowtie2| |docker_bioconductor-rbowtie2|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.8.0-1</code>,  <code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-1</code>,  <code>2.4.0-0</code>,  <code>2.0.0-2</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``2.8.0-1``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.0.0-2``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0``
   :depends bioconductor-rsamtools: ``>=2.18.0,<2.19.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-magrittr: 
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

      mamba install bioconductor-rbowtie2

   and update with::

      mamba update bioconductor-rbowtie2

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rbowtie2

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rbowtie2:<tag>

   (see `bioconductor-rbowtie2/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rbowtie2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rbowtie2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rbowtie2
   :alt:   (downloads)
.. |docker_bioconductor-rbowtie2| image:: https://quay.io/repository/biocontainers/bioconductor-rbowtie2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rbowtie2
.. _`bioconductor-rbowtie2/tags`: https://quay.io/repository/biocontainers/bioconductor-rbowtie2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rbowtie2";
        var versions = ["2.8.0","2.8.0","2.6.0","2.4.0","2.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rbowtie2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rbowtie2/README.html