:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mseqtools'
.. highlight: bash

mseqtools
=========

.. conda:recipe:: mseqtools
   :replaces_section_title:
   :noindex:

   fastq\/fasta file manipulation toolkit

   :homepage: https://github.com/arumugamlab/mseqtools
   :license: MIT
   :recipe: /`mseqtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mseqtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mseqtools/meta.yaml>`_

   


.. conda:package:: mseqtools

   |downloads_mseqtools| |docker_mseqtools|

   :versions:
      
      

      ``0.9.1-3``,  ``0.9.1-2``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9.0-0``

      

   
   :depends argtable2: 
   :depends gzip: 
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install mseqtools

   and update with::

      mamba update mseqtools

  To create a new environment, run::

      mamba create --name myenvname mseqtools

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mseqtools:<tag>

   (see `mseqtools/tags`_ for valid values for ``<tag>``)


.. |downloads_mseqtools| image:: https://img.shields.io/conda/dn/bioconda/mseqtools.svg?style=flat
   :target: https://anaconda.org/bioconda/mseqtools
   :alt:   (downloads)
.. |docker_mseqtools| image:: https://quay.io/repository/biocontainers/mseqtools/status
   :target: https://quay.io/repository/biocontainers/mseqtools
.. _`mseqtools/tags`: https://quay.io/repository/biocontainers/mseqtools?tab=tags


.. raw:: html

    <script>
        var package = "mseqtools";
        var versions = ["0.9.1","0.9.1","0.9.1","0.9.1","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mseqtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mseqtools/README.html