:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'extract_fasta_seq'
.. highlight: bash

extract_fasta_seq
=================

.. conda:recipe:: extract_fasta_seq
   :replaces_section_title:
   :noindex:

   To extract specific fasta sequences from a fasta file.

   :homepage: https://github.com/linzhi2013/extract_fasta_seq
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`extract_fasta_seq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extract_fasta_seq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extract_fasta_seq/meta.yaml>`_
   :links: biotools: :biotools:`extract_fasta_seq`

   


.. conda:package:: extract_fasta_seq

   |downloads_extract_fasta_seq| |docker_extract_fasta_seq|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends python: ``>=2.7.15``
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

      mamba install extract_fasta_seq

   and update with::

      mamba update extract_fasta_seq

  To create a new environment, run::

      mamba create --name myenvname extract_fasta_seq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/extract_fasta_seq:<tag>

   (see `extract_fasta_seq/tags`_ for valid values for ``<tag>``)


.. |downloads_extract_fasta_seq| image:: https://img.shields.io/conda/dn/bioconda/extract_fasta_seq.svg?style=flat
   :target: https://anaconda.org/bioconda/extract_fasta_seq
   :alt:   (downloads)
.. |docker_extract_fasta_seq| image:: https://quay.io/repository/biocontainers/extract_fasta_seq/status
   :target: https://quay.io/repository/biocontainers/extract_fasta_seq
.. _`extract_fasta_seq/tags`: https://quay.io/repository/biocontainers/extract_fasta_seq?tab=tags


.. raw:: html

    <script>
        var package = "extract_fasta_seq";
        var versions = ["0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/extract_fasta_seq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/extract_fasta_seq/README.html