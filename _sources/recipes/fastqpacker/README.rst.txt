:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastqpacker'
.. highlight: bash

fastqpacker
===========

.. conda:recipe:: fastqpacker
   :replaces_section_title:
   :noindex:

   Speed\-first FASTQ compressor with block\-based parallel compression

   :homepage: https://github.com/vertti/fastqpacker
   :license: MIT / MIT
   :recipe: /`fastqpacker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqpacker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqpacker/meta.yaml>`_

   


.. conda:package:: fastqpacker

   |downloads_fastqpacker| |docker_fastqpacker|

   :versions:
      
      

      ``0.8.0-0``

      

   
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

      mamba install fastqpacker

   and update with::

      mamba update fastqpacker

  To create a new environment, run::

      mamba create --name myenvname fastqpacker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fastqpacker:<tag>

   (see `fastqpacker/tags`_ for valid values for ``<tag>``)


.. |downloads_fastqpacker| image:: https://img.shields.io/conda/dn/bioconda/fastqpacker.svg?style=flat
   :target: https://anaconda.org/bioconda/fastqpacker
   :alt:   (downloads)
.. |docker_fastqpacker| image:: https://quay.io/repository/biocontainers/fastqpacker/status
   :target: https://quay.io/repository/biocontainers/fastqpacker
.. _`fastqpacker/tags`: https://quay.io/repository/biocontainers/fastqpacker?tab=tags


.. raw:: html

    <script>
        var package = "fastqpacker";
        var versions = ["0.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastqpacker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastqpacker/README.html