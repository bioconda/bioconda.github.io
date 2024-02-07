:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmer-jellyfish'
.. highlight: bash

kmer-jellyfish
==============

.. conda:recipe:: kmer-jellyfish
   :replaces_section_title:
   :noindex:

   Jellyfish is a tool for fast\, memory\-efficient counting of k\-mers in DNA. A k\-mer is a substring of length k\, and counting the occurrences of all such substrings is a central step in many analyses of DNA sequence

   :homepage: http://www.genome.umd.edu/jellyfish.html
   :developer docs: https://github.com/gmarcais/Jellyfish
   :license: GPL / GPL-3.0
   :recipe: /`kmer-jellyfish <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmer-jellyfish>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmer-jellyfish/meta.yaml>`_
   :links: biotools: :biotools:`jellyfish`, doi: :doi:`10.1093/bioinformatics/btr011`

   


.. conda:package:: kmer-jellyfish

   |downloads_kmer-jellyfish| |docker_kmer-jellyfish|

   :versions:
      
      

      ``2.3.1-0``,  ``2.3.0-3``,  ``2.3.0-2``,  ``2.3.0-1``,  ``2.3.0-0``,  ``1.1.12-2``,  ``1.1.12-1``,  ``1.1.12-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install kmer-jellyfish

   and update with::

      mamba update kmer-jellyfish

  To create a new environment, run::

      mamba create --name myenvname kmer-jellyfish

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kmer-jellyfish:<tag>

   (see `kmer-jellyfish/tags`_ for valid values for ``<tag>``)


.. |downloads_kmer-jellyfish| image:: https://img.shields.io/conda/dn/bioconda/kmer-jellyfish.svg?style=flat
   :target: https://anaconda.org/bioconda/kmer-jellyfish
   :alt:   (downloads)
.. |docker_kmer-jellyfish| image:: https://quay.io/repository/biocontainers/kmer-jellyfish/status
   :target: https://quay.io/repository/biocontainers/kmer-jellyfish
.. _`kmer-jellyfish/tags`: https://quay.io/repository/biocontainers/kmer-jellyfish?tab=tags


.. raw:: html

    <script>
        var package = "kmer-jellyfish";
        var versions = ["2.3.1","2.3.0","2.3.0","2.3.0","2.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmer-jellyfish/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmer-jellyfish/README.html