:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seq-hasher'
.. highlight: bash

seq-hasher
==========

.. conda:recipe:: seq-hasher
   :replaces_section_title:
   :noindex:

   Compute hash digests for DNA sequences in a FASTA file\, with support for circular permutations


   :homepage: https://github.com/apcamargo/seq-hasher
   :license: MIT
   :recipe: /`seq-hasher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq-hasher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq-hasher/meta.yaml>`_

   


.. conda:package:: seq-hasher

   |downloads_seq-hasher| |docker_seq-hasher|

   :versions:
      
      

      ``0.1.0-0``

      

   
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

      mamba install seq-hasher

   and update with::

      mamba update seq-hasher

  To create a new environment, run::

      mamba create --name myenvname seq-hasher

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seq-hasher:<tag>

   (see `seq-hasher/tags`_ for valid values for ``<tag>``)


.. |downloads_seq-hasher| image:: https://img.shields.io/conda/dn/bioconda/seq-hasher.svg?style=flat
   :target: https://anaconda.org/bioconda/seq-hasher
   :alt:   (downloads)
.. |docker_seq-hasher| image:: https://quay.io/repository/biocontainers/seq-hasher/status
   :target: https://quay.io/repository/biocontainers/seq-hasher
.. _`seq-hasher/tags`: https://quay.io/repository/biocontainers/seq-hasher?tab=tags


.. raw:: html

    <script>
        var package = "seq-hasher";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seq-hasher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seq-hasher/README.html