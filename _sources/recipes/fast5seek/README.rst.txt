:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fast5seek'
.. highlight: bash

fast5seek
=========

.. conda:recipe:: fast5seek
   :replaces_section_title:
   :noindex:

   Get paths for fast5 files contained in BAM\, SAM\, or fastq.

   :homepage: https://github.com/mbhall88/fast5seek
   :license: MIT / MIT License
   :recipe: /`fast5seek <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fast5seek>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fast5seek/meta.yaml>`_

   


.. conda:package:: fast5seek

   |downloads_fast5seek| |docker_fast5seek|

   :versions:
      
      

      ``0.1.1-1``,  ``0.1.1-0``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends ont-fast5-api: 
   :depends pysam: 
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install fast5seek

   and update with::

      mamba update fast5seek

  To create a new environment, run::

      mamba create --name myenvname fast5seek

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/fast5seek:<tag>

   (see `fast5seek/tags`_ for valid values for ``<tag>``)


.. |downloads_fast5seek| image:: https://img.shields.io/conda/dn/bioconda/fast5seek.svg?style=flat
   :target: https://anaconda.org/bioconda/fast5seek
   :alt:   (downloads)
.. |docker_fast5seek| image:: https://quay.io/repository/biocontainers/fast5seek/status
   :target: https://quay.io/repository/biocontainers/fast5seek
.. _`fast5seek/tags`: https://quay.io/repository/biocontainers/fast5seek?tab=tags


.. raw:: html

    <script>
        var package = "fast5seek";
        var versions = ["0.1.1","0.1.1","0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fast5seek/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fast5seek/README.html