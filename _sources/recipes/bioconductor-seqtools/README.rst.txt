:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-seqtools'
.. highlight: bash

bioconductor-seqtools
=====================

.. conda:recipe:: bioconductor-seqtools
   :replaces_section_title:
   :noindex:

   Analysis of nucleotide\, sequence and quality content on fastq files

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/seqTools.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-seqtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-seqtools/meta.yaml>`_
   :links: biotools: :biotools:`seqtools`, doi: :doi:`10.1038/nmeth.3252`

   Analyze read length\, phred scores and alphabet frequency and DNA k\-mers on uncompressed and compressed fastq files.


.. conda:package:: bioconductor-seqtools

   |downloads_bioconductor-seqtools| |docker_bioconductor-seqtools|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.40.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.28.0-2</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.40.0-0``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.28.0-2``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-zlibbioc: ``>=1.52.0,<1.53.0``
   :depends bioconductor-zlibbioc: ``>=1.52.0,<1.53.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
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

      mamba install bioconductor-seqtools

   and update with::

      mamba update bioconductor-seqtools

  To create a new environment, run::

      mamba create --name myenvname bioconductor-seqtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-seqtools:<tag>

   (see `bioconductor-seqtools/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-seqtools| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-seqtools.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-seqtools
   :alt:   (downloads)
.. |docker_bioconductor-seqtools| image:: https://quay.io/repository/biocontainers/bioconductor-seqtools/status
   :target: https://quay.io/repository/biocontainers/bioconductor-seqtools
.. _`bioconductor-seqtools/tags`: https://quay.io/repository/biocontainers/bioconductor-seqtools?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-seqtools";
        var versions = ["1.40.0","1.36.0","1.34.0","1.32.0","1.32.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-seqtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-seqtools/README.html