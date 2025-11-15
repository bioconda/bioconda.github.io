:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmer-counter'
.. highlight: bash

kmer-counter
============

.. conda:recipe:: kmer-counter
   :replaces_section_title:
   :noindex:

   kmer\-counter is an efficient kmer counter for large sequencing read sets.

   :homepage: https://github.com/CobiontID/kmer-counter
   :license: MIT
   :recipe: /`kmer-counter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmer-counter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmer-counter/meta.yaml>`_

   This k\-mer counter\, based on Needletail\'s efficient FASTA parser is designed to tally
   k\-mer counts for large sequencing read sets. It was written with downstream processing
   in TensorFlow or NumPy in mind\, and stores the results in a npy file.



.. conda:package:: kmer-counter

   |downloads_kmer-counter| |docker_kmer-counter|

   :versions:
      
      

      ``0.1.2-0``

      

   
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

      mamba install kmer-counter

   and update with::

      mamba update kmer-counter

  To create a new environment, run::

      mamba create --name myenvname kmer-counter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kmer-counter:<tag>

   (see `kmer-counter/tags`_ for valid values for ``<tag>``)


.. |downloads_kmer-counter| image:: https://img.shields.io/conda/dn/bioconda/kmer-counter.svg?style=flat
   :target: https://anaconda.org/bioconda/kmer-counter
   :alt:   (downloads)
.. |docker_kmer-counter| image:: https://quay.io/repository/biocontainers/kmer-counter/status
   :target: https://quay.io/repository/biocontainers/kmer-counter
.. _`kmer-counter/tags`: https://quay.io/repository/biocontainers/kmer-counter?tab=tags


.. raw:: html

    <script>
        var package = "kmer-counter";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmer-counter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmer-counter/README.html