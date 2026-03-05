:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gnk_fastasort'
.. highlight: bash

gnk_fastasort
=============

.. conda:recipe:: gnk_fastasort
   :replaces_section_title:
   :noindex:

   A package to generate a GenomeNote ordered TSV of a genome.

   :homepage: https://github.com/sanger-tol/gnk_fastasort
   :license: MIT
   :recipe: /`gnk_fastasort <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnk_fastasort>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnk_fastasort/meta.yaml>`_

   This package uses can use either a SAMTOOLS FAIDX indexed genome or
   an API call to NCBI to retrieve a sequence report.
   This is then used to generate a preferred ordering of the genome as a TSV\,
   which can then be used to re\-order a pretextsnapshot or create a re\-ordered
   fasta file using samtools faidx.



.. conda:package:: gnk_fastasort

   |downloads_gnk_fastasort| |docker_gnk_fastasort|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends python: ``>=3.12``
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

      mamba install gnk_fastasort

   and update with::

      mamba update gnk_fastasort

  To create a new environment, run::

      mamba create --name myenvname gnk_fastasort

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gnk_fastasort:<tag>

   (see `gnk_fastasort/tags`_ for valid values for ``<tag>``)


.. |downloads_gnk_fastasort| image:: https://img.shields.io/conda/dn/bioconda/gnk_fastasort.svg?style=flat
   :target: https://anaconda.org/bioconda/gnk_fastasort
   :alt:   (downloads)
.. |docker_gnk_fastasort| image:: https://quay.io/repository/biocontainers/gnk_fastasort/status
   :target: https://quay.io/repository/biocontainers/gnk_fastasort
.. _`gnk_fastasort/tags`: https://quay.io/repository/biocontainers/gnk_fastasort?tab=tags


.. raw:: html

    <script>
        var package = "gnk_fastasort";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gnk_fastasort/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gnk_fastasort/README.html