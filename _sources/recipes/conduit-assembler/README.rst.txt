:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'conduit-assembler'
.. highlight: bash

conduit-assembler
=================

.. conda:recipe:: conduit-assembler
   :replaces_section_title:
   :noindex:

   Long\- and short\-read hybrid de novo transcriptome assembly

   :homepage: https://github.com/NatPRoach/conduit
   :license: GPL-2.0
   :recipe: /`conduit-assembler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conduit-assembler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/conduit-assembler/meta.yaml>`_

   


.. conda:package:: conduit-assembler

   |downloads_conduit-assembler| |docker_conduit-assembler|

   :versions:
      
      

      ``0.1.2-1``,  ``0.1.2-0``

      

   
   :depends bowtie2: ``>=2.3.3``
   :depends htslib: ``>=1.12,<1.22.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends samtools: 
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

      mamba install conduit-assembler

   and update with::

      mamba update conduit-assembler

  To create a new environment, run::

      mamba create --name myenvname conduit-assembler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/conduit-assembler:<tag>

   (see `conduit-assembler/tags`_ for valid values for ``<tag>``)


.. |downloads_conduit-assembler| image:: https://img.shields.io/conda/dn/bioconda/conduit-assembler.svg?style=flat
   :target: https://anaconda.org/bioconda/conduit-assembler
   :alt:   (downloads)
.. |docker_conduit-assembler| image:: https://quay.io/repository/biocontainers/conduit-assembler/status
   :target: https://quay.io/repository/biocontainers/conduit-assembler
.. _`conduit-assembler/tags`: https://quay.io/repository/biocontainers/conduit-assembler?tab=tags


.. raw:: html

    <script>
        var package = "conduit-assembler";
        var versions = ["0.1.2","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/conduit-assembler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/conduit-assembler/README.html