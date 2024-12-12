:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmerstream'
.. highlight: bash

kmerstream
==========

.. conda:recipe:: kmerstream
   :replaces_section_title:
   :noindex:

   Streaming algorithm for computing kmer statistics for massive genomics datasets

   :homepage: https://github.com/pmelsted/KmerStream
   :license: free software license
   :recipe: /`kmerstream <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmerstream>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmerstream/meta.yaml>`_
   :links: biotools: :biotools:`kmerstream`, doi: :doi:`10.1093/bioinformatics/btu713`

   


.. conda:package:: kmerstream

   |downloads_kmerstream| |docker_kmerstream|

   :versions:
      
      

      ``1.1-6``,  ``1.1-5``,  ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends python: 
   :depends scipy: 
   :depends zlib: 
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

      mamba install kmerstream

   and update with::

      mamba update kmerstream

  To create a new environment, run::

      mamba create --name myenvname kmerstream

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kmerstream:<tag>

   (see `kmerstream/tags`_ for valid values for ``<tag>``)


.. |downloads_kmerstream| image:: https://img.shields.io/conda/dn/bioconda/kmerstream.svg?style=flat
   :target: https://anaconda.org/bioconda/kmerstream
   :alt:   (downloads)
.. |docker_kmerstream| image:: https://quay.io/repository/biocontainers/kmerstream/status
   :target: https://quay.io/repository/biocontainers/kmerstream
.. _`kmerstream/tags`: https://quay.io/repository/biocontainers/kmerstream?tab=tags


.. raw:: html

    <script>
        var package = "kmerstream";
        var versions = ["1.1","1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmerstream/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmerstream/README.html