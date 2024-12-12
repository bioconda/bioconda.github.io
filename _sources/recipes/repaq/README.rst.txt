:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'repaq'
.. highlight: bash

repaq
=====

.. conda:recipe:: repaq
   :replaces_section_title:
   :noindex:

   A fast lossless FASTQ compressor with ultra\-high compression ratio

   :homepage: https://github.com/OpenGene/repaq
   :license: MIT
   :recipe: /`repaq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repaq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/repaq/meta.yaml>`_

   


.. conda:package:: repaq

   |downloads_repaq| |docker_repaq|

   :versions:
      
      

      ``0.3.0-5``,  ``0.3.0-4``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``

      

   
   :depends libcxx: ``>=18``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install repaq

   and update with::

      mamba update repaq

  To create a new environment, run::

      mamba create --name myenvname repaq

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/repaq:<tag>

   (see `repaq/tags`_ for valid values for ``<tag>``)


.. |downloads_repaq| image:: https://img.shields.io/conda/dn/bioconda/repaq.svg?style=flat
   :target: https://anaconda.org/bioconda/repaq
   :alt:   (downloads)
.. |docker_repaq| image:: https://quay.io/repository/biocontainers/repaq/status
   :target: https://quay.io/repository/biocontainers/repaq
.. _`repaq/tags`: https://quay.io/repository/biocontainers/repaq?tab=tags


.. raw:: html

    <script>
        var package = "repaq";
        var versions = ["0.3.0","0.3.0","0.3.0","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/repaq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/repaq/README.html