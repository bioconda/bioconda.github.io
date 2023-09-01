:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transcomb'
.. highlight: bash

transcomb
=========

.. conda:recipe:: transcomb
   :replaces_section_title:
   :noindex:

   A sparse k\-mer graph based\, memory\-efficient genome assembler

   :homepage: https://github.com/yechengxi/SparseAssembler
   :license: Unknown
   :recipe: /`transcomb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transcomb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transcomb/meta.yaml>`_

   


.. conda:package:: transcomb

   |downloads_transcomb| |docker_transcomb|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends bamtools: 
   :depends boost: ``1.60*``
   :depends icu: ``==56.1``
   :depends libgcc: 
   :depends samtools: 
   :depends zlib: 
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

      mamba install transcomb

   and update with::

      mamba update transcomb

  To create a new environment, run::

      mamba create --name myenvname transcomb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/transcomb:<tag>

   (see `transcomb/tags`_ for valid values for ``<tag>``)


.. |downloads_transcomb| image:: https://img.shields.io/conda/dn/bioconda/transcomb.svg?style=flat
   :target: https://anaconda.org/bioconda/transcomb
   :alt:   (downloads)
.. |docker_transcomb| image:: https://quay.io/repository/biocontainers/transcomb/status
   :target: https://quay.io/repository/biocontainers/transcomb
.. _`transcomb/tags`: https://quay.io/repository/biocontainers/transcomb?tab=tags


.. raw:: html

    <script>
        var package = "transcomb";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transcomb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transcomb/README.html